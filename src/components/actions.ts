import { convertRawDevices } from "./convert";
import { Device, Dictionary, FileDescriptor } from "../types";
import { TimeInfo } from "./time";
import { encodeGetParams } from "../utils";
import { LogLevel } from "./log-viewer";
import toastr from "toastr";

export interface ApiResponse<T> {
    success: boolean;
    result: T;
}

type CallbackHandler<T> = (err: boolean, res: T) => void;
type HttMethod = "GET" | "POST" | "DELETE";
type ContentType = "text" | "json" | "blob";

function callApi<T>(url: string, method: HttMethod, params: Dictionary<any>, payload: any, callback: CallbackHandler<T>, contentType: ContentType = "json"): void {
    fetch(`${url}?${encodeGetParams(params)}`, { method: method, body: payload })
        .then((res) => res[contentType]())
        .then(data => {
            callback(false, data);
        })
        .catch(e => {
            toastr.error(e);
            callback(e, undefined);
        });
}

export const fetchZigbeeDevicesList = (callback: CallbackHandler<Device[]>): void => {
    callApi("/api/zigbee/devices", "GET", {}, undefined, (err, response: Dictionary<Device>) => {
        callback(err, !err ? convertRawDevices(response) : undefined);
    });
};

export const fetchTimeInfo = (callback: CallbackHandler<TimeInfo>): void => {
    callApi("/api/time", "GET", {}, undefined, callback);
};

export const renameDevice = (old: string, newName: string, callback: CallbackHandler<ApiResponse<void>>): void => {
    callApi("/api/zigbee/rename", "GET", { old, new: newName }, undefined, callback);
};

export const removeDevice = (dev: string, callback: CallbackHandler<ApiResponse<void>>): void => {
    callApi("/api/zigbee/remove", "GET", { dev }, undefined, callback);
};

export const startInterview = (address: string, callback: CallbackHandler<unknown>): void => {
    callApi("/zigbee", "GET", { intstart: address }, undefined, callback, "blob");
};

export const enableJoin = (duration = 255, target = "", callback: CallbackHandler<ApiResponse<void>>): void => {
    callApi("/api/zigbee/join", "GET", { duration, target }, undefined, callback);
};


export const clearLogsBuffer = (callback: CallbackHandler<ApiResponse<void>>): void => {
    callApi("/api/log", "POST", { action: "clear" }, undefined, callback);
};

export const fetchLogsBuffer = (callback: CallbackHandler<string>): void => {
    callApi("/api/log", "GET", { action: "getBuffer" }, undefined, callback, "text");
};

export const setLogLevel = (logLevel: LogLevel, callback: CallbackHandler<ApiResponse<void>>): void => {
    callApi("/api/log", "POST", { action: "setLevel", value: logLevel }, undefined, callback);
};

export const getCurrentLogLevel = (callback: CallbackHandler<ApiResponse<LogLevel>>): void => {
    callApi("/api/log", "GET", { action: "getLevel" }, undefined, callback);
};

export const getFilesList = (path: string, callback: CallbackHandler<ApiResponse<FileDescriptor[]>>): void => {
    callApi("/api/files", "GET", { path }, undefined, callback);
};

export const writeFile = (path: string, content: string, callback: CallbackHandler<ApiResponse<void>>): void => {
    callApi("/api/files", "POST", { path }, content, callback);
};

export const readFile = (path: string, callback: CallbackHandler<string>): void => {
    callApi("/api/files", "GET", { path }, undefined, callback, "text");
};

export const deleteFile = (path: string, callback: CallbackHandler<ApiResponse<void>>): void => {
    callApi("/api/files", "DELETE", { path }, undefined, callback);
};

export const evalCode = (code: string, callback: CallbackHandler<ApiResponse<string>>): void => {
    callApi("/api/scripts", "POST", { action: "evalCode" }, code, callback);
};
