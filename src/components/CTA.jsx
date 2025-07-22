// src/components/CTA.jsx
import React from "react";
import { useTranslation } from "react-i18next";

const CTA = () => {
  const { t } = useTranslation();

  return (
    <section className="cta text-center text-white py-24 px-4 relative bg-gradient-to-r from-primary to-[#02283a]">
      <div className="container mx-auto relative z-10">
        <h2 className="text-4xl font-bold mb-6">{t("ctaSection.title")}</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          {t("ctaSection.description")}
        </p>
        <a
          href="#products"
          className="btn bg-secondary hover:bg-transparent border-2 border-secondary text-white hover:text-secondary transition duration-300 px-6 py-3 rounded-full font-semibold"
        >
          {t("ctaSection.button")}
        </a>
      </div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-10"></div>
    </section>
  );
};

export default CTA;
