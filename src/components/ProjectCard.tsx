import type { Project } from "../types/project";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <div className="h-full flex flex-col">
      {/* Image Container with Fixed Aspect Ratio */}
      <div className="relative w-full h-48 lg:h-56 overflow-hidden rounded-t-xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMjUgNzVIMTc1VjEyNUgxMjVWNzVaIiBmaWxsPSIjRDFENUQ5Ii8+CjxwYXRoIGQ9Ik0xMzUgOTVIMTU1VjEwNUgxMzVWOTVaIiBmaWxsPSIjOEI5NUIwIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTQwIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjNkI3MjgwIiBmb250LWZhbWlseT0ic2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiI+SW1hZ2UgTm90IEZvdW5kPC90ZXh0Pgo8L3N2Zz4K";
          }}
        />
      </div>

      {/* Content Container */}
      <div className="flex-1 p-6 flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-base-content line-clamp-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-base-content/70 mb-4 leading-relaxed flex-1 line-clamp-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="badge badge-primary badge-outline text-xs px-2 py-1"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
