import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./TextLink.module.css";

interface TextLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function TextLink({ href, children, className }: TextLinkProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");
  const combined = className ? `${styles.link} ${className}` : styles.link;

  if (isExternal) {
    return (
      <a
        href={href}
        className={combined}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={combined}>
      {children}
    </Link>
  );
}
