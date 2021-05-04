
import React, { RefObject } from 'react';

import { useTranslation } from 'react-i18next';
import useComponentVisible from '../hooks/useComponentVisible';
import cx from "classnames";
import { Resource } from 'i18next';



export default function LocalePicker(): JSX.Element {
    const { t, i18n } = useTranslation("common");
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);



    const selectAndHide = (lang: string) => { i18n.changeLanguage(lang); setIsComponentVisible(false) }

    const locales = Object.keys(i18n.options.resources as Resource).map((language) => (<a key={language} className="dropdown-item" href="#" onClick={selectAndHide.bind(null, language)}>
        <span className="align-middle">{t(language)}</span>
    </a>));


    return (<li className="nav-item dropdown">
        <a className={cx("nav-flag dropdown-toggle", { show: isComponentVisible })} href="#" onClick={() => setIsComponentVisible(!isComponentVisible)} aria-expanded="false">
            {t(i18n.language)}
        </a>
        <div ref={ref as RefObject<HTMLDivElement>} className={cx("dropdown-menu dropdown-menu-end", { show: isComponentVisible })}>
            {locales}
        </div>
    </li>
    );
}
