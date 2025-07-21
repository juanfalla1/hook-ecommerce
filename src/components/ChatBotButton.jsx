import React, { useState } from "react";
import { FaComments } from "react-icons/fa"; // ícono de chat

const ChatBotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "¡Hola! ¿En qué puedo ayudarte hoy?" },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { from: "user", text: input }];
    const response = generateResponse(input);
    setMessages([...newMessages, { from: "bot", text: response }]);
    setInput("");
  };

  const generateResponse = (question) => {
    const lower = question.toLowerCase();
    if (lower.includes("precio")) return "Nuestros productos van desde $69.400 COP.";
    if (lower.includes("envío")) return "Hacemos envíos a toda Colombia.";
    if (lower.includes("garantía")) return "Todos nuestros productos tienen garantía de 6 meses.";
    if (lower.includes("contacto")) return "Puedes escribirnos a contacto@hookcalzado.com";
    return "Lo siento, no entiendo tu pregunta. ¿Puedes reformularla?";
  };

  return (
    <>
      {/* Botón flotante estilo burbuja con animación */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full border-4 border-[#007a99] bg-[#00B4D8] text-white shadow-lg animate-pulse hover:scale-105 transition-transform"
        aria-label="Abrir chatbot"
      >
        <FaComments className="w-7 h-7" />
      </button>

      {/* Ventana del chatbot */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white border rounded-lg shadow-lg z-50 flex flex-col">
          <div className="bg-[#023048] text-white p-3 font-bold rounded-t-lg">
            Asistente HOOK
          </div>
          <div className="flex-1 p-4 overflow-y-auto text-sm space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded ${
                  msg.from === "bot"
                    ? "bg-[#e6f7fb] text-left text-gray-800"
                    : "bg-[#00B4D8] text-white self-end text-right"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
              placeholder="Escribe tu pregunta..."
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              className="bg-[#00B4D8] text-white px-3 py-1 rounded text-sm"
            >
              Enviar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBotButton;
