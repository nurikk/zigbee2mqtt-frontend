import camelCase from "lodash/camelCase";
import startCase from "lodash/startCase";
import React, { FunctionComponent, PropsWithChildren } from "react";
import { FeatureAccessMode } from "../../types";
import { FetatureWrapperProps } from "../features/composite/FeatureWrapper";
import styles from "./DashboardFeatureWrapper.scss";


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
    // eslint-disable-next-line @typescript-eslint/camelcase
    illuminance_lux: ['fa-sun'],
    // eslint-disable-next-line @typescript-eslint/camelcase
    soil_moisture: ['fa-fill-drip'],
    pressure: ['fa-cloud-download-alt'],
    co2: ['fa-atom']
};
const getGenericFeatureIcon = (name: string, value: unknown): string => {
    let classes = [] as string[];
    switch (name) {
        case 'temperature':
            classes.push(getTemperatureIcon(value as number));
            classes.push('text-danger');
            break;
        case 'contact':
            if (value) {
                classes.push('fa-door-closed text-muted')
            } else {
                classes.push('fa-door-open text-primary');
            }
            break;
        case 'occupancy':
            classes.push('fa-walking');
            if (value) {
                classes.push('text-warning');
            }
            break;

        case 'water_leak':
            classes.push('fa-water');
            if (value) {
                classes.push('text-primary');
            }
            break;
        default:
            classes = [...classes, ...(typeToClassMap[name] ?? [])];
            break;
    }
    if (!classes.length) {
        classes.push('invisible');
    }
    return classes.join(' ');
}

export const DashboardFeatureWrapper: FunctionComponent<PropsWithChildren<FetatureWrapperProps>> = (props) => {
    const { children, feature, deviceState = {} } = props;
    const icon = getGenericFeatureIcon(feature.name, deviceState[feature.property]);

    return <div className={styles.entity}>
        {icon && <div className={styles.icon}>
            <i className={`fa fa-fw ${icon}`} />
        </div>}
        <div className={styles.title}>{startCase(camelCase(feature.name))}{ feature.endpoint ? ` (${feature.endpoint})` : null}</div>
        <div className={styles.value}>{children}</div>
    </div>
}

