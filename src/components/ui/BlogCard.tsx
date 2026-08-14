import Link from "next/link";
import Image from "next/image";
import type { Post } from "@/data/posts";
import styles from "./BlogCard.module.css";

export function BlogCard({
  post,
  priority = false,
}: {
  post: Post;
  /** Set for the first card on pages where the grid sits above the fold. */
  priority?: boolean;
}) {
  return (
    <Link href={`/blog/${post.slug}`} className={`${styles.card} reveal-item`}>
      <div className={styles.thumb}>
        <Image
          src={`/images/post-${post.slug}.avif`}
          alt={post.title}
          fill
          sizes="(max-width: 809px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
          priority={priority}
        />
      </div>
      <div className={styles.date}>{post.date}</div>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.excerpt}>{post.excerpt}</p>
    </Link>
  );
}
