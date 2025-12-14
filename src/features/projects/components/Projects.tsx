import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import * as motion from "motion/react-client";

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-base-100 border-t border-base-content/10">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <motion.div
          className="mb-10 sm:mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Projects</h2>
          <p className="text-sm sm:text-base text-base-content/60 max-w-xl mx-auto">
            A selection of projects I've worked on.
          </p>
        </motion.div>

        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
