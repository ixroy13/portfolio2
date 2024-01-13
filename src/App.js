import React from "react";
import "./styles/style.css"
import Navbar from "./components/Navbar"
import Background from "./components/Background";
import Hero from "./components/hero-section/Hero";
import Footer from "./components/Footer"
import SkillsSection from "./components/Skills";
import Projects from "./components/Projects";

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
