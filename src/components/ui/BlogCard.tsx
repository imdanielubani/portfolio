import Link from "next/link";
import type { Post } from "@/data/posts";
import { ImagePlaceholder } from "./ImagePlaceholder";
import styles from "./BlogCard.module.css";

export function BlogCard({ post }: { post: Post }) {
  return (
    <Link href={`/blog/${post.slug}`} className={styles.card}>
      <div className={styles.thumb}>
        <ImagePlaceholder label={`${post.title} thumbnail (public/images/post-${post.slug})`} />
      </div>
      <div className={styles.date}>{post.date}</div>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.excerpt}>{post.excerpt}</p>
    </Link>
  );
}
