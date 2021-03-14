import React, { Fragment } from "react";
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
  const { device } = props;
  if (device.supported && device.definition) {
    const url = `https://www.zigbee2mqtt.io/information/supported_devices.html#${encodeURIComponent(normalizeModel(device.definition.vendor?.toLowerCase()))}`;
    return <a target="_blank" rel="noopener noreferrer" href={url}>{device.definition.vendor}</a>
  }
  return <Fragment>Unsupported</Fragment>;
}


export const ModelLink: React.FunctionComponent<VendorProps> = (props: VendorProps) => {
  const { device, anchor } = props;
  let url = 'https://www.zigbee2mqtt.io/how_tos/how_to_support_new_devices.html#how-to-support-new-devices';
  let title = device.model_id;
  if (device.supported && device.definition) {
    const detailsAcnchor = [
      encodeURIComponent(device.definition?.vendor?.toLowerCase()),
      encodeURIComponent(device.definition?.model?.toLowerCase()),
    ].join('-');
    url = `https://www.zigbee2mqtt.io/devices/${encodeURIComponent(normalizeModel(device.definition?.model))}.html#${encodeURIComponent(normalizeModel(anchor || detailsAcnchor))}`;
    title = device.definition.model;
  }
  return <a target="_blank" rel="noopener noreferrer" href={url}>{title}</a>
}
