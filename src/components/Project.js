import React from "react";

export default function Project(props) {

    const projectDate = new Date(props.date)
    const today = new Date()
    const timeDifference = today.getTime() - projectDate.getTime();
    const timeDifferenceInWeeks = (Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7))).toString()

    return (
      <a href={props.link}>
        <div className="all-tile">
          <div className="information">
            <h1>{props.title}</h1>
            <p>{props.tech}</p>
            <p>Made {timeDifferenceInWeeks} weeks ago</p>
          </div>
          <div>
            <p>{props.describe}</p>
          </div>
        </div>
      </a>
    );
}