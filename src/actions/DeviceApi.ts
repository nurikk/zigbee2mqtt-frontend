import api from "../ws-client";
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

    generateExternalDefinition(friendlyNameOrIEEEAddress: FriendlyName | IEEEEAddress): Promise<void>;
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

    configureDevice: (_state, name: string): Promise<void> => {
        return api.send("bridge/request/device/configure", { id: name });
    },

    setDeviceOptions: (_state, id: string, options: Record<string, unknown>): Promise<void> => {
        return api.send("bridge/request/device/options", { id, options });
    },

    setDeviceDescription: (_state, id: string, description: string): Promise<void> => {
        return api.send("bridge/request/device/options", { id, options: { description } });
    },

    readDeviceAttributes(_state, id: FriendlyName | IEEEEAddress, endpoint: Endpoint, cluster: Cluster, attributes: Attribute[], options: Record<string, unknown>): Promise<void> {
        return api.send(`${toDeviceId(id, endpoint)}/set`, { read: { cluster, attributes, options } });
    },

    generateExternalDefinition(_state, id: FriendlyName | IEEEEAddress): Promise<void> {
        return api.send("bridge/request/device/generate_external_definition", { id });
    },

    writeDeviceAttributes(_state, id: FriendlyName | IEEEEAddress, endpoint: Endpoint, cluster: Cluster, attributes: AttributeInfo[], options: Record<string, unknown>): Promise<void> {
        const payload = {};
        attributes.forEach(info => {
            payload[info.attribute] = info.value;
        })
        return api.send(`${toDeviceId(id, endpoint)}/set`, { write: { cluster, payload, options } });
    },

    executeCommand(_state, friendlyNameOrIEEEAddress: FriendlyName | IEEEEAddress, endpoint: Endpoint, cluster: Cluster, command: unknown, payload: Record<string, unknown>): Promise<void> {
        return api.send(`${toDeviceId(friendlyNameOrIEEEAddress, endpoint)}/set`, { command: { cluster, command, payload } });
    }
}
