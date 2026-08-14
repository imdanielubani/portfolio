import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SplitText } from "@/components/ui/SplitText";
import styles from "./Manifesto.module.css";

const STATEMENT =
  "From idea to launch. Clean, scalable digital products built to move fast, stay simple, and perform in real-world use, driven by clarity, structured systems, and intentional design.";

export function Manifesto() {
  return (
    <Section>
      <Container>
        <SplitText text={STATEMENT} className={styles.statement} />
      </Container>
    </Section>
  );
}
