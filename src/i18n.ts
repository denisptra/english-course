import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Impor file terjemahan
import translationEN from './components/locales/en/translation.json';
import translationID from './components/locales/id/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  id: {
    translation: translationID,
  },
};

i18n
  .use(initReactI18next) // Mengikat react-i18next dengan instance i18next
  .init({
    resources,
    lng: 'id', // Bahasa default
    fallbackLng: 'en', // Bahasa cadangan jika terjemahan tidak ditemukan
    interpolation: {
      escapeValue: false, // React sudah aman dari XSS
    },
  });

export default i18n;