import Image from "next/image";
import type { Testimonial } from "@/data/testimonials";
import styles from "./TestimonialCard.module.css";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className={styles.card}>
      <blockquote className={styles.quote}>{testimonial.quote}</blockquote>
      <figcaption className={styles.person}>
        <div className={styles.avatar}>
          <Image
            src={`/images/testimonial-${testimonial.slug}.avif`}
            alt={testimonial.name}
            fill
            sizes="48px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div>
          <div className={styles.name}>{testimonial.name}</div>
          <div className={styles.role}>{testimonial.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}
