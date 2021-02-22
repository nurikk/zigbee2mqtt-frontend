import createStore from "unistore";
import devtools from "unistore/devtools";
import initialState from './initialState.txt';


import { Device, DeviceState, BridgeConfig, BridgeInfo, TouchLinkDevice, BridgeState } from "./types";
import { GraphI } from "./components/map/types";
import { deSerialize } from "./utils";

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

export type Extension = "string";
export interface GlobalState {
    devices: Map<string, Device>;
    deviceStates: Map<string, DeviceState>;
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
    extensionCode: { [key: string]: string };
};
const _store = createStore(deSerialize(initialState) as GlobalState);
const store = process.env.NODE_ENV === 'production' ?  _store : devtools(_store);

export default store;
