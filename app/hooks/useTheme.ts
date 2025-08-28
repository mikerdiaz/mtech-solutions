'use client';

import { useEffect, useState } from 'react';

export default function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark' | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme = savedTheme ?? (prefersDark ? 'dark' : 'light');

    root.classList.toggle('dark', initialTheme === 'dark');
    setTheme(initialTheme);
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    if (!theme) return;

    const root = document.documentElement;
    const newTheme = theme === 'dark' ? 'light' : 'dark';

    root.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return { theme, toggleTheme, isMounted };
}