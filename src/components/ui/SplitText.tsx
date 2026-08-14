"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  EASE_STANDARD,
  SCROLL_TRIGGER_START,
  WORD_REVEAL_DURATION,
  WORD_REVEAL_STAGGER,
  prefersReducedMotion,
} from "@/lib/animations";
import styles from "./SplitText.module.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SplitTextProps {
  text: string;
  as?: "p" | "h3";
  className?: string;
}

/**
 * Splits text into per-word spans and reveals them with a GSAP
 * ScrollTrigger stagger as the block enters the viewport — reproduces the
 * reference site's word-by-word paragraph reveals. Words are hidden by
 * default via CSS so there's no flash of fully-visible text before the
 * animation wires up; if JS fails to load the words stay hidden (an
 * accepted trade-off, matching the reference's own JS-dependent runtime).
 */
export function SplitText({ text, as: Tag = "p", className }: SplitTextProps) {
  const words = text.split(" ");
  const ref = useRef<HTMLParagraphElement & HTMLHeadingElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = el.querySelectorAll<HTMLElement>("[data-split-word]");

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
        stagger: WORD_REVEAL_STAGGER,
        scrollTrigger: {
          trigger: el,
          start: SCROLL_TRIGGER_START,
          toggleActions: "play none none none",
        },
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span className={styles.word} data-split-word="">
            {word}
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
