import { Section } from "./ui/Layout";
import { HeroContent } from "./hero/HeroContent";
import { HeroActions } from "./hero/HeroActions";
import TextType from "./TextType";
import { PERSONAL_INFO, HERO_TYPING_TEXT } from "../constants/personalInfo";

export default function Hero() {
  const handleContactClick = () => {
    // Add contact functionality or scroll to contact section
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Section
      id="hero"
      className="relative hero min-h-screen pt-16 overflow-hidden"
    >
      <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl mx-auto px-4 relative">
        <div className="max-w-sm lg:ml-10">
          <img
            src="/Ezekiel.JPG"
            alt={PERSONAL_INFO.name}
            className="w-full h-full object-cover rounded-lg shadow-2xl"
            loading="lazy"
          />
        </div>

        <HeroContent
          name={PERSONAL_INFO.name}
          subtitle1="a developer who builds with purpose."
          subtitle2="Always learning and creating."
        >
          <div className="mb-8 mt-8">
            <TextType
              text={[...HERO_TYPING_TEXT]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="text-xl sm:text-2xl font-semibold tracking-tight text-base-content"
              cursorClassName="text-base-content"
            />
          </div>

          <HeroActions onContactClick={handleContactClick} />
        </HeroContent>
      </div>
    </Section>
  );
}
