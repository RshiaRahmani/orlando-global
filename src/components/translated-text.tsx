'use client';

import { useApp } from '@/hooks/use-app';
import { translations } from '@/lib/translations';

interface TranslatedTextProps {
  path: string; // e.g., "nav.home" or "branches.cyberX.title"
  fallback?: string;
  className?: string;
}

export default function TranslatedText({ path, fallback, className }: TranslatedTextProps) {
  const { language } = useApp();
  
  const getNestedValue = (obj: any, path: string): string => {
    return path.split('.').reduce((current, key) => {
      return current && current[key] !== undefined ? current[key] : null;
    }, obj);
  };

  const translatedText = getNestedValue(translations[language], path);
  
  if (!translatedText) {
    console.warn(`Translation missing for path: ${path} in language: ${language}`);
    return <span className={className}>{fallback || `[${path}]`}</span>;
  }

  return <span className={className}>{translatedText}</span>;
}
