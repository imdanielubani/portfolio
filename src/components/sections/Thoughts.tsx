import Link from "next/link";
import { posts } from "@/data/posts";
import { BlogCard } from "@/components/ui/BlogCard";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SplitText } from "@/components/ui/SplitText";
import styles from "./Thoughts.module.css";

const CTA_TEXT =
  "See how we shape brands with clarity and craft— explore our blog";

export function Thoughts() {
  return (
    <Section>
      <Container>
        <div className={styles.header}>
          <h2>Thoughts</h2>
        </div>
        <div className={styles.grid}>
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        <div className={styles.ctaPanel}>
          <SplitText as="h3" text={CTA_TEXT} />
          <Link href="/blog" className={styles.ctaLink}>
            View All Work
          </Link>
        </div>
      </Container>
    </Section>
  );
}
