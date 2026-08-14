import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
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
          <ScrollReveal className={styles.grid} stagger={0.1}>
            {projects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} priority={i === 0} />
            ))}
          </ScrollReveal>
        </Container>
      </Section>
    </main>
  );
}
