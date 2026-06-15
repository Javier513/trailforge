import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import esTranslation from './locales/es/translation.json';
import enTranslation from './locales/en/translation.json';
import svTranslation from './locales/sv/translation.json';
import deTranslation from './locales/de/translation.json';

// the translations
const resources = {
  es: { translation: esTranslation },
  en: { translation: enTranslation },
  sv: { translation: svTranslation },
  de: { translation: deTranslation }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'es', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
