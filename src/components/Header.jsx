import React, { useState } from "react";
import logoFull from "../assets/logo-full.png";
import ContactForm from "./ContactForm";

const Header = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="flex items-center justify-between max-w-[1200px] mx-auto px-4 py-3">

          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img
              src={logoFull}
              alt="HOOK Logo"
              className="h-auto max-h-[60px] w-auto object-contain"
            />
          </a>

          {/* Botón de menú hamburguesa solo en móviles */}
          <button
            className="text-[#00B4D8] text-3xl md:hidden ml-auto"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Menú principal - solo visible en desktop */}
          <nav className="hidden md:flex space-x-8 text-lg font-medium text-[#023048]">
            <a href="#home" className="hover:text-[#00B4D8] transition">Inicio</a>
            <a href="#products" className="hover:text-[#00B4D8] transition">Productos</a>
            <a href="#features" className="hover:text-[#00B4D8] transition">Beneficios</a>
            <a href="#about" className="hover:text-[#00B4D8] transition">Nosotros</a>
            <a href="#testimonials" className="hover:text-[#00B4D8] transition">Testimonios</a>
            <button
              onClick={() => setShowContactForm(true)}
              className="hover:text-[#00B4D8] transition"
            >
              Contáctanos
            </button>
          </nav>
        </div>

        {/* Menú móvil desplegable */}
        {isMobileMenuOpen && (
          <div className="md:hidden px-4 pb-4">
            <nav className="flex flex-col space-y-3 text-[#023048] text-lg font-medium">
              <a href="#home" onClick={toggleMenu}>Inicio</a>
              <a href="#products" onClick={toggleMenu}>Productos</a>
              <a href="#features" onClick={toggleMenu}>Beneficios</a>
              <a href="#about" onClick={toggleMenu}>Nosotros</a>
              <a href="#testimonials" onClick={toggleMenu}>Testimonios</a>
              <button
                onClick={() => {
                  toggleMenu();
                  setShowContactForm(true);
                }}
              >
                Contáctanos
              </button>
            </nav>
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
            <h2 className="text-2xl font-bold mb-4 text-center text-[#023048]">
              Contáctanos
            </h2>
            <ContactForm />
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
