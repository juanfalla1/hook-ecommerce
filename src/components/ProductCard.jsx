import React, { useState } from "react";

const ProductCard = ({ product }) => {
  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-4 w-full max-w-sm">
      <img
        src={mainImage}
        alt={product.name}
        className="w-full h-64 object-cover rounded-lg transition duration-300 ease-in-out mb-3"
      />
      <div className="flex justify-center space-x-2 mb-3">
        {product.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${product.name} ${idx + 1}`}
            onClick={() => setMainImage(img)}
            className={`w-14 h-14 object-cover cursor-pointer rounded border-2 transition ${
              mainImage === img ? "border-blue-500" : "border-gray-300"
            }`}
          />
        ))}
      </div>
      <h3 className="text-lg font-bold text-gray-800 text-center">{product.name}</h3>
      <p className="text-center text-primary text-lg font-semibold mb-3">{product.price}</p>
      <div className="flex justify-center">
        <button className="bg-primary text-white px-5 py-2 rounded hover:bg-secondary transition">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

