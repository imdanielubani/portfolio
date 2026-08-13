import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { TextLink } from "@/components/ui/TextLink";

export default function HomePage() {
  return (
    <main>
      <Section padBottom>
        <Container>
          <h1>SOFTWARE ENGINEER</h1>
          <h2>Hey!</h2>
          <h3>Foundation check</h3>
          <p>
            Design tokens, typography scale, container, and section rhythm
            are wired up. Sections are built out stage by stage — see{" "}
            <TextLink href="https://github.com/imdanielubani/portfolio">
              the repo
            </TextLink>{" "}
            for progress.
          </p>
        </Container>
      </Section>
    </main>
  );
}
