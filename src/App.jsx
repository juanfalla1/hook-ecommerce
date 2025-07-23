import React, { useState } from "react";
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
import Cart from "./components/Cart"; // ✅ Nuevo componente

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

      {/* Selector de idioma visible al inicio */}
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

      <Header />
      <Hero />
      <Features />
      <ProductList addToCart={addToCart} /> {/* ✅ Prop agregada */}
      <About />
      <Testimonials />
      <CTA />
      <Footer />
      <ChatBotButton />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} /> {/* ✅ Carrito */}
    </>
  );
}

export default App;

