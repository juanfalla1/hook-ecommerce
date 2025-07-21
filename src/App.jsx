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
import Cart from "./components/Cart"; // ✅ Nuevo componente

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
