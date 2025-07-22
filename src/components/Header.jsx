import React, { useState } from "react";
import logoFull from "../assets/logo-full.png";
import ContactForm from "./ContactForm";

const Header = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-all">
        <div className="flex items-center justify-between px-4 py-4 max-h-[100px]">
          {/* Logo alineado al borde izquierdo */}
          <div className="pl-0">
            <a href="#home" className="flex items-center">
              <img
                src={logoFull}
                alt="HOOK Logo"
                className="h-auto max-h-[100px] w-auto object-contain"
              />
            </a>
          </div>

          {/* Menú de escritorio */}
          <nav className="hidden md:flex space-x-8 text-lg font-medium text-gray-800">
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

          {/* Botón hamburguesa en móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#00B4D8] focus:outline-none text-3xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md py-4 px-6 text-center space-y-4 absolute top-full left-0 w-full z-40">
            <a href="#home" className="block text-lg font-medium text-gray-800 hover:text-[#00B4D8] transition" onClick={() => setIsMobileMenuOpen(false)}>Inicio</a>
            <a href="#products" className="block text-lg font-medium text-gray-800 hover:text-[#00B4D8] transition" onClick={() => setIsMobileMenuOpen(false)}>Productos</a>
            <a href="#features" className="block text-lg font-medium text-gray-800 hover:text-[#00B4D8] transition" onClick={() => setIsMobileMenuOpen(false)}>Beneficios</a>
            <a href="#about" className="block text-lg font-medium text-gray-800 hover:text-[#00B4D8] transition" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</a>
            <a href="#testimonials" className="block text-lg font-medium text-gray-800 hover:text-[#00B4D8] transition" onClick={() => setIsMobileMenuOpen(false)}>Testimonios</a>
            <button
              onClick={() => {
                setShowContactForm(true);
                setIsMobileMenuOpen(false);
              }}
              className="block text-lg font-medium text-gray-800 hover:text-[#00B4D8] transition"
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

