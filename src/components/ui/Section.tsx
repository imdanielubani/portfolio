import type { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  /** Confirmed on live site: Services has no bottom pad, Contact does. */
  padBottom?: boolean;
}

export function Section({ id, children, className, padBottom = false }: SectionProps) {
  return (
    <section
      id={id}
      data-pad-bottom={padBottom ? "true" : undefined}
      className={className ? `${styles.section} ${className}` : styles.section}
    >
      {children}
    </section>
  );
}
