import createStore from "unistore";
import devtools from "unistore/devtools";

import { BindRule, Device, FileDescriptor, TouchLinkScanApiResponse, Dictionary, DeviceStats } from "./types";
// import { TimeInfo } from "./components/discovery/types";

import { ApiResponse, isObject } from "./utils";
import { GraphI } from "./components/map/types";

export interface Settings {
    mqtt_host: string;
    mqtt_user: string;
    mqtt_password: string;
    // [k: SettingsKey]: string;

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

}
// const toD3 = (device: NodeI): string[] => {
const toD3 = (inGraph: GraphI): GraphI => {
    const links = [];

    inGraph.links.forEach(link => {
        links.push({ ...link, ...{ source: link.sourceIeeeAddr, target: link.targetIeeeAddr } });
    });
    // debugger
    inGraph.links = links;
    console.log('inGraph', { ...inGraph });
    return inGraph;
};
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

    networkGraph: toD3({
        nodes: [{
            ieeeAddr: "0x00124b00194a233e",
            friendlyName: "Coordinator",
            type: "Coordinator",
            networkAddress: 0,
            failed: [],
            lastSeen: null
        }, {
            ieeeAddr: "0x00124b001fb1e013",
            friendlyName: "0x00124b001fb1e013",
            type: "EndDevice",
            networkAddress: 11958,
            manufacturerName: "modkam.ru",
            modelID: "DIYRuZ_FreePad",
            lastSeen: 1592111782724
        }, {
            ieeeAddr: "0x00124b0006335874",
            friendlyName: "0x00124b0006335874",
            type: "Router",
            networkAddress: 55028,
            manufacturerName: "modkam.ru",
            modelID: "DIYRuZ_Geiger",
            failed: ["lqi", "routingTable"],
            lastSeen: 1591500076580
        }, {
            ieeeAddr: "0x00158d0002c4a78f",
            friendlyName: "0x00158d0002c4a78f",
            type: "EndDevice",
            networkAddress: 34465,
            manufacturerName: "LUMI",
            modelID: "lumi.vibration.aq1",
            lastSeen: 1592119318256
        }, {
            ieeeAddr: "0x00158d0002fd0d07",
            friendlyName: "0x00158d0002fd0d07",
            type: "EndDevice",
            networkAddress: 39666,
            manufacturerName: "LUMI",
            modelID: "lumi.remote.b286acn01",
            lastSeen: 1592118332272
        }],
        links: [{
            source: {
                ieeeAddr: "0x00124b001fb1e013",
                networkAddress: 11958
            },
            target: {
                ieeeAddr: "0x00124b00194a233e",
                networkAddress: 0
            },
            linkquality: 87,
            depth: 1,
            routes: [],
            sourceIeeeAddr: "0x00124b001fb1e013",
            targetIeeeAddr: "0x00124b00194a233e",
            sourceNwkAddr: 11958,
            lqi: 87,
            relationship: 1
        }, {
            source: {
                ieeeAddr: "0x00124b0006335874",
                networkAddress: 55028
            },
            target: {
                ieeeAddr: "0x00124b00194a233e",
                networkAddress: 0
            },
            linkquality: 0,
            depth: 1,
            routes: [],
            sourceIeeeAddr: "0x00124b0006335874",
            targetIeeeAddr: "0x00124b00194a233e",
            sourceNwkAddr: 55028,
            lqi: 0,
            relationship: 1
        }, {
            source: {
                ieeeAddr: "0x00158d0002c4a78f",
                networkAddress: 34465
            },
            target: {
                ieeeAddr: "0x00124b00194a233e",
                networkAddress: 0
            },
            linkquality: 112,
            depth: 1,
            routes: [],
            sourceIeeeAddr: "0x00158d0002c4a78f",
            targetIeeeAddr: "0x00124b00194a233e",
            sourceNwkAddr: 34465,
            lqi: 112,
            relationship: 1
        }, {
            source: {
                ieeeAddr: "0x00158d0002fd0d07",
                networkAddress: 39666
            },
            target: {
                ieeeAddr: "0x00124b00194a233e",
                networkAddress: 0
            },
            linkquality: 113,
            depth: 1,
            routes: [],
            sourceIeeeAddr: "0x00158d0002fd0d07",
            targetIeeeAddr: "0x00124b00194a233e",
            sourceNwkAddr: 39666,
            lqi: 113,
            relationship: 1
        },

            // {
            //     source: {
            //         ieeeAddr: "0x086bd7fffe51e05e",
            //         networkAddress: 11850
            //     },
            //     target: {
            //         ieeeAddr: "0x00124b00194a233e",
            //         networkAddress: 0
            //     },
            //     linkquality: 0,
            //     depth: 255,
            //     routes: [],
            //     sourceIeeeAddr: "0x086bd7fffe51e05e",
            //     targetIeeeAddr: "0x00124b00194a233e",
            //     sourceNwkAddr: 11850,
            //     lqi: 0,
            //     relationship: 3
            // }, 
            // {
            //     source: {
            //         ieeeAddr: "0x000d6ffffe9a0f69",
            //         networkAddress: 57017
            //     },
            //     target: {
            //         ieeeAddr: "0x00124b00194a233e",
            //         networkAddress: 0
            //     },
            //     linkquality: 0,
            //     depth: 255,
            //     routes: [],
            //     sourceIeeeAddr: "0x000d6ffffe9a0f69",
            //     targetIeeeAddr: "0x00124b00194a233e",
            //     sourceNwkAddr: 57017,
            //     lqi: 0,
            //     relationship: 3
            // }

            // {
            //     source: {
            //         ieeeAddr: "0x0000000000000000",
            //         networkAddress: 48918
            //     },
            //     target: {
            //         ieeeAddr: "0x00124b00194a233e",
            //         networkAddress: 0
            //     },
            //     linkquality: 0,
            //     depth: 255,
            //     routes: [],
            //     sourceIeeeAddr: "0x0000000000000000",
            //     targetIeeeAddr: "0x00124b00194a233e",
            //     sourceNwkAddr: 48918,
            //     lqi: 0,
            //     relationship: 3
            // },

            // {
            //     source: {
            //         ieeeAddr: "0x00124b00193b054d",
            //         networkAddress: 0
            //     },
            //     target: {
            //         ieeeAddr: "0x00124b00194a233e",
            //         networkAddress: 0
            //     },
            //     linkquality: 0,
            //     depth: 255,
            //     routes: [],
            //     sourceIeeeAddr: "0x00124b00193b054d",
            //     targetIeeeAddr: "0x00124b00194a233e",
            //     sourceNwkAddr: 0,
            //     lqi: 0,
            //     relationship: 3
            // }
        ]
    })
};

const store = process.env.NODE_ENV === 'production' ? createStore(initialState) : devtools(createStore(initialState));

export default store;