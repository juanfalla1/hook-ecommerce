import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import logoFull from "../assets/logo-full.png";
import ContactForm from "./ContactForm";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showContactForm, setShowContactForm] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Buscando:", searchQuery);
  };

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-all">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between flex-wrap md:flex-nowrap gap-3">
          {/* LOGO */}
          <a href="#home" className="flex items-center flex-shrink-0">
            <img
              src={logoFull}
              alt="HOOK Logo"
              className="h-[60px] md:h-[80px] object-contain"
            />
          </a>

          {/* NAV (solo en desktop) */}
          <nav className="hidden md:flex space-x-6 text-sm md:text-lg font-medium text-gray-800 flex-grow justify-center">
            <a href="#home" className="hover:text-[#00B4D8] transition">Inicio</a>
            <a href="#products" className="hover:text-[#00B4D8] transition">Productos</a>
            <a href="#features" className="hover:text-[#00B4D8] transition">Beneficios</a>
            <a href="#about" className="hover:text-[#00B4D8] transition">Nosotros</a>
            <a href="#testimonials" className="hover:text-[#00B4D8] transition">Testimonios</a>
          </nav>

          {/* BOTONES DERECHA */}
          <div className="flex items-center gap-3 mr-[72px]">
            {/* Botón Buscar */}
            <button
              className="bg-[#00B4D8] text-white p-3 rounded-full shadow-md hover:scale-105 transition w-[46px] h-[46px] flex items-center justify-center"
              onClick={() => setShowSearch(!showSearch)}
              aria-label="Buscar"
            >
              <FaSearch size={20} />
            </button>

            {/* Botón Contáctanos - visible siempre */}
            <button
              onClick={() => setShowContactForm(true)}
              className="bg-[#00B4D8] text-white px-4 py-2 rounded shadow-md text-sm hover:bg-[#019abd] transition"
            >
              Contáctanos
            </button>
          </div>
        </div>
      </header>

      {/* BARRA DE BÚSQUEDA FLOTANTE */}
      {showSearch && (
        <div className="fixed top-[100px] right-4 z-50 bg-white shadow-lg border rounded-lg px-4 py-3 w-[90%] max-w-md">
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

