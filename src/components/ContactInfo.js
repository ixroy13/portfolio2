import React from "react";
import { useTranslation } from "react-i18next";

export default function ContactInfo() {
  const { t } = useTranslation();

  const userEmail = "palaleksander111" + "@" + "gmail.com";
  const userPhone = "+48" + "732" + "937" + "754";

  return (
    <div className="primary-info">
      <h1>{t("contact")}</h1>

      <div className="name">
        <i className="fas fa-pen-nib"></i>
        <p>Aleksander Pal</p>
      </div>

      <div className="email">
        <i className="fas fa-at"></i>
        <a href={`mailto:${userEmail}`}>palaleksander111@gmail.com</a>
      </div>

      <div className="phone">
        <i className="fas fa-phone"></i>
        <a href={`tel:${userPhone}`}>+48 732 937 _ _ _</a>
      </div>

      <div className="adress">
        <i className="fas fa-home"></i>
        <p>Wrocław</p>
      </div>
    </div>
  );
}
