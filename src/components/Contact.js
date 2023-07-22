import React from "react";
import "../styles/contact.css"

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
        <div className="primary-info">
          <h1>Contact</h1>
          <div className="name">
            <i class="fas fa-pen-nib"></i>
            <p>Aleksander Pal</p>
          </div>
          <div className="email">
            <i class="fas fa-at"></i>
            <a href="mailto: palaleksander111@gmail.com">
              palaleksander111@gmail.com
            </a>
          </div>
          <div className="phone">
            <i class="fas fa-phone"></i>
            <a href="tel:+48732937754">+48 732 937 754</a>
          </div>
          <div className="adress">
            <i class="fas fa-home"></i>
            <p>Gierczyn 93 / Mickiewicza 97, Wrocław</p>
          </div>
        </div>
      </div>
    );
}