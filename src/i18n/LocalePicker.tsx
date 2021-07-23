
import React, { RefObject } from 'react';
import { useTranslation } from 'react-i18next';
import useComponentVisible from '../hooks/useComponentVisible';
import cx from "classnames";
import { Resource } from 'i18next';

import en from "./flags/us.png";
import fr from "./flags/fr.png";
import pl from "./flags/pl.png";
import de from "./flags/de.png";
import ru from "./flags/ru.png";
import ptbr from "./flags/ptbr.png";
import es from "./flags/es.png";
import ua from "./flags/ua.png";
import missing from "./flags/missing-locale.png"


import localeNames from './locales/localeNames.json';

const localesMap = {
    en, fr, pl, de, ru, ptbr, es, ua
}


export default function LocalePicker(): JSX.Element {
    const { i18n } = useTranslation("localeNames");
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);



    const selectAndHide = (lang: string) => { i18n.changeLanguage(lang); setIsComponentVisible(false) }

    const locales = Object.keys(i18n.options.resources as Resource).map((language) => (<a key={language} className="dropdown-item" href="#" onClick={selectAndHide.bind(null, language)}>
        <img src={localesMap[language] ?? missing} alt={localeNames[language]} width="20" className="align-middle me-1" />
        <span className="align-middle">{localeNames[language]}</span>
    </a>));
    const currentLanguage = i18n.language.split('-')[0];

    return (<li className="nav-item dropdown">
        <a className={cx("nav-flag dropdown-toggle", { show: isComponentVisible })} href="#" onClick={() => setIsComponentVisible(!isComponentVisible)} >
            <img src={localesMap[currentLanguage] ?? missing} alt={localeNames[currentLanguage]} />
        </a>
        <div ref={ref as RefObject<HTMLDivElement>} className={cx("dropdown-menu dropdown-menu-end", { show: isComponentVisible })}>
            {locales}
        </div>
    </li>
    );
}
