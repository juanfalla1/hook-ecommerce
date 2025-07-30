import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductList from "./components/ProductList";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ChatBotButton from "./components/ChatBotButton";
import Cart from "./components/Cart";
import Confirmacion from "./pages/Confirmacion";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const { i18n } = useTranslation();

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  const handleLanguageChange = (e) => {
    const lang = e.target.value;
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nextLng", lang);
  };

  return (
    <>
      <LoadingScreen />

      <div className="flex justify-end pr-6 pt-4">
        <select
          value={i18n.language}
          onChange={handleLanguageChange}
          className="border px-2 py-1 rounded text-sm"
        >
          <option value="es">ES</option>
          <option value="en">EN</option>
        </select>
      </div>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header cartItems={cartItems} />
              <Hero />

              {/* 🔽 Bloque SEO optimizado visible para Google */}
              <section className="bg-white text-gray-800 px-6 py-12 max-w-4xl mx-auto text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  HOOK Ecommerce: calzado industrial premium en Colombia
                </h1>
                <p className="text-lg leading-relaxed">
                  En <strong>HOOK Ecommerce</strong> ofrecemos calzado especializado para jornadas laborales exigentes.
                  Nuestra tienda en línea se enfoca en <strong>botas de trabajo</strong> y <strong>zapatos de seguridad</strong>
                  que combinan comodidad, diseño moderno y máxima protección. Encuentra el equilibrio perfecto entre
                  funcionalidad y estilo para profesionales que no comprometen su rendimiento.
                </p>
              </section>

              <Features />
              <ProductList addToCart={addToCart} />
              <About />
              <Testimonials />
              <CTA />
              <Footer />
              <ChatBotButton />
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
              />
            </>
          }
        />

        <Route path="/confirmacion" element={<Confirmacion />} />
      </Routes>
    </>
  );
}

export default App;


