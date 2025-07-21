import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import logoFull from "../assets/logo-full.png";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Buscando:", searchQuery);
    // Aquí podrías redirigir a resultados o mostrar filtros
  };

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-all">
        <div className="container mx-auto px-0 py-6 flex items-center justify-between max-h-[90px]">
          {/* LOGO */}
          <a href="#home" className="flex items-center">
            <img src={logoFull} alt="HOOK Logo" className="h-100 max-h-[132px] w-auto object-contain" />
          </a>

          {/* NAV */}
          <nav className="hidden md:flex space-x-8 text-lg font-medium text-gray-800">
            <a href="#home" className="hover:text-[#00B4D8] transition">Inicio</a>
            <a href="#products" className="hover:text-[#00B4D8] transition">Productos</a>
            <a href="#features" className="hover:text-[#00B4D8] transition">Beneficios</a>
            <a href="#about" className="hover:text-[#00B4D8] transition">Nosotros</a>
            <a href="#testimonials" className="hover:text-[#00B4D8] transition">Testimonios</a>
          </nav>

          {/* BOTÓN DE BÚSQUEDA */}
          <div className="flex items-center gap-5">
            <button
              className="bg-[#00B4D8] text-white p-4 rounded-full shadow-lg hover:scale-105 transition w-[49px] h-[49px] flex items-center justify-center"
              onClick={() => setShowSearch(!showSearch)}
            >
              <FaSearch size={24} />
            </button>
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
    </>
  );
};

export default Header;

