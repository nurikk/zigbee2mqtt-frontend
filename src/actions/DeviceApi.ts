import api from "../api";
import { AttributeInfo } from "../components/device-page/dev-console";
import { Attribute, Cluster, Endpoint, FriendlyName, IEEEEAddress } from "../types";
import { toDeviceId } from "./actions";

export interface DeviceApi {
    renameDevice(
        old: string,
        newName: string,
        homeassistantRename: boolean
    ): Promise<void>;
    removeDevice(dev: string, force: boolean, block: boolean): Promise<void>;
    configureDevice(name: string): Promise<void>;

    setDeviceOptions(id: string, options: Record<string, unknown>): Promise<void>;
    setDeviceDescription(id: string, description: string): Promise<void>;

    readDeviceAttributes(friendlyNameOrIEEEAddress: FriendlyName | IEEEEAddress, endpoint: Endpoint, cluster: Cluster, attributes: Attribute[], options: Record<string, unknown>): Promise<void>;
    writeDeviceAttributes(friendlyNameOrIEEEAddress: FriendlyName | IEEEEAddress, endpoint: Endpoint, cluster: Cluster, attributes: AttributeInfo[], options: Record<string, unknown>): Promise<void>;
    executeCommand(friendlyNameOrIEEEAddress: FriendlyName | IEEEEAddress, endpoint: Endpoint, cluster: Cluster, command: unknown, payload: Record<string, unknown>): Promise<void>;
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

    setDeviceOptions: (state, id: string, options: Record<string, unknown>): Promise<void> => {
        return api.send("bridge/request/device/options", { id, options });
    },

    setDeviceDescription: (state, id: string, description: string): Promise<void> => {
        return api.send("bridge/request/device/options", { id, options: { description } });
    },

    readDeviceAttributes(state, id: FriendlyName | IEEEEAddress, endpoint: Endpoint, cluster: Cluster, attributes: Attribute[], options: Record<string, unknown>): Promise<void> {
        return api.send(`${toDeviceId(id, endpoint)}/set`, { read: { cluster, attributes, options } });
    },

    writeDeviceAttributes(state, id: FriendlyName | IEEEEAddress, endpoint: Endpoint, cluster: Cluster, attributes: AttributeInfo[], options: Record<string, unknown>): Promise<void> {
        const payload = {};
        attributes.forEach(info => {
            payload[info.attribute] = info.value;
        })
        return api.send(`${toDeviceId(id, endpoint)}/set`, { write: { cluster, payload, options } });
    },

    executeCommand(state, friendlyNameOrIEEEAddress: FriendlyName | IEEEEAddress, endpoint: Endpoint, cluster: Cluster, command: unknown, payload: Record<string, unknown>): Promise<void> {
        return api.send(`${toDeviceId(friendlyNameOrIEEEAddress, endpoint)}/set`, { command: { cluster, command, payload } });
    }
}
