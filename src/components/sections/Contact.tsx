import { Container } from "@/components/ui/Container";
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
        <div className={styles.grid}>
          <div className={styles.copy}>
            <h2>Let&rsquo;s talk.</h2>
            <SplitText text={COPY} />
            <div className={styles.socials}>
              <SocialLinks />
            </div>
          </div>
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
