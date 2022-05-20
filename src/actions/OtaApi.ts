import api from "../ws-client";

export interface OtaApi {
    checkOTA(deviceName: string): Promise<void>;
    updateOTA(deviceName: string): Promise<void>;
}
export default {
    checkOTA: (state, deviceName: string): Promise<void> => {
        return api.send("bridge/request/device/ota_update/check", { id: deviceName });
    },
    updateOTA: (state, deviceName: string): Promise<void> => {
        return api.send("bridge/request/device/ota_update/update", { id: deviceName });
    },
}
