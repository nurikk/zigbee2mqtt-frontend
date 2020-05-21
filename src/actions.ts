/* eslint-disable @typescript-eslint/no-unused-vars */


import { GlobalState } from "./store";
import { Store } from "unistore";
import {
    fetchZigbeeDevicesList,
    getDeviceInfo,
    loadBindsList,
    setState,
    setSimpleBind,
    startInterview,
    fetchTimeInfo,
    enableJoin,
    fetchLogsBuffer,
    getCurrentLogLevel,
    clearLogsBuffer,
    setLogLevel,
    evalCode,
    writeFile,
} from "./legacy-actions";
import { BindRule, FileDescriptor, TouchLinkScanApiResponse } from "./types";
import { LogLevel } from "./components/log-viewer";
import WebsocketManager from "./websocket";
import orderBy from "lodash/orderBy";
import { ApiResponse, callApi } from "./utils";

export interface Actions {
    setLoading(isLoading: boolean): Promise<void>;

    getDeviceInfo(dev: string): Promise<void>;

    getDeviceBinds(dev: string): Promise<void>;

    getZigbeeDevicesList(showLoading: boolean): Promise<void>;

    removeBind(dev: string, bindRule: BindRule): Promise<void>;

    createBind(dev: string, bindRule: BindRule): Promise<void>;

    setBindRules(bindRules: BindRule[]): Promise<void>;


    setStateValue(dev: string, name: string, value: unknown): Promise<void>;
    setSimpleBindValue(dev: string, name: string, value: unknown): Promise<void>;

    startInterview(dev: string, state: number | ""): Promise<void>;

    fetchTimeInfo(): Promise<void>;

    setJoinDuration(duration: number, target: string): Promise<void>;
    fetchLogsBuffer(): Promise<void>;
    getCurrentLogLevel(): Promise<void>;
    clearLogs(): Promise<void>;
    clearLogsBuffer(): Promise<void>;
    setLogLevel(level: LogLevel): Promise<void>;

    setCurrentFileContent(content: string): Promise<void>;

    evalCode(code: string): Promise<void>;
    writeFile(fileName: string, content: string): Promise<void>;

    clearExecutionResults(): Promise<void>;

    getFilesList(path: string): Promise<void>;

    readFile(file: FileDescriptor): Promise<void>;
    deleteFile(file: FileDescriptor): Promise<void>;

    renameDevice(old: string, newName: string): Promise<void>;
    removeDevice(dev: string, force: boolean): Promise<void>;
    refreshState(dev: string, name: string): Promise<void>;

    touchlinkScan(): Promise<void>;
    touchlinkList(): Promise<void>;
    touchlinkIdentify(dev: string): Promise<void>;
    touchlinkRest(dev: string): Promise<void>;
}

