import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Section } from "@/components/ui/Section";
import styles from "./work.module.css";

export const metadata: Metadata = {
  title: "Work — Majd",
};

export default function WorkPage() {
  return (
    <main>
      <Section id="hero-section" padBottom>
        <Container>
          <h1>Work</h1>
          <div className={styles.grid}>
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
