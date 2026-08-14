import { projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";
import styles from "./FeaturedProjects.module.css";

export function FeaturedProjects() {
  return (
    <Section>
      <Container>
        <div className={styles.header}>
          <h2>Featured Projects</h2>
          <TextLink href="/work">View All Work</TextLink>
        </div>
        <div className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
