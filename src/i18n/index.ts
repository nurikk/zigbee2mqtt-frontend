import i18n, { ResourceLanguage } from 'i18next';
import { initReactI18next } from 'react-i18next';
import { register } from "timeago.js"
import LanguageDetector from 'i18next-browser-languagedetector';
import caTranslations from './locales/ca.json';
import enTranslations from './locales/en.json';
import frTranslations from './locales/fr.json';
import plTranslations from './locales/pl.json';
import deTranslations from './locales/de.json';
import ruTranslations from './locales/ru.json';
import ptbrTranslations from './locales/ptbr.json';
import esTranslations from './locales/es.json';
import uaTranslations from './locales/ua.json';
import chsTranslations from './locales/chs.json';
import nlTranslations from './locales/nl.json';
import itTranslations from './locales/it.json';
import zhTranslations from './locales/zh.json';
import koTranslations from './locales/ko.json';
import csTranslations from './locales/cs.json';
import fiTranslations from './locales/fi.json';
import svTranslations from './locales/sv.json';
import trTranslations from './locales/tr.json';
import noTranslations from './locales/no.json';
import daTranslations from './locales/da.json';
import bgTranslations from './locales/bg.json';


import timeCa from "timeago.js/lib/lang/ca";
import timePl from "timeago.js/lib/lang/pl";
import timeFR from "timeago.js/lib/lang/fr";
import timeDe from "timeago.js/lib/lang/de";
import timeRu from "timeago.js/lib/lang/ru";
import timePtBr from "timeago.js/lib/lang/pt_BR";
import timeEs from "timeago.js/lib/lang/es";
import timeUa from "timeago.js/lib/lang/uk";
import timeChs from "timeago.js/lib/lang/zh_CN";
import timeNl from "timeago.js/lib/lang/nl";
import timeIt from "timeago.js/lib/lang/it";
import timeZh from "timeago.js/lib/lang/zh_TW";
import timeKo from "timeago.js/lib/lang/ko";
import timeCs from "timeago.js/lib/lang/cs";
import timeFi from "timeago.js/lib/lang/fi";
import timeSv from "timeago.js/lib/lang/sv";
import timeTr from "timeago.js/lib/lang/tr";
import timeNo from "timeago.js/lib/lang/nb_NO";
import timeDa from "timeago.js/lib/lang/da";
import timeBg from "timeago.js/lib/lang/bg";


register("ca", timeCa);
register("pl", timePl);
register("fr", timeFR);
register("de", timeDe);
register("ru", timeRu);
register("ptbr", timePtBr);
register("es", timeEs);
register("ua", timeUa);
register("zh-CN", timeChs);
register("nl", timeNl);
register("it", timeIt);
register("ko", timeKo);
register("zh", timeZh);
register("cs", timeCs);
register("fi", timeFi);
register("sv", timeSv);
register("tr", timeTr);
register("no", timeNo);
register("da", timeDa);
register("bg", timeBg);




export const resources = {
    ca: caTranslations as ResourceLanguage,
    en: enTranslations as ResourceLanguage,
    fr: frTranslations as ResourceLanguage,
    pl: plTranslations as ResourceLanguage,
    de: deTranslations as ResourceLanguage,
    ru: ruTranslations as ResourceLanguage,
    ptbr: ptbrTranslations as ResourceLanguage,
    es: esTranslations as ResourceLanguage,
    ua: uaTranslations as ResourceLanguage,
    "zh-CN": chsTranslations as ResourceLanguage,
    nl: nlTranslations as ResourceLanguage,
    it: itTranslations as ResourceLanguage,
    zh: zhTranslations as ResourceLanguage,
    ko: koTranslations as ResourceLanguage,
    cs: csTranslations as ResourceLanguage,
    fi: fiTranslations as ResourceLanguage,
    sv: svTranslations as ResourceLanguage,
    tr: trTranslations as ResourceLanguage,
    no: noTranslations as ResourceLanguage,
    da: daTranslations as ResourceLanguage,
    bg: bgTranslations as ResourceLanguage,

} as const;

const debug = process.env.NODE_ENV !== 'production'
i18n.on("languageChanged", (lng: string) => {
    document.documentElement.lang = lng;
})
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug,
        resources,
        ns: Object.keys(enTranslations),
    })


const currentLanguage = i18n.language.split('-')[0].toLocaleLowerCase();
if (!resources[currentLanguage]) {
    i18n.changeLanguage('en');
}
export default i18n;
