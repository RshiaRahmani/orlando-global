'use client';

import type { ReactNode } from 'react';
import { createContext, useEffect, useState } from 'react';
import type { Language } from '@/lib/translations';
import GSAPManager from '@/lib/gsap-manager';

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
  const [isInitialized, setIsInitialized] = useState(false);

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
    
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isMounted && isInitialized) {
      const root = window.document.documentElement;
      
      const applyTheme = () => {
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
        root.style.colorScheme = theme;
      };

      // Apply theme immediately for first load, with minimal delay for subsequent changes
      if (!isInitialized) {
        applyTheme();
      } else {
        // Small delay only for user-initiated theme changes to sync with animation
        const isUserChange = localStorage.getItem('theme') !== theme;
        if (isUserChange) {
          setTimeout(applyTheme, 150);
        } else {
          applyTheme();
        }
      }
    }
  }, [theme, isMounted, isInitialized]);

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

  if (!isMounted || !isInitialized) {
    return null; // Avoid rendering children until client-side state is determined
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
