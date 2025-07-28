import React from "react";
import { useTranslation } from "react-i18next";

const icons = [
  "fas fa-shield-alt",
  "fas fa-feather",
  "fas fa-star"
];

const Features = () => {
  const { t } = useTranslation();
  const items = t("features.items", { returnObjects: true });

  return (
    <section id="features" className="py-[100px] bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-[60px]">
          <h2 className="text-[2.5rem] font-bold text-[#112f46] mb-[15px] relative inline-block">
            {t("features.title")}
            <span className="block w-[80px] h-[4px] bg-[#10b2cb] mt-2 mx-auto"></span>
          </h2>
          <p className="text-[#333] text-[1.1rem] max-w-[700px] mx-auto mt-[20px] leading-relaxed">
            {t("features.subtitle")}
          </p>
        </div>

        {/* Tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {items.map((feature, index) => (
            <div
              key={index}
              className="bg-[#f8f8f8] rounded-[15px] text-center p-[40px] shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <i className={`${icons[index]} text-[#10b2cb] text-[3rem] mb-[20px]`} />
              <h3 className="text-[#112f46] text-[1.3rem] font-semibold mb-[15px]">
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


