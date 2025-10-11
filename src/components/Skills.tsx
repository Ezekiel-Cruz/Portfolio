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
          title="My Tech Stack"
          subtitle="Technologies I work with to build efficient web and mobile applications. Each skill represents hands-on experience and continuous learning."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {TECH_STACKS.map((category, index) => (
            <TechStackCard key={index} category={category} />
          ))}
        </div>

        <TechMarquee logos={techLogos} />
      </Container>
    </Section>
  );
}
