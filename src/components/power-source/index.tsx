import React, { Fragment, FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import { Device, DeviceState, PowerSource as PowerSourceType } from '../../types';
import style from './style.module.css';

interface PowerSourceProps {
    device?: Device;
    deviceState?: DeviceState;
    showLevel?: boolean;
}

export const powerSourceTypeToTranslationKey = (source: PowerSourceType | undefined): string => {
    return (source + '')
        .toLowerCase()
        .replace(/\s/g, '_')
        .replace(/[^a-z0-9_]/g, '');
};

const PowerSource: FunctionComponent<PowerSourceProps> = ({ device, deviceState, showLevel, ...rest }) => {
    const { t } = useTranslation('zigbee');
    let source: string | undefined = undefined;

    if (device !== undefined) {
        source = device.power_source;
    }

    switch (source) {
        case 'Battery':
            let title = t(powerSourceTypeToTranslationKey(source));
            let batteryFormatted = '';
            let batteryClass = 'fa-question';
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
            if (batteryPercent !== undefined) {
                batteryFormatted = batteryPercent + '%';
                if (batteryPercent >= 85) {
                    batteryClass = 'fa-battery-full';
                } else if (batteryPercent >= 65) {
                    batteryClass = 'fa-battery-three-quarters';
                } else if (batteryPercent >= 40) {
                    batteryClass = 'fa-battery-half';
                } else if (batteryPercent >= 20) {
                    batteryClass = 'fa-battery-quarter';
                } else if (batteryPercent >= 10) {
                    batteryClass = `fa-battery-empty animation-blinking`;
                } else {
                    return (
                        <span className={`animation-blinking text-danger`} role="alert">
                            {batteryPercent}%
                        </span>
                    );
                }
            } else if (batteryState !== undefined) {
                batteryFormatted = batteryState;
                switch (batteryState) {
                    case 'high':
                        batteryClass = 'fa-battery-full';
                        break;
                    case 'medium':
                        batteryClass = 'fa-battery-half';
                        break;
                    case 'low':
                        batteryClass = 'fa-battery-empty animation-blinking';
                        break;
                }
            } else if (batteryLow !== undefined) {
                batteryFormatted = batteryLow ? 'LOW' : 'OK';
                batteryClass = batteryLow ? 'fa-battery-empty' : 'fa-battery-full';
            }
            // If battery warning triggered: add blink independent of power_level source.
            if (batteryLow === true) {
                batteryClass += ' animation-blinking text-danger';
            }

            if (batteryFormatted !== '') {
                title += `, ` + t(`power_level`) + `: ${batteryFormatted}`;
            }
            return (
                <Fragment>
                    {showLevel ? (
                        <span className="pe-2">
                            {t('battery')} {batteryFormatted}
                        </span>
                    ) : null}
                    <i className={`fa ${batteryClass}`} title={title} {...rest} />
                </Fragment>
            );

        case 'Mains (single phase)':
        case 'DC Source':
            return (
                <i
                    className={`fa fa-plug ${style.plug}`}
                    title={t(powerSourceTypeToTranslationKey(source))}
                    {...rest}
                />
            );
        default:
            return <i className={`fa fa-question`} title={source} {...rest} />;
    }
};

export default PowerSource;
