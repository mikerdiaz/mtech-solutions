'use client';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const initialTheme = root.classList.contains('dark');
    setIsDark(initialTheme);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.remove('dark');
    } else {
      root.classList.add('dark');
    }
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-accent text-white hover:bg-accent-dark transition"
    >
      {isDark ? '☀️ Modo Claro' : '🌙 Modo Oscuro'}
    </button>
  );
}