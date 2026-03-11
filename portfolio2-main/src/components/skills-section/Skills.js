import React from "react";
import "./SkillsSection.css";
import SkillBar from "../skill-progress-bar/SkillProgresBar";

export default function SkillsSection() {
  return (
    <section className="skills" id="skills-section">
      <div className="title">
        <h1>Skills</h1>
      </div>
      <div className="skills-level">
        <SkillBar icon="html5" skill={85} />
        <SkillBar icon="css3" skill={75} />
        <SkillBar icon="js" skill={60} />
        <SkillBar icon="react" skill={10} />
        <SkillBar icon="git" skill={5} />
        <SkillBar icon="wordpress" skill={30} />
      </div>

      <div className="bar-info">
        <button className="btn-deafult">
          How the progress bar was calculated?
        </button>
        <p>
          The progress bar is based on 10 questions test asked by ChatGPT. It
          should be used more as a fun fact.
        </p>
      </div>
    </section>
  );
}
