import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Thoughts } from "@/components/sections/Thoughts";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <Services />
      <FeaturedProjects />
      <Testimonials />
      <Thoughts />
    </main>
  );
}
