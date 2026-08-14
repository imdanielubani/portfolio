import { testimonials } from "@/data/testimonials";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Section } from "@/components/ui/Section";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import styles from "./Testimonials.module.css";

export function Testimonials() {
  return (
    <Section>
      <Container>
        <ScrollReveal>
          <h2 className="reveal-item">Testimonials</h2>
        </ScrollReveal>
        <ScrollReveal className={styles.grid} stagger={0.1}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </ScrollReveal>
      </Container>
    </Section>
  );
}
