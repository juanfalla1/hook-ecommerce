// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvider } from "./context/CartContext"; // 👈 Importamos el provider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider> {/* 👈 Aquí envolvemos la App */}
      <App />
    </CartProvider>
  </React.StrictMode>
);

