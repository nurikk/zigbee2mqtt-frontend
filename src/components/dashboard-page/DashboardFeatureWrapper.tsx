import camelCase from "lodash/camelCase";
import startCase from "lodash/startCase";
import React, { FunctionComponent, PropsWithChildren } from "react";
import { FetatureWrapperProps } from "../features/composite/FeatureWrapper";
import cx from "classnames";
import { useTranslation } from "react-i18next";

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
    current: ['fa-copyright', 'text-warning'],
    power: ['fa-power-off', 'text-success'],
    energy: ['fa-plug', 'text-info'],
    frequency: ['fa-wave-square'],
    tamper: ['fa-exclamation-circle', 'text-danger'],
    smoke: ['fa-smoking', 'text-danger'],
    radiation_dose_per_hour: ['fa-radiation', 'text-danger'],
    radioactive_events_per_minute: ['fa-radiation-alt', 'text-warning'],
    power_factor: ['fa-industry', 'text-danger'],
    mode: ['fa-user-cog', 'text-warning'],
    sound: ['fa-volume-up', 'text-info'],
    position: ['fa-percent', 'text-info'],
    alarm: ['fa-exclamation-triangle', 'text-danger'],
    color_xy: ['fa-palette'],
    color_hs: ['fa-palette'],
    color_temp: ['fa-sliders-h'],
    illuminance_lux: ['fa-sun'],
    soil_moisture: ['fa-fill-drip'],
    water_leak: ['fa-water'],
    week: ['fa-calendar-week'],
    workdays_schedule: ['fa-calendar-day', 'text-info'],
    holidays_schedule: ['fa-calendar-day', 'text-danger'],
};

const getGenericFeatureIcon = (name: string, value: unknown): string => {
    let classes = [] as string[];
    switch (name) {
        case 'device_temperature':
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
    const { t } = useTranslation(['featureNames']);
    return <div className="d-flex align-items-center">
        {icon && <div className="me-1">
            <i className={`fa fa-fw ${icon}`} />
        </div>}
        <div className="flex-shrink-1 flex-grow-1">{t(feature.name === 'state' ? feature.property : feature.name, {defaultValue: startCase(camelCase(feature.name === 'state' ? feature.property : feature.name))})}{feature.endpoint ? ` (${feature.endpoint})` : null}</div>
        <div className="flex-shrink-0">{children}</div>
    </div>
}

