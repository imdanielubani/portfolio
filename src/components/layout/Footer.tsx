import Link from "next/link";
import { quickLinks } from "@/data/footerLinks";
import { Container } from "@/components/ui/Container";
import { RollingText } from "@/components/ui/RollingText";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <ScrollReveal>
          <h2 className="reveal-item">Scaling Start-ups for Growth.</h2>
        </ScrollReveal>

        <ScrollReveal className={styles.columns} stagger={0.15}>
          <div className={`${styles.column} reveal-item`}>
            <h4>/Quick links</h4>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>
                    <RollingText text={link.label} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${styles.column} reveal-item`}>
            <h4>/Contact</h4>
            <ul>
              <li>
                <a href="mailto:mejed@templyo.io" className={styles.mailto}>
                  Mejed@Templyo.io
                </a>
              </li>
            </ul>
          </div>
        </ScrollReveal>

        <div className={styles.wordmark}>MAJD</div>
      </Container>
    </footer>
  );
}
