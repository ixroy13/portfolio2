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
                <SkillBar 
                    icon='html5'
                    skill={85}
                />
                <SkillBar 
                    icon='css3'
                    skill={75}
                />
                <SkillBar 
                    icon='js'
                    skill={60}
                />
                <SkillBar 
                    icon='react'
                    skill={20}
                />
                <SkillBar 
                    icon='git'
                    skill={10}
                />            
                <SkillBar 
                    icon='wordpress'
                    skill={30}
                />
            </div>
        </section>
    )
}