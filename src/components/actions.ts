import { Device } from "./map/types";

type CallbackHandler = (err: unknown, res: unknown) => void;

export const fetchZibeeDevicesList = (callback: CallbackHandler): void => {
    fetch('/api/zigbee/devices').then((res) => res.json()).then(data => callback(false, data));
};

export const fetchTimeInfo = (callback: CallbackHandler): void => {
    fetch('/api/time').then((res) => res.json()).then(data => callback(false, data));
};

export const renameDevice = (device: Device, newName: string, callback: CallbackHandler): void => {
    fetch(`/zigbee?rename=0x${device.ieeeAddr}&new=${encodeURIComponent(newName)}`).then((res) => res.json()).then(data => callback(false, data));
};

export const startInterview = (device: Device, callback: CallbackHandler): void => {
    fetch(`/zigbee?intstart=0x${device.ieeeAddr}`).then((res) => res.json()).then(data => callback(false, data));
};