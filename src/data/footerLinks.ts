export interface FooterLink {
  label: string;
  href: string;
}

export const quickLinks: FooterLink[] = [
  { label: "Home", href: "/#hero-section" },
  { label: "About Me", href: "/#bio-section" },
  { label: "Services", href: "/#services" },
  { label: "Works", href: "/work" },
  { label: "Contact", href: "/#contact" },
];
