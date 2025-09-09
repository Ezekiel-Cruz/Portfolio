export default function About() {
  return (
    <section id="about" className="py-20 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="lg:w-1/2">
            <div className="mockup-code">
              <pre data-prefix="1">
                <code>const developer = &#123;</code>
              </pre>
              <pre data-prefix="2">
                <code> name: "Dev.Sigma",</code>
              </pre>
              <pre data-prefix="3">
                <code> role: "Full Stack Developer",</code>
              </pre>
              <pre data-prefix="4">
                <code> experience: "3+ years",</code>
              </pre>
              <pre data-prefix="5">
                <code> passion: "Programming",</code>
              </pre>
              <pre data-prefix="6">
                <code> motto: "I define patterns"</code>
              </pre>
              <pre data-prefix="7">
                <code>&#125;;</code>
              </pre>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-lg mb-6 text-base-content/80">
              I'm Ezekiel Cruz, an IT student at La Consolacion University of
              the Philippines with 3 years of experience in programming and
              system development. I focus on creating efficient web and mobile
              applications, working with technologies like Java, Python,
              ReactJS, PHP, MySQL, and Flutter. Passionate about learning and
              problem-solving, I'm driven to build impactful solutions and grow
              as an IT professional.
            </p>

            <div className="stats stats-vertical lg:stats-horizontal shadow">
              <div className="stat">
                <div className="stat-title">Projects Completed</div>
                <div className="stat-value text-primary">5+</div>
              </div>

              <div className="stat">
                <div className="stat-title">Years Experience</div>
                <div className="stat-value text-primary">3+</div>
              </div>

              <div className="stat">
                <div className="stat-title">Languages</div>
                <div className="stat-value text-primary">6+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
