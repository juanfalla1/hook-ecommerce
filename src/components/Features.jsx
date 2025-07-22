import React from "react";

const features = [
  {
    icon: "fas fa-shield-alt",
    title: "Seguridad Superior",
    description:
      "Puntera de acero y materiales resistentes para protegerte en cualquier entorno.",
  },
  {
    icon: "fas fa-feather",
    title: "Comodidad Todo el Día",
    description:
      "Diseño ergonómico con soporte acolchado para largas jornadas de trabajo.",
  },
  {
    icon: "fas fa-star",
    title: "Estilo Moderno",
    description:
      "Calzado que combina funcionalidad con un diseño elegante y contemporáneo.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-[100px] bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Título */}
        <div className="text-center mb-[60px]">
          <h2 className="text-[2.5rem] font-bold text-[#023048] mb-[15px] relative inline-block">
            ¿Por qué elegir HOOK?
            <span className="block w-[80px] h-[4px] bg-[#00B4D8] mt-2 mx-auto"></span>
          </h2>
          <p className="text-[#333] text-[1.1rem] max-w-[700px] mx-auto mt-[20px] leading-relaxed">
            Nuestro calzado está diseñado para ofrecer la máxima protección sin
            sacrificar el estilo o la comodidad.
          </p>
        </div>

        {/* Tarjetas de beneficios con animación */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#f8f8f8] rounded-[15px] text-center p-[40px] shadow-sm border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <i
                className={`${feature.icon} text-[#00B4D8] text-[3rem] mb-[20px]`}
              ></i>
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

