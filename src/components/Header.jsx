import React, { useState } from "react";
import logoFull from "../assets/logo-full.png";
import ContactForm from "./ContactForm";
import { useTranslation } from "react-i18next";

const Header = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 transition-all">
        {/* Contenedor general */}
        <div className="flex items-center justify-between max-h-[100px] px-4 py-4">

          {/* Logo alineado a la izquierda */}
          <div className="pl-0 flex items-center">
            <a href="#home" className="flex items-center">
              <img
                src={logoFull}
                alt="HOOK Logo"
                className="h-auto max-h-[100px] w-auto object-contain"
              />
            </a>

            {/* Hamburguesa SOLO visible en móviles */}
            <button
              className="ml-4 text-3xl text-[#00B4D8] md:hidden"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              ☰
            </button>
          </div>

          {/* Menú principal - SOLO en escritorio */}
          <nav className="hidden md:flex space-x-8 text-lg font-medium text-gray-800">
            <a href="#home" className="hover:text-[#00B4D8] transition">{t("menu.home")}</a>
            <a href="#products" className="hover:text-[#00B4D8] transition">{t("menu.products")}</a>
            <a href="#features" className="hover:text-[#00B4D8] transition">{t("menu.benefits")}</a>
            <a href="#about" className="hover:text-[#00B4D8] transition">{t("menu.about")}</a>
            <a href="#testimonials" className="hover:text-[#00B4D8] transition">{t("menu.testimonials")}</a>
            <button
              onClick={() => setShowContactForm(true)}
              className="hover:text-[#00B4D8] transition"
            >
              {t("menu.contact")}
            </button>
          </nav>

          {/* Espaciador invisible - sin tocar */}
          <div className="w-[100px] md:w-[120px]"></div>
        </div>
      </header>

      {/* Menú desplegable móvil */}
      {showMobileMenu && (
        <div className="md:hidden bg-white shadow-lg px-4 pb-4 pt-2 space-y-3 mt-[70px]">
          <a href="#home" className="block text-[#023048]">{t("menu.home")}</a>
          <a href="#products" className="block text-[#023048]">{t("menu.products")}</a>
          <a href="#features" className="block text-[#023048]">{t("menu.benefits")}</a>
          <a href="#about" className="block text-[#023048]">{t("menu.about")}</a>
          <a href="#testimonials" className="block text-[#023048]">{t("menu.testimonials")}</a>
          <button
            onClick={() => {
              setShowContactForm(true);
              setShowMobileMenu(false);
            }}
            className="block text-[#023048]"
          >
            {t("menu.contact")}
          </button>
        </div>
      )}

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
            <h2 className="text-2xl font-bold mb-4 text-center text-[#023048]">{t("menu.contact")}</h2>
            <ContactForm />
          </div>
        </div>
      )}

      {/* ✅ Carrito solo visible en móviles arriba derecha */}
      <div className="fixed top-5 right-5 z-40 md:hidden">
        <button className="bg-[#00B4D8] text-white p-3 rounded-full shadow-lg hover:bg-[#1FB4D8]">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M16 11V7a4 4 0 10-8 0v4H5l1.293 1.293A1 1 0 006 14h8a1 1 0 00.707-1.707L15 11h1z" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Header;

