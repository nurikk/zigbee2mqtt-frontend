import React from 'react';
import { useTranslation } from 'react-i18next';
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

import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

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
    const { t } = useTranslation(['navbar']);

    const select = (lang: string) => {
        i18n.changeLanguage(lang);
    };

    const locales = Object.keys(i18n.options.resources as Resource).map((language) => (
        <Dropdown.Item key={language} onClick={(e) => { select(language) }}>
            <img
                src={localesMap[language] ?? missing}
                alt={localeNames[language]}
                width={'20'}
                className={'align-middle me-1 border border-secondary'}
            />
            <span className={'align-middle'}>{localeNames[language]}</span>
        </Dropdown.Item>
    ));
    const currentLanguage = localesMap[i18n.language] ? i18n.language : i18n.language.split('-')[0];

    return (
        <Dropdown as={ButtonGroup}>
            <Button variant={'outline-secondary'} className={'d-flex align-items-center'}>
                <Image
                    roundedCircle={true} className={'border border-secondary'}
                    src={localesMap[currentLanguage] ?? missing}
                    alt={localeNames[currentLanguage]}
                    height={18} width={18}
                />
            </Button>
            <Dropdown.Toggle split={true} variant={'outline-secondary'} data-bs-reference={'parent'}>
                <span className={'visually-hidden'}>{t('toggle_dropdown')}</span>
            </Dropdown.Toggle>
            <Dropdown.Menu className={'my-1'}>
                {locales}
            </Dropdown.Menu>
        </Dropdown>
    );
}
