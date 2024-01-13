import React from "react";
import "./styles/style.css";
import Navbar from "./components/navbar/Navbar";
import Background from "./components/Background";
import Hero from "./components/hero-section/Hero";
import Footer from "./components/footer/Footer";
import SkillsSection from "./components/skills-section/Skills";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <Hero />
      <SkillsSection />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
