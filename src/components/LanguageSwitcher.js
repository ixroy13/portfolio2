import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  return (
    <div className="simple-lang-switcher">
      <button className="lang-btn" onClick={toggleDropdown}>
        {i18n.language.toUpperCase()}
        <i className={`fas fa-chevron-down ${isOpen ? "open" : ""}`}></i>
      </button>

      {isOpen && (
        <ul className="lang-dropdown">
          <li onClick={() => selectLanguage("eng")}>ENG</li>
          <li onClick={() => selectLanguage("pl")}>PL</li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
