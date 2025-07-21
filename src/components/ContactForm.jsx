import React, { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.nombre.trim()) newErrors.nombre = 'Nombre requerido';
    if (!form.email.trim()) newErrors.email = 'Correo requerido';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Correo inválido';
    if (!form.mensaje.trim()) newErrors.mensaje = 'Mensaje requerido';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });

        if (response.ok) {
          setSubmitted(true);
          setForm({ nombre: '', email: '', mensaje: '' });
        } else {
          alert('Error al enviar el mensaje');
        }
      } catch (err) {
        console.error('Error:', err);
        alert('Error de conexión');
      }
    }
  };

  return (
    <div className="text-center my-6">
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-[#023048] text-white px-6 py-3 rounded hover:bg-[#005a87] transition"
      >
        {showForm ? 'Cerrar formulario' : 'Contáctanos'}
      </button>

      {showForm && (
        <form className="mt-6 space-y-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              placeholder="Tu nombre"
              className="w-full border p-2 rounded"
            />
            {errors.nombre && <span className="text-red-500 text-sm">{errors.nombre}</span>}
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Tu correo"
              className="w-full border p-2 rounded"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
          </div>
          <div>
            <textarea
              name="mensaje"
              value={form.mensaje}
              onChange={handleChange}
              placeholder="Tu mensaje"
              className="w-full border p-2 rounded"
              rows="4"
            />
            {errors.mensaje && <span className="text-red-500 text-sm">{errors.mensaje}</span>}
          </div>
          <button type="submit" className="bg-[#00B4D8] text-white px-4 py-2 rounded hover:bg-[#009cc7]">
            Enviar mensaje
          </button>
          {submitted && <p className="text-green-600 text-center mt-2">¡Mensaje enviado correctamente!</p>}
        </form>
      )}
    </div>
  );
};

export default ContactForm;
