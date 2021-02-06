import api from "../api";

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
    }
}
