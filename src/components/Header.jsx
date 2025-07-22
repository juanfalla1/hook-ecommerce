import React, { useState } from "react";
import logoFull from "../assets/logo-full.png";
import ContactForm from "./ContactForm";

const Header = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      {/* Header fijo */}
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <img
              src={logoFull}
              alt="HOOK Logo"
              className="h-10 md:h-[80px] object-contain"
            />
          </a>

          {/* Menú desktop */}
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

          {/* Carrito visible en escritorio */}
          <div className="hidden md:block">
            <button className="bg-[#00B4D8] text-white p-2 rounded-full shadow hover:bg-[#1FB4D8] transition">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16 11V7a4 4 0 10-8 0v4H5l1.293 1.293A1 1 0 006 14h8a1 1 0 00.707-1.707L15 11h1z" />
              </svg>
            </button>
          </div>

          {/* Botón hamburguesa en móvil */}
          <button
            className="md:hidden text-3xl text-[#00B4D8]"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            ☰
          </button>
        </div>

        {/* Menú móvil desplegable */}
        {showMobileMenu && (
          <div className="md:hidden bg-white shadow-lg px-4 pb-4 space-y-3">
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

      {/* Carrito flotante en móviles */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <button className="bg-[#00B4D8] text-white p-3 rounded-full shadow-lg">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M16 11V7a4 4 0 10-8 0v4H5l1.293 1.293A1 1 0 006 14h8a1 1 0 00.707-1.707L15 11h1z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Header;
