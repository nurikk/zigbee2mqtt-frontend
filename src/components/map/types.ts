import { SimulationNodeDatum ,SimulationLinkDatum } from 'd3-force';

export interface NodeI extends SimulationNodeDatum {
    id: string;
    name: string;
    device: Device;
}
export type LinkType =
    | 'Router2Coordinator'
    | 'Router2Router'
    | 'EndDevice2Coordinator'
    | 'EndDevice2Router';

export interface LinkI extends SimulationLinkDatum<NodeI> {
    linkQuality: number | undefined;
    type: LinkType;
}

export interface GraphI {
    nodes: NodeI[];
    links: LinkI[];
}

export interface TimeInfo {
    ntp_enable: boolean;
    ntp_server: string;
    tz: string;
    ts: number;
}

export enum DeviceType {
    EndDevice = 'EndDevice',
    Router = 'Router',
    Coordinator = 'Coordinator'
}

export type DeviceStats = {
    linkquality: number;
};

export type Device = {
    ieeeAddr?: string | undefined;
    last_seen: string | undefined;
    type?: DeviceType | undefined;
    ManufName?: string | undefined;
    ModelId?: string | undefined;
    st?: DeviceStats | undefined;
    friendly_name?: string | undefined;
    Rtg?: number[] | undefined;
};

export type Dictionary<V> = { [index: string]: V }