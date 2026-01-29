import React, { useContext, useState, type ReactNode } from 'react';
import { translations, LanguageCode, LANGUAGE_LABELS } from './locales';

// Helper to get nested object values
const getNestedValue = (obj: any, path: string): string => {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj) || path;
};

interface LanguageContextType {
  language: LanguageCode;
  setLanguage: (lang: LanguageCode) => void;
  cycleLanguage: () => void;
  t: (key: string) => string;
}

// Use React.createContext to ensure 'React' import is used
const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<LanguageCode>('zh-MO');

  const cycleLanguage = () => {
    const languages: LanguageCode[] = ['zh-MO', 'zh-CN', 'en', 'pt'];
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex]);
  };

  const t = (key: string) => {
    const langData = translations[language];
    return getNestedValue(langData, key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, cycleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { LANGUAGE_LABELS };