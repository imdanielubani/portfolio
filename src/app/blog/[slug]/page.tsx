import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPost, posts } from "@/data/posts";
import { Container } from "@/components/ui/Container";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { Section } from "@/components/ui/Section";
import styles from "./article.module.css";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return { title: post ? `${post.title} — Majd` : "Blog — Majd" };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <Section id="article-section" padBottom>
        <Container>
          <p className={styles.date}>{post.date}</p>
          <h1>{post.title}</h1>
          <p>{post.excerpt}</p>
          <div className={styles.thumb}>
            <ImagePlaceholder
              label={`${post.title} article imagery (public/images/post-${post.slug})`}
            />
          </div>
        </Container>
      </Section>
    </main>
  );
}
