import React from "react";
import "../styles/contact.css"
import ContactInfo from "./ContactInfo";

export default function Contact() {
    return (
      <div className="container">
        <div className="describe-ys">
          <h1>👋</h1>
          <p>
            I'm glad you've found this place, but to the point. My goal is to
            make projects as user friendly as possible. In my carrer goals I
            want to master my frontend knowlage and after that develop my skills
            in backend or AI. Right now I started to learn React and in the near
            future I'm going to know some Bootstrap basic.
          </p>
        </div>
        <ContactInfo />
      </div>
    );
}