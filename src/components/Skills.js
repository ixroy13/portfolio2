import React from "react";
import "../styles/SkillsSection.css"
import SkillBar from "./SkillProgresBar";

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
          <SkillBar icon="react" skill={20} />
          <SkillBar icon="git" skill={10} />
          <SkillBar icon="wordpress" skill={30} />
        </div>

        <div className="bar-info">
          <button className="btn-deafult">How the progress bar was calculated?</button>
        </div>

        <div className="bar-info-open">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique in officia consequuntur numquam eum animi nostrum maiores! Laudantium fugiat explicabo minus, commodi quaerat exercitationem laborum vero fuga similique eaque incidunt?</p>
        </div>

      </section>
    );
}