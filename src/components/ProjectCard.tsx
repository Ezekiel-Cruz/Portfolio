import type { Project } from "../types/project";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="card bg-base-200 shadow-xl">
      <figure>
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
      </figure>
      <div className="card-body">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="card-title text-xl">{project.title}</h3>
        </div>
        <p className="text-base-content/70 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech) => (
            <span key={tech} className="badge badge-outline">
              {tech}
            </span>
          ))}
        </div>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
}
