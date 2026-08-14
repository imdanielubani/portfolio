import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import styles from "./Testimonials.module.css";

export function Testimonials() {
  return (
    <Section>
      <Container>
        <h2>Testimonials</h2>
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
