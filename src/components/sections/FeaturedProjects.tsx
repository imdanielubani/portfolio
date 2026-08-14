import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import styles from "./FeaturedProjects.module.css";

export function FeaturedProjects() {
  return (
    <Section>
      <Container>
        <ScrollReveal className={`${styles.header} reveal-item`}>
          <h2>Featured Projects</h2>
          <TextLink href="/work">View All Work</TextLink>
        </ScrollReveal>
        <ScrollReveal className={styles.grid} stagger={0.12}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </ScrollReveal>
      </Container>
    </Section>
  );
}
