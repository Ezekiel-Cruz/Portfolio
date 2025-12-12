import { useScroll } from "../../hooks/useScroll";
import { smoothScrollTo } from "../../utils/smoothScroll";
import { Logo } from "../navigation/Logo";
import { Navigation } from "../navigation/Navigation";
import ThemeToggle from "../theme/ThemeToggle";
import { NAV_ITEMS, PERSONAL_INFO } from "../../constants/personalInfo";

export default function Header() {
  const isScrolled = useScroll({ threshold: 50 });

  const scrollToSection = (sectionId: string) => {
    smoothScrollTo(sectionId);
  };

  const navbarClasses = `navbar fixed top-0 left-0 right-0 z-50 px-4 lg:px-8 transition-all duration-300 border-b ${
    isScrolled
      ? "bg-base-100/95 backdrop-blur-sm shadow-md border-base-300"
      : "bg-transparent border-transparent"
  }`;

  return (
    <div className={navbarClasses}>
      <div className="flex-1">
        <Logo
          name={PERSONAL_INFO.name}
          imageSrc="/Dev.png"
          onClick={() => scrollToSection("hero")}
        />
      </div>
      <Navigation items={NAV_ITEMS} onItemClick={scrollToSection}>
        <ThemeToggle />
      </Navigation>
    </div>
  );
}
