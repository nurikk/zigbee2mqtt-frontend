import createStore from "unistore";
import devtools from "unistore/devtools";


import { Device, TouchLinkScanApiResponse, Dictionary, DeviceStat, BridgeConfig, BridgeInfo } from "./types";
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

export interface GlobalState {
    forceRender: number;
    isLoading: boolean;
    isError: boolean | string;
    devices: Device[];
    deviceStates: Dictionary<DeviceStat>;
    touchlinkResuts: TouchLinkScanApiResponse | null;
    touchlinkScanInProgress: boolean;
    networkGraph: GraphI;
    groups: Group[];
    bridgeConfig: BridgeConfig;
    bridgeInfo: BridgeInfo;
}

const initialState: GlobalState = {
    forceRender: Date.now(),
    isLoading: false,
    isError: false,
    devices: [],
    deviceStates: {},
    touchlinkResuts: null,
    touchlinkScanInProgress: false,
    networkGraph: {
        links: [],
        nodes: []
    },
    groups: [],
    bridgeConfig: {} as BridgeConfig,
    bridgeInfo: {} as BridgeInfo
};

const store = process.env.NODE_ENV === 'production' ? createStore(initialState) : devtools(createStore(initialState));

export default store;