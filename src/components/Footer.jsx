import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#023048] text-white py-12">
      <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Sobre Nosotros */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Sobre Nosotros</h3>
          <div className="w-[40px] h-[3px] bg-[#00B4D8] mb-4"></div>
          <p className="text-gray-300 leading-relaxed mb-6">
            HOOK es una marca dedicada a ofrecer calzado industrial de alta calidad,
            diseñado para profesionales que buscan seguridad y estilo.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-[#013241] flex items-center justify-center hover:bg-[#00B4D8] transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#013241] flex items-center justify-center hover:bg-[#00B4D8] transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#013241] flex items-center justify-center hover:bg-[#00B4D8] transition-colors">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Enlaces Rápidos */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
          <div className="w-[40px] h-[3px] bg-[#00B4D8] mb-4"></div>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#hero" className="hover:text-white transition">Inicio</a></li>
            <li><a href="#products" className="hover:text-white transition">Productos</a></li>
            <li><a href="#features" className="hover:text-white transition">Beneficios</a></li>
            <li><a href="#about" className="hover:text-white transition">Nosotros</a></li>
            <li><a href="#testimonials" className="hover:text-white transition">Testimonios</a></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contacto</h3>
          <div className="w-[40px] h-[3px] bg-[#00B4D8] mb-4"></div>
          <p className="text-gray-300 mb-2">Email: contacto@hookcalzado.com</p>
          <p className="text-gray-300 mb-2">Teléfono: +52 123 456 7890</p>
          <p className="text-gray-300">Dirección: Av. Industrial 123, CDMX, México</p>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-12 text-center text-sm text-gray-400 border-t border-[#01405a] pt-4">
        © 2025 HOOK Calzado Industrial. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
