import React from "react";
import { useTranslation } from "react-i18next";

export default function Project(props) {
    const { t } = useTranslation();

    const projectDate = new Date(props.date)
    const today = new Date()
    const timeDifference = today.getTime() - projectDate.getTime();
    const timeDifferenceInWeeks = (Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7 * 52))).toString()

    return (
      <a href={props.link}>
        <div className="all-tile">
          <div className="information">
            <h1>{props.title}</h1>
            <p>{props.tech}</p>
            <p>
              {t("made")} {timeDifferenceInWeeks} {t("yearsPassed")}
            </p>
          </div>
          <div>
            <p>{props.describe}</p>
          </div>
        </div>
      </a>
    );
}