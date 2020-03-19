
export const genDeviceShortAddress = (deviceKey: string | number): string => {
    let num = deviceKey;
    if (typeof deviceKey == 'string') {
        num = parseInt(deviceKey, 10);
    }

    return `0x${(`0000${num.toString(16)}`).substr(-4).toUpperCase()}`;
}
export const genDeviceDetailsLink = (deviceKey: string | number): string => (`/zigbee?nwkAddr=${genDeviceShortAddress(deviceKey)}`)



/**
 * Returns an array with arrays of the given size.
 *
 * @param inputArr {Array} array to split
 * @param chunkSize {Integer} Size of every group
 */
export function chunkArray<T>(inputArr: T[], chunkSize: number): T[][] {

    const results = [];
    while (inputArr.length) {
        results.push(inputArr.splice(0, chunkSize));
    }
    return results;
}