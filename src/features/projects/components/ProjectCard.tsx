import * as motion from "motion/react-client";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import type { Project } from "../../../types/project";

type Props = {
  project: Project;
  index?: number;
};

export default function ProjectCard({ project, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-base-200 rounded-2xl overflow-hidden border border-base-content/10 hover:border-base-content/20 transition-all duration-300"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Image Container */}
        <div className="relative w-full lg:w-2/5 aspect-video lg:aspect-auto lg:min-h-[280px] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src =
                "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMjUgNzVIMTc1VjEyNUgxMjVWNzVaIiBmaWxsPSIjRDFENUQ5Ii8+CjxwYXRoIGQ9Ik0xMzUgOTVIMTU1VjEwNUgxMzVWOTVaIiBmaWxsPSIjOEI5NUIwIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNkI3MjgwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiI+SW1hZ2UgTm90IEZvdW5kPC90ZXh0Pgo8L3N2Zz4K";
            }}
          />
          {project.featured && (
            <div className="absolute top-3 left-3 px-3 py-1 bg-primary/90 text-primary-content text-xs font-medium rounded-full">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 p-5 sm:p-6 lg:p-8 flex flex-col justify-center">
          {/* Subtitle */}
          {project.subtitle && (
            <span className="text-xs sm:text-sm text-primary font-medium mb-2">
              {project.subtitle}
            </span>
          )}

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold mb-3 text-base-content">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-base-content/60 mb-5 leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1.5 bg-base-content/5 border border-base-content/10 rounded-full text-base-content/70"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-content text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                <FiExternalLink className="w-4 h-4" />
                View Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-base-content/10 text-base-content text-sm font-medium rounded-lg hover:bg-base-content/20 transition-colors"
              >
                <FiGithub className="w-4 h-4" />
                Source Code
              </a>
            )}
            {project.link && !project.demo && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-content text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                <FiExternalLink className="w-4 h-4" />
                View Project
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
