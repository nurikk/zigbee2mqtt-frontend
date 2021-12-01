/* eslint-disable @typescript-eslint/no-unused-vars */

import { GlobalState } from "../store";
import { Store } from "unistore";

import { Endpoint, FriendlyName, IEEEEAddress, ReportingConfig } from "../types";
import api from "../api";
import { download, saveCurrentTheme } from "../utils";
import bridgeActions from "./BridgeApi";
import deviceActions from "./DeviceApi";
import groupActions from "./GroupsApi";
import stateActions from "./StateApi";
import otaActions from "./OtaApi";
import bindActions from "./BindApi";
import touchlinkActions from "./TouchlinkApi";
import extensionActions from "./ExtensionApi";
import sceneActions from "./SceneApi";
import { Theme } from "../components/theme-switcher";

export interface UtilsApi {
    exportState(): Promise<void>;
    clearLogs(): Promise<void>;
}

export interface MapApi {
    networkMapRequest(): Promise<void>;
}
export interface ReportingApi {
    configureReport(device: string, config: ReportingConfig): Promise<void>;
}
export interface ThemeActions {
    setTheme(theme: Theme): Promise<void>;
}


export const toDeviceId = (friendlyNameOrIEEEAddress: FriendlyName | IEEEEAddress, endpoint: Endpoint): string => {
    if (endpoint) {
        return `${friendlyNameOrIEEEAddress}/${endpoint}`;
    } else {
        return friendlyNameOrIEEEAddress;
    }
}

const actions = (store: Store<GlobalState>): Record<string, (state: GlobalState, ...rest: unknown[]) => Promise<void>> => ({
    ...bridgeActions,
    ...deviceActions,
    ...groupActions,
    ...stateActions,
    ...otaActions,
    ...bindActions,
    ...touchlinkActions,
    ...extensionActions,
    ...sceneActions,

    networkMapRequest: (state): Promise<void> => {
        store.setState({ networkGraphIsLoading: true, networkGraph: { nodes: [], links: [] } });
        return api.send("bridge/request/networkmap", { type: "raw", routes: false });
    },

    exportState(state): Promise<void> {
        download(state as unknown as Record<string, unknown>, 'state.json');
        return Promise.resolve();
    },
    configureReport(state, device: string, config: ReportingConfig): Promise<void> {
        return api.send('bridge/request/device/configure_reporting', {
            id: device,
            ...config
        });
    },
    setTheme(state, theme: Theme): Promise<void> {
        saveCurrentTheme(theme);
        store.setState({ theme });
        return Promise.resolve();
    },

    clearLogs(state): Promise<void> {
        store.setState({ logs: [] });
        return Promise.resolve();
    }
});
export default actions;
