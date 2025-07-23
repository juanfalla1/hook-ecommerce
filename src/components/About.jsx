import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import imageAbout from "../assets/about-clean.png";

const About = () => {
  const { t, i18n } = useTranslation();

  // 👉 Forzar recarga de recursos cuando cambia el idioma
  useEffect(() => {
    i18n.reloadResources(i18n.language);
    console.log("Idioma actual:", i18n.language); // Para depurar
  }, [i18n.language]);

  return (
    <section id="about" className="py-[100px] bg-white">
      <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">

        {/* Imagen */}
        <div className="w-full h-[400px] flex justify-center items-center">
          <img
            src={imageAbout}
            alt="Sobre HOOK"
            className="max-h-full object-contain"
          />
        </div>

        {/* Texto */}
        <div>
          <h3 className="text-[2rem] text-[#023048] font-bold mb-6">
            {t("about.title")}
          </h3>

          <p className="text-[#333] text-[1.1rem] mb-6 leading-relaxed">
            {t("about.description")}
          </p>

          {/* Misión y Visión */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#f3f3f3] p-6 rounded-[10px] border-l-4 border-[#00B4D8] shadow-sm">
              <h4 className="text-[#023048] text-[1.3rem] font-semibold mb-2">
                {t("about.mission.title")}
              </h4>
              <p className="text-[#333] text-[1rem] leading-relaxed whitespace-pre-line">
                {t("about.mission.description")}
              </p>
            </div>

            <div className="bg-[#f3f3f3] p-6 rounded-[10px] border-l-4 border-[#00B4D8] shadow-sm">
              <h4 className="text-[#023048] text-[1.3rem] font-semibold mb-2">
                {t("about.vision.title")}
              </h4>
              <p className="text-[#333] text-[1rem] leading-relaxed whitespace-pre-line">
                {t("about.vision.description")}
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="mt-10 bg-[#f8f8f8] p-6 rounded-[10px] border-l-4 border-[#00B4D8] shadow-sm">
            <h4 className="text-[#023048] text-[1.3rem] font-semibold mb-4">
              {t("about.values.title")}
            </h4>
            <ul className="list-disc list-inside text-[#333] text-[1rem] space-y-1">
              <li>{t("about.values.excellence")}</li>
              <li>{t("about.values.comfort")}</li>
              <li>{t("about.values.empathy")}</li>
              <li>{t("about.values.design")}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


