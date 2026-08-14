import Link from "next/link";
import { posts } from "@/data/posts";
import { BlogCard } from "@/components/ui/BlogCard";
import { Container } from "@/components/ui/Container";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Section } from "@/components/ui/Section";
import { SplitText } from "@/components/ui/SplitText";
import styles from "./Thoughts.module.css";

const CTA_TEXT =
  "See how we shape brands with clarity and craft— explore our blog";

export function Thoughts() {
  return (
    <Section>
      <Container>
        <ScrollReveal className={styles.header}>
          <h2 className="reveal-item">Thoughts</h2>
        </ScrollReveal>
        <ScrollReveal className={styles.grid} stagger={0.12}>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </ScrollReveal>
        <ScrollReveal className={`${styles.ctaPanel} reveal-item`}>
          <SplitText as="h3" text={CTA_TEXT} />
          <Link href="/blog" className={`${styles.ctaLink} reveal-item`}>
            View All Work
          </Link>
        </ScrollReveal>
      </Container>
    </Section>
  );
}
