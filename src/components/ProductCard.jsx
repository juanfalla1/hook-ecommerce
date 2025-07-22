import React, { useState } from "react";

const ProductCard = () => {
  const [mainImage, setMainImage] = useState("/images/producto-principal.png");

  const images = [
    "/images/producto-principal.png",
    "/images/producto-lateral.png",
    "/images/producto-detalle.png",
  ];

  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="bg-gradient-to-b from-[#e0f7ff] to-white p-4">
        <img
          src={mainImage}
          alt="Producto"
          className="w-full h-64 object-contain transition-transform duration-300 hover:scale-105"
        />
        <div className="flex justify-center mt-4 gap-3">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setMainImage(img)}
              className={`w-4 h-4 rounded-full border-2 ${
                mainImage === img ? "bg-[#00B4D8]" : "bg-white border-[#00B4D8]"
              } hover:bg-[#00B4D8] transition duration-300`}
              aria-label={`Vista ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
      <div className="p-5 text-center">
        <h3 className="text-xl font-semibold text-[#023048]">Calzado Hook Axis</h3>
        <p className="text-[#00B4D8] text-lg mt-1">$69.400 COP</p>
        <div className="mt-4 flex justify-center gap-3">
          <button className="bg-[#00B4D8] hover:bg-[#1FB4D8] text-white font-semibold py-2 px-4 rounded-full transition-colors duration-300">
            AÑADIR AL CARRITO
          </button>
          <button className="border border-[#00B4D8] text-[#023048] hover:bg-[#e6faff] font-semibold py-2 px-4 rounded-full transition-colors duration-300">
            Ver Detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
