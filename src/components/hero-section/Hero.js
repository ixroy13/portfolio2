import React from "react";
import "./hero.css";
import Tile from "../Tile";
import Contact from "../contact/Contact";

export default function Hero() {
  const birthDate = new Date("2003-07-31");
  const startCodeDate = new Date("09/27/2021");
  const today = new Date();
  const age = Math.floor((today - birthDate) / (1000 * 60 * 60 * 24 * 365.25));
  const timeDifference = today - startCodeDate;
  const timeDifferenceInYears = timeDifference / (1000 * 60 * 60 * 24 * 365);
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
          <Tile title="Years old" value={age.toString()} />
          <Tile title="City" value="Wrocław" />
          <Tile title="Favourite tool" value="React" />
          <Tile
            title="Coding for"
            value={`${Number(timeDifferenceInYears.toFixed(1))} years`}
          />
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
