import ProjectCard from "./ProjectCard";
import { featuredProjects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a
            unique challenge and solution.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div className="bg-base-200/80 backdrop-blur-sm rounded-xl overflow-hidden">
                <ProjectCard key={project.title} project={project} />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn btn-outline btn-primary">
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
