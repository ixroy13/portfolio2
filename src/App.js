import React from "react";
import "./styles/style.css"
import Navbar from "./components/Navbar"
import Background from "./components/Background";
import Hero from "./components/Hero";
import Footer from "./components/Footer"
import SkillsSection from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <Hero />
      <SkillsSection />
      <Footer />
    </div>
  );
}

export default App;
