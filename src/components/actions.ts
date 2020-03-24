import { convertRawDevices } from "./convert";
import { Device, Dictionary } from "../types";
import { TimeInfo } from "./time";
import { encodeGetParams } from "../utils";
import { LogLevel } from "./log-viewer";




// /api/zigbee/rename?old=X&new=Y

type CallbackHandler<T> = (err: unknown, res: T) => void;

export const fetchZigbeeDevicesList = (callback: CallbackHandler<Device[]>): void => {
    fetch("/api/zigbee/devices").then((res) => res.json()).then(data => callback(false, convertRawDevices(data)));
};

export const fetchTimeInfo = (callback: CallbackHandler<TimeInfo>): void => {
    fetch("/api/time").then((res) => res.json()).then(data => callback(false, data));
};

export const renameDevice = (old: string, newName: string, callback: CallbackHandler<unknown>): void => {
    fetch(`/api/zigbee/rename?${encodeGetParams({ old, new: newName })}`)
        .then((res) => res.json())
        .then(data => callback(false, data))
        .catch(e => console.error(e));
};

export const removeDevice = (dev: string, callback: CallbackHandler<unknown>): void => {
    fetch(`/api/zigbee/remove?${encodeGetParams({ dev })}`)
        .then((res) => res.json())
        .then(data => callback(false, data))
        .catch(e => console.error(e));
};

export const startInterview = (address: string, callback: CallbackHandler<unknown>): void => {
    fetch(`/zigbee?${encodeGetParams({ intstart: address })}`)
        .then((res) => res.blob())
        .then(data => callback(false, data))
        .catch(e => console.error(e));
};

export const enableJoin = (duration = 255, target = "", callback: CallbackHandler<unknown>): void => {
    fetch(`/api/zigbee/join?${encodeGetParams({ duration, target })}`)
        .then((res) => res.json())
        .then(data => callback(false, data))
        .catch(e => console.error(e));
};


export const clearLogsBuffer = (callback: CallbackHandler<unknown>): void => {
    fetch(`/api/log?action=clear`)
        .then((res) => res.json())
        .then(data => callback(false, data))
        .catch(e => console.error(e));
};


export const fetchLogsBuffer = (callback: CallbackHandler<string[]>): void => {
    fetch(`/api/log?action=getBuffer`)
        .then((res) => res.text())
        .then(data => callback(false, data.split("\n")))
        .catch(e => callback(true, undefined));
};

export const setLogLevel = (logLevel: LogLevel, callback: CallbackHandler<unknown>): void => {
    fetch(`/api/log?action=setLevel&value=${logLevel}`)
        .then((res) => res.json())
        .then(data => callback(false, data))
        .catch(e => console.error(e));
};

export const getCurrentLogLevel = (callback: CallbackHandler<unknown>): void => {
    fetch(`/api/log?action=getLevel`, {method: 'POST'})
        .then((res) => res.json())
        .then(data => callback(false, data))
        .catch(e => {
            console.log(e);
        });
};
