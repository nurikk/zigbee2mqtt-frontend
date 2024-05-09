import { FC, useEffect, useState } from 'react';

import { useLoadGraph, useRegisterEvents, useSetSettings, useSigma } from '@react-sigma/core';
import { useLayoutCircular } from '@react-sigma/layout-circular';
import { GraphI, ZigbeeRelationship } from './types';
import { MultiDirectedGraph } from 'graphology';
import { getDeviceImage } from '../device-image';
import { DEFAULT_EDGE_CURVATURE, indexParallelEdgesIndex } from '@sigma/edge-curve';
import { Devices } from '../../store';
import { intersection } from 'lodash';

type NodeType = { x: number; y: number; label: string; size: number; color?: string; highlighted?: boolean };
type EdgeType = { label: string };

export const ZigbeeGraph: FC<{
    disableHoverEffect?: boolean;
    networkGraph: GraphI;
    devices: Devices;
    visibleLinks: ZigbeeRelationship[];
}> = ({ disableHoverEffect, networkGraph, devices, visibleLinks }) => {
    const sigma = useSigma<NodeType, EdgeType>();
    const registerEvents = useRegisterEvents<NodeType, EdgeType>();
    const setSettings = useSetSettings<NodeType, EdgeType>();
    const loadGraph = useLoadGraph<NodeType, EdgeType>();
    const { assign: assignCircular } = useLayoutCircular();
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    /**
     * When component mount
     * => load the graph
     */
    useEffect(() => {
        // Create & load the graph
        const graph = new MultiDirectedGraph();
        networkGraph.nodes.forEach((node) => {
            graph.addNode(node.ieeeAddr, {
                label: node.friendlyName,
                size: 25,
                x: Math.random(),
                y: Math.random(),
                image: getDeviceImage(devices[node.ieeeAddr]),
            });
        });
        const links = networkGraph.links.filter((l) => intersection(visibleLinks, l.relationships).length);
        links.forEach((link) => {
            const defaultEdgeParams = {
                // forceLabel: true,
                type: 'curved',
                size: 2,
            };
            link.linkqualities.forEach((lqi, idx) => {
                if (idx == 0) {
                    graph.addEdge(link.source.ieeeAddr, link.target.ieeeAddr, {
                        ...defaultEdgeParams,
                        label: lqi,
                        weight: lqi,
                    });
                } else {
                    graph.addEdge(link.target.ieeeAddr, link.source.ieeeAddr, {
                        ...defaultEdgeParams,
                        label: lqi,
                        weight: lqi,
                    });
                }
            });
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

        // Register the events
        registerEvents({
            enterNode: (event) => setHoveredNode(event.node),
            leaveNode: () => setHoveredNode(null),
        });
    }, [assignCircular, loadGraph, registerEvents, visibleLinks, networkGraph, devices]);

    /**
     * When component mount or hovered node change
     * => Setting the sigma reducers
     */
    useEffect(() => {
        setSettings({
            nodeReducer: (node, data) => {
                const graph = sigma.getGraph();
                const newData = { ...data, highlighted: data.highlighted || false, hidden: false };

                if (!disableHoverEffect && hoveredNode) {
                    if (node === hoveredNode || graph.neighbors(hoveredNode).includes(node)) {
                        newData.highlighted = true;
                    } else {
                        newData.hidden = true;
                    }
                }
                return newData;
            },
            edgeReducer: (edge, data) => {
                const graph = sigma.getGraph();
                const newData = { ...data, hidden: false };
                if (!disableHoverEffect && hoveredNode && !graph.extremities(edge).includes(hoveredNode)) {
                    newData.hidden = true;
                }
                return newData;
            },
        });
    }, [hoveredNode, setSettings, sigma, disableHoverEffect, networkGraph, devices, visibleLinks]);

    return null;
};
