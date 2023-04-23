import React from 'react';
import { useTranslation } from 'react-i18next';
import cx from 'classnames';
import { AvailabilityState, OnlineOrOffline } from '../../store';
import isString from 'lodash/isString';

export type AvailabilityStateProps = {
    availability: AvailabilityState;
    availabilityFeatureEnabled?: boolean;
    availabilityEnabledForDevice?: boolean;
    disabled: boolean;
};

export function Availability(props: AvailabilityStateProps): JSX.Element {
    const { t } = useTranslation(['avaliability']);
    const { availability, availabilityFeatureEnabled = true, availabilityEnabledForDevice = true, disabled } = props;

    let availabilityState: OnlineOrOffline;

    if (isString(availability)) {
        availabilityState = availability;
    } else {
        availabilityState = availability.state;
    }
    availabilityState = availabilityState.toLowerCase() as OnlineOrOffline;
    if (disabled) {
        return <span>{t('disabled')}</span>;
    } else if (availabilityFeatureEnabled && availabilityEnabledForDevice) {
        return (
            <span
                className={cx({
                    'text-danger animation-blinking': availabilityState === 'offline',
                    'text-success': availability === 'online',
                })}
            >
                {t(availabilityState)}
            </span>
        );
    } else {
        return (
            <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.zigbee2mqtt.io/guide/configuration/device-availability.html#availability-advanced-configuration"
            >
                {t('disabled')}
            </a>
        );
    }
}
