

type CallbackHandler = (err: unknown, res: unknown) => void;

export const fetchZibeeDevicesList = (callback: CallbackHandler): void => {
    fetch('/api/zigbee/devices').then((res) => res.json()).then(data => callback(false, data));
};

export const fetchTimeInfo = (callback: CallbackHandler): void => {
    fetch('/api/time').then((res) => res.json()).then(data => callback(false, data));
};

export const renameDevice = (address: string, newName: string, callback: CallbackHandler): void => {
    fetch(`/zigbee?rename=${address}&new=${encodeURIComponent(newName)}`).then((res) => res.blob()).then(data => callback(false, data));
};

export const removeDevice = (address: string, callback: CallbackHandler): void => {
    fetch(`/zigbee?remove=${address}`).then((res) => res.blob()).then(data => callback(false, data));
};

export const startInterview = (address: string, callback: CallbackHandler): void => {
    fetch(`/zigbee?intstart=${address}`).then((res) => res.blob()).then(data => callback(false, data));
};