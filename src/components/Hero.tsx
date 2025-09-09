import HeroImage from "../assets/HeroDev.jpg";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import LinkedIn from "../assets/linkedin.png";
import GitHub from "../assets/github.png";

export default function Hero() {
  return (
    <section id="hero" className="hero min-h-screen bg-base-100 pt-16">
      <div className="hero-content flex-col lg:flex-row max-w-6xl mx-auto px-4">
        <img
          src={HeroImage}
          alt="Dev.Sigma"
          className="max-w-sm rounded-lg shadow-2xl lg:mr-10"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-5xl font-light mb-2">
            I don't follow patterns
          </h1>
          <h1 className="text-5xl sm:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            I define them.
          </h1>
          <p className="text-xl sm:text-2xl font-light mb-2">
            Bro, I'm Dev.Sigma
          </p>
          <p className="text-xl sm:text-2xl font-light mb-8">
            I create my own path.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-8">
            <button className="btn btn-primary btn-lg">Download CV</button>
            <button className="btn btn-outline btn-lg">Get in Touch</button>
          </div>

          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="#"
              className="btn btn-circle btn-outline hover:btn-primary transition-all duration-300"
              aria-label="Facebook"
            >
              <img src={Facebook} alt="Facebook" className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="btn btn-circle btn-outline hover:btn-primary transition-all duration-300"
              aria-label="Instagram"
            >
              <img src={Instagram} alt="Instagram" className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="btn btn-circle btn-outline hover:btn-primary transition-all duration-300"
              aria-label="LinkedIn"
            >
              <img src={LinkedIn} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="btn btn-circle btn-outline hover:btn-primary transition-all duration-300"
              aria-label="GitHub"
            >
              <img src={GitHub} alt="GitHub" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
