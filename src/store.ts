import createStore from "unistore";
import devtools from "unistore/devtools";

import { Device, DeviceState, BridgeConfig, BridgeInfo, TouchLinkDevice, BridgeState } from "./types";

import { GraphI } from "./components/map/types";
import { getCurrentTheme } from "./utils";
import { Theme } from "./components/theme-switcher";

import initialState from './initialState.json';

export interface GroupAddress {
    endpoint: number;
    ieee_address: string;
}

export interface Group {
    id: number;
    friendly_name: string;
    members: GroupAddress[];
}

export interface LogMessage {
    level: "error" | "info" | "warning";
    message: string;
}

export type Extension = {
    name: string;
    code: string;
};
export interface GlobalState {
    devices: Record<string, Device>;
    deviceStates: Record<string, DeviceState>;
    touchlinkDevices: TouchLinkDevice[];
    touchlinkScanInProgress: boolean;
    touchlinkIdentifyInProgress: boolean;
    touchlinkResetInProgress: boolean;
    networkGraph: GraphI;
    networkGraphIsLoading: boolean;
    groups: Group[];
    bridgeConfig: BridgeConfig;
    bridgeInfo: BridgeInfo;
    bridgeState: BridgeState;
    logs: LogMessage[];
    extensions: Extension[];
    theme: Theme;
}

const theme = getCurrentTheme();

(initialState as unknown as GlobalState).theme = theme;

const _store = createStore<GlobalState>(initialState as unknown as GlobalState);
const store = process.env.NODE_ENV === 'production' ?  _store : devtools(_store);

export default store;
