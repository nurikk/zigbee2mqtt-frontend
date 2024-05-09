import { FC, useEffect, useState } from 'react';
import { useRegisterEvents, useSetSettings, useSigma } from '@react-sigma/core';
import { EdgeType, NodeType } from './ZigbeeGraph';
import { ZigbeeRelationship } from './types';

type GraphEventsProps = {
    disableHoverEffect?: boolean;
    visibleLinks: ZigbeeRelationship[];
}
export const GraphEvents: FC<GraphEventsProps> = ({ disableHoverEffect, visibleLinks }) => {
    const registerEvents = useRegisterEvents();
    const sigma = useSigma();
    const setSettings = useSetSettings<NodeType, EdgeType>();
    const [draggedNode, setDraggedNode] = useState<string | null>(null);
    const [hoveredNode, setHoveredNode] = useState<string | null>(null);

    useEffect(() => {
        // Register the events
        registerEvents({
            enterNode: (event) => {
                setHoveredNode(event.node);
            },
            leaveNode: () => setHoveredNode(null),
            downNode: (e) => {
                setDraggedNode(e.node);
                sigma.getGraph().setNodeAttribute(e.node, 'highlighted', true);
            },
            // On mouse move, if the drag mode is enabled, we change the position of the draggedNode
            mousemovebody: (e) => {
                if (!draggedNode) return;
                // Get new position of node
                const pos = sigma.viewportToGraph(e);
                sigma.getGraph().setNodeAttribute(draggedNode, 'x', pos.x);
                sigma.getGraph().setNodeAttribute(draggedNode, 'y', pos.y);

                // Prevent sigma to move camera:
                e.preventSigmaDefault();
                e.original.preventDefault();
                e.original.stopPropagation();
            },
            // On mouse up, we reset the autoscale and the dragging mode
            mouseup: () => {
                if (draggedNode) {
                    setDraggedNode(null);
                    sigma.getGraph().removeNodeAttribute(draggedNode, 'highlighted');
                }
            },
            // Disable the autoscale at the first down interaction
            mousedown: () => {
                if (!sigma.getCustomBBox()) sigma.setCustomBBox(sigma.getBBox());
            },
        });
    }, [registerEvents, sigma, draggedNode, hoveredNode]);

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
                const disabledByHover = !disableHoverEffect && hoveredNode && !graph.extremities(edge).includes(hoveredNode);
                if (disabledByHover || !visibleLinks.includes(data.relationship)) {
                    newData.hidden = true;
                }
                return newData;
            },
        });
    }, [hoveredNode, setSettings, sigma, disableHoverEffect, visibleLinks]);
    return null;
};
