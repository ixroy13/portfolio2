import React from "react";
import "../styles/projects.css";
import Project from "./Project";

export default function Projects() {
  return (
    <section className="projects">
      <div className="project-baner">
        <h1>Projects</h1>
      </div>
      <div className="project-tiles">
        <Project
          title="Blockchain"
          tech="HTML, CSS, JS"
          link="https://ixroy13.github.io/blockchain2/"
          date='29-07-2022'
          describe="The project is based on a real book for kids about Blockchain. It was my first responsive project so it might not work as good as I want. Working on it I also tried out scroll-snap techniqe but too much code modification was needed so I left it with only arrows to scroll. The graphics are created by me but please remember that I'm not a graphic designer. It's my first web with dark/light mode."
        />
        <Project
          title="Rock Paper Scissors"
          tech="HTML, CSS, JavaScript"
          link="https://ixroy13.github.io/RockPaperScissors-Game/"
          date="18.10.2022"
          describe="Inspirated by some YouTube tutorial I tried to build some simple web game. I have to admit it was easier than I thought so as The Big Bang Theory fan I added Lizar and Spock to the game. The scoreboard is copied from Prmiere Leauge 'couse I think it looks great and minimalistic. User can change its and oponent name and colors on the scoreboard."
        />
        <Project
          title="Product Page"
          tech="HTML, CSS, JavaScript"
          link="https://ixroy13.github.io/shop-product-site/"
          date="30.06.2023"
          describe="Project from FrontendMentor. Changing product images on different types of devices and still make it responsive took me some time. Also dynamic cart summary information. I add my first mobile menu."
        />
        <Project
          title="Site with news"
          tech="HTML, CSS, JavaScript"
          link="https://ixroy13.github.io/News-homepage/"
          date="07.06.2023"
          describe="My project back after almost a year without coding coused by my matura exam. This project is from FrontendMentor and I used it to remind myself all the basics."
        />
        <Project
          title="Koenigsegg"
          tech="HTML, CSS, JavaScript"
          link="https://ixroy13.github.io/koenigsegg/"
          date="29-12-2022"
          describe="Koenigsegg as a sports car creator needs to have an awesome website. I tried to rebuild it with all the animations. The project is not done for now"
        />
      </div>
    </section>
  );
}
