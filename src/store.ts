import createStore from "unistore";
import devtools from "unistore/devtools";
const graph: GraphI = {
    links:[],
    nodes: []
};

import { Device, FileDescriptor, TouchLinkScanApiResponse, Dictionary, DeviceStats, BridgeConfig, BindParams } from "./types";
import { ApiResponse, isObject } from "./utils";
import { GraphI } from "./components/map/types";

export interface Settings {
    mqtt_host: string;
    mqtt_user: string;
    mqtt_topic_preffix: string;
    mqtt_password: string;

}


export interface GroupAddress {
    endpoint: number;
    ieee_address: string;
}
export interface Group {
    members: GroupAddress[];
    friendly_name: string;
    id: number;
}

export interface GlobalState {
    forceRender: number;
    isLoading: boolean;
    isError: boolean | string;
    devices: Device[];
    deviceStates: Dictionary<DeviceStats>;
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
    isLoading: false,
    isError: false,
    devices: [],
    deviceStates: {},
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