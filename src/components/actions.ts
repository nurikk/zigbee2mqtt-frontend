import { convertRawDevices } from "./convert";
import { Device } from "../types";
import { TimeInfo } from "./time";
import { encodeGetParams } from "../utils";
import { LogLevel } from "./log-viewer";
import { File } from "./tree-view";

export interface ApiResponse<T> {
    success: boolean;
    result: T;
}
type CallbackHandler<T> = (err: boolean, res: T) => void;

export const fetchZigbeeDevicesList = (callback: CallbackHandler<Device[]>): void => {
    fetch("/api/zigbee/devices")
        .then((res) => res.json())
        .then(data => callback(false, convertRawDevices(data)))
        .catch(e => callback(true, e));
};

export const fetchTimeInfo = (callback: CallbackHandler<TimeInfo>): void => {
    fetch("/api/time")
        .then((res) => res.json())
        .then(data => callback(false, data))
        .catch(e => callback(true, e));
};

export const renameDevice = (old: string, newName: string, callback: CallbackHandler<unknown>): void => {
    fetch(`/api/zigbee/rename?${encodeGetParams({ old, new: newName })}`)
        .then((res) => res.json())
        .then(data => callback(false, data))
        .catch(e => callback(true, e));
};

export const removeDevice = (dev: string, callback: CallbackHandler<unknown>): void => {
    fetch(`/api/zigbee/remove?${encodeGetParams({ dev })}`)
        .then((res) => res.json())
        .then(data => callback(false, data))
        .catch(e => callback(true, e));
};

export const startInterview = (address: string, callback: CallbackHandler<unknown>): void => {
    fetch(`/zigbee?${encodeGetParams({ intstart: address })}`)
        .then((res) => res.blob())
        .then(data => callback(false, data))
        .catch(e => callback(true, e));
};

export const enableJoin = (duration = 255, target = "", callback: CallbackHandler<unknown>): void => {
    fetch(`/api/zigbee/join?${encodeGetParams({ duration, target })}`)
        .then((res) => res.json())
        .then(data => callback(false, data))
        .catch(e => callback(true, e));
};


export const clearLogsBuffer = (callback: CallbackHandler<unknown>): void => {
    fetch(`/api/log?action=clear`)
        .then((res) => res.json())
        .then(data => callback(false, data))
        .catch(e => callback(true, e));
};


export const fetchLogsBuffer = (callback: CallbackHandler<string[]>): void => {
    fetch(`/api/log?action=getBuffer`)
        .then((res) => res.text())
        .then(data => callback(false, data.split("\n")))
        .catch(e => callback(true, e));
};

export const setLogLevel = (logLevel: LogLevel, callback: CallbackHandler<unknown>): void => {
    fetch(`/api/log?action=setLevel&value=${logLevel}`)
        .then((res) => res.json())
        .then(data => callback(false, data))
        .catch(e => callback(true, e));
};

export const getCurrentLogLevel = (callback: CallbackHandler<unknown>): void => {
    fetch(`/api/log?action=getLevel`, { method: "POST" })
        .then((res) => res.json())
        .then(data => callback(false, data))
        .catch(e => callback(true, e));
};

export const getFilesList = (path: string, callback: CallbackHandler<ApiResponse<File[]>>): void => {
    fetch(`/api/files?${encodeGetParams({ path })}`)
        .then((res) => res.json())
        .then(data => callback(false, data))
        .catch(e => callback(true, e));
};


export const readFile = (path: string, callback: CallbackHandler<string>): void => {
    fetch(`/api/files?${encodeGetParams({ path })}`)
        .then((res) => res.text())
        .then(data => callback(false, data))
        .catch(e => callback(true, e));
};


export const evalCode = (code: string, callback: CallbackHandler<ApiResponse<string>>): void => {
    fetch(`/api/scripts?action=evalCode`, { method: "POST", body: code })
        .then((res) => res.json())
        .then(data => callback(false, data))
        .catch(e => callback(true, e));
};
