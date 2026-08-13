import Link from "next/link";
import { MoreIcon } from "@/components/icons/MoreIcon";
import { RollingText } from "@/components/ui/RollingText";
import styles from "./FloatingNav.module.css";

/**
 * The reference site's nav pill includes a "···" control, but no menu or
 * additional navigation surfaced from it at any tested breakpoint — so it's
 * reproduced here as decorative only (aria-hidden), not a dead button.
 */
export function FloatingNav() {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <div className={styles.pill}>
        <Link href="/#hero-section" className={styles.logoLink}>
          <RollingText text="Majd" />
        </Link>
        <span className={styles.moreButton} aria-hidden="true">
          <MoreIcon />
        </span>
      </div>
    </nav>
  );
}
