import genericDevice from '../../images/generic-zigbee-device.png';
import { Device } from '../../types';
import { sanitizeZ2MDeviceName } from '../../utils';

type ImageGeneratorFn = (device: Device) => string | undefined;
const z2mBasePath = 'https://www.zigbee2mqtt.io/images/devices/';

export const getZ2mDeviceImage = (device: Device): string =>
    `${z2mBasePath}${sanitizeZ2MDeviceName(device?.definition?.model)}.jpg`;
export const getZ2mDeviceImagePng = (device: Device): string =>
    `${z2mBasePath}${sanitizeZ2MDeviceName(device?.definition?.model)}.png`;
const getConverterDeviceImage = (device: Device): string | undefined => device.definition?.icon;

/* prettier-ignore */
export const AVAILABLE_GENERATORS: ImageGeneratorFn[] = [
    getConverterDeviceImage,
    getZ2mDeviceImagePng,
    getZ2mDeviceImage,
    () => genericDevice,
];
