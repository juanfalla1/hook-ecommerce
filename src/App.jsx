import React from "react";
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
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <Hero />
      <Features />
      <ProductList /> {/* Ya no necesita props */}
      <About />
      <Testimonials />
      <CTA />
      <ContactForm />
      <Footer />
      <ChatBotButton />
      <Cart /> {/* El carrito accede a los items desde el contexto */}
    </>
  );
}

export default App;
