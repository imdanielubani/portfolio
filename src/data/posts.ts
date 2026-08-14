export interface Post {
  slug: string;
  date: string;
  title: string;
  excerpt: string;
}

export const posts: Post[] = [
  {
    slug: "how-can-designers-prepare-for-the-future",
    date: "May 5, 2025",
    title: "Building Trust Through Clear Design",
    excerpt:
      "How thoughtful visual choices create a stronger sense of reliability for modern brands.",
  },
  {
    slug: "why-every-business-needs-a-professional-website-in-2025",
    date: "Jun 16, 2025",
    title: "The Role of Art Direction in Branding",
    excerpt:
      "Why visual direction helps brands create emotion and a distinct point of view.",
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
