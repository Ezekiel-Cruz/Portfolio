import { useScroll } from "../../hooks/useScroll";
import { smoothScrollTo } from "../../utils/smoothScroll";
import { Logo } from "../navigation/Logo";
import { Navigation } from "../navigation/Navigation";
import ThemeToggle from "../theme/ThemeToggle";
import { NAV_ITEMS, PERSONAL_INFO } from "../../constants/personalInfo";
import * as motion from "motion/react-client";

export default function Header() {
  const isScrolled = useScroll({ threshold: 50 });

  const scrollToSection = (sectionId: string) => {
    smoothScrollTo(sectionId);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-200/95  backdrop-blur-md shadow-sm py-3"
          : "bg-200/95-transparent py-4"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        <Logo
          name={PERSONAL_INFO.name}
          imageSrc="/Dev.png"
          onClick={() => scrollToSection("hero")}
        />
        <Navigation items={NAV_ITEMS} onItemClick={scrollToSection}>
          <ThemeToggle />
        </Navigation>
      </div>
    </motion.header>
  );
}
