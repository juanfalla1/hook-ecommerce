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
import ContactForm from "./components/ContactForm";
// ❌ Cart eliminado de aquí

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  return (
    <>
      <LoadingScreen />
      <Header />
      <Hero />
      <Features />
      <ProductList addToCart={addToCart} />
      <About />
      <Testimonials />
      <CTA />
      <ContactForm />
      <Footer />
      <ChatBotButton />
      {/* ❌ No renderices aquí <Cart /> directamente */}
    </>
  );
}

export default App;

