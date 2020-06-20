import createStore from "unistore";
import devtools from "unistore/devtools";
// import graph from "./to4ko";
// import graph from "./hackercb";
const graph: GraphI = {
    links:[],
    nodes: []
};

import { BindRule, Device, FileDescriptor, TouchLinkScanApiResponse, Dictionary, DeviceStats, BridgeConfig } from "./types";
import { ApiResponse, isObject } from "./utils";
import { GraphI } from "./components/map/types";

export interface Settings {
    mqtt_host: string;
    mqtt_user: string;
    mqtt_topic_preffix: string;
    mqtt_password: string;

}
export interface Group {
    optimistic: boolean;
    devices: string[];
    friendly_name: string;
    ID: number;
}

export interface GlobalState {
    forceRender: number;
    isLoading: boolean;
    isError: boolean | string;
    device: Device | undefined;
    devices: Device[];
    deviceStates: Dictionary<DeviceStats>;
    bindRules: BindRule[];
    // time: TimeInfo | undefined;
    logs: string[];
    // logLevel: LogLevel;


    files: FileDescriptor[];
    executionResults: ApiResponse<string> | null;

    currentFileContent: string;
    currentFile: FileDescriptor;


    touchlinkResuts: TouchLinkScanApiResponse | null;
    touchlinkScanInProgress: boolean;


    networkGraph: GraphI;

    settings: Settings;

    groups: Group[];

    bridgeConfig: BridgeConfig;

}


let settings = {} as Settings;

try {
    settings = JSON.parse(localStorage.getItem('config'));
    if (!isObject(settings)) {
        settings = {} as Settings;
    }
} catch (e) {

}


const initialState: GlobalState = {
    settings,
    forceRender: Date.now(),
    device: undefined,
    isLoading: false,
    isError: false,
    devices: [],
    deviceStates: {},
    bindRules: [{} as BindRule],
    // time: undefined,
    logs: [],
    // logLevel: LogLevel.LOG_DEBUG,


    files: [],
    executionResults: null,
    currentFileContent: "",
    currentFile: null,
    touchlinkResuts: null,
    touchlinkScanInProgress: false,
    networkGraph: graph,
    groups: [],
    bridgeConfig: {} as BridgeConfig
};

const store = process.env.NODE_ENV === 'production' ? createStore(initialState) : devtools(createStore(initialState));

export default store;