'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white/90 dark:bg-slate-900 dark:text-white backdrop-blur border-b border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo + Marca */}
        <Link href="#top" className="group flex items-center gap-4 hover:opacity-90 transition">
          <Image
            src="/images/logo.png"
            alt="Logo"
            title="Evonet IP"
            width={200}
            height={200}
            className="w-24 md:w-32 lg:w-36 h-auto rounded-full bg-gradient-to-tr from-white via-slate-100 to-white dark:from-slate-900 dark:to-slate-800 shadow-xl dark:shadow-slate-800 ring-4 ring-white dark:ring-slate-800 p-2 transition-transform duration-300 ease-in-out hover:scale-105 animate-fade-in"
          />
          <span className="text-2xl md:text-3xl font-extrabold tracking-tight text-primary dark:text-accent group-hover:text-accent">
            {/* MTech <span className="text-accent">Solutions</span> */}
          </span>
        </Link>

        {/* Menú Desktop */}
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="#services" className="hover:text-accent dark:hover:text-accent transition-colors duration-200">Services</Link>
          <Link href="#about" className="hover:text-accent dark:hover:text-accent transition-colors duration-200">About</Link>
          <Link href="#coverage" className="hover:text-accent dark:hover:text-accent transition-colors duration-200">Coverage</Link>
          <Link href="#contact" className="hover:text-accent dark:hover:text-accent transition-colors duration-200">Contact</Link>
        </nav>

        {/* CTA Desktop */}
        <Link
          href="#contact"
          className="hidden md:inline-block bg-accent text-white px-4 py-2 rounded-md font-semibold hover:opacity-90 transition"
        >
          Get a Quote
        </Link>

        {/* Iconos Sociales + Toggle */}
        <div className="hidden md:flex gap-4 ml-6 items-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener"
            className="hover:text-accent dark:hover:text-accent transition"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener"
            className="hover:text-accent dark:hover:text-accent transition"
          >
            <FaFacebook size={30} />
          </a>
          <a
            href="https://web.whatsapp.com/"
            target="_blank"
            rel="noopener"
            className="hover:text-accent dark:hover:text-accent transition"
          >
            <FaWhatsapp size={30} />
          </a>
          <ThemeToggle />
        </div>

        {/* Botón Hamburguesa */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          ☰
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <nav className="md:hidden flex flex-col items-center gap-4 pb-4 text-sm font-medium transition-colors duration-300">
          <Link href="#services" className="hover:text-accent dark:hover:text-accent transition">Services</Link>
          <Link href="#about" className="hover:text-accent dark:hover:text-accent transition">About</Link>
          <Link href="#coverage" className="hover:text-accent dark:hover:text-accent transition">Coverage</Link>
          <Link href="#contact" className="hover:text-accent dark:hover:text-accent transition">Contact</Link>
          <Link
            href="#contact"
            className="bg-accent text-white px-4 py-2 rounded-md font-semibold hover:opacity-90 transition"
          >
            Get a Quote
          </Link>
        </nav>
      )}
    </header>
  );
}