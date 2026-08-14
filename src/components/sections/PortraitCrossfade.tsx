"use client";

import { motion } from "motion/react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import styles from "./PortraitCrossfade.module.css";

/**
 * Reference site stacks two portrait shots (front/back view) in the same
 * spot. Exact trigger wasn't observable live (both were opacity:1 / no
 * transform at rest whenever captured), so this reproduces the most likely
 * mechanism: a load-triggered crossfade. Revisit if real assets + a closer
 * look at the source suggest scroll-scrubbing instead.
 */
export function PortraitCrossfade({ className }: { className?: string }) {
  return (
    <div className={className ? `${styles.wrap} ${className}` : styles.wrap}>
      <div className={styles.layer}>
        <ImagePlaceholder label="Portrait — back view (public/images/hero-portrait-back)" />
      </div>
      <motion.div
        className={styles.layer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
      >
        <ImagePlaceholder label="Portrait — front view (public/images/hero-portrait-front)" />
      </motion.div>
    </div>
  );
}