const actions = (store: Store<GlobalState>): object => ({
    setLoading(state, isLoading: boolean): void {
        store.setState({ isLoading });
    },
    getDeviceInfo: async (state, dev: string): Promise<void> => {
        store.setState({ isLoading: true });
        await getDeviceInfo(dev, (err, device) => {
            store.setState({
                isError: err,
                isLoading: false,
                device
            });
        });
    },

    setBindRules(state, bindRules: BindRule[]): void {
        store.setState({ bindRules });
    },
    getDeviceBinds: async (state, dev: string): Promise<void> => {
        store.setState({ isLoading: true });
        await loadBindsList(dev, (err, bindRules: []) => {
            store.setState({
                isError: err,
                isLoading: false,
                bindRules: [{} as BindRule, ...bindRules]
            });
        })
    },
    getZigbeeDevicesList: (state, showLoading = true): Promise<void> => {
        showLoading && store.setState({ isLoading: true });
        return fetchZigbeeDevicesList((err, devices) => {
            store.setState({
                isError: err,
                isLoading: false,
                devices
            });
        });
    },

    removeBind: (state, dev: string, bindRule: BindRule): Promise<void> => {
        store.setState({ isLoading: true });
        return callApi("/api/zigbee/bind", "POST", { action: "unbind", dev, ...bindRule }, undefined, (err, response) => {
            store.setState({
                isError: err,
                isLoading: false
            });
        })
    },
    createBind: (state, dev: string, bindRule: BindRule): Promise<void> => {
        store.setState({ isLoading: true });
        return callApi("/api/zigbee/bind", "POST", { action: "bind", dev, ...bindRule }, undefined, (err, response) => {
            store.setState({
                isError: err,
                isLoading: false
            });
        });
    },


    setStateValue(state, dev: string, name: string, value: unknown): Promise<void> {
        store.setState({ isLoading: true });
        return setState(dev, name, value, (err, response) => {
            store.setState({
                isError: err,
                isLoading: false
            });
        });
    },
    setSimpleBindValue(state, dev: string, name: string, value: unknown): Promise<void> {
        store.setState({ isLoading: true });
        return setSimpleBind(dev, name, value, (err, response) => {
            store.setState({
                isError: err,
                isLoading: false
            });
        });
    },
    startInterview(state, dev: string, currentInterviewState: number | ""): Promise<void> {
        store.setState({ isLoading: true });
        return startInterview(dev, currentInterviewState, (err, response) => {
            store.setState({
                isError: err,
                isLoading: false
            });
        });
    },
    fetchTimeInfo(state): Promise<void> {
        return fetchTimeInfo((err, time) => {
            store.setState({ time });
        });
    },

    setJoinDuration(state, duration = 255, target = ""): Promise<void> {
        store.setState({ isLoading: true });
        return enableJoin(duration, target, (err, time) => {
            store.setState({ isLoading: false });
        });
    },
    async fetchLogsBuffer(state): Promise<void> {
        store.setState({ isLoading: true });
        await fetchLogsBuffer((err, logs) => {
            store.setState({
                isError: err,
                isLoading: false,
                logs: logs.split("\n")
            });
        })

        const wsManager = new WebsocketManager();
        wsManager.subscribe("log", (data) => {
            const { logs } = store.getState();
            const copyLogs = [...logs, data.payload as string];
            store.setState({ logs: copyLogs });
        });
    },
    getCurrentLogLevel(state): Promise<void> {
        store.setState({ isLoading: true });
        return getCurrentLogLevel((err, response) => {
            store.setState({
                isError: err,
                isLoading: false,
                logLevel: response.result
            });
        });
    },
    clearLogs(state): void {
        store.setState({ logs: [] });
    },
    clearLogsBuffer(state): Promise<void> {
        store.setState({ isLoading: true });
        return clearLogsBuffer((err, res) => {
            store.setState({
                isLoading: false,
                isError: err
            });
        });
    },
    setLogLevel(state, level: LogLevel): Promise<void> {
        store.setState({ isLoading: true });
        return setLogLevel(level, (err, res) => {
            store.setState({
                isLoading: false,
                isError: err
            });
        });
    },
    setCurrentFileContent(state, currentFileContent: string): void {
        store.setState({ currentFileContent });
    },
    evalCode(state, code): Promise<void> {
        store.setState({ isLoading: true });
        return evalCode(code, (err, res) => {
            store.setState({
                isLoading: false,
                isError: err,
                executionResults: res
            });
        });
    },
    clearExecutionResults(state): void {
        store.setState({ executionResults: null });
    },
    writeFile(state, path, content): Promise<void> {
        store.setState({ isLoading: true });
        return writeFile(path, content, (err, res) => {
            store.setState({
                isLoading: false,
                isError: err
            });
        });
    },
    async getFilesList(state, path: string): Promise<void> {
        store.setState({ isLoading: true });
        await callApi<ApiResponse<FileDescriptor[]>>("/api/files", "GET", { path }, undefined, (err, res) => {
            store.setState({
                isLoading: false,
                isError: err,
                files: orderBy(res.result, ["name"])
            });
        })
    },

    async readFile(state, file: FileDescriptor): Promise<void> {
        store.setState({ isLoading: true });
        await callApi<string>("/api/files", "GET", { path: file.name }, undefined, (err, response) => {
            store.setState({
                isLoading: false,
                isError: err,
                currentFileContent: response,
                currentFile: file
            });
        }, "text");
    },

    deleteFile(state, file: FileDescriptor): Promise<void> {
        store.setState({ isLoading: true });
        return callApi<void>("/api/files", "DELETE", { path: file.name }, undefined, (err, response) => {
            store.setState({
                isLoading: false,
                isError: err
            });
        });
    },
    renameDevice: (state, old: string, newName: string): Promise<void> => {
        store.setState({ isLoading: true });
        return callApi<ApiResponse<void>>("/api/zigbee/rename", "GET", { old, new: newName }, undefined, (err, res) => {
            store.setState({
                isLoading: false,
                isError: err
            });
        });
    },
    removeDevice: (state, dev: string, force: boolean): Promise<void> => {
        store.setState({ isLoading: true });
        const params = { dev };
        if (force) {
            params['force'] = 1;
        }
        return callApi<ApiResponse<void>>("/api/zigbee/remove", "DELETE", params, undefined, (err, res) => {
            store.setState({
                isLoading: false,
                isError: err
            });
        });
    },


    refreshState: (state, dev: string, name: string): Promise<void> => {
        store.setState({ isLoading: true });
        const params = {
            dev, name,
            action: 'getState'
        }
        return callApi<ApiResponse<void>>("/api/zigbee", "GET", params, undefined, (err, res) => {
            store.setState({
                isLoading: false,
                isError: err
            });
        });
    },

    touchlinkScan: (state): Promise<void> => {
        store.setState({ isLoading: true, touchlinkResuts: null });
        const params = {
            action: 'scan'
        };
        return callApi<ApiResponse<void>>("/api/zigbee/touchlink", "GET", params, undefined, (err, res) => {
            store.setState({
                touchlinkScanInProgress: true,
                isLoading: false,
                isError: err
            });
        });
    },

    touchlinkList: (state): Promise<void> => {
        store.setState({ isLoading: true });
        const params = {
            action: 'list'
        };
        return callApi<ApiResponse<TouchLinkScanApiResponse>>("/api/zigbee/touchlink", "GET", params, undefined, (err, { result }) => {
            store.setState({
                isLoading: false,
                isError: err,
                touchlinkScanInProgress: result.currentChannel !== 0,
                touchlinkResuts: result
            });
        });
    },

    touchlinkIdentify: (state, dev: string): Promise<void> => {
        store.setState({ isLoading: true });
        const params = {
            action: 'identify',
            dev
        };
        return callApi<ApiResponse<TouchLinkScanApiResponse>>("/api/zigbee/touchlink", "GET", params, undefined, (err, res) => {
            store.setState({
                isLoading: false,
                isError: err
            });
        });
    },
    touchlinkRest: (state, dev: string): Promise<void> => {
        store.setState({ isLoading: true });
        const params = {
            action: 'reset',
            dev
        };
        return callApi<ApiResponse<TouchLinkScanApiResponse>>("/api/zigbee/touchlink", "GET", params, undefined, (err, res) => {
            store.setState({
                isLoading: false,
                isError: err
            });
        });
    }
});
export default actions;
