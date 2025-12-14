import { TechStackCard } from "./TechStackCard";
import { TechMarquee } from "./TechMarquee";
import { Section, Container } from "../../../components/layout/Layout";
import { TECH_STACKS, getTechLogos } from "../constants/techData";
import * as motion from "motion/react-client";

export default function Skills() {
  const techLogos = getTechLogos();

  return (
    <Section id="skills" className="bg-base-100 border-t border-base-content/10">
      <Container>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            className="mb-8 sm:mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Tech Stack</h2>
            <p className="text-sm sm:text-base text-base-content/60 max-w-xl mx-auto">
              Technologies I use to build web applications.
            </p>
          </motion.div>

          <div className="space-y-6 sm:space-y-8 mb-12 sm:mb-16">
            {TECH_STACKS.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <TechStackCard category={category} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <TechMarquee logos={techLogos} />
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
