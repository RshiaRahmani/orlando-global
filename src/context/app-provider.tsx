'use client';

import type { ReactNode } from 'react';
import { createContext, useEffect, useState } from 'react';
import type { Language } from '@/lib/translations';

type Theme = 'light' | 'dark';

interface AppContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  language: Language;
  setLanguage: (language: Language) => void;
}

export const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');
  const [language, setLanguage] = useState<Language>('en');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Theme initialization
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme(systemPrefersDark ? 'dark' : 'light');
    }

    // Language initialization
    const storedLang = localStorage.getItem('language') as Language | null;
    const browserLang = navigator.language.split('-')[0] as Language;
    if (storedLang && ['en', 'ru', 'tr'].includes(storedLang)) {
      setLanguage(storedLang);
    } else if (['en', 'ru', 'tr'].includes(browserLang)) {
      setLanguage(browserLang);
    } else {
      setLanguage('en');
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      const root = window.document.documentElement;
      root.classList.remove('light', 'dark');
      root.classList.add(theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme, isMounted]);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem('language', language);
    }
  }, [language, isMounted]);

  const value = {
    theme,
    setTheme,
    language,
    setLanguage,
  };

  if (!isMounted) {
    return null; // Avoid rendering children until client-side state is determined
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
