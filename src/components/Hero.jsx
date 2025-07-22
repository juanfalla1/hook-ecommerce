import React from "react";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative bg-[#023048] text-white pt-[150px] md:pt-[200px] pb-[80px] md:pb-[120px] text-center overflow-hidden mt-[80px]"
    >
      {/* Imagen de fondo con opacidad baja */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.0&auto=format&fit=crop&w=1200&q=80')",
        }}
      ></div>

      {/* Contenido sobre la imagen */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4">
        <h2 className="text-[2rem] md:text-[2.5rem] font-normal mb-5 tracking-wide drop-shadow-lg leading-snug">
          {t("hero.title")}
        </h2>
        <p className="text-base md:text-lg max-w-[700px] mx-auto mb-10 font-light">
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#products"
            className="inline-block px-6 py-3 md:px-8 md:py-3 bg-[#00B4D8] text-white rounded-full font-semibold uppercase tracking-wider transition duration-300 border-2 border-[#00B4D8] hover:bg-transparent hover:text-[#00B4D8] hover:shadow-lg text-sm md:text-base"
          >
            {t("hero.button_primary")}
          </a>
          <a
            href="#about"
            className="inline-block px-6 py-3 md:px-8 md:py-3 border-2 border-white text-white rounded-full font-semibold uppercase tracking-wider hover:bg-white hover:text-[#023048] transition duration-300 text-sm md:text-base"
          >
            {t("hero.button_secondary")}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
