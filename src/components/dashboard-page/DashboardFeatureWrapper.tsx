import camelCase from "lodash/camelCase";
import startCase from "lodash/startCase";
import React, { FunctionComponent, PropsWithChildren } from "react";
import { FetatureWrapperProps } from "../features/composite/FeatureWrapper";
import styles from "./DashboardFeatureWrapper.scss";
import cx from "classnames";

const getTemperatureIcon = (temperature: number) => {
    let icon = 'fa-thermometer-empty';
    if (temperature >= 30) {
        icon = 'fa-thermometer-full';
    } else if (temperature >= 25) {
        icon = 'fa-thermometer-three-quarters';
    } else if (temperature >= 20) {
        icon = 'fa-thermometer-half';
    } else if (temperature >= 15) {
        icon = 'fa-thermometer-quarter';
    }
    return icon;
};



const typeToClassMap = {
    humidity: ['text-info', 'fa-tint'],
    illuminance: ['fa-sun'],
    pressure: ['fa-cloud-download-alt'],
    co2: ['fa-atom', 'text-warning'],
    voltage: ['fa-bolt', 'text-success'],
    state: ['fa-star-half-alt'],
    brightness: ['fa-sun'],
    occupancy: ['fa-walking'],
    /* eslint-disable @typescript-eslint/camelcase */
    color_xy: ['fa-palette'],
    color_hs: ['fa-palette'],
    color_temp: ['fa-sliders-h'],
    illuminance_lux: ['fa-sun'],
    soil_moisture: ['fa-fill-drip'],
    water_leak: ['fa-water'],
    /* eslint-enable @typescript-eslint/camelcase */
};
const getGenericFeatureIcon = (name: string, value: unknown): string => {
    let classes = [] as string[];
    switch (name) {
        case 'temperature':
            classes.push(cx('text-danger', getTemperatureIcon(value as number)))
            break;
        case 'contact':
            classes.push(cx({ 'fa-door-closed text-muted': value, 'fa-door-open text-primary': !value }))
            break;
        case 'occupancy':
            classes.push(cx({ 'text-warning': value }))
            break;
        case 'water_leak':
            classes.push(cx({ 'text-primary': value }));
            break;
        default:
            break;
    }
    classes = [...classes, ...(typeToClassMap[name] ?? [])];
    if (!classes.length) {
        classes.push('invisible');
    }
    return cx(classes);
}

export const DashboardFeatureWrapper: FunctionComponent<PropsWithChildren<FetatureWrapperProps>> = (props) => {
    const { children, feature, deviceState = {} } = props;
    const icon = getGenericFeatureIcon(feature.name, deviceState[feature.property]);

    return <div className={styles.entity}>
        {icon && <div className={styles.icon}>
            <i className={`fa fa-fw ${icon}`} />
        </div>}
        <div className={styles.title}>{startCase(camelCase(feature.name))}{feature.endpoint ? ` (${feature.endpoint})` : null}</div>
        <div className={styles.value}>{children}</div>
    </div>
}

