import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Calzado Hook Axis",
    price: 69400,
    images: [
      "/images/axis1.png",
      "/images/axis2.png",
      "/images/axis3.png"
    ]
  },
  // Puedes agregar más productos aquí
];

const ProductList = ({ addToCart }) => {
  return (
    <section id="products" className="py-16 bg-[#f9f9f9]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#023048] mb-4">
          Nuestros Productos
        </h2>
        <p className="text-center text-gray-700 max-w-xl mx-auto mb-12">
          Explora nuestra gama de calzado industrial diseñado para cumplir con los más altos estándares.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;

