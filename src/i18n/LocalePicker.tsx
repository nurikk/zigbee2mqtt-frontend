import React, { RefObject } from 'react';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import { Resource } from 'i18next';
import Dropdown from 'react-bootstrap/Dropdown';

import {
    ca,
    en,
    fr,
    pl,
    de,
    ru,
    ptbr,
    es,
    ua,
    chs,
    nl,
    it,
    zh,
    ko,
    cs,
    fi,
    sv,
    tr,
    no,
    da,
    bg,
    hu,
    missing,
} from './flags/index.ts';

import localeNames from './locales/localeNames.json';
import { ToggleButtonProps } from 'react-bootstrap';

const localesMap = {
    ca,
    en,
    fr,
    pl,
    de,
    ru,
    ptbr,
    es,
    ua,
    'zh-CN': chs,
    nl,
    it,
    zh,
    ko,
    cs,
    fi,
    sv,
    tr,
    no,
    da,
    bg,
    hu,
};

export default function LocalePicker(): JSX.Element {
    const { i18n } = useTranslation('localeNames');

    const selectAndHide = (lang: string) => {
        i18n.changeLanguage(lang).then();
    };

    const locales = Object.keys(i18n.options.resources as Resource).map((language) => (
        <Dropdown.Item
            as="li"
            key={language}
            onClick={() => {
                selectAndHide(language);
            }}
        >
            <img
                src={localesMap[language] ?? missing}
                alt={localeNames[language]}
                width="20"
                className="align-middle me-1"
            />
            <span className="align-middle">{localeNames[language]}</span>
        </Dropdown.Item>
    ));
    const currentLanguage = localesMap[i18n.language] ? i18n.language : i18n.language.split('-')[0];

    const toggleButton = React.forwardRef<HTMLAnchorElement, ToggleButtonProps>(({ children, onClick }, _) => (
        <a
            href="#"
            className={cx('nav-flag dropdown-toggle my-0 py-0')}
            onClick={(e) => {
                e.preventDefault();
                onClick(e);
            }}
        >
            {children}
        </a>
    ));
    toggleButton.displayName = 'ToggleButton';
    return (
        <Dropdown>
            <Dropdown.Toggle as={toggleButton} variant="success" id="dropdown-basic">
                <img src={localesMap[currentLanguage] ?? missing} alt={localeNames[currentLanguage]} />
            </Dropdown.Toggle>

            <Dropdown.Menu>{locales}</Dropdown.Menu>
        </Dropdown>
    );
}
