import React from "react";
import "./projects.css";
import Project from "../Project";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <section className="projects">
      <div className="project-baner">
        <h1>{t("projects")}</h1>
      </div>
      <div className="project-tiles">
        <Project
          title={t("blockchainTitle")}
          tech="HTML, CSS, JavaScript"
          link="https://ixroy13.github.io/blockchain2/"
          date="07/29/2022" // date in US format!
          describe={t("blockchainDescribe")}
        />
        <Project
          title={t("rockPaperScissorsTitle")}
          tech="HTML, CSS, JavaScript"
          link="https://ixroy13.github.io/RockPaperScissors-Game/"
          date="10/18/2022"
          describe={t("rockPaperScissorsDescribe")}
        />
        <Project
          title={t("productPageTitle")}
          tech="HTML, CSS, JavaScript"
          link="https://ixroy13.github.io/shop-product-site/"
          date="06/30/2023"
          describe={t("productPageDescribe")}
        />
        <Project
          title={t("newsSiteTitle")}
          tech="HTML, CSS, JavaScript"
          link="https://ixroy13.github.io/News-homepage/"
          date="06/07/2023"
          describe={t("newsSiteDescribe")}
        />
        {/* <Project
          title="Koenigsegg"
          tech="HTML, CSS, JavaScript"
          link="https://ixroy13.github.io/koenigsegg/"
          date="12/29/2022"
          describe={t("koenigseggDescribe")}
        /> */}
        {/* <Project
          title="Tesla Software"
          tech="HTML, CSS, JavaScript"
          link="https://ixroy13.github.io/tesla-screen-simulator/"
          date="12/11/2022"
          describe="Soon."
        /> */}
      </div>
    </section>
  );
}
