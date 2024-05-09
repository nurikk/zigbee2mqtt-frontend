import { FC, useEffect } from 'react';

import { useLoadGraph, useRegisterEvents } from '@react-sigma/core';
import { useLayoutCircular } from '@react-sigma/layout-circular';
import { GraphI, ZigbeeRelationship } from './types';
import { MultiDirectedGraph } from 'graphology';
import { getDeviceImage } from '../device-image';
import { DEFAULT_EDGE_CURVATURE, indexParallelEdgesIndex } from '@sigma/edge-curve';
import { Devices } from '../../store';
import { Attributes } from 'graphology-types';

export type NodeType = {
    x: number;
    y: number;
    label: string;
    size: number;
    color?: string;
    highlighted?: boolean;
    image: string;
};
export type EdgeType = {
    label: string;
    weight: number;
} & Attributes;

export const ZigbeeGraph: FC<{
    networkGraph: GraphI;
    devices: Devices;
}> = ({ networkGraph, devices }) => {
    const registerEvents = useRegisterEvents<NodeType, EdgeType>();
    const loadGraph = useLoadGraph<NodeType, EdgeType>();
    const { assign: assignCircular } = useLayoutCircular();


    /**
     * When component mount
     * => load the graph
     */
    useEffect(() => {
        // Create & load the graph
        const graph = new MultiDirectedGraph<NodeType, EdgeType>();

        networkGraph.nodes.forEach((node) => {
            graph.addNode(node.ieeeAddr, {
                label: node.friendlyName as string,
                size: 25,
                x: Math.random(),
                y: Math.random(),
                image: getDeviceImage(devices[node.ieeeAddr]),
            });
        });

        // const links = networkGraph.links.filter((l) => visibleLinks.includes(l.relationship));
        networkGraph.links.forEach((link) => {
            const defaultEdgeParams = {
                forceLabel: true,
                type: 'curved',
                size: 2,
                relationship: link.relationship,
            };
            if (graph.hasNode(link.source.ieeeAddr) && graph.hasNode(link.target.ieeeAddr)) {
                graph.addEdge(link.source.ieeeAddr, link.target.ieeeAddr, {
                        ...defaultEdgeParams,
                        label: link.lqi + '',
                        weight: link.lqi,
                    });
            }
        });

        indexParallelEdgesIndex(graph, {
            edgeIndexAttribute: 'parallelIndex',
            edgeMaxIndexAttribute: 'parallelMaxIndex',
        });

        graph.forEachEdge((edge, { parallelIndex, parallelMaxIndex }) => {
            if (typeof parallelIndex === 'number') {
                graph.mergeEdgeAttributes(edge, {
                    type: 'curved',
                    curvature:
                        DEFAULT_EDGE_CURVATURE + (3 * DEFAULT_EDGE_CURVATURE * parallelIndex) / (parallelMaxIndex || 1),
                });
            } else {
                graph.setEdgeAttribute(edge, 'type', 'straight');
            }
        });

        loadGraph(graph);
        assignCircular();
    }, [assignCircular, loadGraph, registerEvents, networkGraph, devices]);

    /**
     * When component mount or hovered node change
     * => Setting the sigma reducers
     */


    return null;
};
