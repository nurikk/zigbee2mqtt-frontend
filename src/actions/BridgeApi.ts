import api from "../api";
import { Device } from "../types";

export interface BridgeApi {
    setPermitJoin(permit: boolean, device: Device): Promise<void>;
    updateConfigValue(name: string, value: unknown): Promise<void>;
    updateBridgeConfig(options: object): Promise<void>;
    restartBridge(): Promise<void>;
}


export default {
    setPermitJoin(state, permit = true, device: Device): Promise<void> {
        return api.send("bridge/request/permit_join", { value: permit, device: device?.friendly_name });
    },

    updateConfigValue(state, name: string, value: unknown): Promise<void> {
        return api.send(`bridge/request/config/${name}`, { value });
    },
    updateBridgeConfig(state, options: object): Promise<void> {
        return api.send('bridge/request/options', {options});
    },
    restartBridge(state): Promise<void> {
        return api.send('bridge/request/restart', {});
    },
}
