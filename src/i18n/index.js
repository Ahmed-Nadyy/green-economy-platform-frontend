import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import ar from './ar.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      ar
    },
    lng: 'ar',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;