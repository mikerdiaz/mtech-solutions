'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactFormInner() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    setIsSending(true);

    try {
      console.log('🚀 Enviando con EmailJS...');
      console.log('📄 Datos:', form);

      const res = await emailjs.send(
        'service_dif2ppo', // Service ID
        'template_xf6l88f', // Template ID
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        'k_SWMIwjPqlqJMbuA' // Public Key
      );

      console.log('✅ EmailJS respuesta:', res);

      setStatus({ type: 'success', message: 'Message sent successfully! 🎉' });
      setForm({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('❌ Error completo:', error);

      let errorMessage = 'Failed to send message.';

      if (error?.message?.includes('Failed to fetch')) {
        errorMessage = 'Network error: Check your internet connection or EmailJS domain settings.';
      } 
      else if (error?.text?.includes('User ID')) {
        errorMessage = 'Invalid EmailJS credentials: Verify your Service ID, Template ID, and Public Key.';
      }
      else if (error?.status === 403) {
        errorMessage = 'Access denied: Your domain is not allowed in EmailJS settings.';
      }

      setStatus({ type: 'error', message: errorMessage });
    } 
    finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg" noValidate>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800"
              placeholder="Write your message here..."
            />
          </div>
          <button
            type="submit"
            className="w-full md:w-auto bg-blue-700 text-white px-6 py-3 rounded font-semibold transition hover:bg-blue-800 disabled:bg-blue-400 disabled:cursor-not-allowed"
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>

          {status && (
            <p className={`mt-4 text-center text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
