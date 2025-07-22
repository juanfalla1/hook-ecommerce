import React, { useState } from "react";
import logo from "../assets/logo.svg"; // Asegúrate de que tu logo esté en esa ruta
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-auto mr-2" />
        </div>

        {/* Menu toggle (mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#00B4D8] text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Navigation links */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute md:static top-[70px] left-0 w-full md:w-auto bg-white md:bg-transparent md:flex md:items-center md:space-x-6 transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col md:flex-row items-center md:space-x-6 p-4 md:p-0">
            <li><a href="#home" className="text-[#002132] hover:text-[#00B4D8]">Inicio</a></li>
            <li><a href="#products" className="text-[#002132] hover:text-[#00B4D8]">Productos</a></li>
            <li><a href="#features" className="text-[#002132] hover:text-[#00B4D8]">Beneficios</a></li>
            <li><a href="#about" className="text-[#002132] hover:text-[#00B4D8]">Nosotros</a></li>
            <li><a href="#testimonials" className="text-[#002132] hover:text-[#00B4D8]">Testimonios</a></li>
            <li><a href="#contact" className="text-[#002132] hover:text-[#00B4D8]">Contáctanos</a></li>
          </ul>
        </nav>

        {/* Cart icon */}
        <div className="hidden md:flex items-center">
          <a href="#cart" className="bg-[#00B4D8] text-white p-3 rounded-full shadow-lg">
            <FaShoppingCart size={18} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

