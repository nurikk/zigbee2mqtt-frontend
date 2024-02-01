import React, { RefObject } from 'react';
import { useTranslation } from 'react-i18next';
import useComponentVisible from '../hooks/useComponentVisible';
import cx from 'classnames';
import { Resource } from 'i18next';

import ca from './flags/ca.png';
import en from './flags/uk.png';
import fr from './flags/fr.png';
import pl from './flags/pl.png';
import de from './flags/de.png';
import ru from './flags/ru.png';
import ptbr from './flags/ptbr.png';
import es from './flags/es.png';
import ua from './flags/ua.png';
import chs from './flags/cn.png';
import nl from './flags/nl.png';
import it from './flags/it.png';
import zh from './flags/tw.png';
import ko from './flags/kr.png';
import cs from './flags/cz.png';
import fi from './flags/fi.png';
import sv from './flags/sv.png';
import tr from './flags/tr.png';
import no from './flags/no.png';
import da from './flags/da.png';
import bg from './flags/bg.png';
import missing from './flags/missing-locale.png';

import localeNames from './locales/localeNames.json';

import Button from 'react-bootstrap/button';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';

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
};

export default function LocalePicker(): JSX.Element {
    const { i18n } = useTranslation('localeNames');
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

    const selectAndHide = (lang: string) => {
        i18n.changeLanguage(lang);
        //setIsComponentVisible(false);
    };

    const locales = Object.keys(i18n.options.resources as Resource).map((language) => (
        <Dropdown.Item key={language} onClick={(e) => { selectAndHide(language) }}>
            <img
                src={localesMap[language] ?? missing}
                alt={localeNames[language]}
                width="20"
                className="align-middle me-1 border border-secondary"
            />
            <span className="align-middle">{localeNames[language]}</span>
        </Dropdown.Item>
    ));
    const currentLanguage = localesMap[i18n.language] ? i18n.language : i18n.language.split('-')[0];

    return (
        <Dropdown className="my-2 mx-1">
            <Dropdown.Toggle variant='outline-secondary'>
                <Image
                    roundedCircle={true}
                    className='me-1 mb-1 border border-secondary d-inline-block align-middle'
                    src={localesMap[currentLanguage] ?? missing}
                    alt={localeNames[currentLanguage]}
                    style={{ "height": "18px", "width": "18px"}}
                />
            </Dropdown.Toggle>
            <Dropdown.Menu className={'my-1'}>
                {locales}
            </Dropdown.Menu>
        </Dropdown>
    );
}
