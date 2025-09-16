import { useState, useEffect } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div
      className={`navbar fixed top-0 left-0 right-0 z-50 px-4 lg:px-8 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-base-100/95 backdrop-blur-sm shadow-md border-base-300"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="flex-1">
        <a
          onClick={() => scrollToSection("hero")}
          className="btn btn-ghost text-xl cursor-pointer"
        >
          <img
            src="/Dev.png"
            alt="Logo"
            className="inline-block w-8 h-8 mr-2"
          />
          Ezekiel Cruz
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 font-semibold">
          <li>
            <a
              onClick={() => scrollToSection("about")}
              className="cursor-pointer"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("what-i-do")}
              className="cursor-pointer"
            >
              What I Do
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("skills")}
              className="cursor-pointer"
            >
              Tech Stack
            </a>
          </li>
          <li>
            <a
              onClick={() => scrollToSection("projects")}
              className="cursor-pointer"
            >
              Projects
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
