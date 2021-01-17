/* eslint-disable @typescript-eslint/no-unused-vars */

import { GlobalState } from "./store";
import { Store } from "unistore";

import { Cluster, Device, ReportingConfig, TouchLinkDevice } from "./types";
import api from "./api";
import { download } from "./utils";

export interface UtilsApi {
    exportState(): Promise<void>;
}

export interface TouchlinkApi {
    touchlinkScan(): Promise<void>;
    touchlinkIdentify(device: TouchLinkDevice): Promise<void>;
    touchlinkReset(device: TouchLinkDevice): Promise<void>;
}

export interface OtaApi {
    checkOTA(deviceName: string): Promise<void>;
    updateOTA(deviceName: string): Promise<void>;
}
export interface DeviceApi {
    renameDevice(
        old: string,
        newName: string,
        homeassistantRename: boolean
    ): Promise<void>;
    removeDevice(dev: string, force: boolean, block: boolean): Promise<void>;
    configureDevice(name: string): Promise<void>;

    setDeviceOptions(id: string, options: object): Promise<void>;
}

export interface StateApi {
    setStateValue(dev: string, name: string, value: unknown): Promise<void>;
    setDeviceState(dev: string, value: object): Promise<void>;
    getDeviceState(dev: string, value: object): Promise<void>;
}

export interface GroupsApi {
    createGroup(name: string, id?: number): Promise<void>;
    removeGroup(name: string): Promise<void>;
    addDeviceToGroup(device: string, group: string): Promise<void>;
    removeDeviceFromGroup(device: string, group: string): Promise<void>;
    renameGroup(oldName: string, newName: string): Promise<void>;
}
export interface BindApi {
    addBind(from: string, to: string, clusters: Cluster[]): Promise<void>;
    removeBind(from: string, to: string, clusters: Cluster[]): Promise<void>;
}
export interface BridgeApi {
    setPermitJoin(permit: boolean, device: Device): Promise<void>;
    updateConfigValue(name: string, value: unknown): Promise<void>;
    updateBridgeConfig(config: object): Promise<void>;
}
export interface MapApi {
    networkMapRequest(): Promise<void>;
}
export interface ReportingApi {
    configureReport(device: string, config: ReportingConfig): Promise<void>;
}

const actions = (store: Store<GlobalState>): object => ({
    addBind: (
        state,
        from: string,
        to: string,
        clusters: Cluster[]
    ): Promise<void> => {
        const bindParams = {
            from,
            to,
            clusters,
        };
        return api.send("bridge/request/device/bind", bindParams);
    },
    removeBind: (
        state,
        from: string,
        to: string,
        clusters: Cluster[]
    ): Promise<void> => {
        const bindParams = {
            from,
            to,
            clusters,
        };
        return api.send("bridge/request/device/unbind", bindParams);
    },

    setStateValue(
        state,
        dev: string,
        name: string,
        value: string | number | boolean
    ): Promise<void> {
        return api.send(`${dev}/set`, { [name]: value });
    },
    setDeviceState(state, dev: string, value: object) {
        return api.send(`${dev}/set`, value);
    },
    getDeviceState(state, dev: string, value: object) {
        return api.send(`${dev}/get`, value);
    },
    setPermitJoin(state, permit = true, device: Device): Promise<void> {
        return api.send("bridge/request/permit_join", { value: permit, device: device?.friendly_name });
    },

    renameDevice: (
        state,
        from: string,
        to: string,
        homeassistantRename: boolean
    ): Promise<void> => {
        return api.send("bridge/request/device/rename", {
            from,
            to,
            'homeassistant_rename': homeassistantRename,
        });
    },
    removeDevice: (
        state,
        dev: string,
        force: boolean,
        block: boolean
    ): Promise<void> => {
        return api.send("bridge/request/device/remove", { id: dev, force, block });
    },

    configureDevice: (state, name: string): Promise<void> => {
        return api.send("bridge/request/device/configure", { id: name });
    },

    setDeviceOptions: (state, id: string, options: object): Promise<void> => {
        return api.send("bridge/request/device/options", { id, options });
    },
    networkMapRequest: (state): Promise<void> => {
        store.setState({ networkGraphIsLoading: true, networkGraph: { nodes: [], links: [] } });
        return api.send("bridge/request/networkmap", { type: "raw", routes: false });
    },
    createGroup: (state, group: string, id: number): Promise<void> => {
        const payload = {
            'friendly_name': group
        };
        if (id) {
            payload['id'] = id;
        }
        return api.send("bridge/request/group/add", payload);
    },

    removeGroup: (state, group: string): Promise<void> => {
        return api.send("bridge/request/group/remove", { id: group });
    },

    addDeviceToGroup: (state, device: string, group: string): Promise<void> => {
        return api.send("bridge/request/group/members/add", { group, device });
    },

    removeDeviceFromGroup: (
        state,
        device: string,
        group: string
    ): Promise<void> => {
        return api.send("bridge/request/group/members/remove", { device, group });
    },
    renameGroup: (state, oldName: string, newName: string): Promise<void> => {
        return api.send("bridge/request/group/rename", { from: oldName, to: newName });
    },

    touchlinkScan(): Promise<void> {
        store.setState({ touchlinkScanInProgress: true, touchlinkDevices: [] });
        return api.send("bridge/request/touchlink/scan", { value: true });
    },
    touchlinkIdentify(state, device: TouchLinkDevice): Promise<void> {
        store.setState({ touchlinkIdentifyInProgress: true });
        return api.send("bridge/request/touchlink/identify", device);

    },
    touchlinkReset(state, device: TouchLinkDevice): Promise<void> {
        store.setState({ touchlinkResetInProgress: true });
        return api.send("bridge/request/touchlink/factory_reset", device);
    },

    checkOTA: (state, deviceName: string): Promise<void> => {
        return api.send("bridge/request/device/ota_update/check", { id: deviceName });
    },
    updateOTA: (state, deviceName: string): Promise<void> => {
        return api.send("bridge/request/device/ota_update/update", { id: deviceName });
    },
    updateConfigValue(state, name: string, value: unknown): Promise<void> {
        return api.send(`bridge/request/config/${name}`, { value });
    },
    updateBridgeConfig(state, config: object): Promise<void> {
        return api.send('bridge/request/options', config);
    },
    
    exportState(state): Promise<void> {
        download(state, 'state.json');
        return Promise.resolve();
    },
    configureReport(state, device: string, config: ReportingConfig): Promise<void> {
        return api.send('bridge/request/device/configure_reporting', {
            id: device,
            ...config
        });
    },
    setDeviceOption(state, id: string, name: string, value: unknown): Promise<void> {
        return api.send('bridge/request/device/options', {
            id,
            options: {
                [name]: value
            }
        });
    }
});
export default actions;
