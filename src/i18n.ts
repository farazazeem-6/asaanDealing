'use client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en/translation.json';
import urTranslation from './locales/ur/translation.json';
import romanTranslation from './locales/roman/translation.json';

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: {
        translation: enTranslation,
      },
      ur: {
        translation: urTranslation,
      },
      roman: {
        translation: romanTranslation,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
}

export default i18n;
