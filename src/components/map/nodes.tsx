import React, { Component, createRef, RefObject } from "react";
import { LinkI, NodeI } from "./types";
import cx from "classnames";
import style from "./map.css";
import { MouseEventsResponderNode } from ".";
import { Device } from "../../types";
import DeviceImage from "../device-image";
import { Simulation } from "d3-force";
import { select, selectAll } from "d3-selection";
import { drag } from "d3-drag";


const calcStarPoints = (
    centerX: number,
    centerY: number,
    innerCircleArms: number,
    innerRadius: number,
    outerRadius: number
): string => {
    const angle = Math.PI / innerCircleArms;
    const angleOffsetToCenterStar = 60;
    const totalArms = innerCircleArms * 2;
    let points = "";
    for (let i = 0; i < totalArms; i++) {
        const isEvenIndex = i % 2 == 0;
        const r = isEvenIndex ? outerRadius : innerRadius;
        const currX = centerX + Math.cos(i * angle + angleOffsetToCenterStar) * r;
        const currY = centerY + Math.sin(i * angle + angleOffsetToCenterStar) * r;
        points += `${currX}, ${currY} `;
    }
    return points;
};


export const getStarShape = (innerCircleArms: number, styleStarWidth: number, innerOuterRadiusRatio: number): string => {
    return calcStarPoints(
        15,
        15,
        innerCircleArms,
        styleStarWidth,
        innerOuterRadiusRatio
    );
};

interface NodeProps extends MouseEventsResponderNode {
    node: NodeI;
}

const offlineTimeout = 3600 * 2;

export const isOnline = (device: Device): boolean => {

    return true; //Date.now() - device.lastSeen < offlineTimeout;
};

class Node extends Component<NodeProps, {}> {
    ref = createRef<SVGPolygonElement | SVGCircleElement | SVGImageElement>();

    componentDidMount(): void {
        const { current } = this.ref;
        const { node } = this.props;
        select(current as SVGElement).data([node]);
    }

    onMouseOut = (): void => {
        const { node, onMouseOut } = this.props;
        onMouseOut && onMouseOut(node, this.ref.current);
    };

    onMouseOver = (): void => {
        const { node, onMouseOver } = this.props;
        onMouseOver && onMouseOver(node, this.ref.current);
    };

    onDblClick = (): void => {
        const { node, onDblClick } = this.props;
        onDblClick && onDblClick(node, this.ref.current);
    };

    render() {

        const { node } = this.props;
        const { onMouseOver, onMouseOut, onDblClick } = this;
        const deviceType = node.type as string;
        const cn = cx(style.node, style[deviceType]); //{ [style.offline]: !isOnline(node.device, time) }
        return (<g className={cn}
            ref={this.ref as RefObject<SVGImageElement>}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            onDoubleClick={onDblClick}
        >
            {
                node.type === "Coordinator" ? (
                    <polygon
                        points={getStarShape(5, 5, 14) as string}
                    />
                ) : (
                        <DeviceImage
                            type="svg"
                            width={32}
                            height={32}
                            device={node as unknown as Device}
                            className={`${style.img}`}
                        />
                    )
            }
            <text>{node.friendlyName}</text>

        </g>);

    }
}

interface NodesProps extends MouseEventsResponderNode {
    nodes: NodeI[];
    simulation: Simulation<NodeI, LinkI>;
}

type NodesState = {
    toggle: boolean;
}

export default class Nodes extends Component<NodesProps, NodesState> {
    state: Readonly<NodesState> = {
        toggle: false
    }
    updateDrag(): void {
        const { simulation } = this.props;
        const dragForce = drag<SVGCircleElement, NodeI>()
            .on("start", (event, d) => {
                if (!event.active) {
                    simulation.alphaTarget(0.3).restart();
                }
                d.fx = d.x;
                d.fy = d.y;
            })
            .on("drag", (event, d) => {
                d.fx = event.x;
                d.fy = event.y;
            })
            .on("end", (event, d) => {
                if (!event.active) {
                    simulation.alphaTarget(0);
                }
                d.fx = undefined;
                d.fy = undefined;
            });


        selectAll<SVGCircleElement, NodeI>(`.${style.node}`)
            .call(dragForce);
    }

    componentDidMount(): void {
        this.updateDrag();
    }

    componentDidUpdate(): void {
        this.updateDrag();
    }

   

    render() {
        const { nodes, onMouseOut, onMouseOver } = this.props;
        return (
            <g className={style.nodes}>
                {nodes.map((node: NodeI) => (
                    <Node
                        onMouseOut={onMouseOut}
                        onMouseOver={onMouseOver}
                        key={node.ieeeAddr}
                        node={node}
                    />
                ))}
            </g>
        );
    }
}
