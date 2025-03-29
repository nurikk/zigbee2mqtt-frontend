import api from '../ws-client';

export interface OtaApi {
    checkOTA(deviceName: string): Promise<void>;
    scheduleOTA(deviceName: string): Promise<void>;
    unscheduleOTA(deviceName: string): Promise<void>;
    updateOTA(deviceName: string): Promise<void>;
}
export default {
    checkOTA: (state, deviceName: string): Promise<void> => {
        return api.send("bridge/request/device/ota_update/check", { id: deviceName });
    },
    scheduleOTA: (state, deviceName: string): Promise<void> => {
        return api.send("bridge/request/device/ota_update/schedule", { id: deviceName });
    },
    unscheduleOTA: (state, deviceName: string): Promise<void> => {
        return api.send("bridge/request/device/ota_update/unschedule", { id: deviceName });
    },
    updateOTA: (state, deviceName: string): Promise<void> => {
        return api.send("bridge/request/device/ota_update/update", { id: deviceName });
    },
}
