export interface SocialLink {
  label: string;
  href: string;
  icon: "x" | "instagram" | "linkedin" | "youtube";
}

export const socialLinks: SocialLink[] = [
  { label: "X (Twitter)", href: "https://x.com/", icon: "x" },
  { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  { label: "YouTube", href: "https://www.youtube.com/", icon: "youtube" },
];
