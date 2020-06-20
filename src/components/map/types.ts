import { SimulationLinkDatum, SimulationNodeDatum } from "d3-force";
import { DeviceType } from "../../types";

export interface NodeI extends SimulationNodeDatum {
    ieeeAddr: string;
    friendlyName?: string;
    type?: DeviceType;
    networkAddress: number;
    manufacturerName?: string;
    modelID?: string;
    failed?: string[];
    lastSeen?: number;
}

export type LinkType =
    "Coordinator2EndDevice" |
    "EndDevice2Coordinator" |

    "Coordinator2Router" |
    "Router2Coordinator" |

    "EndDevice2Router" |
    "Router2EndDevice" |

    "Router2Router" |

    "BrokenLink";

export interface Source {
    ieeeAddr: string;
    networkAddress: number;
}

export interface Target {
    ieeeAddr: string;
    networkAddress: number;
}
export enum ZigbeeRelationship {
    NeigbhorIsParent,
    NeigbhorIsAChild,
    NeigbhorIsASibling,
    NoneOfTheAbove,
    NeigbhorIsAFormerChild
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
    relationship: ZigbeeRelationship;
    linkType: LinkType;
    repeated?: boolean;
}

export interface GraphI {
    nodes: NodeI[];
    links: LinkI[];
}
