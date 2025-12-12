import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Hero } from "../../features/home";
import { About } from "../../features/about";
import { WhatIDo } from "../../features/services";
import { Skills } from "../../features/skills";
import { Projects } from "../../features/projects";
import { ContactForm } from "../../features/contact";

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
