import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // <-- esto permite detectar idioma o usar lo seleccionado por el usuario

import en from "./locales/en.json";
import es from "./locales/es.json";

i18n
  .use(LanguageDetector) // <-- necesario para permitir selección manual o automática
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
