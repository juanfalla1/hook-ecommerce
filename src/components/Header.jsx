import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoFull from "../assets/logo-full.png";
import { useCart } from "../context/CartContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <a href="#home">
            <img src={logoFull} alt="HOOK Logo" className="h-12 w-auto" />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-base font-semibold text-[#023048] items-center">
          <a href="#home">Inicio</a>
          <a href="#products">Productos</a>
          <a href="#features">Beneficios</a>
          <a href="#about">Nosotros</a>
          <a href="#testimonials">Testimonios</a>
          <a href="#contact">Contáctanos</a>
          <Link to="/cart" className="relative">
            🛒
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                {cartItems.length}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 space-y-2 font-semibold text-[#023048]">
          <a href="#home" onClick={() => setIsOpen(false)}>Inicio</a>
          <a href="#products" onClick={() => setIsOpen(false)}>Productos</a>
          <a href="#features" onClick={() => setIsOpen(false)}>Beneficios</a>
          <a href="#about" onClick={() => setIsOpen(false)}>Nosotros</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonios</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contáctanos</a>
          <Link to="/cart" onClick={() => setIsOpen(false)}>
            🛒 Carrito ({cartItems.length})
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

