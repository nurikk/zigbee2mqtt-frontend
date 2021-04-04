import api from "../api";
import { AttributeInfo } from "../components/device-page/dev-console";
import { Attribute, Cluster } from "../types";

export interface DeviceApi {
    renameDevice(
        old: string,
        newName: string,
        homeassistantRename: boolean
    ): Promise<void>;
    removeDevice(dev: string, force: boolean, block: boolean): Promise<void>;
    configureDevice(name: string): Promise<void>;

    setDeviceOptions(id: string, options: Record<string, unknown>): Promise<void>;

    readDeviceAttributes(id: string, cluster: Cluster, attrbutes: Attribute[], options: Record<string, unknown>): Promise<void>;
    writeDeviceAttributes(id: string, cluster: Cluster, attrbutes: AttributeInfo[], options: Record<string, unknown>): Promise<void>;
}


export default {
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


    readDeviceAttributes(state, id: string, cluster: Cluster, attributes: Attribute[], options: Record<string, unknown>): Promise<void> {
        return api.send(`${id}/set`, { read: { cluster, attributes, options } });
    },

    writeDeviceAttributes(state, id: string, cluster: Cluster, attributes: AttributeInfo[], options: Record<string, unknown>): Promise<void> {
        const payload = {};
        attributes.forEach(info => {
            payload[info.attribute] = info.value;
        })
        return api.send(`${id}/set`, { write: { cluster, payload, options } });
    }
}
