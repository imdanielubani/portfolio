import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/projects";
import styles from "./ProjectCard.module.css";

export function ProjectCard({
  project,
  priority = false,
}: {
  project: Project;
  /** Set for the first card on pages where the grid sits above the fold. */
  priority?: boolean;
}) {
  return (
    <Link href={`/work/${project.slug}`} className={`${styles.card} reveal-item`}>
      <div className={styles.thumb}>
        <Image
          src={`/images/project-${project.slug}.avif`}
          alt={`${project.title} — ${project.subtitle}`}
          fill
          sizes="(max-width: 809px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
          priority={priority}
        />
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.subtitle}>{project.subtitle}</p>
    </Link>
  );
}
