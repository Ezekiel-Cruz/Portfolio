export default function Projects() {
  const projects = [
    {
      title: "Cooking Recipe Website",
      description:
        "An interactive recipe platform featuring user-submitted dishes, step-by-step cooking guides, ingredient search, and a personalized favorites dashboard.",
      image: "/CookingWebsite.png",
      tech: ["HTML", "CSS", "JS", "PHP", "SQL"],
      featured: true,
    },
    {
      title: "Event Management Platform",
      description:
        "Comprehensive event planning tool with scheduling, guest management, and real-time collaboration features.",
      image: "/EventWebsite.png",
      tech: ["HTML", "CSS", "JS", "PHP", "SQL"],
      featured: true,
    },
  ];

  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="py-20 bg-base-100">
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
            {featuredProjects.map((project, index) => (
              <div key={index} className="card bg-base-200 shadow-xl">
                <figure>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                  />
                </figure>
                <div className="card-body">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="card-title text-xl">{project.title}</h3>
                  </div>
                  <p className="text-base-content/70 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="badge badge-outline">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="card-actions justify-end"></div>
                </div>
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
