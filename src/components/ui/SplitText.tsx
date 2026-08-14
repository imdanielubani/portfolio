import type { ElementType } from "react";
import styles from "./SplitText.module.css";

interface SplitTextProps {
  text: string;
  as?: ElementType;
  className?: string;
}

/**
 * Splits text into per-word <span data-split-word> markup. Static for now —
 * the scroll-triggered stagger reveal (GSAP ScrollTrigger) is wired up in
 * the animation-system stage, targeting these spans.
 */
export function SplitText({ text, as: Tag = "p", className }: SplitTextProps) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
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
