import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoFull from "../assets/logo-full.png";
import { useCart } from "../context/CartContext";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex-shrink-0">
          <img
            src={logoFull}
            alt="HOOK Logo"
            className="h-12 object-contain"
          />
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8 text-base font-medium text-[#023048] items-center">
          <a href="#home" className="hover:text-[#00B4D8]">Inicio</a>
          <a href="#products" className="hover:text-[#00B4D8]">Productos</a>
          <a href="#features" className="hover:text-[#00B4D8]">Beneficios</a>
          <a href="#about" className="hover:text-[#00B4D8]">Nosotros</a>
          <a href="#testimonials" className="hover:text-[#00B4D8]">Testimonios</a>
          <a href="#contact" className="hover:text-[#00B4D8]">Contáctanos</a>
          <Link to="/cart" className="relative">
            🛒
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
                {cartItems.length}
              </span>
            )}
          </Link>
        </nav>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-[#023048] font-medium bg-white shadow-md">
          <a href="#home" onClick={() => setIsOpen(false)}>Inicio</a>
          <a href="#products" onClick={() => setIsOpen(false)}>Productos</a>
          <a href="#features" onClick={() => setIsOpen(false)}>Beneficios</a>
          <a href="#about" onClick={() => setIsOpen(false)}>Nosotros</a>
          <a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonios</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contáctanos</a>
          <Link to="/cart" className="inline-block" onClick={() => setIsOpen(false)}>
            🛒 Carrito ({cartItems.length})
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;

