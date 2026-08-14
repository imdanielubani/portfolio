export interface Testimonial {
  slug: string;
  quote: string;
  name: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    slug: "yakoub-kashmiri",
    quote:
      "Templyo completely changed how I approach building sites in Framer. The templates are not just beautiful, they're actually structured in a way that makes scaling so much easier.",
    name: "Yakoub Kashmiri",
    role: "Marketing Director",
  },
  {
    slug: "daniel-k",
    quote:
      "I've tried dozens of Framer templates, but Templyo stands out. Everything feels intentional, from the layout to the smallest interactions.",
    name: "Daniel K.",
    role: "Indie Maker",
  },
  {
    slug: "mark-m",
    quote:
      "Templyo saved me weeks of work. I was able to launch my landing page in a day, and it still looks fully custom.",
    name: "Mark M.",
    role: "Startup Founder",
  },
  {
    slug: "omar-h",
    quote:
      "The quality is insane. Clean structure, smooth animations, and super easy to customize. It feels like a premium product from start to finish.",
    name: "Omar H.",
    role: "Frontend Developer",
  },
];
