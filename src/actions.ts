/* eslint-disable @typescript-eslint/no-unused-vars */


import { GlobalState } from "./store";
import { Store } from "unistore";

import { BindRule, FileDescriptor } from "./types";
import api from './api';



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



    setPermitJoin(permit: boolean): Promise<void>;
    fetchLogsBuffer(): Promise<void>;
    // getCurrentLogLevel(): Promise<void>;
    clearLogs(): Promise<void>;
    clearLogsBuffer(): Promise<void>;
    // setLogLevel(level: LogLevel): Promise<void>;

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
    configureDevice(name: string): Promise<void>;


    touchlinkReset(): Promise<void>;
    ZNPReset(): Promise<void>;

    checkOTA(deviceName: string): Promise<void>;
    updateOTA(deviceName): Promise<void>;


    networkMapRequest(): Promise<void>;

    createGroup(name: string): Promise<void>;
    removeGroup(name: string): Promise<void>;
    addDeviceToGroup(device: string, group: string): Promise<void>;
    removeDeviceFromGroup(device: string, group: string): Promise<void>;
}

const actions = (store: Store<GlobalState>): object => ({
    setLoading(state, isLoading: boolean): void {
        store.setState({ isLoading });
    },


    getZigbeeDevicesList: (state, showLoading = true): Promise<void> => {
        // showLoading && store.setState({ isLoading: true });
        // api.send('bridge/config/devices/get', '');
        return Promise.resolve();
    },

    removeBind: (state, dev: string, bindRule: BindRule): Promise<void> => {
        store.setState({ isLoading: true });
        return Promise.resolve();
    },
    createBind: (state, dev: string, bindRule: BindRule): Promise<void> => {
        store.setState({ isLoading: true });
        return Promise.resolve();
    },


    setPermitJoin(state, permit = true): Promise<void> {
        store.setState({ isLoading: true });
        api.send('bridge/request/permit_join', {value: permit});
        return Promise.resolve();
    },


    renameDevice: (state, from: string, to: string): Promise<void> => {
        store.setState({ isLoading: true });
        api.send('bridge/request/device/rename', {from, to});
        return Promise.resolve();
    },
    removeDevice: (state, dev: string, force: boolean): Promise<void> => {
        store.setState({ isLoading: true });
        api.send('bridge/request/device/remove', {id: dev, force});
        return Promise.resolve();
    },


    configureDevice: (state, name: string): Promise<void> => {
        store.setState({ isLoading: true });
        api.send('bridge/request/device/configure', {id: name});
        return Promise.resolve();
    },

    networkMapRequest: (state): Promise<void> => {
        store.setState({ isLoading: true });
        api.send('bridge/request/networkmap', {type: "raw", routes: true});
        return Promise.resolve();
    },
    createGroup: (state, name: string): Promise<void> => {
        store.setState({ isLoading: true });
        api.send('bridge/request/group/add', name);
        return Promise.resolve();
    },

    removeGroup: (state, name: string): Promise<void> => {
        store.setState({ isLoading: true });
        api.send('bridge/config/remove_group', name);
        return Promise.resolve();
    },


    addDeviceToGroup: (state, device: string, group: string): Promise<void> => {
        store.setState({ isLoading: true });
        api.send('bridge/request/group/members/add', {group, device});
        return Promise.resolve();
    },

    removeDeviceFromGroup: (state, device: string, group: string): Promise<void> => {
        store.setState({ isLoading: true });
        api.send('bridge/request/group/members/remove', {device, group});
        return Promise.resolve();
    },


    touchlinkReset: (state): Promise<void> => {
        store.setState({ isLoading: true });
        api.send('bridge/request/touchlink/factory_reset', '');
        return Promise.resolve();
    },
    ZNPReset: (state): Promise<void> => {
        store.setState({ isLoading: true });
        api.send('bridge/config/reset', '');
        return Promise.resolve();
    },


    checkOTA: (state, deviceName: string): Promise<void> => {
        api.send('bridge/request/device/ota_update/check', {id: deviceName});
        return Promise.resolve();
    },
    updateOTA: (state, deviceName: string): Promise<void> => {
        api.send('bridge/request/device/ota_update/update', {id: deviceName});
        return Promise.resolve();
    }
});
export default actions;
