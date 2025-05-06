import React, { Fragment, FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Device, DeviceState } from '../../types';
import style from './style.module.css';
import { powerSourceTypeToTranslationKey } from './powerSourceTypeToTranslationKey';
import type { PowerSource } from '../../types';

interface PowerSourceOTAProps {
    device?: Device;
    deviceState?: DeviceState;
}

const PowerSourceOTA: FunctionComponent<PowerSourceOTAProps> = ({ device, deviceState, ...rest }) => {
    const { t } = useTranslation('ota');
    let source: PowerSource | undefined = undefined;

    if (device !== undefined) {
        source = device.power_source;
    }

    if (source !== 'Battery') {
        return null;
    }

    let batteryPercent: number | undefined = undefined;
    let batteryState: string | undefined = undefined;
    let batteryLow: boolean | undefined = undefined;

    if (deviceState !== undefined) {
        if (deviceState?.battery !== undefined) {
            batteryPercent = deviceState.battery as number;
        }
        if (deviceState?.battery_state !== undefined) {
            batteryState = deviceState.battery_state as string;
        }
        if (deviceState?.battery_low !== undefined) {
            batteryLow = deviceState.battery_low as boolean;
        }
    }

    // Some devices do not use the standardized feature `battery` to report power level.
    if (
        (batteryPercent !== undefined && batteryPercent <= 50) ||
        (batteryState !== undefined && batteryState === 'low') ||
        (batteryLow !== undefined && batteryLow === true)
    ) {
        return (
            <Fragment>
                <i title={t('ota:battery_low_upd')} className="fa fa-circle-exclamation text-danger ms-2" />
            </Fragment>
        );
    }
};

export default PowerSourceOTA;
