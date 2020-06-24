import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LocaleJa from './locales/ja.json';
import LocaleEn from './locales/en.json';
//ブラウザの言語情報の取得
let defaultLocale = () => {
  let lang =
    (window.navigator.languages && window.navigator.languages[0]) ||
    window.navigator.language ||
    // @ts-ignore
    window.navigator.userLanguage ||
    // @ts-ignore
    window.navigator.browserLanguage;
  if (!lang) {
    return 'en';
  }
  if (lang.includes('-')) {
    return lang.split('-')[0];
  }
  return lang;
};

i18n.use(initReactI18next).init({
  resources: {
    ja: { translation: LocaleJa },
    en: { translation: LocaleEn },
  },
  lng: defaultLocale(),
  fallbackLng: 'ja',
  interpolation: { escapeValue: false },
});
export default i18n;
