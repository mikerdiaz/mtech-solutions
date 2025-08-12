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
      await emailjs.send(
        'service_cg6b0mq',       // tu service ID
        'template_blxdjhv',      // tu template ID
        {
          user_name: form.name,
          user_email: form.email,
          message: form.message,
        },
        'k_SWMIwjPqlqJMbuA'     // tu public key
      );
      setStatus({ type: 'success', message: 'Message sent successfully! 🎉' });
      setForm({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ type: 'error', message: 'Failed to send message: ' + (error.text || error.message) });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-3xl mx-auto">
        <h2 id="contact-heading" className="text-3xl md:text-4xl font-bold text-center mb-8">
          Contact Us
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white dark:bg-slate-900 p-6 rounded-lg shadow-lg"
          noValidate
        >
          <div>
            <label className="block mb-2 font-semibold" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here..."
            />
          </div>
          <button
            type="submit"
            className={`w-full md:w-auto bg-blue-700 text-white px-6 py-3 rounded font-semibold transition
              hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-400
              disabled:bg-blue-400 disabled:cursor-not-allowed`}
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send Message'}
          </button>

          {status && (
            <p
              className={`mt-4 text-center text-sm ${
                status.type === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              }`}
              role="alert"
            >
              {status.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
