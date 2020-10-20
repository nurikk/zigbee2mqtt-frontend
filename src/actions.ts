/* eslint-disable @typescript-eslint/no-unused-vars */

import { GlobalState } from "./store";
import { Store } from "unistore";

import { Cluster, Device, TouchLinkDevice } from "./types";
import api from "./api";

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
}

export interface StateApi {
    setStateValue(dev: string, name: string, value: unknown): Promise<void>;
    getStateValue(dev: string, name: string | string[]): Promise<void>;
    setDeviceState(dev: string, value: object): Promise<void>;
}

export interface GroupsApi {
    createGroup(name: string): Promise<void>;
    removeGroup(name: string): Promise<void>;
    addDeviceToGroup(device: string, group: string): Promise<void>;
    removeDeviceFromGroup(device: string, group: string): Promise<void>;
}
export interface BindApi {
    addBind(from: string, to: string, clusters: Cluster[]): Promise<void>;
    removeBind(from: string, to: string, clusters: Cluster[]): Promise<void>;
}
export interface BridgeApi {
    setPermitJoin(permit: boolean, device: Device): Promise<void>;
    updateConfigValue(name: string, value: unknown): Promise<void>;
}
export interface MapApi {
    networkMapRequest(): Promise<void>;
}

export interface LegacyApi {
    resetZnp(): Promise<void>;
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
        api.send("bridge/request/device/bind", bindParams);
        return Promise.resolve();
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
        api.send("bridge/request/device/unbind", bindParams);
        return Promise.resolve();
    },

    setStateValue(
        state,
        dev: string,
        name: string,
        value: string | number | boolean
    ): Promise<void> {
        api.send(`${dev}/set`, { [name]: value });
        return Promise.resolve();
    },
    setDeviceState( state, dev: string, value: object) {
        api.send(`${dev}/set`, value);
        return Promise.resolve();
    },

    getStateValue(state, dev: string, name: string | string[]): Promise<void> {
        const payload = {};
        if (typeof name === "string") {
            payload[name] = "";
        } else if (Array.isArray(name)) {
            name.forEach((n) => {
                payload[n] = "";
            });
        }
        api.send(`${dev}/get`, payload);
        return Promise.resolve();
    },

    setPermitJoin(state, permit = true, device: Device): Promise<void> {
        api.send("bridge/request/permit_join", { value: permit, device: device?.friendly_name });
        return Promise.resolve();
    },

    renameDevice: (
        state,
        from: string,
        to: string,
        homeassistantRename: boolean
    ): Promise<void> => {
        // eslint-disable-next-line @typescript-eslint/camelcase
        api.send("bridge/request/device/rename", {
            from,
            to,
            homeassistant_rename: homeassistantRename,
        });
        return Promise.resolve();
    },
    removeDevice: (
        state,
        dev: string,
        force: boolean,
        block: boolean
    ): Promise<void> => {
        api.send("bridge/request/device/remove", { id: dev, force, block });
        return Promise.resolve();
    },

    configureDevice: (state, name: string): Promise<void> => {
        api.send("bridge/request/device/configure", { id: name });
        return Promise.resolve();
    },

    networkMapRequest: (state): Promise<void> => {
        store.setState({ networkGraphIsLoading: true });
        api.send("bridge/request/networkmap", { type: "raw", routes: false });
        return Promise.resolve();
    },
    createGroup: (state, group: string): Promise<void> => {
        api.send("bridge/request/group/add", group);
        return Promise.resolve();
    },

    removeGroup: (state, group: string): Promise<void> => {
        api.send("bridge/request/group/remove", group);
        return Promise.resolve();
    },

    addDeviceToGroup: (state, device: string, group: string): Promise<void> => {
        api.send("bridge/request/group/members/add", { group, device });
        return Promise.resolve();
    },

    removeDeviceFromGroup: (
        state,
        device: string,
        group: string
    ): Promise<void> => {
        api.send("bridge/request/group/members/remove", { device, group });
        return Promise.resolve();
    },

    touchlinkScan(): Promise<void> {
        store.setState({ touchlinkScanInProgress: true, touchlinkDevices: [] });
        api.send("bridge/request/touchlink/scan", "");
        return Promise.resolve();
    },
    touchlinkIdentify(state, device: TouchLinkDevice): Promise<void> {
        store.setState({ touchlinkIdentifyInProgress: true });
        api.send("bridge/request/touchlink/identify", device);
        return Promise.resolve();
    },
    touchlinkReset(state, device: TouchLinkDevice): Promise<void> {
        store.setState({ touchlinkResetInProgress: true });
        api.send("bridge/request/touchlink/factory_reset", device);
        return Promise.resolve();
    },

    checkOTA: (state, deviceName: string): Promise<void> => {
        api.send("bridge/request/device/ota_update/check", { id: deviceName });
        return Promise.resolve();
    },
    updateOTA: (state, deviceName: string): Promise<void> => {
        api.send("bridge/request/device/ota_update/update", { id: deviceName });
        return Promise.resolve();
    },
    updateConfigValue(state, name: string, value: unknown): Promise<void> {
        api.send(`bridge/request/config/${name}`, value);
        return Promise.resolve();
    },

    resetZnp(state): Promise<void> {
        api.send(`bridge/config/reset`, "");
        return Promise.resolve();
    }
});
export default actions;
