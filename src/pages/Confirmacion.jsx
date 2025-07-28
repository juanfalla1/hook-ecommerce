import React from "react";
import { useLocation } from "react-router-dom";

const Confirmacion = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const status = queryParams.get("status");
  const reference = queryParams.get("reference");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-[#023048] px-4 text-center">
      <h1 className="text-3xl font-bold mb-4">¡Gracias por tu compra!</h1>

      <p className="mb-2 text-lg">
        Estado del pago: <strong>{status || "Pendiente"}</strong>
      </p>

      {reference && (
        <p className="text-sm text-gray-600">
          Referencia de pago: <code>{reference}</code>
        </p>
      )}

      <a
        href="/"
        className="mt-6 inline-block px-6 py-2 bg-[#00B4D8] text-white rounded hover:bg-[#019abd] transition"
      >
        Volver al inicio
      </a>
    </div>
  );
};

export default Confirmacion;
