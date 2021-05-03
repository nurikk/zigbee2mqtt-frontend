import i18n, { ResourceLanguage } from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en.json';
import ruTranslations from './locales/ru.json';
import frTranslations from './locales/fr.json';
import LanguageDetector from 'i18next-browser-languagedetector';

export const resources = {
    en: enTranslations as ResourceLanguage,
    fr: frTranslations as ResourceLanguage,
    ru: ruTranslations as ResourceLanguage
} as const;

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: process.env.NODE_ENV !== 'production',
        resources,
        ns: Object.keys(enTranslations)
    });
i18n.changeLanguage('en');
export default i18n;
