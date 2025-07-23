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
    // 👇 Esto es clave
    fallbackLng: "es",
    detection: {
      // 👇 Orden en que se detecta el idioma
      order: ["localStorage", "navigator", "htmlTag"],
      // 👇 Aquí se guarda el idioma preferido
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
