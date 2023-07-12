import React from "react";
import "../styles/hero.css"

export default function Hero() {
    return (
        <section className="hero-section">
            <div className="main-text">
                <h1>
                    Hi! I'm Olek,
                    beginner web developer  
                </h1>
            </div>
            <div className="about-me">
                <div>
                    <p>YO</p>
                    <h2>20</h2>
                </div>
                <div>
                    <p>City</p>
                    <h2>Wrocław</h2>
                </div>
                <div>
                    <p>Fav tool</p>
                    <h2>React</h2>
                </div>
                <div>
                    <p>Experience</p>
                    <h2>2 years</h2>
                </div>
            </div>
            <button className="btn-deafult scroll-arrow">
                <a href="#skills-section">
                    <span className="sr-only">Scroll down arrow</span>
                    <i className="fas fa-arrow-down"></i></a>
                </button>
        </section>
    )
}