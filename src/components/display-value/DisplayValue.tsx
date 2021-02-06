import React from "react";

import cx from "classnames";
type DisplayValueProps = {
    name: string;
    value: unknown;
}

const booleansMap = {
    contact: new Map<boolean, string | JSX.Element>([
        [true, 'Closed'],
        [false, 'Open'],
    ]),

    occupancy: new Map([
        [true, 'Occupied'],
        [false, 'Clear']
    ]),

    // eslint-disable-next-line @typescript-eslint/camelcase
    water_leak: new Map<boolean, string | JSX.Element>([
        [true, <span className={cx("text-danger", "animation-blinking")} key="Leaking">Leaking</span>],
        [false, 'Clear']
    ]),

    tamper: new Map<boolean, string | JSX.Element>([
        [true, <span className={cx("text-danger", "animation-blinking")} key="tampered">Tampered</span>],
        [false, 'Clear']
    ]),

    _default: new Map([
        [true, 'true'],
        [false, 'false']
    ])
};

export function DisplayValue(props: DisplayValueProps) {
    const { value, name } = props;
    switch (typeof value) {
        case 'boolean':
            const mapValue = booleansMap[name] || booleansMap._default;
            return <>{mapValue.get(value)}</>;
        case "undefined":
            return <>N/A</>;
        case "object":
            return <>{value === null ? 'null' : JSON.stringify(value)}</>;
        case "string":
            return <>{value === "" ? <small className="text-muted">empty string</small> : value}</>;
        default:
            return <>{JSON.stringify(value)}</>;
    }
}
