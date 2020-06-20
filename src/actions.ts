/* eslint-disable @typescript-eslint/no-unused-vars */


import { GlobalState } from "./store";
import { Store } from "unistore";
import { sendMessage2Z2M } from './mqtt';
import { BindRule, FileDescriptor } from "./types";



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


    networkMapRequest(): Promise<void>;
    groupsRequest(): Promise<void>;
    createGroup(name: string): Promise<void>;
    removeGroup(name: string): Promise<void>;
    addDeviceToGroup(deviceName: string, groupName: string): Promise<void>;
    removeDeviceFromGroup(deviceName: string, groupName: string): Promise<void>;
}

const actions = (store: Store<GlobalState>): object => ({
    setLoading(state, isLoading: boolean): void {
        store.setState({ isLoading });
    },


    getZigbeeDevicesList: (state, showLoading = true): Promise<void> => {
        showLoading && store.setState({ isLoading: true });
        sendMessage2Z2M('bridge/config/devices/get', '');
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
        sendMessage2Z2M('bridge/config/permit_join', JSON.stringify(permit));
        return Promise.resolve();
    },


    renameDevice: (state, old: string, newName: string): Promise<void> => {
        store.setState({ isLoading: true });
        sendMessage2Z2M('bridge/config/rename', JSON.stringify({
            old, new: newName
        }));
        return Promise.resolve();
    },
    removeDevice: (state, dev: string, force: boolean): Promise<void> => {
        store.setState({ isLoading: true });

        if (force) {
            sendMessage2Z2M('bridge/config/force_remove', dev);
        } else {
            sendMessage2Z2M('bridge/config/remove', dev);
        }
        return Promise.resolve();
    },


    configureDevice: (state, name: string): Promise<void> => {
        store.setState({ isLoading: true });
        sendMessage2Z2M('bridge/configure', name);
        return Promise.resolve();
    },

    networkMapRequest: (state): Promise<void> => {
        store.setState({ isLoading: true });
        sendMessage2Z2M('bridge/networkmap', 'raw');
        return Promise.resolve();
    },

    groupsRequest: (state): Promise<void> => {
        store.setState({ isLoading: true });
        sendMessage2Z2M('bridge/config/groups', 'doesn’t matter');
        return Promise.resolve();
    },
    createGroup: (state, name: string): Promise<void> => {
        store.setState({ isLoading: true });
        sendMessage2Z2M('bridge/config/add_group', name);
        return Promise.resolve();
    },

    removeGroup: (state, name: string): Promise<void> => {
        store.setState({ isLoading: true });
        sendMessage2Z2M('bridge/config/remove_group', name);
        return Promise.resolve();
    },


    addDeviceToGroup: (state, deviceName: string, groupName: string): Promise<void> => {
        store.setState({ isLoading: true });
        sendMessage2Z2M(`bridge/group/${groupName}/add`, deviceName);
        return Promise.resolve();
    },

    removeDeviceFromGroup: (state, deviceName: string, groupName: string): Promise<void> => {
        store.setState({ isLoading: true });
        sendMessage2Z2M(`bridge/group/${groupName}/remove`, deviceName);
        return Promise.resolve();
    },


    touchlinkReset: (state): Promise<void> => {
        store.setState({ isLoading: true });
        sendMessage2Z2M('bridge/config/touchlink/factory_reset', '');
        return Promise.resolve();
    },
    ZNPReset: (state): Promise<void> => {
        store.setState({ isLoading: true });
        sendMessage2Z2M('bridge/config/reset', '');
        return Promise.resolve();
    }
 
});
export default actions;
