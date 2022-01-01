import React from "react";
import { useTranslation } from "react-i18next";
import cx from "classnames";
import { OnlineOrOffline } from "../../store";


export type AvailabilityStateProps = {
    availability: OnlineOrOffline;
    availabilityFeatureEnabled?: boolean;
    availabilityEnabledForDevice?: boolean;
}

export function Availability(props: AvailabilityStateProps): JSX.Element {
    const { t } = useTranslation(["availability"]);
    const { availability, availabilityFeatureEnabled = true, availabilityEnabledForDevice = true } = props;
    if (availabilityFeatureEnabled && availabilityEnabledForDevice) {
        return <span className={cx({
            "text-danger animation-blinking": availability === "offline",
            'text-success': availability === "online"
        })}>{t(availability)}</span>;
    } else {
        return <a target="_blank" rel="noopener noreferrer"
            href="https://www.zigbee2mqtt.io/guide/configuration/device-availability.html#availability-advanced-configuration">{t('disabled')}</a>;
    }

}
