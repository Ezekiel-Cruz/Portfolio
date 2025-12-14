import { CodeMockup } from "./CodeMockup";
import { Section, Container } from "../../../components/layout/Layout";
import { PERSONAL_INFO } from "../../../constants/personalInfo";
import * as motion from "motion/react-client";

export default function About() {
  const aboutParagraphs = [
    `I'm a passionate full-stack web developer and IT student at ${PERSONAL_INFO.university}, specializing in building modern, responsive websites with React, TypeScript, and Supabase.`,
    `With hands-on experience in crafting dynamic web applications, I'm driven by the goal of becoming a professional developer who creates impactful digital solutions that make a difference.`,
    `Beyond coding, I'm constantly exploring emerging technologies, contributing to open-source projects, and staying at the forefront of web development trends and AI-assisted development tools.`
  ];

  return (
    <Section id="about" className="bg-base-100 border-t border-base-content/10">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto items-center px-4 sm:px-6">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">About Me</h2>
            <div className="space-y-4">
              {aboutParagraphs.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-base-content/70 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center order-first lg:order-last"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <CodeMockup developerInfo={PERSONAL_INFO} />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
