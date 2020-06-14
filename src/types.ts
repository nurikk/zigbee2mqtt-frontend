import { Named } from "./components/tree-view";

export type DeviceType = "EndDevice" | "Router" | "Coordinator";

export type Dictionary<V> = { [index: string]: V }

export interface DeviceStats {
    linkquality?: number;
    battery?: number;
    [k: string]: string | number| boolean;
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
export interface Cluster {

}

export interface Endpoint {
    "profId": string;
    "In"?: Dictionary<true>;
    "Out"?: Dictionary<true>;
    "devId": string;
}

export enum DeviceSupportStatus {
    Unknown = 0,
    Supported = 1,
    UnSupported = 2
}


export type PowerSource = "Battery" | "Mains (single phase)";

export interface Device {
    ieeeAddr: string;
    type: DeviceType;
    networkAddress: number;
    model: string;
    vendor: string;
    description: string;
    friendly_name: string;
    manufacturerID: number;
    manufacturerName: string;
    powerSource: PowerSource;
    modelID: string;
    hardwareVersion: number;
    softwareBuildID: number;
    dateCode: string;
    lastSeen: number;
}


export interface FileDescriptor extends Named {
    name: string;
    size: number;
    is_dir: boolean;
}


export interface BindRule extends Dictionary<string | number> {
    id?: number;
    DstnetworkAddress: string;
    ClusterId: number;
    SrcEp: number;
    DstEp: number;
}

export type SortDirection = "asc" | "desc";

export interface TouchLinkDevice {
    Channel: number;
    LinkQuality: number;
    PanId: number;
    TS: number;
    ieeeAddr: string;
}
export interface TouchLinkScanApiResponse {
    TS: number;
    devices: TouchLinkDevice[];
    currentChannel: number;
}