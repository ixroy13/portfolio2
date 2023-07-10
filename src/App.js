import React from "react";
import "./components/style.css"
import Navbar from "./components/Navbar"
import Background from "./components/Background";
import Hero from "./components/Hero";
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
