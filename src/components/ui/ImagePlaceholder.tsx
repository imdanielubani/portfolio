import styles from "./ImagePlaceholder.module.css";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Stand-in for real imagery until Stage 11 (Asset integration) swaps these
 * for the real photos/screenshots supplied by the site owner. Every usage
 * is a straight drop-in replacement point — see README for the expected
 * file list.
 */
export function ImagePlaceholder({ label, className, style }: ImagePlaceholderProps) {
  return (
    <div
      className={className ? `${styles.placeholder} ${className}` : styles.placeholder}
      style={style}
      role="img"
      aria-label={label}
    >
      {label}
    </div>
  );
}
