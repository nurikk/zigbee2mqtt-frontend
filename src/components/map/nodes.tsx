import React, { Component, createRef, RefObject } from "react";
import { LinkI, NodeI } from "./types";
import cx from "classnames";
import style from "./map.module.css";
import { MouseEventsResponderNode } from ".";
import { Device, DeviceState, FriendlyName } from "../../types";
import DeviceImage from "../device-image";
import { Simulation } from "d3-force";
import { select } from "d3-selection";
import { drag } from "d3-drag";
import { CSSTransition } from 'react-transition-group'; // ES6
import isEqual from "lodash/isEqual";
import { AvailabilityState, WithAvailability, WithDevices, WithDeviceStates } from "../../store";



export const getStarShape = (innerCircleArms: number, innerRadius: number, outerRadius: number): string => {
    const centerX = 15;
    const centerY = 15;

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

interface NodeProps extends MouseEventsResponderNode {
    node: NodeI;
    deviceState: DeviceState;
    device: Device;
    availability: AvailabilityState;
}


type NodeState = {
    hasBeenUpdated: boolean;
}
class Node extends Component<NodeProps, NodeState> {
    state: Readonly<NodeState> = {
        hasBeenUpdated: false
    }
    ref = createRef<SVGElement>();


    componentDidUpdate(prevProps: NodeProps) {
        const { deviceState: prevDeviceState } = prevProps;
        const { deviceState: currentDeviceState } = this.props;
        const statesAreEqual = isEqual(prevDeviceState, currentDeviceState);
        const { hasBeenUpdated } = this.state;

        if (statesAreEqual) {
            if (hasBeenUpdated) {
                this.setState({ hasBeenUpdated: false });
            }
        } else {
            this.setState({ hasBeenUpdated: true });
        }
    }

    componentDidMount(): void {
        const { current } = this.ref;
        const { node } = this.props;
        select(current as SVGElement).data([node]);
    }

    onMouseOut = (): void => {
        const { node, onMouseOut } = this.props;
        this.ref && this.ref.current && onMouseOut && onMouseOut(node, this.ref.current);
    };

    onMouseOver = (): void => {
        const { node, onMouseOver } = this.props;
        this.ref && this.ref.current && onMouseOver && onMouseOver(node, this.ref.current);
    };

    onDblClick = (): void => {
        const { node, onDblClick } = this.props;
        this.ref && this.ref.current && onDblClick && onDblClick(node, this.ref.current);
    };

    render() {
        const { hasBeenUpdated } = this.state;
        const { node, deviceState, device, availability } = this.props;
        const { onMouseOver, onMouseOut, onDblClick } = this;
        const deviceType = node.type as string;
        const cn = cx(style.node, style[deviceType], { [style.offline]: availability === "offline" })
        return (<g className={cn}
            ref={this.ref as RefObject<SVGImageElement>}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
            onDoubleClick={onDblClick}
        >

            {
                node.type === "Coordinator" ? (
                    <>
                        <circle cx={15} cy={16} r={24} fill={"#fff"} stroke={"blue"} strokeWidth={1} />
                        <polygon
                            stroke="blue"
                            strokeWidth={1}
                            points={getStarShape(5, 5, 14)}
                        />
                    </>
                ) : (
                    <>
                        <CSSTransition in={hasBeenUpdated} timeout={200} classNames="stroke-blink">
                            <circle data-foo={deviceState?.last_seen} cx={16} cy={17} r={24} fill={"#fff"} stroke={"blue"} strokeWidth={1} />
                        </CSSTransition>
                        <DeviceImage
                            type="svg"
                            width={32}
                            disabled={false} // Network map does never contain disabled devices
                            height={32}
                            device={device}
                            className={`${style.img}`}
                        />
                    </>
                )
            }
            <text x={45} y={25}>{node.friendlyName}</text>
        </g>);

    }
}

interface NodesProps extends MouseEventsResponderNode, WithAvailability, WithDevices, WithDeviceStates {
    root: SVGElement;
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
        const { simulation, root } = this.props;
        const dragForce = drag<SVGCircleElement, NodeI>()
            .on("start", (event, d) => {
                if (!event.active) {
                    simulation.alphaTarget(0.3).restart();
                }

                d.fx = d.x;
                d.fy = d.y;
            })
            .on("drag", ({ x, y }, d) => {
                d.fx = x;
                d.fy = y;
            })
            .on("end", (event, d) => {
                if (!event.active) {
                    simulation.alphaTarget(0);
                }
            });
        select(root).selectAll<SVGCircleElement, NodeI>(`.${style.node}`)
            .call(dragForce);
    }

    componentDidMount(): void {
        this.updateDrag();
    }

    componentDidUpdate(): void {
        this.updateDrag();
    }



    render(): JSX.Element {
        const { nodes, onMouseOut, onMouseOver, deviceStates, devices, availability } = this.props;
        return (
            <g className={style.nodes}>
                {nodes.map((node: NodeI) => (
                    <Node
                        onMouseOut={onMouseOut}
                        onMouseOver={onMouseOver}
                        key={node.ieeeAddr}
                        node={node}
                        deviceState={deviceStates[node.friendlyName as FriendlyName]}
                        device={devices[node.ieeeAddr]}
                        availability={availability[node.friendlyName as FriendlyName]}
                    />
                ))}
            </g>
        );
    }
}
