import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enLocales from './en/translation.json';
import mnLocales from './mn/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translations: enLocales },
    mn: { translations: mnLocales },
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  debug: false,
  ns: ['translations'],
  defaultNS: 'translations',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
