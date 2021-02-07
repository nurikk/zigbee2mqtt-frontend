import api from "../api";
import { Device } from "../types";

export interface BridgeApi {
    setPermitJoin(permit: boolean, device: Device): Promise<void>;
    updateBridgeConfig(options: object): Promise<void>;
    restartBridge(): Promise<void>;
}


export default {
    setPermitJoin(state, permit = true, device: Device): Promise<void> {
        return api.send("bridge/request/permit_join", { value: permit, device: device?.friendly_name });
    },
    updateBridgeConfig(state, options: object): Promise<void> {
        return api.send('bridge/request/options', { options });
    },
    restartBridge(state): Promise<void> {
        return api.send('bridge/request/restart', {});
    },
}
