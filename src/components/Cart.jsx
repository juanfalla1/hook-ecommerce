// src/components/Cart.jsx
import React, { useState } from "react";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Cart = ({ cartItems, removeFromCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const isEnglish = i18n.language.startsWith("en");

  const formatPrice = (price) => {
    return isEnglish
      ? `$${price.toFixed(2)} USD`
      : `$${new Intl.NumberFormat("es-CO").format(price)} COP`;
  };

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <>
      {/* Icono flotante */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 bg-[#00B4D8] text-white p-3 rounded-full shadow-lg cursor-pointer z-50 hover:scale-105 transition"
      >
        <div className="relative">
          <FaShoppingCart size={24} />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-600 text-xs rounded-full px-1.5">
              {cartItems.length}
            </span>
          )}
        </div>
      </div>

      {/* Panel del carrito */}
      {isOpen && (
        <div className="fixed top-20 right-6 w-80 bg-white border shadow-lg rounded-lg z-50 p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-[#023048]">{t("cart.title")}</h3>
            <FaTimes
              onClick={() => setIsOpen(false)}
              className="cursor-pointer text-[#00B4D8]"
            />
          </div>

          {cartItems.length === 0 ? (
            <p className="text-gray-500">{t("cart.empty")}</p>
          ) : (
            <>
              <ul className="space-y-2 max-h-48 overflow-y-auto">
                {cartItems.map((item, i) => (
                  <li key={i} className="flex justify-between items-center">
                    <span>{item.name}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-600">
                        {formatPrice(item.price)}
                      </span>
                      <button
                        onClick={() => removeFromCart(i)}
                        className="text-red-500 text-xs"
                      >
                        {t("cart.remove")}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="border-t pt-3 mt-3 text-right">
                <p className="font-semibold text-[#023048]">
                  {t("cart.total")}: {formatPrice(total)}
                </p>
                <button className="mt-2 px-4 py-2 bg-[#00B4D8] text-white rounded text-sm hover:bg-[#019abd] transition">
                  {t("cart.checkout")}
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;

