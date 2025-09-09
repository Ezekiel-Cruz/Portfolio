export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src="/Dev.png"
                alt="Dev.Sigma Logo"
                className="w-10 h-10 mr-3"
              />
              <h3 className="text-2xl font-bold">Dev.Sigma</h3>
            </div>
            <p className="text-base-content/70 mb-4 max-w-md">
              Creating innovative web solutions with modern technologies. I
              don't follow patterns, I define them.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="btn btn-circle btn-outline btn-sm hover:btn-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <img src="/facebook.png" alt="Facebook" className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="btn btn-circle btn-outline btn-sm hover:btn-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <img src="/instagram.png" alt="Instagram" className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="btn btn-circle btn-outline btn-sm hover:btn-primary transition-all duration-300"
                aria-label="LinkedIn"
              >
                <img src="/linkedin.png" alt="LinkedIn" className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="btn btn-circle btn-outline btn-sm hover:btn-primary transition-all duration-300"
                aria-label="GitHub"
              >
                <img src="/github.png" alt="GitHub" className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  onClick={() => scrollToSection("hero")}
                  className="link link-hover cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("about")}
                  className="link link-hover cursor-pointer"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("what-i-do")}
                  className="link link-hover cursor-pointer"
                >
                  What I Do
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("skills")}
                  className="link link-hover cursor-pointer"
                >
                  Tech Stack
                </a>
              </li>
              <li>
                <a
                  onClick={() => scrollToSection("projects")}
                  className="link link-hover cursor-pointer"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-base-content/70">
                <span className="font-medium">Email:</span>
                <br />
                dev.sigma@example.com
              </p>
              <p className="text-base-content/70">
                <span className="font-medium">Location:</span>
                <br />
                Malolos, Bulacan
              </p>
              <div className="mt-4">
                <button className="btn btn-primary btn-sm">Download CV</button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="divider"></div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-base-content/70 text-sm">
            © 2025 Dev.Sigma. All rights reserved.
          </p>
          <p className="text-base-content/70 text-sm">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
