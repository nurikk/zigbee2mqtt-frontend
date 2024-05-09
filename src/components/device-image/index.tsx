import genericDevice from '../../images/generic-zigbee-device.png';
import { Device } from '../../types';
import { sanitizeDeviceName } from '../../utils';

type ImageGeneratorFn = (device: Device) => string;
const imagesBasePath = 'https://www.zigbee2mqtt.io/images/devices/';

export const getDeviceImage = (device: Device, direct = false): string => {
    if (device.type === 'Coordinator' && !direct) {
        return genericDevice;
    } else if (device.definition?.icon) {
        return device.definition.icon;
    } else {
        return `${imagesBasePath}${sanitizeDeviceName(device?.definition?.model)}.png`;
    }
};

/* prettier-ignore */
export const AVAILABLE_GENERATORS: ImageGeneratorFn[] = [
    getDeviceImage,
    () => genericDevice,
];
