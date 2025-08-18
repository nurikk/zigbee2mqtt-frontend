import camelCase from 'lodash/camelCase';
import startCase from 'lodash/startCase';
import React, { FunctionComponent, PropsWithChildren } from 'react';
import { FeatureWrapperProps } from '../features/composite/FeatureWrapper';
import cx from 'classnames';
import { useTranslation } from 'react-i18next';

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
    action: ['fa-a'],
    alarm: ['fa-exclamation-triangle', 'text-danger'],
    angle_x: ['fa-x'],
    angle_y: ['fa-y'],
    angle_z: ['fa-z'],
    approach_distance: ['fa-arrows-left-right-to-line', 'text-warning'],
    away_mode: ['fa-plane', 'text-info'],
    brightness: ['fa-sun'],
    co2: ['fa-atom', 'text-warning'],
    color_hs: ['fa-palette'],
    color_temp: ['fa-sliders-h'],
    color_xy: ['fa-palette'],
    current: ['fa-copyright', 'text-warning'],
    distance: ['fa-arrows-left-right-to-line', 'text-warning'],
    energy: ['fa-plug', 'text-info'],
    frequency: ['fa-wave-square'],
    holidays_schedule: ['fa-calendar-day', 'text-danger'],
    humidity: ['text-info', 'fa-tint'],
    humidity_alarm: ['fa-triangle-exclamation'],
    illuminance: ['fa-sun'],
    illuminance_lux: ['fa-sun'],
    level_config: ['fa-gear'],
    mode: ['fa-user-cog', 'text-warning'],
    occupancy: ['fa-walking'],
    position: ['fa-percent', 'text-info'],
    power: ['fa-power-off', 'text-success'],
    power_factor: ['fa-industry', 'text-danger'],
    power_outage_count: ['fa-plug-circle-xmark'],
    presence: ['fa-person-rays'],
    pressure: ['fa-cloud-download-alt'],
    radiation_dose_per_hour: ['fa-radiation', 'text-danger'],
    radioactive_events_per_minute: ['fa-radiation-alt', 'text-warning'],
    rainwater: ['fa-cloud-rain'],
    side: ['fa-cube'],
    smoke: ['fa-smoking', 'text-danger'],
    soil_moisture: ['fa-fill-drip'],
    sound: ['fa-volume-up', 'text-info'],
    state: ['fa-star-half-alt'],
    station: ['fa-warehouse'],
    tamper: ['fa-exclamation-circle', 'text-danger'],
    temperature_alarm: ['fa-triangle-exclamation'],
    test: ['fa-check', 'text-success'],
    trigger_count: ['fa-turn-up fa-flip-horizontal', 'text-info'],
    voltage: ['fa-bolt', 'text-success'],
    vibration: ['fa-water fa-rotate-270'],
    water_leak: ['fa-water'],
    week: ['fa-calendar-week'],
    workdays_schedule: ['fa-calendar-day', 'text-info'],
};

const getGenericFeatureIcon = (name: string, value: unknown): string => {
    let classes = [] as string[];
    switch (name) {
        case 'contact':
            classes.push(cx({ 'fa-door-closed text-muted': value, 'fa-door-open text-primary': !value }));
            break;
        case 'device_temperature':
        case 'local_temperature':
            classes.push(cx('text-danger', getTemperatureIcon(value as number)));
            break;
        case 'occupancy':
            classes.push(cx({ 'text-warning': value }));
            break;
        case 'presence':
            classes.push(cx({ 'text-warning': value }));
            break;
        case 'tamper':
            classes.push(cx({ 'fa-beat-fade': value }));
            break;
        case 'temperature':
        case 'vibration':
            classes.push(cx({ 'fa-shake fa-rotate-270 text-primary': value }));
            break;
        case 'water_leak':
            classes.push(cx({ 'fa-beat-fade text-primary': value }));
            break;
        default:
            break;
    }
    classes = [...classes, ...(typeToClassMap[name] ?? [])];
    if (!classes.length) {
        classes.push('invisible');
    }
    return cx(classes);
};

export const DashboardFeatureWrapper: FunctionComponent<PropsWithChildren<FeatureWrapperProps>> = (props) => {
    const { children, feature, deviceState = {} } = props;
    const icon = getGenericFeatureIcon(feature.name, deviceState[feature.property]);
    const { t } = useTranslation(['featureNames']);
    const featureName = feature.name === 'state' ? feature.property : feature.name;
    const fallbackFeatureName = startCase(camelCase(featureName));
    return (
        <div className="d-flex align-items-center">
            {icon && (
                <div className="me-1">
                    <i className={`fa fa-fw ${icon}`} />
                </div>
            )}
            <div className="flex-shrink-1 flex-grow-1">
                {t(featureName, { defaultValue: fallbackFeatureName })}
                {feature.endpoint ? ` (${feature.endpoint})` : null}
            </div>
            <div className="flex-shrink-1">{children}</div>
        </div>
    );
};
