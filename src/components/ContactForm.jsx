// src/components/ContactForm.jsx
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Nombre requerido';
    if (!form.email.trim()) newErrors.email = 'Correo requerido';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Correo inválido';
    if (!form.message.trim()) newErrors.message = 'Mensaje requerido';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      emailjs.send(
        'TU_SERVICE_ID',         // Reemplaza con tu Service ID
        'TU_TEMPLATE_ID',        // Reemplaza con tu Template ID
        form,
        'TU_PUBLIC_KEY'          // Reemplaza con tu Public Key (User ID antiguo)
      )
      .then(() => {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      })
      .catch((err) => {
        console.error('Error al enviar el formulario:', err);
      });
    }
  };

  return (
    <form className="space-y-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
      <div>
        <label>Nombre</label>
        <input type="text" name="name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded" />
        {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
      </div>
      <div>
        <label>Correo</label>
        <input type="email" name="email" value={form.email} onChange={handleChange} className="w-full border p-2 rounded" />
        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
      </div>
      <div>
        <label>Mensaje</label>
        <textarea name="message" value={form.message} onChange={handleChange} className="w-full border p-2 rounded" rows="4" />
        {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
      </div>
      <button type="submit" className="bg-[#00B4D8] text-white px-4 py-2 rounded hover:bg-[#009cc7]">Enviar</button>
      {submitted && <p className="text-green-600 text-center">¡Mensaje enviado correctamente!</p>}
    </form>
  );
};

export default ContactForm;

