import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import WhatIDo from "./components/WhatIDo";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-base-100">
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
