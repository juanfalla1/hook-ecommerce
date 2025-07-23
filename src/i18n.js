import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import axis1 from "../assets/axis1.jpg";
import axis2 from "../assets/axis2.jpg";
import axis3 from "../assets/axis3.jpg";

const ProductList = ({ addToCart }) => {
  const { t, i18n } = useTranslation();
  const [activeImage, setActiveImage] = useState(axis1);

  const isEnglish = i18n.language.startsWith("en"); // más robusto que === "en"

  const priceCOP = 69400;
  const priceUSD = 17.5;

  const formattedPrice = isEnglish
    ? `$${priceUSD.toFixed(2)} USD`
    : `$${new Intl.NumberFormat("es-CO").format(priceCOP)} COP`;

  const handleAddToCart = () => {
    const product = {
      name: t("product.name"),
      price: isEnglish ? priceUSD : priceCOP,
      image: activeImage,
    };
    addToCart(product);
  };

  return (
    <section id="products" className="py-[100px] bg-white">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h2 className="text-[2rem] text-[#023048] font-bold mb-6">
          {t("productSection.title")}
        </h2>
        <p className="text-[#333] text-[1.1rem] mb-10">
          {t("productSection.description")}
        </p>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          <div className="relative h-[300px] bg-gray-100">
            <img
              src={activeImage}
              alt={t("product.name")}
              className="object-contain w-full h-full transition-transform duration-300 transform hover:scale-105"
            />
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 bg-white bg-opacity-80 px-2 py-1 rounded-full shadow-sm">
              {[axis1, axis2, axis3].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${t("product.view")} ${i + 1}`}
                  className={`w-10 h-10 object-cover cursor-pointer rounded ${
                    activeImage === img ? "ring-2 ring-[#00B4D8]" : ""
                  } transition-transform duration-200 hover:scale-110`}
                  onClick={() => setActiveImage(img)}
                />
              ))}
            </div>
          </div>

          <div className="p-6 text-left">
            <h3 className="text-xl font-bold text-[#023048]">
              {t("product.name")}
            </h3>
            <p className="text-lg text-[#00B4D8] font-semibold mb-4">
              {formattedPrice}
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleAddToCart}
                className="px-4 py-2 bg-[#00B4D8] text-white rounded-full text-sm hover:bg-[#019abd] transition"
              >
                {t("productSection.addToCart")}
              </button>
              <button className="px-4 py-2 border border-[#00B4D8] text-[#00B4D8] rounded-full text-sm hover:bg-[#00B4D8] hover:text-white transition">
                {t("productSection.viewDetails")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductList;



