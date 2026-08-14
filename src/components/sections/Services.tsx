import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import styles from "./Services.module.css";

export function Services() {
  return (
    <Section id="services">
      <Container>
        <div className={styles.header}>
          <h2>Services</h2>
        </div>
        <ul className={styles.list}>
          {services.map((service) => (
            <li key={service.title} className={styles.row}>
              <h3>{service.title}</h3>
              <p className={styles.tags}>{service.tags.join(" • ")}</p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
