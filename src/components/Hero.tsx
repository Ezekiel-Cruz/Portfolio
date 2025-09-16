import TextType from "./TextType";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative hero min-h-screen pt-16 overflow-hidden"
    >
      <div className="hero-content flex-col lg:flex-row-reverse max-w-6xl mx-auto px-4 relative">
        <img
          src="/Ezekiel.JPG"
          alt="Ezekiel Cruz"
          className="max-w-sm rounded-lg shadow-2xl lg:ml-10"
        />
        <div className="text-center lg:text-left">
          <h1 className="mb-6 mt-6 leading-tight space-y-1 sm:space-y-2">
            <span className="block text-5xl sm:text-6xl font-extrabold">
              I’m <span>Ezekiel Cruz</span>,
            </span>
            <span className="block text-2xl sm:text-3xl font-medium text-base-content/80">
              a developer who builds with purpose.
            </span>
            <span className="block text-2xl sm:text-3xl font-medium text-base-content/80">
              Always learning and creating.
            </span>
          </h1>

          <div className="mb-8 mt-8">
            <TextType
              text={[
                "Frameworks guide me.",
                "Libraries support me.",
                "But innovation?",
                "That’s pure me.",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
              className="text-xl sm:text-2xl font-semibold tracking-tight"
              cursorClassName="text-base-content/70"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
            <button className="btn btn-primary btn-lg">Download CV</button>
            <button className="btn btn-outline btn-lg">Get in Touch</button>
          </div>
        </div>
      </div>
    </section>
  );
}
