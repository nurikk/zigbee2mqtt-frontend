import React, { Fragment } from "react";
import { useTranslation } from "react-i18next";
import { Device } from "../../types";

type VendorProps = {
    device: Device;
    anchor?: string;
}
const normalizeModel = (model: string): string => {
    const find = '[/| |:]';
    const re = new RegExp(find, 'g');
    return model.replace(re, '_');
};

export const VendorLink: React.FunctionComponent<VendorProps> = (props: VendorProps) => {
    const { t } = useTranslation("zigbee");
    const { device } = props;
    if (device.supported && device.definition) {
        const url = `https://www.zigbee2mqtt.io/supported-devices/#v=${encodeURIComponent(device.definition.vendor)}`;
        return <a target="_blank" rel="noopener noreferrer" href={url}>{device.definition.vendor}</a>
    }
    return <Fragment>{t('unsupported')}</Fragment>;
}


export const ModelLink: React.FunctionComponent<VendorProps> = (props: VendorProps) => {
    const { device, anchor } = props;
    let url = 'https://www.zigbee2mqtt.io/advanced/support-new-devices/01_support_new_devices.html';
    let title = device.model_id;
    if (device.supported && device.definition) {
        const detailsAnchor = [
            encodeURIComponent(device.definition?.vendor?.toLowerCase()),
            encodeURIComponent(device.definition?.model?.toLowerCase()),
        ].join('-');
        url = `https://www.zigbee2mqtt.io/devices/${encodeURIComponent(normalizeModel(device.definition?.model))}.html#${encodeURIComponent(normalizeModel(anchor || detailsAnchor))}`;
        title = device.definition.model;
    }
    return <a target="_blank" rel="noopener noreferrer" href={url}>{title}</a>
}


export const OTALink: React.FunctionComponent<VendorProps> = (props: VendorProps) => {
    const { device } = props;
    let url = '';
    const title = device.software_build_id;

    switch (device?.definition?.vendor) {
        case "IKEA":
            url = `https://ww8.ikea.com/ikeahomesmart/releasenotes/releasenotes.html`
            break

        case "Philips":
            url = `https://www.philips-hue.com/en-us/support/release-notes/${device.definition?.exposes.find((feature) => feature.type === 'light') ? 'lamps' : 'accessories' }`
            break

        case "Ubisys":
            url = `https://www.ubisys.de/en/support/firmware/changelog-${device.definition?.model?.replace(/[-]/g, '').toLowerCase()}/`
            break
    }

    if (url != '') {
        return <a target="_blank" rel="noopener noreferrer" href={url}>{title}</a>
    } else {
        return <>{title}</>
    }
}
