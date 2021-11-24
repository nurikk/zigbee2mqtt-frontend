import api from "../api";
import { Device } from "../types";

export interface BridgeApi {
    setPermitJoin(permit: boolean, device: Device): Promise<void>;
    updateBridgeConfig(options: unknown): Promise<void>;
    restartBridge(): Promise<void>;
}


export default {
    setPermitJoin(_state, permit = true, device?: Device, time = 254): Promise<void> {
        return api.send("bridge/request/permit_join", { value: permit, time, device: device?.friendly_name });
    },
    updateBridgeConfig(_state, options: unknown): Promise<void> {
        return api.send('bridge/request/options', { options });
    },
    restartBridge(_state): Promise<void> {
        return api.send('bridge/request/restart', {});
    },
}
