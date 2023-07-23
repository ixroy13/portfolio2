import React from "react";

export default function Project(props) {

    return (
      <a href={props.link}>
        <div className="all-tile">
          <div className="information">
            <h1>{props.title}</h1>
            <p>HTML, CSS, JavaScript</p>
            <p>{props.date}</p>
          </div>
          <div>
            {props.describe}
          </div>
        </div>
      </a>
    );
}