import { SimulationLinkDatum, SimulationNodeDatum } from "d3-force";

export interface NodeI extends SimulationNodeDatum {
    ieeeAddr: string;
    friendlyName?: string;
    type?: string;
    networkAddress: number;
    manufacturerName?: string;
    modelID?: string;
    failed?: string[];
    lastSeen?: number;
}

export type LinkType =
    | "Router2Coordinator"
    | "Router2Router"
    | "EndDevice2Coordinator"
    | "EndDevice2Router";


export interface Source {
    ieeeAddr: string;
    networkAddress: number;
}

export interface Target {
    ieeeAddr: string;
    networkAddress: number;
}


export interface LinkI extends SimulationLinkDatum<NodeI> {
    source: Source | string;
    target: Target | string;
    linkquality: number;
    depth: number;
    routes: unknown[];
    sourceIeeeAddr: string;
    targetIeeeAddr: string;
    sourceNwkAddr: number;
    lqi: number;
    relationship: number;
}

export interface GraphI {
    nodes: NodeI[];
    links: LinkI[];
}
