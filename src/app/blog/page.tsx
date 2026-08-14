import type { Metadata } from "next";
import { posts } from "@/data/posts";
import { BlogCard } from "@/components/ui/BlogCard";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import styles from "./blog.module.css";

export const metadata: Metadata = {
  title: "Blog — Majd",
};

export default function BlogPage() {
  return (
    <main>
      <Section id="hero-section" padBottom>
        <Container>
          <h1>Blog</h1>
          <div className={styles.grid}>
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
