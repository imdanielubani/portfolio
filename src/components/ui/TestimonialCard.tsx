import type { Testimonial } from "@/data/testimonials";
import { ImagePlaceholder } from "./ImagePlaceholder";
import styles from "./TestimonialCard.module.css";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className={styles.card}>
      <blockquote className={styles.quote}>{testimonial.quote}</blockquote>
      <figcaption className={styles.person}>
        <div className={styles.avatar}>
          <ImagePlaceholder label={`${testimonial.name} avatar`} />
        </div>
        <div>
          <div className={styles.name}>{testimonial.name}</div>
          <div className={styles.role}>{testimonial.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}
