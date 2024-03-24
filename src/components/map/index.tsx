import { GraphI, LinkI, NodeI, ZigbeeRelationship } from './types';
import { GlobalState } from '../../store';

import { Selection } from 'd3-selection';
import { ZoomTransform } from 'd3-zoom';

export interface MouseEventsResponderNode {
    onMouseOver?: (arg0: NodeI, el: SVGElement) => void;
    onMouseOut?: (arg0: NodeI, el: SVGElement) => void;
    onDblClick?: (arg0: NodeI, el: SVGElement) => void;
}

export interface MapState {
    selectedNode?: NodeI;
    width: number;
    height: number;
    visibleLinks: ZigbeeRelationship[];
    legendIsVisible: boolean;
}

const parentOrChild = [ZigbeeRelationship.NeigbhorIsAChild, ZigbeeRelationship.NeigbhorIsParent];
export const linkStrength = (d: LinkI) => {
    if (d.linkType === 'Router2Router') {
        return 1;
    }
    if (parentOrChild.includes(d.relationship)) {
        return 0.5;
    }

    return 0;
};
export const defaultVisibleRelationsLinks = [...parentOrChild, ZigbeeRelationship.NeigbhorIsASibling];
const baseDistance = 100;
const distancesMap = {
    BrokenLink: 5 * baseDistance,
    Router2Router: 2.5 * baseDistance,
    Coordinator2Router: 2.5 * baseDistance,
    Coordinator2EndDevice: baseDistance,
    EndDevice2Router: baseDistance,
};

export const getDistance = (d: LinkI): number => {
    return distancesMap[d.linkType] ?? 250;
};

const computeLink = (d: LinkI, transform: ZoomTransform): string => {
    const src = d.source;
    const dst = d.target;
    const [x1, y1] = transform.apply([src.x as number, src.y as number]);
    const [x2, y2] = transform.apply([dst.x as number, dst.y as number]);
    return `M ${x1} ${y1} L ${x2} ${y2}`;
};

type SelNode = Selection<SVGElement, NodeI, SVGElement, Record<string, unknown>>;
type SelLink = Selection<SVGElement, LinkI, SVGElement, Record<string, unknown>>;

type TickedParams = {
    transform: ZoomTransform;
    node: SelNode;
    link: SelLink;
    linkLabel: SelLink;
    links: LinkI[];
};

export const ticked = ({ transform, node, link, linkLabel, links }: TickedParams): void => {
    links.forEach((d) => {
        const [x1, y1] = transform.apply([d.source.x as number, d.source.y as number]),
            [x2, y2] = transform.apply([d.target.x as number, d.target.y as number]);

        (d as unknown as NodeI).x = (x2 + x1) / 2;
        (d as unknown as NodeI).y = (y2 + y1) / 2;
    });
    link.attr('d', (d) => computeLink(d, transform));
    linkLabel
        .attr('x', ({ source, target }) => transform.applyX(((source.x as number) + (target.x as number)) / 2))
        .attr('y', ({ source, target }) => transform.applyY(((source.y as number) + (target.y as number)) / 2));

    node.attr('transform', (d: NodeI) => {
        const imgXShift = 32 / 2;
        const imgYShift = 32 / 2;
        const [X, Y] = transform.apply([d.x as number, d.y as number]);
        return `translate(${X - imgXShift}, ${Y - imgYShift})`;
    });
};
type ProcessHighlightsParams = {
    networkGraph: GraphI;
    links: LinkI[];
    selectedNode?: NodeI;
    node: SelNode;
    link: SelLink;
    linkLabel: SelLink;
};
export const processHighlights = ({
    networkGraph,
    links,
    selectedNode,
    node,
    link,
    linkLabel,
}: ProcessHighlightsParams) => {
    const linkedByIndex = new Set<string>();
    networkGraph.nodes.forEach((n) => linkedByIndex.add(n.ieeeAddr + ',' + n.ieeeAddr));
    links.forEach((l) => linkedByIndex.add(l.source.ieeeAddr + ',' + l.target.ieeeAddr));

    const neighboring = (a: NodeI, b: NodeI): boolean => linkedByIndex.has(a.ieeeAddr + ',' + b.ieeeAddr);
    const computeOpacity = (l: LinkI) => (l?.source === selectedNode || l?.target === selectedNode ? 1 : 0.15);
    if (selectedNode) {
        node.style('opacity', (o: NodeI) => (neighboring(selectedNode, o) || neighboring(o, selectedNode) ? 1 : 0.15));
        link.style('stroke-opacity', computeOpacity);
        linkLabel.style('opacity', computeOpacity);
    } else {
        node.style('opacity', 1);
        link.style('stroke-opacity', 1);
        linkLabel.style('opacity', 1);
    }
};
export type PropsFromStore = Pick<
    GlobalState,
    'networkGraph' | 'networkGraphIsLoading' | 'deviceStates' | 'devices' | 'availability'
>;
