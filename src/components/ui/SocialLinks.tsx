import { InstagramIcon } from "@/components/icons/InstagramIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";
import { YouTubeIcon } from "@/components/icons/YouTubeIcon";
import { socialLinks } from "@/data/social";
import styles from "./SocialLinks.module.css";

const ICONS = {
  x: XIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
  youtube: YouTubeIcon,
};

export function SocialLinks({ onDark = false }: { onDark?: boolean }) {
  return (
    <ul className={styles.list}>
      {socialLinks.map((social) => {
        const Icon = ICONS[social.icon];
        return (
          <li key={social.label}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={onDark ? `${styles.link} ${styles.linkOnDark}` : styles.link}
            >
              <Icon />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
