import React from "react";

export default function ContactInfo() {
    return (
      <div className="primary-info">
        <h1>Contact</h1>
        <div className="name">
          <i className="fas fa-pen-nib"></i>
          <p>Aleksander Pal</p>
        </div>
        <div className="email">
          <i className="fas fa-at"></i>
          <a href="mailto: palaleksander111@gmail.com">
            palaleksander111@gmail.com
          </a>
        </div>
        <div className="phone">
          <i className="fas fa-phone"></i>
          <a href="tel:+48732937754">+48 732 937 754</a>
        </div>
        <div className="adress">
          <i className="fas fa-home"></i>
          <p>ul. Mickiewicza 97/4, Wrocław</p>
        </div>
      </div>
    );
}