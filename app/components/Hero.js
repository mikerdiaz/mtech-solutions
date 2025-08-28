'use client';

import dynamic from 'next/dynamic';

// ✅ Importación dinámica corregida
const TypeAnimation = dynamic(
  () => import('react-type-animation').then(mod => mod.TypeAnimation),
  { ssr: false }
);

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 text-white py-28 px-6 text-center overflow-hidden transition-colors duration-300"
    >
      {/* Fondo decorativo */}
      <div
        className="absolute inset-0 bg-[url('/images/network-pattern.svg')] opacity-10 bg-cover bg-center pointer-events-none"
        aria-hidden="true"
      ></div>

      <div
        className="relative max-w-4xl mx-auto"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="100"
      >
        {/* Animación tipo máquina de escribir */}
        <h1
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-xl tracking-tight fade-in"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <TypeAnimation
            sequence={[
              'Smart Network Solutions', 2500,
              'AI-Powered IP Camera Systems', 2500,
              'Reliable, Fast, and Secure', 2500,
            ]}
            wrapper="span"
            speed={45}
            repeat={Infinity}
            aria-label="Rotating tagline describing services"
          />
        </h1>

        {/* Subtítulo */}
        <p
          className="mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-blue-100 leading-relaxed fade-in"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Clean installations, strong signals, and expert service for homes and businesses in{' '}
          <strong className="text-white font-semibold">Surrey</strong>,{' '}
          <strong className="text-white font-semibold">Tri-Cities</strong>,{' '}
          <strong className="text-white font-semibold">Burnaby</strong>, and surrounding areas.
        </p>

        {/* Botón CTA con animación de pulso */}
        <div
          className="mt-12 fade-in"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <a
            href="#contact"
            className="inline-block bg-white text-blue-900 font-semibold px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg hover:bg-slate-100 hover:shadow-cyan-500/60 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-cyan-400 animate-pulse sm:animate-none"
            aria-label="Request a free quote"
          >
            🚀 Request a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}