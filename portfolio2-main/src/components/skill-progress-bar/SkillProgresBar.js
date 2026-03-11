import React from "react";
import "./SkillProgressBar.css"

export default function SkillBar(props) {
    const style = {
        background: `linear-gradient(to right, #40ff00 ${props.skill}%, #282828 0%)`
    }

    return (
        <div className="skill-box">
            <div className="skill-image">
                <i className={`fab fa-${props.icon}`}></i>
            </div>
            <div className="skill-progress">
                <div className="bar-box">
                    <span style={style} className="bar"></span>
                </div>
                <div className="label">
                    <p>Beginner</p>
                    <p>Pro</p>
                </div>
            </div>
        </div>
    )
}