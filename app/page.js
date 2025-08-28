'use client';

import dynamic from 'next/dynamic';

// Componentes que deben cargarse solo en el cliente
const AOSInitializer = dynamic(() => import('./components/AOSInitializer'), {
  ssr: false,
});
const Testimonials = dynamic(() => import('./components/Testimonials'), {
  ssr: false,
});

// Componentes normales
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Coverage from './components/Coverage';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black dark:bg-primary dark:text-white transition-colors duration-300 ease-in-out antialiased">
      <AOSInitializer />
      <Header />
      <Hero />
      <Services />
      <About />
      <Coverage />
      <Contact />
      <Testimonials />
      <Footer />
    </main>
  );
}