"use client";

import { motion } from "motion/react";
import Image from "next/image";
import styles from "./PortraitCrossfade.module.css";

/**
 * Reference site stacks two portrait shots (front/back view) in the same
 * spot. Exact trigger wasn't observable live (both were opacity:1 / no
 * transform at rest whenever captured), so this reproduces the most likely
 * mechanism: a load-triggered crossfade.
 */
export function PortraitCrossfade({ className }: { className?: string }) {
  return (
    <div className={className ? `${styles.wrap} ${className}` : styles.wrap}>
      <div className={styles.layer}>
        <Image
          src="/images/hero-portrait-back.avif"
          alt="Portrait of Majd — back view"
          fill
          sizes="220px"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <motion.div
        className={styles.layer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.65, 0, 0.35, 1] }}
      >
        <Image
          src="/images/hero-portrait-front.avif"
          alt="Portrait of Majd"
          fill
          sizes="220px"
          style={{ objectFit: "cover" }}
          priority
        />
      </motion.div>
    </div>
  );
}
