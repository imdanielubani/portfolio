import Link from "next/link";
import type { Project } from "@/data/projects";
import { ImagePlaceholder } from "./ImagePlaceholder";
import styles from "./ProjectCard.module.css";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/work/${project.slug}`} className={styles.card}>
      <div className={styles.thumb}>
        <ImagePlaceholder
          label={`${project.title} thumbnail (public/images/project-${project.slug})`}
        />
      </div>
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.subtitle}>{project.subtitle}</p>
    </Link>
  );
}
