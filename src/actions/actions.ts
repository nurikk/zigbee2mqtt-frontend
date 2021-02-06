/* eslint-disable @typescript-eslint/no-unused-vars */

import { GlobalState } from "../store";
import { Store } from "unistore";

import { ReportingConfig } from "../types";
import api from "../api";
import { download } from "../utils";
import bridgeActions from "./BridgeApi";
import deviceActions from "./DeviceApi";
import groupActions from "./GroupsApi";
import stateActions from "./StateApi";
import otaActions from "./OtaApi";
import bindActions from "./BindApi";
import touchlinkActions from "./TouchlinkApi";

export interface UtilsApi {
    exportState(): Promise<void>;
}

export interface MapApi {
    networkMapRequest(): Promise<void>;
}
export interface ReportingApi {
    configureReport(device: string, config: ReportingConfig): Promise<void>;
}

const actions = (store: Store<GlobalState>): object => ({
    ...bridgeActions,
    ...deviceActions,
    ...groupActions,
    ...stateActions,
    ...otaActions,
    ...bindActions,
    ...touchlinkActions,

    networkMapRequest: (state): Promise<void> => {
        store.setState({ networkGraphIsLoading: true, networkGraph: { nodes: [], links: [] } });
        return api.send("bridge/request/networkmap", { type: "raw", routes: false });
    },

    exportState(state): Promise<void> {
        download(state, 'state.json');
        return Promise.resolve();
    },
    configureReport(state, device: string, config: ReportingConfig): Promise<void> {
        return api.send('bridge/request/device/configure_reporting', {
            id: device,
            ...config
        });
    }
});
export default actions;
