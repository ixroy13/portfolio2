import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      greeting: "Hi! I'm Olek, aspiring web developer",
      city: "City",
      favTool: "Fav tool",
      codingFor: "Coding for",
      years: "years",
    },
  },
  pl: {
    translation: {
      greeting: "Cześć! Jestem Olek, początkujący web developer",
      city: "Miasto",
      favTool: "Ulubione narzędzie",
      codingFor: "Koduję od",
      years: "lat",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "eng", // Domyślny język
  fallbackLng: "eng",
  interpolation: { escapeValue: false },
});

export default i18n;
