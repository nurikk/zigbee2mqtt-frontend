import i18n, { ResourceLanguage } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { register } from "timeago.js"
import LanguageDetector from 'i18next-browser-languagedetector';
import set from "lodash/set";


import enTranslations from './locales/en.json';
import frTranslations from './locales/fr.json';
import plTranslations from './locales/pl.json';
import deTranslations from './locales/de.json';
import ruTranslations from './locales/ru.json';


import timePl from "timeago.js/lib/lang/pl";
import timeFR from "timeago.js/lib/lang/fr";
import timeDe from "timeago.js/lib/lang/de";
import timeRu from "timeago.js/lib/lang/ru";


register("pl", timePl);
register("fr", timeFR);
register("de", timeDe);
register("ru", timeRu);



export const resources = {
    en: enTranslations as ResourceLanguage,
    fr: frTranslations as ResourceLanguage,
    pl: plTranslations as ResourceLanguage,
    de: deTranslations as ResourceLanguage,
    ru: ruTranslations as ResourceLanguage,
} as const;

declare let window:Record<string, unknown>;
window.missing = {};

const missingKeyHandler = (lngs: string[], ns: string, key: string, fallbackValue: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-types
    set(window.missing as object, [ns, key].join('.'), fallbackValue);
    //then use `copy(window.missing)` in chrome dev tools console
}
const debug = process.env.NODE_ENV !== 'production'
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug,
        resources,
        ns: Object.keys(enTranslations),
        saveMissing: debug,
        missingKeyHandler
    });
export default i18n;
