import React from "react";

import cx from "classnames";
import { useTranslation } from "react-i18next";
type DisplayValueProps = {
    name: string;
    value: unknown;
}

const booleansMap = {
    contact: new Map<boolean, string | JSX.Element>([
        [true, 'closed'],
        [false, 'open'],
    ]),

    occupancy: new Map([
        [true, 'occupied'],
        [false, 'clear']
    ]),
    water_leak: new Map<boolean, string | JSX.Element>([
        [true, <span className={cx("text-danger", "animation-blinking")} key="Leaking">Leaking</span>],
        [false, 'clear']
    ]),

    tamper: new Map<boolean, string | JSX.Element>([
        [true, <span className={cx("text-danger", "animation-blinking")} key="tampered">Tampered</span>],
        [false, 'clear']
    ]),
    supported: new Map([
        [true, 'supported'],
        [false, 'not_supported']
    ]),

    _default: new Map([
        [true, 'true'],
        [false, 'false']
    ])
};

export function DisplayValue(props: DisplayValueProps): JSX.Element {
    const { t } = useTranslation("values");
    const { value, name } = props;
    switch (typeof value) {
        case 'boolean':
            const mapValue = booleansMap[name] || booleansMap._default;
            return <>{t(mapValue.get(value))}</>;
        case "undefined":
            return <>N/A</>;
        case "object":
            return <>{value === null ? 'null' : JSON.stringify(value)}</>;
        case "string":
            return <>{value === "" ? <small className="text-muted">{t('empty_string')}</small> : value}</>;
        default:
            return <>{JSON.stringify(value)}</>;
    }
}
