'use client';

import { useState } from 'react';
import * as Sentry from '@sentry/nextjs';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('');

    try {
      const response = await emailjs.sendForm(
        'your_service_id',     // ← reemplaza con tu ID real
        'your_template_id',    // ← reemplaza con tu ID real
        e.currentTarget,
        'your_user_id'         // ← reemplaza con tu ID real
      );

      if (response.status === 200) {
        setStatus('✅ Mensaje enviado correctamente');
      } else {
        throw new Error(`EmailJS respondió con status: ${response.status}`);
      }
    } catch (error) {
      setStatus('❌ Hubo un error al enviar el mensaje');

      Sentry.captureException(error, {
        tags: { device: 'iPhone' },
        extra: {
          formData: {
            name: e.currentTarget.name?.value,
            email: e.currentTarget.email?.value,
            message: e.currentTarget.message?.value,
          },
          userAgent: navigator.userAgent,
        },
      });

      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="name" type="text" placeholder="Nombre" required className="border p-2 w-full" />
      <input name="email" type="email" placeholder="Email" required className="border p-2 w-full" />
      <textarea name="message" placeholder="Mensaje" required className="border p-2 w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Enviar
      </button>
      {status && <p className="mt-2 text-sm text-gray-700">{status}</p>}
    </form>
  );
}