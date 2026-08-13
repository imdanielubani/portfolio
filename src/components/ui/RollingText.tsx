import styles from "./RollingText.module.css";

interface RollingTextProps {
  text: string;
  className?: string;
}

export function RollingText({ text, className }: RollingTextProps) {
  return (
    <span className={className ? `${styles.wrapper} ${className}` : styles.wrapper}>
      <span className={styles.track}>
        <span className={styles.row}>{text}</span>
        <span className={styles.row} aria-hidden="true">
          {text}
        </span>
      </span>
    </span>
  );
}
