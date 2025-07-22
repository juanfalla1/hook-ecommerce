import React, { useState } from "react";
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
import Cart from "./components/Cart"; // ✅ Carrito funcional
import ContactForm from "./components/ContactForm";
import { CartProvider } from "./context/CartContext"; // ✅ Contexto del carrito

function App() {
  return (
    <CartProvider>
      <LoadingScreen />
      <Header />
      <Hero />
      <Features />
      <ProductList />
      <About />
      <Testimonials />
      <CTA />
      <ContactForm />
      <Footer />
      <ChatBotButton />
      <Cart />
    </CartProvider>
  );
}

export default App;
