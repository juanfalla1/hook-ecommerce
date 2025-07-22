import React from "react";
import { useTranslation } from "react-i18next";

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: "fas fa-shield-alt",
      title: t("features.item1.title"),
      description: t("features.item1.description"),
    },
    {
      icon: "fas fa-feather",
      title: t("features.item2.title"),
      description: t("features.item2.description"),
    },
    {
      icon: "fas fa-star",
      title: t("features.item3.title"),
      description: t("features.item3.description"),
    },
  ];

  return (
    <section id="features" className="py-[100px] bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-[60px]">
          <h2 className="text-[2.5rem] font-bold text-[#023048] mb-[15px] relative inline-block">
            {t("features.title")}
            <span className="block w-[80px] h-[4px] bg-[#00B4D8] mt-2 mx-auto"></span>
          </h2>
          <p className="text-[#333] text-[1.1rem] max-w-[700px] mx-auto mt-[20px] leading-relaxed">
            {t("features.subtitle")}
          </p>
        </div>

        {/* Tarjetas de beneficios con animación */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#f8f8f8] rounded-[15px] text-center p-[40px] shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <i className={`${feature.icon} text-[#00B4D8] text-[3rem] mb-[20px]`}></i>
              <h3 className="text-[#023048] text-[1.3rem] font-semibold mb-[15px]">
                {feature.title}
              </h3>
              <p className="text-[#333] text-[1rem] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;


