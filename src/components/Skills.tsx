import { Section, Container, SectionHeader } from "./ui/Layout";
import { TechStackCard } from "./skills/TechStackCard";
import { TechMarquee } from "./skills/TechMarquee";
import { TECH_STACKS, getTechLogos } from "../constants/techData";

export default function Skills() {
  const techLogos = getTechLogos();

  return (
    <Section id="skills" className="bg-base-200/50 backdrop-blur-sm">
      <Container>
        <SectionHeader
          title="Tech Stack"
          subtitle="Modern technologies I use to build scalable and efficient web applications."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Frontend - Full column */}
          <div className="lg:col-span-1">
            <TechStackCard category={TECH_STACKS[0]} />
          </div>

          {/* Backend and Database - Shared column */}
          <div className="lg:col-span-1 space-y-6">
            <TechStackCard category={TECH_STACKS[1]} />
            <TechStackCard category={TECH_STACKS[2]} />
          </div>
        </div>

        <TechMarquee logos={techLogos} />
      </Container>
    </Section>
  );
}
