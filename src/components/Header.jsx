import React, { useState } from 'react';
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo_hook.svg'; // asegúrate que la ruta sea correcta

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img src={logo} alt="HOOK Logo" className="h-12 md:h-16" />
        </a>

        {/* Hamburguesa */}
        <div className="md:hidden text-[#00B4D8] text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navegación */}
        <nav className={`flex-col md:flex-row md:flex gap-6 text-[#023048] font-medium text-lg absolute md:static bg-white md:bg-transparent w-full left-0 md:w-auto px-4 md:px-0 transition-all duration-300 ease-in-out ${menuOpen ? 'top-[70px]' : 'top-[-500px]'}`}>
          <a href="#home" onClick={closeMenu}>Inicio</a>
          <a href="#products" onClick={closeMenu}>Productos</a>
          <a href="#benefits" onClick={closeMenu}>Beneficios</a>
          <a href="#about" onClick={closeMenu}>Nosotros</a>
          <a href="#testimonials" onClick={closeMenu}>Testimonios</a>
          <a href="#contact" onClick={closeMenu}>Contáctanos</a>
        </nav>

        {/* Carrito */}
        <div className="hidden md:flex">
          <a href="#cart" className="fixed top-20 right-6 bg-[#00B4D8] p-4 rounded-full shadow-lg z-50">
            <FaShoppingCart className="text-white text-xl" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
