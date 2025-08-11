'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-in-out',
      offset: 50,
    });

    // Refrescar AOS en resize y también cuando cambie el contenido dinámico (opcional)
    const refreshAOS = () => AOS.refresh();

    window.addEventListener('resize', refreshAOS);

    // Limpieza para evitar memory leaks
    return () => {
      window.removeEventListener('resize', refreshAOS);
    };
  }, []);

  return null;
}
