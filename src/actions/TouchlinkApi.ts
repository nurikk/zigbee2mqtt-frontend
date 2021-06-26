import api from "../api";
import store from "../store";
import { TouchLinkDevice } from "../types";


export interface TouchlinkApi {
    touchlinkScan(): Promise<void>;
    touchlinkIdentify(device: TouchLinkDevice): Promise<void>;
    touchlinkReset(device: TouchLinkDevice): Promise<void>;
}

export default {
    touchlinkScan(state): Promise<void> {
        store.setState({ touchlinkScanInProgress: true, touchlinkDevices: [] });
        return api.send("bridge/request/touchlink/scan", { value: true });
    },
    touchlinkIdentify(state, device: Record<string, unknown>): Promise<void> {
        store.setState({ touchlinkIdentifyInProgress: true });
        return api.send("bridge/request/touchlink/identify", device);

    },
    touchlinkReset(state, device: Record<string, unknown>): Promise<void> {
        store.setState({ touchlinkResetInProgress: true });
        return api.send("bridge/request/touchlink/factory_reset", device);
    },
}
