import React from "react";
import { useTranslation } from "react-i18next";
import cx from "classnames";
import { OnlineOrOffline } from "../../store";


export type AvaliabilityStateProps = {
    avaliability: OnlineOrOffline;
    availabilityFeatureEnabled?: boolean;
    avalilabilityEnabledForDevice?: boolean;
}

export function Avaliability(props: AvaliabilityStateProps) {
    const { t } = useTranslation(["avaliability"]);
    const { avaliability, availabilityFeatureEnabled = true, avalilabilityEnabledForDevice = true } = props;
    if (availabilityFeatureEnabled && avalilabilityEnabledForDevice) {
        return <span className={cx({
            "text-danger animation-blinking": avaliability === "offline",
            'text-success': avaliability === "online"
        })}>{t(avaliability)}</span>;
    } else {
        return <a target="_blank" rel="noopener noreferrer"
            href="https://www.zigbee2mqtt.io/guide/configuration/device-availability.html#availability-advanced-configuration">{t('disabled')}</a>;
    }

}
