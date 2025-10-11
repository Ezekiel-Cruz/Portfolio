import { Section, Container } from "./ui/Layout";
import { StatsGrid } from "./ui/Stats";
import { CodeMockup } from "./about/CodeMockup";
import { PERSONAL_INFO, STATS } from "../constants/personalInfo";

export default function About() {
  const aboutText = `I'm ${PERSONAL_INFO.name}, a passionate full-stack developer and IT student at ${PERSONAL_INFO.university}. With ${PERSONAL_INFO.experience} of hands-on experience in programming and system development, I specialize in creating efficient, scalable web and mobile applications. My expertise spans across modern technologies including Java, Python, React, PHP, MySQL, and Flutter. I believe in writing clean, maintainable code and continuously learning new technologies to stay at the forefront of development. Every project I work on is an opportunity to solve real-world problems and create meaningful digital experiences.`;

  return (
    <Section id="about" className="bg-base-200/50 backdrop-blur-sm">
      <Container>
        <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto gap-12">
          <div className="lg:w-2/5 flex-shrink-0">
            <CodeMockup developerInfo={PERSONAL_INFO} />
          </div>

          <div className="lg:w-3/5">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-lg mb-6 text-base-content/80 leading-relaxed">
              {aboutText}
            </p>
            <StatsGrid stats={STATS} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
