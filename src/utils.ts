
export const genDeviceShortAddress = (deviceKey: string | number): string => {
    let num = deviceKey;
    if (typeof deviceKey == 'string') {
        num = parseInt(deviceKey, 10);
    }
    return `0x${num.toString(16).toUpperCase()}`;
}
export const genDeviceDetailsLink = (deviceKey: string | number): string => (`/zigbee?nwkAddr=${genDeviceShortAddress(deviceKey)}`)