import React, { useState } from "react";
import { FaComments, FaWhatsapp } from "react-icons/fa";
import axios from "axios";

const ChatBotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "¡Hola! ¿En qué puedo ayudarte hoy?" },
    {
      from: "bot",
      text: "Si lo prefieres, puedes hablar con un asesor por WhatsApp dando clic en el ícono aquí abajo. 📲",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { from: "user", text: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content: `
Eres el asistente virtual oficial de HOOK, una tienda online de calzado colombiano de alta calidad.
Tu objetivo es ayudar a los clientes de manera clara, rápida y profesional.

Puedes responder preguntas sobre:
- Precios y promociones
- Modelos disponibles (por ejemplo: Calzado Axis, UrbanX, etc.)
- Envíos a toda Colombia
- Cambios, devoluciones y garantía (6 meses)
- Métodos de pago (tarjetas, contraentrega, etc.)
- Información de contacto y redes sociales

Si el cliente hace una pregunta que no puedes responder, sugiere escribirnos por WhatsApp.

Responde siempre en español y con un tono cercano y profesional.
              `,
            },
            { role: "user", content: input },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const aiResponse = response.data.choices[0].message.content;
      setMessages((prev) => [...prev, { from: "bot", text: aiResponse }]);
    } catch (error) {
      console.error("Error al conectar con OpenAI:", error);
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Lo siento, ocurrió un error al procesar tu mensaje. Intenta nuevamente.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full border-4 border-[#007a99] bg-[#00B4D8] text-white shadow-lg animate-pulse hover:scale-105 transition-transform"
        aria-label="Abrir chatbot"
      >
        <FaComments className="w-7 h-7" />
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-4 w-[95vw] max-w-sm h-96 bg-white border rounded-lg shadow-lg z-50 flex flex-col md:right-6 md:w-[22rem] md:max-w-[22rem]">
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
            {loading && (
              <div className="p-2 bg-gray-100 rounded text-sm text-gray-500">
                Escribiendo...
              </div>
            )}
          </div>

          <div className="p-3 border-t flex flex-col gap-2">
            <div className="flex gap-2 w-full">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
                placeholder="Escribe tu pregunta..."
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
            </div>

            <div className="flex gap-2 w-full flex-col sm:flex-row">
              <button
                onClick={handleSend}
                disabled={loading}
                className="bg-[#00B4D8] text-white px-3 py-1 rounded text-sm w-full sm:w-auto"
              >
                Enviar
              </button>
              <a
                href="https://wa.me/573209887985?text=Hola,%20quiero%20hablar%20con%20un%20asesor"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-3 py-1 rounded text-sm flex items-center justify-center gap-1 w-full sm:w-auto"
                title="Hablar por WhatsApp"
              >
                <FaWhatsapp className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBotButton;
