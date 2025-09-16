export default function WhatIDo() {
  return (
    <section id="what-i-do" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What I Do</h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            I specialize in creating exceptional digital experiences through
            modern web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="card bg-base-200/80 backdrop-blur-sm shadow-xl">
            <div className="card-body text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="card-title justify-center text-2xl mb-4">
                Frontend Development
              </h3>
              <p className="text-base-content/70">
                Creating stunning, responsive user interfaces with React and
                Tailwind CSS.
              </p>
            </div>
          </div>

          <div className="card bg-base-200/80 backdrop-blur-sm shadow-xl">
            <div className="card-body text-center">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="card-title justify-center text-2xl mb-4">
                Backend Development
              </h3>
              <p className="text-base-content/70">
                Focused on back-end development with PHP and Java, building
                reliable database-driven applications using MySQL.
              </p>
            </div>
          </div>

          <div className="card bg-base-200/80 backdrop-blur-sm shadow-xl">
            <div className="card-body text-center">
              <div className="text-5xl mb-4">📱</div>
              <h3 className="card-title justify-center text-2xl mb-4">
                Mobile Development
              </h3>
              <p className="text-base-content/70">
                Developing mobile application with Flatter
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
