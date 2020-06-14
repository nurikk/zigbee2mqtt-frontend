import { BindRule, Device } from "./types";
import { ApiResponse, callApi, CallbackHandler } from "./utils";
// import { LogLevel } from "./components/log-viewer";
// import { TimeInfo } from "./components/discovery/types";

export const fetchZigbeeDevicesList = (callback: CallbackHandler<Device[]>): Promise<void> => {
    return callApi("/api/zigbee/devices", "GET", {}, undefined, callback);
};

export const startInterview = (dev: string, state: number | "", callback: CallbackHandler<void>): Promise<void> => {
    return callApi("/api/zigbee", "POST", { dev, action: "setInterview", state }, undefined, callback);
};

export const enableJoin = (duration = 255, target = "", callback: CallbackHandler<ApiResponse<void>>): Promise<void> => {
    return callApi("/api/zigbee/join", "GET", { duration, target }, undefined, callback);
};
export const clearLogsBuffer = (callback: CallbackHandler<ApiResponse<void>>): Promise<void> => {
    return callApi("/api/messages-history", "POST", { action: "clear" }, undefined, callback);
};

export const fetchLogsBuffer = (callback: CallbackHandler<string>): Promise<void> => {
    return callApi("/api/messages-history", "GET", { action: "getBuffer" }, undefined, callback, "text");
};

// export const setLogLevel = (logLevel: LogLevel, callback: CallbackHandler<ApiResponse<void>>): Promise<void> => {
//     return callApi("/api/messages-history", "POST", { action: "setLevel", value: logLevel }, undefined, callback);
// };

// export const getCurrentLogLevel = (callback: CallbackHandler<ApiResponse<LogLevel>>): Promise<void> => {
//     return callApi("/api/messages-history", "GET", { action: "getLevel" }, undefined, callback);
// };

export const writeFile = (path: string, content: string, callback: CallbackHandler<ApiResponse<void>>): Promise<void> => {
    return callApi("/api/files", "POST", { path }, content, callback);
};
export const evalCode = (code: string, callback: CallbackHandler<ApiResponse<string>>): Promise<void> => {
    return callApi("/api/scripts", "POST", { action: "evalCode" }, code, callback);
};

export const getDeviceInfo = (dev: string, callback: CallbackHandler<Device>): Promise<void> => {
    return callApi("/api/zigbee/devices", "GET", { dev }, undefined, callback);
};
export const setState = (dev: string, name: string, value: unknown, callback: CallbackHandler<ApiResponse<void>>): Promise<void> => {
    return callApi("/api/zigbee", "POST", { dev, action: "setState", name, value }, undefined, callback);
};
export const setSimpleBind = (dev: string, name: string, value: unknown, callback: CallbackHandler<ApiResponse<void>>): Promise<void> => {
    return callApi("/api/zigbee", "POST", { dev, action: "setSimpleBind", name, value }, undefined, callback);
};
export const loadBindsList = (dev: string, callback: CallbackHandler<BindRule[]>): Promise<void> => {
    return callApi("/api/zigbee/bind", "GET", { action: "list", dev }, undefined, (err, response: BindRule[]) => {
        if (err) {
            callback(true, []);
        } else {
            callback(err, response.map((rule, idx) => ({ ...rule, id: idx })));
        }
    });
};




