"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  EASE_STANDARD,
  SCROLL_TRIGGER_START,
  WORD_REVEAL_DURATION,
  prefersReducedMotion,
} from "@/lib/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** Stagger delay (seconds) between each .reveal-item inside this wrapper. */
  stagger?: number;
}

/**
 * Generalized version of SplitText's reveal mechanism for arbitrary
 * elements: any descendant marked with the global `.reveal-item` class
 * (hidden via CSS by default) fades/slides up as this wrapper scrolls
 * into view. Used for card grids (stagger) and standalone headings
 * (single item, stagger has no visible effect).
 */
export function ScrollReveal({
  children,
  className,
  as: Tag = "div",
  stagger = 0.1,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // querySelectorAll only matches descendants, not el itself — cover
    // the case where the wrapper's own root carries .reveal-item.
    const descendants = Array.from(el.querySelectorAll<HTMLElement>(".reveal-item"));
    const targets = el.classList.contains("reveal-item") ? [el, ...descendants] : descendants;
    if (!targets.length) return;

    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration: WORD_REVEAL_DURATION,
        ease: EASE_STANDARD,
        stagger,
        scrollTrigger: {
          trigger: el,
          start: SCROLL_TRIGGER_START,
          toggleActions: "play none none none",
        },
      });
    }, el);

    return () => ctx.revert();
  }, [stagger]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
