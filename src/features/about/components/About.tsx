import { CodeMockup } from "./CodeMockup";
import { Section, Container } from "../../../components/layout/Layout";
import { StatsGrid } from "../../../components/ui/Stats";
import { PERSONAL_INFO, STATS } from "../../../constants/personalInfo";

export default function About() {
  const aboutText = `I'm ${PERSONAL_INFO.name}, an aspiring Website Developer and IT student at ${PERSONAL_INFO.university}, with over 3 years of experience building modern, responsive websites. I specialize in full-stack development using React, Node.js, and PostgreSQL. My goal is to become a professional developer building impactful digital solutions.`;

  return (
    <Section id="about" className="bg-base-200/50 backdrop-blur-sm">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-10xl mx-auto items-center">
          <div className="lg:col-span-1"></div>
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-lg mb-6 text-base-content/80 leading-relaxed">
              {aboutText}
            </p>
            <StatsGrid stats={STATS} />
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <CodeMockup developerInfo={PERSONAL_INFO} />
          </div>
          <div className="lg:col-span-1"></div>
        </div>
      </Container>
    </Section>
  );
}
