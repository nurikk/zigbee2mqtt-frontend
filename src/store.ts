import createStore from "unistore";
import devtools from "unistore/devtools";


import { Device, Dictionary, DeviceState, BridgeConfig, BridgeInfo, TouchLinkDevice } from "./types";
import { GraphI } from "./components/map/types";

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

export interface GlobalState {
    devices: Device[];
    deviceStates: Dictionary<DeviceState>;
    touchlinkDevices: TouchLinkDevice[];
    touchlinkScanInProgress: boolean;
    networkGraph: GraphI;
    networkGraphIsLoading: boolean;
    groups: Group[];
    bridgeConfig: BridgeConfig;
    bridgeInfo: BridgeInfo;
    logs: LogMessage[];
}

const initialState: GlobalState = {
    devices: [],
    deviceStates: {},
    touchlinkDevices: [],
    touchlinkScanInProgress: false,
    networkGraph: {
        links: [],
        nodes: []
    },
    networkGraphIsLoading: false,
    groups: [],
    bridgeConfig: {} as BridgeConfig,
    bridgeInfo: {} as BridgeInfo,
    logs: []
};

const store = process.env.NODE_ENV === 'production' ? createStore(initialState) : devtools(createStore(initialState));

export default store;