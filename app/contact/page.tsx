'use client';

import dynamic from 'next/dynamic';

const ContactForm = dynamic(() => import('@/components/ContactForm'), {
  ssr: false,
});

export default function ContactPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Contáctanos</h1>
      <ContactForm />
    </main>
  );
}