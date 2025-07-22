import React from "react";
import logo from "../assets/logo-hook.svg";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-4 sm:px-8">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-20">
        {/* Logo */}
        <div className="flex-shrink-0">
          <a href="#home">
            <img src={logo} alt="HOOK Logo" className="h-12" />
          </a>
        </div>

        {/* Menú de navegación */}
        <nav className="hidden md:flex space-x-8 text-[#023048] font-semibold text-lg">
          <a href="#home" className="hover:text-[#00B4D8] transition">Inicio</a>
          <a href="#products" className="hover:text-[#00B4D8] transition">Productos</a>
          <a href="#benefits" className="hover:text-[#00B4D8] transition">Beneficios</a>
          <a href="#about" className="hover:text-[#00B4D8] transition">Nosotros</a>
          <a href="#testimonials" className="hover:text-[#00B4D8] transition">Testimonios</a>
          <a href="#contact" className="hover:text-[#00B4D8] transition">Contáctanos</a>
        </nav>

        {/* Carrito flotante */}
        <div className="fixed top-4 right-4 md:static md:flex-shrink-0">
          <button className="bg-[#00B4D8] text-white p-3 rounded-full shadow-lg hover:bg-[#1FB4D8] transition">
            <FaShoppingCart size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;


