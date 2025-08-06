'use client';
import { FaSun, FaMoon } from 'react-icons/fa';
import useTheme from '../hooks/useTheme'; // Ajusta la ruta si es necesario

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="flex items-center gap-2 px-3 py-2 rounded-md bg-accent text-white hover:bg-accent-dark transition"
    >
      {isDark ? <FaSun /> : <FaMoon />}
      <span className="text-sm font-medium">
        {isDark ? 'Light Mode' : 'Dark Mode'}
      </span>
    </button>
  );
}