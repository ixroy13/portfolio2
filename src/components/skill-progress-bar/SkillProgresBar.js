import React from "react";
import "./SkillProgressBar.css"
import { useTranslation } from "react-i18next";

export default function SkillBar(props) {
    const { t } = useTranslation();
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
                    <p>{t("firstSkillLabel")}</p>
                    <p>{t("secondSkillLabel")}</p>
                </div>
            </div>
        </div>
    )
}