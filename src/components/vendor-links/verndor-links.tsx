import React, { Fragment } from "react";
import { Device } from "../../types";
type VendorProps = {
  device: Device;
}


export const VendorLink: React.FunctionComponent<VendorProps> = (props: VendorProps) => {
  const { device } = props;
  if (device.supported) {
    const url = `https://www.zigbee2mqtt.io/information/supported_devices.html#${encodeURIComponent(device.definition?.vendor?.toLowerCase())}`;
    return <a target="_blank" rel="noopener noreferrer" href={url}>{device.definition?.vendor}</a>
  }
  return <Fragment>Unsupported</Fragment>;
}


export const ModelLink: React.FunctionComponent<VendorProps> = (props: VendorProps) => {
  const { device } = props;
  let url = 'https://www.zigbee2mqtt.io/how_tos/how_to_support_new_devices.html#how-to-support-new-devices';
  let title = 'Unsupported';
  if (device.supported) {
    const acnchor = [
      encodeURIComponent(device.definition?.vendor?.toLowerCase()),
      encodeURIComponent(device.definition?.model?.toLowerCase()),
    ].join('-');
    url = `https://www.zigbee2mqtt.io/devices/${encodeURIComponent(device.definition?.model)}.html#${acnchor}`;
    title = device.definition?.model;
  }
  return <a target="_blank" rel="noopener noreferrer" href={url}>{title}</a>
}
