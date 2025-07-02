import { useState, useEffect } from 'react';

export const useTheme = () => {
  const getPreferredTheme = () => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('theme');
      if (stored) {
        return stored === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  };

  const [isDark, setIsDark] = useState(getPreferredTheme);

  useEffect(() => {
    const matcher = window.matchMedia('(prefers-color-scheme: dark)');
    const systemChange = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem('theme');
      if (!stored) {
        setIsDark(e.matches);
      }
    };
    matcher.addEventListener('change', systemChange);
    return () => matcher.removeEventListener('change', systemChange);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return { isDark, toggleTheme };
};