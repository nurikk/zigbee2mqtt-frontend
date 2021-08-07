import i18n, { ResourceLanguage } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { register } from "timeago.js"
import LanguageDetector from 'i18next-browser-languagedetector';
import set from "lodash/set";

import store from "./../store";

import enTranslations from './locales/en.json';
import frTranslations from './locales/fr.json';
import plTranslations from './locales/pl.json';
import deTranslations from './locales/de.json';
import ruTranslations from './locales/ru.json';
import ptbrTranslations from './locales/ptbr.json';
import esTranslations from './locales/es.json';
import uaTranslations from './locales/ua.json';
import chsTranslations from './locales/chs.json';


import timePl from "timeago.js/lib/lang/pl";
import timeFR from "timeago.js/lib/lang/fr";
import timeDe from "timeago.js/lib/lang/de";
import timeRu from "timeago.js/lib/lang/ru";
import timePtBr from "timeago.js/lib/lang/pt_BR";
import timeEs from "timeago.js/lib/lang/es";
import timeUa from "timeago.js/lib/lang/uk";
import timeChs from "timeago.js/lib/lang/zh_CN";


register("pl", timePl);
register("fr", timeFR);
register("de", timeDe);
register("ru", timeRu);
register("ptbr", timePtBr);
register("es", timeEs);
register("ua", timeUa);
register("chs", timeChs);



export const resources = {
    en: enTranslations as ResourceLanguage,
    fr: frTranslations as ResourceLanguage,
    pl: plTranslations as ResourceLanguage,
    de: deTranslations as ResourceLanguage,
    ru: ruTranslations as ResourceLanguage,
    ptbr: ptbrTranslations as ResourceLanguage,
    es: esTranslations as ResourceLanguage,
    ua: uaTranslations as ResourceLanguage,
    chs: chsTranslations as ResourceLanguage,
} as const;

declare let window: Record<string, unknown>;
window.missing = {};

const blacklistedNamespaces = ['localeNames'];
const missingKeyHandler = (lngs: string[], ns: string, key: string, fallbackValue: string) => {

    if (!blacklistedNamespaces.includes(ns)) {
        // eslint-disable-next-line @typescript-eslint/ban-types
        set(window.missing as object, [ns, key], fallbackValue);
        store.setState({ missingTranslations: window.missing as Map<string, unknown> });
        //then use `copy(window.missing)` in chrome dev tools console
    }
}
const debug = process.env.NODE_ENV !== 'production'
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        // fallbackLng: 'en',
        debug,
        resources,
        ns: Object.keys(enTranslations),
        saveMissing: true,
        missingKeyHandler
    });
export default i18n;
