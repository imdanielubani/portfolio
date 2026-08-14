import Link from "next/link";
import { quickLinks } from "@/data/footerLinks";
import { Container } from "@/components/ui/Container";
import { RollingText } from "@/components/ui/RollingText";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <h2>Scaling Start-ups for Growth.</h2>

        <div className={styles.columns}>
          <div className={styles.column}>
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

          <div className={styles.column}>
            <h4>/Contact</h4>
            <ul>
              <li>
                <a href="mailto:mejed@templyo.io" className={styles.mailto}>
                  Mejed@Templyo.io
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.wordmark}>MAJD</div>
      </Container>
    </footer>
  );
}
