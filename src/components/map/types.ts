import { SimulationLinkDatum, SimulationNodeDatum } from "d3-force";
import { DeviceType, DeviceDefinition } from "../../types";

export interface NodeI extends SimulationNodeDatum {
    ieeeAddr: string;
    friendlyName?: string;
    type: DeviceType;
    lastSeen?: number;
    definition?: DeviceDefinition;
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




export enum ZigbeeRelationship {
    NeigbhorIsParent,
    NeigbhorIsAChild,
    NeigbhorIsASibling,
    NoneOfTheAbove,
    NeigbhorIsAFormerChild
}

export interface LinkI extends SimulationLinkDatum<NodeI> {
    source: NodeI;
    target: NodeI;
    linkquality: number;
    linkqualities: number[];
    depth: number;
    routes: unknown[];
    lqi: number;
    relationship: ZigbeeRelationship;
    relationships: ZigbeeRelationship[];
    linkType: LinkType;
}

export interface GraphI {
    nodes: NodeI[];
    links: LinkI[];
}
