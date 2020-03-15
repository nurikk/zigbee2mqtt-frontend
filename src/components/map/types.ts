import { SimulationNodeDatum, SimulationLinkDatum } from 'd3-force';
import { Device } from '../../types';

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
