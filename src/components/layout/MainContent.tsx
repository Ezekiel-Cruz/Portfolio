import React from "react";
import Header from "../Header";
import Hero from "../Hero";
import About from "../About";
import WhatIDo from "../WhatIDo";
import Skills from "../Skills";
import Projects from "../Projects";
import ContactForm from "../ContactForm";
import Footer from "../Footer";

export const MainContent: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <WhatIDo />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
    </>
  );
};
