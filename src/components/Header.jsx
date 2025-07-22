import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import logoFull from "../assets/logo-full.png";
import ContactForm from "./ContactForm";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showContactForm, setShowContactForm] = useState(false);

  // Simulación temporal para el contador del carrito
  const cartItems = [{}, {}]; // Reemplaza con lógica real si tienes

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Buscando:", searchQuery);
  };

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-all">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between max-h-[132px]">
          {/* LOGO */}
          <a href="#home" className="flex items-center">
            <img
              src={logoFull}
              alt="HOOK Logo"
              className="h-auto max-h-[132px] w-auto object-contain"
            />
          </a>

          {/* NAV */}
          <nav className="hidden md:flex space-x-8 text-lg font-medium text-gray-800">
            <a href="#home" className="hover:text-[#00B4D8] transition">Inicio</a>
            <a href="#products" className="hover:text-[#00B4D8] transition">Productos</a>
            <a href="#features" className="hover:text-[#00B4D8] transition">Beneficios</a>
            <a href="#about" className="hover:text-[#00B4D8] transition">Nosotros</a>
            <a href="#testimonials" className="hover:text-[#00B4D8] transition">Testimonios</a>
          </nav>

          {/* BOTONES DERECHA en orden correcto */}
          <div className="flex items-center gap-3">
            {/* Botón de contacto */}
            <button
              onClick={() => setShowContactForm(true)}
              className="bg-[#00B4D8] text-white px-4 py-2 rounded shadow-md text-sm hover:bg-[#019abd] transition hidden md:block"
            >
              Contáctanos
            </button>

            {/* Botón de búsqueda */}
            <button
              className="bg-[#00B4D8] text-white w-12 h-12 rounded-full shadow-md hover:scale-105 transition flex items-center justify-center"
              onClick={() => setShowSearch(!showSearch)}
            >
              <FaSearch size={20} />
            </button>

            {/* Carrito */}
            <a
              href="#cart"
              className="relative bg-[#00B4D8] text-white w-12 h-12 rounded-full shadow-md hover:scale-105 transition flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.4 5h13.8M10 21a1 1 0 100-2 1 1 0 000 2zm7 1a1 1 0 100-2 1 1 0 000 2z" />
              </svg>
              {cartItems.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </a>
          </div>
        </div>
      </header>

      {/* BARRA DE BÚSQUEDA FLOTANTE */}
      {showSearch && (
        <div className="fixed top-[100px] right-6 z-50 bg-white shadow-lg border rounded-lg px-4 py-3 w-80">
          <form onSubmit={handleSearchSubmit} className="flex gap-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar productos..."
              className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm"
              autoFocus
            />
            <button
              type="submit"
              className="bg-[#00B4D8] text-white px-3 py-2 rounded text-sm hover:bg-[#019abd] transition"
            >
              Buscar
            </button>
          </form>
        </div>
      )}

      {/* MODAL FORMULARIO DE CONTACTO */}
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


