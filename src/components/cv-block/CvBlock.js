import React from "react";
import "./cv-block.css";

function CvBlock({title, description, location, period}) {
    return (
        <div className="cv-block-container">
            <div className="name-of-the-block">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <div className="cv-dates-places">
                <p>{location}</p>
                <p>{period}</p>
            </div>
        </div>
    );
}

export default CvBlock;