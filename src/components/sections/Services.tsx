import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Section } from "@/components/ui/Section";
import styles from "./Services.module.css";

export function Services() {
  return (
    <Section id="services">
      <Container>
        <ScrollReveal className={styles.header}>
          <h2 className="reveal-item">Services</h2>
        </ScrollReveal>
        <ScrollReveal as="ul" className={styles.list} stagger={0.08}>
          {services.map((service) => (
            <li key={service.title} className={`${styles.row} reveal-item`}>
              <h3>{service.title}</h3>
              <p className={styles.tags}>{service.tags.join(" • ")}</p>
            </li>
          ))}
        </ScrollReveal>
      </Container>
    </Section>
  );
}
