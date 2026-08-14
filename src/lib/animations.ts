export const EASE_STANDARD = "power2.out";
export const WORD_REVEAL_DURATION = 0.6;
export const WORD_REVEAL_STAGGER = 0.02;
export const SCROLL_TRIGGER_START = "top 85%";

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
