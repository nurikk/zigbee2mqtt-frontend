import { Device, Dictionary } from "../types";

export const convertRawDevices = (devices: Dictionary<Device>): Device[] => {
    return Object.entries(devices).map(([nwkAddr, device]) => ({
        ...device,
        nwkAddr
    }));
}