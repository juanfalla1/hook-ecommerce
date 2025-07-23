import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import es from "./locales/es.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: "es",
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
    debug: false, // puedes poner true para ver en consola qué idioma se está usando
  });

// 👇 Esto asegura que se aplique correctamente el idioma desde localStorage
i18n.changeLanguage(localStorage.getItem("i18nextLng") || "es");

export default i18n;

