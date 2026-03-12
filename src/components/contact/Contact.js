import React from "react";
// import "../styles/contact.css";
import "./contact.css"
import ContactInfo from "../ContactInfo";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div className="describe-ys">
        <h1>👋</h1>
        <p>
          {t("describeYs")}
        </p>
      </div>
      <ContactInfo />
    </div>
  );
}
