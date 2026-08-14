import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Section } from "@/components/ui/Section";
import styles from "./detail.module.css";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  return { title: project ? `${project.title} — Majd` : "Work — Majd" };
}

export default async function WorkDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <Section id="work-section" padBottom>
        <Container>
          <h1>{project.title}</h1>
          <p>{project.subtitle}</p>
          <div className={styles.thumb}>
            <ImagePlaceholder
              label={`${project.title} case study imagery (public/images/project-${project.slug})`}
            />
          </div>
        </Container>
      </Section>
    </main>
  );
}
