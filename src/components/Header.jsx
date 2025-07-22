import React, { useState } from "react";
import logoFull from "../assets/logo-full.png";
import ContactForm from "./ContactForm";

const Header = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-all">
        <div className="flex items-center justify-between px-4 py-4 max-w-7xl mx-auto">

          {/* Logo */}
          <div className="flex items-center">
            <a href="#home">
              <img
                src={logoFull}
                alt="HOOK Logo"
                className="h-[60px] w-auto object-contain"
              />
            </a>
          </div>

          {/* Menú hamburguesa */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#00B4D8] focus:outline-none"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>

          {/* Menú escritorio */}
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

        {/* Menú móvil desplegable */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pb-4 bg-white shadow">
            <a href="#home" className="block py-2 text-gray-800 hover:text-[#00B4D8]">Inicio</a>
            <a href="#products" className="block py-2 text-gray-800 hover:text-[#00B4D8]">Productos</a>
            <a href="#features" className="block py-2 text-gray-800 hover:text-[#00B4D8]">Beneficios</a>
            <a href="#about" className="block py-2 text-gray-800 hover:text-[#00B4D8]">Nosotros</a>
            <a href="#testimonials" className="block py-2 text-gray-800 hover:text-[#00B4D8]">Testimonios</a>
            <button
              onClick={() => setShowContactForm(true)}
              className="block py-2 text-gray-800 hover:text-[#00B4D8]"
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
