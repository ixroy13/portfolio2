import React from "react";
import "../styles/hero.css"
import Tile from "./Tile";
import Contact from "./Contact";

export default function Hero() {
    return (
      <section className="hero-section">
        <div className="hero-wrap">
          <div className="main-text">
            <h1>
              <span>H</span>
              <span>i</span>
              <span>! </span>
              I'm Olek, aspiring web developer
            </h1>
          </div>
          <div className="tiles">
            <Tile title="YO" value="20" />
            <Tile title="City" value="Wrocław" />
            <Tile title="Fav tool" value="React" />
            <Tile title="Experience" value="2 years" />
          </div>
        </div>
        <div className="swipe-btn">
          <button className="btn-deafult scroll-arrow">
            <a href="#skills-section">
              <span className="sr-only">Scroll down arrow</span>
              <i className="fas fa-chevron-down"></i>
            </a>
          </button>
        </div>
        <div className="info-box">
          <Contact />
        </div>
      </section>
    );
}