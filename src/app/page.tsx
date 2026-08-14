import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { Services } from "@/components/sections/Services";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <Services />
    </main>
  );
}
