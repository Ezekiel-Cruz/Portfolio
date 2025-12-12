export default function WhatIDo() {
  return (
    <section id="what-i-do" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What I Do</h2>
          <p className="text-xl text-base-content/70 max-w-4xl mx-auto leading-relaxed">
            I develop high-quality, scalable, and secure web applications using
            modern technologies and industry-standard development practices. My
            work focuses on delivering reliable solutions that meet both user
            expectations and business goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Frontend Development */}
          <div className="card bg-base-200/80 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <div className="card-body">
              <h3 className="card-title justify-center text-xl mb-4">
                Frontend Development
              </h3>
              <p className="text-base-content/70 leading-relaxed text-sm">
                I build responsive and high-performing user interfaces using
                React.js, Tailwind CSS, and Vite. I ensure clean, maintainable
                code and a seamless user experience across all platforms.
              </p>
            </div>
          </div>

          {/* Backend Development */}
          <div className="card bg-base-200/80 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <div className="card-body">
              <h3 className="card-title justify-center text-xl mb-4">
                Backend Development
              </h3>
              <p className="text-base-content/70 leading-relaxed text-sm">
                I develop robust and efficient server-side applications using
                Node.js and Express.js. My implementations are optimized for
                performance, security, and scalability to support complex
                business requirements.
              </p>
            </div>
          </div>

          {/* Database Management */}
          <div className="card bg-base-200/80 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <div className="card-body">
              <h3 className="card-title justify-center text-xl mb-4">
                Database Management
              </h3>
              <p className="text-base-content/70 leading-relaxed text-sm">
                I design and manage structured databases using MySQL and
                PostgreSQL. I prioritize data integrity, consistency, and
                performance to ensure reliable and secure data handling.
              </p>
            </div>
          </div>

          {/* Full-Stack Integration */}
          <div className="card bg-base-200/80 backdrop-blur-sm rounded-xl overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <div className="card-body">
              <h3 className="card-title justify-center text-xl mb-4">
                Full-Stack Integration
              </h3>
              <p className="text-base-content/70 leading-relaxed text-sm">
                I integrate frontend and backend systems into cohesive,
                production-ready web applications. My approach emphasizes
                stability, speed, and maintainability to support long-term
                growth and innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
