import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Section } from "@/components/ui/Section";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { SplitText } from "@/components/ui/SplitText";
import { ContactForm } from "./ContactForm";
import styles from "./Contact.module.css";

const COPY =
  "Have a project or need help? Fill out the form, and we'll get back to you soon.";

export function Contact() {
  return (
    <Section id="contact" padBottom>
      <Container>
        <ScrollReveal className={styles.grid} stagger={0.15}>
          <div className={styles.copy}>
            <h2 className="reveal-item">Let&rsquo;s talk.</h2>
            <SplitText text={COPY} />
            <div className={`${styles.socials} reveal-item`}>
              <SocialLinks />
            </div>
          </div>
          <ContactForm />
        </ScrollReveal>
      </Container>
    </Section>
  );
}
