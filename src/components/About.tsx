import { Section, Container } from "./ui/Layout";
import { StatsGrid } from "./ui/Stats";
import { CodeMockup } from "./about/CodeMockup";
import { PERSONAL_INFO, STATS } from "../constants/personalInfo";

export default function About() {
  const aboutText = `I'm ${PERSONAL_INFO.name}, an aspiring Website Developer and IT student at ${PERSONAL_INFO.university}. With over 3 years of experience, I specialize in building modern, responsive, and high-performing websites.

  I'm skilled in front-end development using JavaScript, React, and Tailwind, and experienced in back-end development with Node.js, and PostgreSQL. My goal is to become a professional developer who builds impactful and scalable digital solutions.`;

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
