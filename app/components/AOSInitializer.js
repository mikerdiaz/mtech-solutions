'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      once: true,              // Animar solo una vez
      duration: 800,           // Duración en ms
      easing: 'ease-in-out',   // Curva de animación
      offset: 50,              // Distancia desde el viewport
    });

    const refreshAOS = () => AOS.refresh();

    window.addEventListener('resize', refreshAOS);

    return () => {
      window.removeEventListener('resize', refreshAOS);
    };
  }, []);

  return null;
}