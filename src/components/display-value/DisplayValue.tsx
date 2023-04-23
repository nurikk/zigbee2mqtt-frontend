import React from 'react';

import cx from 'classnames';
import { useTranslation } from 'react-i18next';
type DisplayValueProps = {
    name: string;
    value: unknown;
};
function BooleanValueView(props: DisplayValueProps): JSX.Element {
    const { value, name } = props;
    const { t } = useTranslation('values');
    const booleansMap = {
        contact: new Map<boolean, string | JSX.Element>([
            [true, t('closed')],
            [false, t('open')],
        ]),

        occupancy: new Map([
            [true, t('occupied')],
            [false, t('clear')],
        ]),
        water_leak: new Map<boolean, string | JSX.Element>([
            [
                true,
                <span className={cx('text-danger', 'animation-blinking')} key="Leaking">
                    {t('leaking')}
                </span>,
            ],
            [false, t('clear')],
        ]),

        tamper: new Map<boolean, string | JSX.Element>([
            [
                true,
                <span className={cx('text-danger', 'animation-blinking')} key="tampered">
                    {t('tampered')}
                </span>,
            ],
            [false, t('clear')],
        ]),
        supported: new Map([
            [true, t('supported')],
            [false, t('not_supported')],
        ]),

        _default: new Map([
            [true, t('true')],
            [false, t('false')],
        ]),
    };
    const mapValue = booleansMap[name] || booleansMap._default;
    return <>{mapValue.get(value)}</>;
}

export function DisplayValue(props: DisplayValueProps): JSX.Element {
    const { t } = useTranslation('values');
    const { value } = props;
    switch (typeof value) {
        case 'boolean':
            return <BooleanValueView {...props} />;
        case 'undefined':
            return <>N/A</>;
        case 'object':
            return <>{value === null ? t('null') : JSON.stringify(value)}</>;
        case 'string':
            return <>{value === '' ? <small className="text-muted">{t('empty_string')}</small> : value}</>;
        default:
            return <>{JSON.stringify(value)}</>;
    }
}
