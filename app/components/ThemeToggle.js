'use client';
import { FaSun, FaMoon } from 'react-icons/fa';
import useTheme from '../hooks/useTheme'; // Asegúrate de que la ruta sea correcta

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="flex items-center gap-2 px-3 py-2 rounded-md
        bg-accent hover:bg-accent-dark text-white
        dark:bg-accent-dark dark:hover:bg-accent-light
        transition-colors duration-300"
    >
      {isDark ? <FaSun /> : <FaMoon />}
      <span className="text-sm font-medium">
        {isDark ? 'Modo claro' : 'Modo oscuro'}
      </span>
    </button>
  );
}