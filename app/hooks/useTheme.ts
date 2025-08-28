'use client';

import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>('light');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme: Theme =
      savedTheme === 'dark' || savedTheme === 'light'
        ? savedTheme
        : prefersDark
        ? 'dark'
        : 'light';

    root.classList.toggle('dark', initialTheme === 'dark');
    setTheme(initialTheme);
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newTheme: Theme = theme === 'dark' ? 'light' : 'dark';

    root.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return { theme, toggleTheme, isMounted };
}