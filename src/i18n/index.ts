import i18n, { ResourceLanguage } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { register } from "timeago.js"
import LanguageDetector from 'i18next-browser-languagedetector';



import enTranslations from './locales/en.json';
import frTranslations from './locales/fr.json';
import plTranslations from './locales/pl.json';
import deTranslations from './locales/de.json';


import timePl from "timeago.js/lib/lang/pl";
import timeFR from "timeago.js/lib/lang/fr";
import timeDe from "timeago.js/lib/lang/de";


register("pl", timePl);
register("fr", timeFR);
register("de", timeDe);



export const resources = {
    en: enTranslations as ResourceLanguage,
    fr: frTranslations as ResourceLanguage,
    pl: plTranslations as ResourceLanguage,
    de: deTranslations as ResourceLanguage
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
export default i18n;
