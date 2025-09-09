export default function Skills() {
  const techStacks = [
    {
      title: "Frontend",
      icon: "🎨",
      technologies: [
        { name: "React", experience: "2 weeks (ongoing)" },
        { name: "JavaScript", experience: "5 months" },
        { name: "HTML/CSS", experience: "1 year" },
        { name: "Tailwind CSS", experience: "1 day" },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      technologies: [
        { name: "Java", experience: "1 year" },
        { name: "Python", experience: "5 months" },
        { name: "PHP", experience: "1 month" },
        { name: "Node.js", experience: "3 weeks" },
      ],
    },
    {
      title: "Database & Mobile",
      icon: "📱",
      technologies: [
        { name: "MySQL", experience: "1 year" },
        { name: "Flutter", experience: "1 month" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Technologies I work with to build efficient web and mobile
            applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {techStacks.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="card-body">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">{category.icon}</div>
                  <h3 className="card-title text-2xl justify-center">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-6">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex}>
                      <div className="flex justify-between mb-2">
                        <span className="text-base font-medium">
                          {tech.name}
                        </span>
                        <span className="text-sm text-primary font-semibold">
                          {tech.experience}
                        </span>
                      </div>
                      <div className="w-full bg-base-300 rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full w-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="divider text-2xl font-bold mt-16">
          My Core Technologies
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-16">
          {[
            "Java",
            "Python",
            "ReactJS",
            "PHP",
            "MySQL",
            "Flutter",
            "JavaScript",
            "HTML/CSS",
            "Tailwind CSS",
            "Node.js",
          ].map((tech, index) => (
            <div
              key={index}
              className="badge badge-primary badge-lg p-4 text-sm font-medium hover:badge-secondary transition-colors duration-300 cursor-pointer"
            >
              {tech}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="stats shadow">
            <div className="stat">
              <div className="stat-title">Programming Languages</div>
              <div className="stat-value text-primary">6+</div>
            </div>

            <div className="stat">
              <div className="stat-title">Years Experience</div>
              <div className="stat-value text-secondary">3+</div>
            </div>

            <div className="stat">
              <div className="stat-title">Projects Completed</div>
              <div className="stat-value text-accent">5+</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
