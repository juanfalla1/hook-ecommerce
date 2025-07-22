import React, { useState } from "react";
import logoFull from "../assets/logo-full.png";
import ContactForm from "./ContactForm";

const Header = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="flex items-center justify-between px-4 py-3 md:py-4 max-w-7xl mx-auto">
          
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img
              src={logoFull}
              alt="HOOK Logo"
              className="h-10 md:h-[80px] object-contain"
            />
          </a>

          {/* Botón hamburguesa móvil */}
          <button
            className="md:hidden text-3xl text-[#00B4D8]"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            ☰
          </button>

          {/* Menú en escritorio */}
          <nav className="hidden md:flex space-x-8 text-lg font-medium text-gray-800">
            <a href="#home" className="hover:text-[#00B4D8]">Inicio</a>
            <a href="#products" className="hover:text-[#00B4D8]">Productos</a>
            <a href="#features" className="hover:text-[#00B4D8]">Beneficios</a>
            <a href="#about" className="hover:text-[#00B4D8]">Nosotros</a>
            <a href="#testimonials" className="hover:text-[#00B4D8]">Testimonios</a>
            <button
              onClick={() => setShowContactForm(true)}
              className="hover:text-[#00B4D8]"
            >
              Contáctanos
            </button>
          </nav>
        </div>

        {/* Menú desplegable en móvil */}
        {showMobileMenu && (
          <div className="md:hidden bg-white shadow-lg px-4 pb-4 space-y-2">
            <a href="#home" className="block text-[#023048]">Inicio</a>
            <a href="#products" className="block text-[#023048]">Productos</a>
            <a href="#features" className="block text-[#023048]">Beneficios</a>
            <a href="#about" className="block text-[#023048]">Nosotros</a>
            <a href="#testimonials" className="block text-[#023048]">Testimonios</a>
            <button
              onClick={() => {
                setShowContactForm(true);
                setShowMobileMenu(false);
              }}
              className="block text-[#023048]"
            >
              Contáctanos
            </button>
          </div>
        )}
      </header>

      {/* Modal de contacto */}
      {showContactForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center px-4">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center text-[#023048]">Contáctanos</h2>
            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
