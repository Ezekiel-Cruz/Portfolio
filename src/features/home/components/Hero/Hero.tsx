import { HeroContent } from "./HeroContent";
import { HeroActions } from "./HeroActions";
import TextType from "../../../../components/animations/TextType";
import { Section } from "../../../../components/layout";
import { PERSONAL_INFO, HERO_TYPING_TEXT } from "../../../../constants/personalInfo";
import { useTheme } from "../../../../hooks/useTheme";
import * as motion from "motion/react-client";

export default function Hero() {
  const { theme } = useTheme();
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const heroImage = theme === "light" ? "/DevTikeyLight.png" : "/DevTikey.png";

  return (
    <Section
      id="hero"
      className="relative hero min-h-screen pt-20 pb-10 overflow-hidden bg-base-100"
    >
      <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl mx-auto px-4 sm:px-6 relative gap-8 lg:gap-19 mb-24 lg:mb-24" >
        <motion.div
          className="w-56 sm:w-72 lg:w-96 items-start lg:pt-9 shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={heroImage}
            alt={PERSONAL_INFO.name}
            className="w-full h-full object-cover rounded-2xl"
            loading="lazy"
          />
        </motion.div>

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

          <HeroActions onContactClick={scrollToContact} />
        </HeroContent>
      </div>
    </Section>
  );
}
