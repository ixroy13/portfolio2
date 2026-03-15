import React from "react";
import Hero from "../../components/hero-section/Hero";
import SkillsSection from "../../components/skills-section/Skills";
import Projects from "../../components/projects/Projects";

function Home() {
  return (
    <main>
      <Hero />
      <SkillsSection />
      <Projects />
    </main>
  );
}

export default Home;