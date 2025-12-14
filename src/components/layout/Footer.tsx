import { FaFacebookF, FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa";
import { smoothScrollTo } from "../../utils/smoothScroll";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/Ezekiel-Cruz", label: "GitHub" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/ezekiel-cruz-685975399/", label: "LinkedIn" },
    { icon: FaFacebookF, href: "https://www.facebook.com/kielpogi.cruz", label: "Facebook" },
    { icon: FaDiscord, href: "https://discord.com/users/meclose", label: "Discord" },
  ];

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-base-200 border-t border-base-300/10">
      <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12 max-w-6xl">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <img src="/Dev.png" alt="Ezekiel Cruz Logo" className="w-8 h-8" />
            <div>
              <span className="text-base font-semibold text-base-content">Ezekiel Cruz</span>
              <p className="text-xs text-base-content/50">Full-Stack Web Developer</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => smoothScrollTo(link.id)}
                className="text-sm text-base-content/60 hover:text-base-content transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-base-300/20 hover:bg-base-300/40 transition-colors"
              >
                <social.icon className="w-4 h-4 text-base-content/70" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-base-300/10 pt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-base-content/40 text-xs">
              © {currentYear} Ezekiel Cruz. All rights reserved.
            </p>
            <p className="text-base-content/40 text-xs">
              Built with React, TypeScript & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
