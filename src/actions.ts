/* eslint-disable @typescript-eslint/no-unused-vars */


import { GlobalState } from "./store";
import { Store } from "unistore";

import { FileDescriptor, BindParams, Endpoint, Dictionary } from "./types";
import api from './api';




export interface Actions {
    setLoading(isLoading: boolean): Promise<void>;

    getDeviceInfo(dev: string): Promise<void>;

    getDeviceBinds(dev: string): Promise<void>;



    bindReqest(isBind: boolean, params: BindParams): Promise<void>;


    setBindRules(bindRules: BindParams[]): Promise<void>;


    setStateValue(dev: string, name: string, value: unknown): Promise<void>;



    setPermitJoin(permit: boolean): Promise<void>;








    renameDevice(old: string, newName: string): Promise<void>;
    removeDevice(dev: string, force: boolean): Promise<void>;
    refreshState(dev: string, name: string): Promise<void>;
    configureDevice(name: string): Promise<void>;


    touchlinkReset(): Promise<void>;
    // ZNPReset(): Promise<void>;

    checkOTA(deviceName: string): Promise<void>;
    updateOTA(deviceName): Promise<void>;


    networkMapRequest(): Promise<void>;

    createGroup(name: string): Promise<void>;
    removeGroup(name: string): Promise<void>;
    addDeviceToGroup(device: string, group: string): Promise<void>;
    removeDeviceFromGroup(device: string, group: string): Promise<void>;
}
const friendlyNameAndEnpoint = (friendlyName: string, endpoint: Endpoint): string => {
    if (endpoint) {
        return `${friendlyName}/${endpoint}`;
    }
    return friendlyName;
}

const actions = (store: Store<GlobalState>): object => ({
    setLoading(state, isLoading: boolean): void {
        store.setState({ isLoading });
    },

    removeBind: (state, params: BindParams): Promise<void> => {
        store.setState({ isLoading: true });
        return Promise.resolve();
    },
    bindReqest: (state, isBind: boolean, params: BindParams): Promise<void> => {
        store.setState({ isLoading: true });
        const bindParams: Dictionary<unknown> = {
            from: friendlyNameAndEnpoint(params.source.friendly_name, params.sourceEp),
            to: friendlyNameAndEnpoint(params.destination.friendly_name, params.destinationEp)
        };
        if (params.clusters && params.clusters.length) {
            bindParams.clusters = params.clusters;
        }
        if (isBind) {
            api.send("bridge/request/device/bind", bindParams)
        } else {
            api.send("bridge/request/device/unbind", bindParams)
        }

        return Promise.resolve();
    },

    setStateValue(state, dev: string, name: string, value: unknown): Promise<void> {
        api.send(`${dev}/set`, { [name]: value });
        return Promise.resolve();
    },


    setPermitJoin(state, permit = true): Promise<void> {
        store.setState({ isLoading: true });
        api.send('bridge/request/permit_join', { value: permit });
        return Promise.resolve();
    },

    renameDevice: (state, from: string, to: string): Promise<void> => {
        store.setState({ isLoading: true });
        api.send('bridge/request/device/rename', { from, to });
        return Promise.resolve();
    },
    removeDevice: (state, dev: string, force: boolean): Promise<void> => {
        store.setState({ isLoading: true });
        api.send('bridge/request/device/remove', { id: dev, force });
        return Promise.resolve();
    },

    configureDevice: (state, name: string): Promise<void> => {
        store.setState({ isLoading: true });
        api.send('bridge/request/device/configure', { id: name });
        return Promise.resolve();
    },

    networkMapRequest: (state): Promise<void> => {
        store.setState({ isLoading: true });
        api.send('bridge/request/networkmap', { type: "raw", routes: true });
        return Promise.resolve();
    },
    createGroup: (state, group: string): Promise<void> => {
        store.setState({ isLoading: true });
        api.send('bridge/request/group/add', group);
        return Promise.resolve();
    },

    removeGroup: (state, group: string): Promise<void> => {
        store.setState({ isLoading: true });
        api.send('bridge/request/group/remove', group);
        return Promise.resolve();
    },

    addDeviceToGroup: (state, device: string, group: string): Promise<void> => {
        store.setState({ isLoading: true });
        api.send('bridge/request/group/members/add', { group, device });
        return Promise.resolve();
    },

    removeDeviceFromGroup: (state, device: string, group: string): Promise<void> => {
        store.setState({ isLoading: true });
        api.send('bridge/request/group/members/remove', { device, group });
        return Promise.resolve();
    },

    touchlinkReset: (state): Promise<void> => {
        store.setState({ isLoading: true });
        api.send('bridge/request/touchlink/factory_reset', '');
        return Promise.resolve();
    },
    // ZNPReset: (state): Promise<void> => {
    //     store.setState({ isLoading: true });
    //     api.send('bridge/config/reset', '');
    //     return Promise.resolve();
    // },


    checkOTA: (state, deviceName: string): Promise<void> => {
        api.send('bridge/request/device/ota_update/check', { id: deviceName });
        return Promise.resolve();
    },
    updateOTA: (state, deviceName: string): Promise<void> => {
        api.send('bridge/request/device/ota_update/update', { id: deviceName });
        return Promise.resolve();
    }
});
export default actions;
