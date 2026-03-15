import React from "react";
import { useTranslation } from "react-i18next";

export default function ContactInfo() {
    const { t } = useTranslation();
    return (
      <div className="primary-info">
        <h1>{t("contact")}</h1>
        <div className="name">
          <i className="fas fa-pen-nib"></i>
          <p>Aleksander Pal</p>
        </div>
        <div className="email">
          <i className="fas fa-at"></i>
          <a href="#">
            palaleksander111@gmail.com
          </a>
        </div>
        <div className="phone">
          <i className="fas fa-phone"></i>
          <a href="#">+48 732 937 ___</a>
        </div>
        <div className="adress">
          <i className="fas fa-home"></i>
          <p>Wrocław</p>
        </div>
      </div>
    );
}
