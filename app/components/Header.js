'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowSecondLine(true), 800);
    return () => clearTimeout(timer);
  }, []);

  // Cerrar menú móvil al hacer click en link
  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white/90 dark:bg-slate-900 dark:text-white backdrop-blur border-b border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-y-4">
        
        {/* Logo + Marca */}
        <Link href="#top" className="flex items-center gap-3 hover:opacity-90 transition" onClick={handleLinkClick}>
          <Image
            src="/images/logo.png"
            alt="NetAIQ Logo"
            title="NetAIQ"
            width={180}
            height={180}
            className="w-20 md:w-28 lg:w-32 h-auto rounded-full shadow-lg p-1 bg-gradient-to-tr from-white via-slate-100 to-white dark:from-slate-900 dark:to-slate-800 ring-2 ring-accent hover:scale-105 transition-transform duration-300"
          />
          <div className="leading-relaxed">
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-md">
              Infinite Connectivity
            </span>
            {showSecondLine && (
              <span className="block text-lg md:text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mt-1 drop-shadow-md">
                Intelligent Control
              </span>
            )}
          </div>
        </Link>

        {/* Menú Desktop */}
        <nav className="hidden md:flex gap-6 lg:gap-10 text-sm font-medium">
          {['services', 'about', 'coverage', 'contact'].map((section) => (
            <Link
              key={section}
              href={`#${section}`}
              className="relative hover:text-accent transition after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-accent after:transition-all hover:after:w-full"
              onClick={handleLinkClick}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </nav>

        {/* CTA Desktop */}
        <Link
          href="#contact"
          className="hidden md:inline-block bg-accent px-5 py-2 rounded-full font-semibold text-white hover:opacity-90 transition shadow-md hover:shadow-lg hover:scale-105"
          onClick={handleLinkClick}
        >
          Get a Quote
        </Link>

        {/* Redes + Theme Toggle */}
        <div className="hidden md:flex gap-4 items-center">
          {[
            { icon: <FaInstagram />, href: "https://instagram.com" },
            { icon: <FaFacebook />, href: "https://facebook.com" },
            { icon: <FaWhatsapp />, href: "https://wa.me/16729625220" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-300 hover:text-accent transition transform hover:scale-110 p-2 rounded-full hover:bg-accent/20"
              aria-label={`Link to ${item.href.replace(/^https?:\/\//, '')}`}
            >
              {item.icon}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Hamburguesa */}
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
      <nav
        className={`md:hidden flex flex-col items-center gap-4 pb-4 text-sm font-medium transition-all duration-300 backdrop-blur-sm bg-white/70 dark:bg-slate-900/70 ${
          isOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0 overflow-hidden'
        }`}
      >
        {['services', 'about', 'coverage', 'contact'].map((section) => (
          <Link
            key={section}
            href={`#${section}`}
            className="hover:text-accent transition"
            onClick={handleLinkClick}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </Link>
        ))}
        <Link
          href="#contact"
          className="bg-accent px-5 py-2 rounded-full font-semibold text-white hover:opacity-90 transition shadow-md hover:shadow-lg"
          onClick={handleLinkClick}
        >
          Get a Quote
        </Link>
      </nav>
    </header>
  );
}
