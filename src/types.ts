import { Named } from "./components/tree-view";

export type DeviceType = "EndDevice" | "Router" | "Coordinator";

export type Dictionary<V> = { [index: string]: V }

// :{"progress":27.3,"remaining":1203,"state":"updating"}
interface OTAState {
    state: "available" | "updating";
    progress: number;
    remaining: number;
}
export interface DeviceStats {
    battery: number;
    last_seen?: string;
    elapsed?: number;
    linkquality: number;
    update?: OTAState;
    [k: string]: string | number | boolean | OTAState;
}

export const inteviewsCount = 4;

export enum InterviewState {
    StateUnknown = -1,
    AnnouncementReceived = 0,
    DescriptionRecieved = 1,
    EndpointsRecieved = 2,
    ClustersRecieved = 3,
    ModelRecieved = 4
}


interface Interview {
    /** Last intreview timestamp */
    TS?: number;
    /**
     * 0 - получен анонс, запускает интервью
     * 1 - получено описание устройства
     * 2 - получено количествы активные эндпоинты
     * 3 - получены кластеры
     * 4- получена модель
     */
    State?: InterviewState;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export type Cluster = string;

export type Endpoint = string | number;

export enum DeviceSupportStatus {
    Unknown = 0,
    Supported = 1,
    UnSupported = 2
}





export interface Meta {
    revision: number;
    transportrev: number;
    product: number;
    majorrel: number;
    minorrel: number;
    maintrel: number;
}

export interface Coordinator {
    type: string;
    meta: Meta;
}

export interface Network {
    channel: number;
    pan_id: number;
    extended_pan_id: number[];
}
export interface Z2MConfig {
    [k: string]: unknown;
}
export interface BridgeConfig {
    version: string;
    commit: string;
    coordinator: Coordinator;
    network: Network;
    log_level: string;
    permit_join: boolean;

}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BridgeInfo {
    config: Z2MConfig;
    permit_join: boolean;
}





export type PowerSource = "Battery" | "Mains (single phase)";

/*

"date_code": "27/08/2020 07:00",
"definition": {
    "description": "[Air quality sensor](http://modkam.ru/?p=xxxx)",
    "model": "DIYRuZ_AirSense",
    "supports": "",
    "vendor": "DIYRuZ"
},

*/
export interface DeviceDefinition {
    description: string;
    model: string;
    supports: string;
    vendor: string;
}

export interface EndpointDescription {
    clusters: {
        input: Cluster[];
        output: Cluster[];
    };
};
export interface Device {
    ieee_address: string;
    type: DeviceType;
    network_address: number;
    model: string;



    friendly_name: string;
    power_source: PowerSource;

    // lastSeen: number;
    interviewing: boolean;
    interview_completed: boolean;
    software_build_id: number;
    supported: boolean;
    definition?: DeviceDefinition;
    date_code: string;
    endpoints: Dictionary<EndpointDescription>;
    bindings: BindRule[];
}


export interface FileDescriptor extends Named {
    name: string;
    size: number;
    is_dir: boolean;
}

export type ObjectType = "device" | "group";
export interface BindRule {
    isNew: boolean;
    clusters: Cluster[];
    source: {
        endpoint: Endpoint;
    };
    target: {
        id?: number;
        endpoint?: Endpoint;
        ieee_address?: string;
        type: "endpoint" | "group";
    };

}

export type SortDirection = "asc" | "desc";

export interface TouchLinkDevice {
    Channel: number;
    LinkQuality: number;
    PanId: number;
    TS: number;
    ieee_addr: string;
}
export interface TouchLinkScanApiResponse {
    TS: number;
    devices: TouchLinkDevice[];
    currentChannel: number;
}