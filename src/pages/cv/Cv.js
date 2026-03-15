import React from "react";
import "./cv.css";
import CvBlock from "../../components/cv-block/CvBlock";

function Cv() {
  return (
    <div className="cv-container">
      <h1 className="cv">Curriculum Vitae</h1>
      <h4>Aleksander Pal</h4>
      <div className="cv-contact-info">
        <p>Wrocław</p>
        <p>•adres email</p>
        <p>•numer telefonu</p>
      </div>
      <CvBlock
        title="Politechnika Wrocławska"
        description="Inżynieria Zarządzania, Zastosowanie IT w biznesie"
        location="Wrocław"
        period="Przewidywane ukończenie: Styczeń 2028"
      />
    </div>
  );
}

export default Cv;
