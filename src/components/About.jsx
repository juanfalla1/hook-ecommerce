import React from "react";
import imageAbout from "../assets/about-clean.png"; // Asegúrate de que exista en src/assets

const About = () => {
  return (
    <section id="about" className="py-[100px] bg-white">
      <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Imagen centrada y ajustada */}
        <div className="w-full h-[400px] flex justify-center items-center">
          <img
            src={imageAbout}
            alt="Sobre HOOK"
            className="max-h-full object-contain"
          />
        </div>

        {/* Contenido textual */}
        <div>
          <h3 className="text-[2rem] text-[#023048] font-bold mb-6">
            Sobre HOOK
          </h3>
          <p className="text-[#333] text-[1.1rem] mb-6 leading-relaxed">
            En HOOK, creemos que el calzado industrial no solo debe proteger, sino también inspirar confianza. Nuestra misión es ofrecer productos de la más alta calidad, combinando tecnología avanzada con diseños modernos.
          </p>

          {/* Misión y Visión */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#f3f3f3] p-6 rounded-[10px] border-l-4 border-[#00B4D8] shadow-sm">
              <h4 className="text-[#023048] text-[1.3rem] font-semibold mb-2">
                Misión
              </h4>
              <p className="text-[#333] text-[1rem] leading-relaxed whitespace-pre-line">
                Proporcionar prendas de alto rendimiento que combinen diseño,
                comodidad y estatus, elevando la experiencia laboral de los profesionales.
              </p>
            </div>

            <div className="bg-[#f3f3f3] p-6 rounded-[10px] border-l-4 border-[#00B4D8] shadow-sm">
              <h4 className="text-[#023048] text-[1.3rem] font-semibold mb-2">
                Visión
              </h4>
              <p className="text-[#333] text-[1rem] leading-relaxed whitespace-pre-line">
                Convertirnos en la marca líder de indumentaria premium para entornos profesionales, promoviendo el bienestar físico y emocional a través del diseño.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="mt-10 bg-[#f8f8f8] p-6 rounded-[10px] border-l-4 border-[#00B4D8] shadow-sm">
            <h4 className="text-[#023048] text-[1.3rem] font-semibold mb-4">
              Valores
            </h4>
            <ul className="list-disc list-inside text-[#333] text-[1rem] space-y-1">
              <li>Excelencia funcional</li>
              <li>Confort con propósito</li>
              <li>Empatía con el usuario</li>
              <li>Diseño con identidad</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;




