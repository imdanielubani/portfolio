export interface Project {
  slug: string;
  title: string;
  subtitle: string;
}

export const projects: Project[] = [
  { slug: "damas", title: "Damas", subtitle: "Agency Framer Template" },
  { slug: "najm", title: "Najm", subtitle: "SaaS Framer Template" },
  { slug: "kavi", title: "Kavi", subtitle: "AI Framer Template" },
  { slug: "postwing", title: "PostWing", subtitle: "Social Media Scheduler" },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
