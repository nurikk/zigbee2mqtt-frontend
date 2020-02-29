import * as d3Force from "d3-force";

export interface NodeI extends d3Force.SimulationNodeDatum {
    id: string;
    device: Device;
    // x?: number;
    // y?: number;
}

// const a: SimulationNodeDatum;

export interface LinkI extends d3Force.SimulationLinkDatum<NodeI> {
    // source: string;
    // target: string;
    linkQuality: number | undefined;
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
    EndDevice = "EndDevice",
    Router = "Router",
    Coordinator = "Coordinator"
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
