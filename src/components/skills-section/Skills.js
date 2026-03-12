import React from "react";
import "./SkillsSection.css";
import SkillBar from "../skill-progress-bar/SkillProgresBar";
import { useTranslation } from "react-i18next";
export default function SkillsSection() {
  const { t } = useTranslation();
  return (
    <section className="skills" id="skills-section">
      <div className="title">
        <h1>{t("skills")}</h1>
      </div>
      <div className="skills-level">
        <SkillBar icon="html5" skill={85} />
        <SkillBar icon="css3" skill={75} />
        <SkillBar icon="js" skill={60} />
        <SkillBar icon="react" skill={15} />
        <SkillBar icon="git" skill={5} />
        <SkillBar icon="wordpress" skill={30} />
        <SkillBar icon="python" skill={35} />
      </div>

      <div className="bar-info">
        <button className="btn-deafult">
          {t("howCalculatedQuestion")}
        </button>
        <p>
          {t("howCalculatedAnswer")}
        </p>
      </div>
    </section>
  );
}
