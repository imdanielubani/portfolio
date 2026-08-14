import { DecorativeShape } from "@/components/three/DecorativeShape";
import { TextLink } from "@/components/ui/TextLink";
import { PortraitCrossfade } from "./PortraitCrossfade";
import styles from "./Hero.module.css";

export function Hero() {
  const year = new Date().getFullYear();

  return (
    <section id="hero-section" className={styles.hero}>
      <div className={styles.headline}>
        <DecorativeShape variant="sparkle" className={styles.sparkle} />
        <DecorativeShape variant="bolt" className={styles.bolt} />
        <h1>SOFTWARE ENGINEER</h1>
        <div className={styles.portraitSlot}>
          <PortraitCrossfade />
        </div>
      </div>

      <div className={styles.meta}>
        <p className={styles.copyright}>©{year}</p>
        <span>/CREATING SINCE 2020</span>
      </div>

      <div id="bio-section" className={styles.bio}>
        <h2>Hey!</h2>
        <p>
          I&rsquo;m Majd, a builder based in Syria, currently working on
          Templyo, a platform for high-quality Framer templates.
        </p>
        <p>
          I&rsquo;m a software engineer and Framer creator with a strong
          focus on building modern, scalable, and conversion-driven web
          experiences.
        </p>
        <p>
          Over the years, I&rsquo;ve created and shipped multiple SaaS
          products and Framer templates used by global customers, helping
          them launch faster.
        </p>
        <TextLink href="/#contact" className={styles.cta}>
          Get Started
        </TextLink>
      </div>
    </section>
  );
}
