import React, { useState } from "react";

const ProductCard = ({ product, addToCart }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);

  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden max-w-sm w-full hover:shadow-xl transition duration-300">
      <div className="relative bg-gray-100 p-6">
        <img
          src={selectedImage}
          alt={product.name}
          className="h-64 w-full object-contain mx-auto transition-all duration-300"
        />
        <div className="flex justify-center gap-2 mt-4">
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`vista ${i + 1}`}
              className={`w-12 h-12 rounded-md border cursor-pointer object-cover ${
                selectedImage === img ? "ring-2 ring-[#00B4D8]" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold text-[#023048] mb-2">{product.name}</h3>
        <p className="text-[#00B4D8] font-bold text-lg mb-4">${product.price.toLocaleString("es-CO")} COP</p>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => addToCart(product)}
            className="bg-[#00B4D8] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#019abd] transition"
          >
            AÑADIR AL CARRITO
          </button>
          <button
            className="border border-[#00B4D8] text-[#00B4D8] px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#e6faff] transition"
          >
            Ver Detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
