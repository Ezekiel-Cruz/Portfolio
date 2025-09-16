import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Squares from "./components/Squares";

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 -z-10 opacity-100">
        <Squares
          direction="diagonal"
          speed={0.35}
          squareSize={52}
          borderColor="#00000040"
          hoverFillColor="#00000088"
          fadeGradient={false}
        />
      </div>
      <Header />
      <Hero />
      <About />
      <WhatIDo />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
