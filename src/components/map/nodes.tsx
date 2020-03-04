import {
    h,
    Component,
    createRef,
    ComponentChild,
    RefObject
} from 'preact';

import * as d3Shape from 'd3-shape';
import * as d3Drag from 'd3-drag';
import * as d3Force from 'd3-force';
import * as d3Selection from 'd3-selection';
import { NodeI, LinkI, Device, DeviceType, TimeInfo } from './types';
import cx from 'classnames';

import * as style from './map.css';
import { HoverableNode } from '.';

const getStarShape = (r1: number, r2: number): string | null => {
    const radialLineGenerator = d3Shape.lineRadial<[number, number]>();
    const radialpoints: [number, number][] = [
        [0, r1],
        [Math.PI * 0.2, r2],
        [Math.PI * 0.4, r1],
        [Math.PI * 0.6, r2],
        [Math.PI * 0.8, r1],
        [Math.PI * 1, r2],
        [Math.PI * 1.2, r1],
        [Math.PI * 1.4, r2],
        [Math.PI * 1.6, r1],
        [Math.PI * 1.8, r2],
        [Math.PI * 2, r1]
    ];
    return radialLineGenerator(radialpoints);
};
//TODO: figure how to forward ref to parent comp
// interface StarProps {
//     r1: number;
//     r2: number;
//     [k: string]: unknown;
// }
// const Star: FunctionalComponent<StarProps> = (props: StarProps) => {
//     const { r1, r2, forwardRef, ...rest } = props;
//     debugger;
//     const radialLineGenerator = d3Shape.lineRadial<[number, number]>();
//     const radialpoints: [number, number][] = [
//         [0, r1],
//         [Math.PI * 0.2, r2],
//         [Math.PI * 0.4, r1],
//         [Math.PI * 0.6, r2],
//         [Math.PI * 0.8, r1],
//         [Math.PI * 1, r2],
//         [Math.PI * 1.2, r1],
//         [Math.PI * 1.4, r2],
//         [Math.PI * 1.6, r1],
//         [Math.PI * 1.8, r2],
//         [Math.PI * 2, r1]
//     ];

//     return (
//         <path
//             ref={forwardRef}
//             {...rest}
//             d={radialLineGenerator(radialpoints) as string}
//         />
//     );
// };

interface NodeProps extends HoverableNode {
    node: NodeI;
    time: TimeInfo | undefined;
}

const offlineTimeout = 3600 * 2;

export const isOnline = (device: Device, timeInfo: TimeInfo | undefined): boolean => {
    if (!timeInfo || !device.last_seen) {
        return true;
    }
    return timeInfo.ts - parseInt(device.last_seen, 10) < offlineTimeout;
}

class Node extends Component<NodeProps, {}> {
    ref = createRef<SVGPathElement | SVGCircleElement>();

    componentDidMount(): void {
        const { current } = this.ref;
        const { node } = this.props;

        d3Selection
            .select(current as SVGElement)
            .data([node]);
    }


    onMouseOut = (): void => {
        const { node, onMouseOut } = this.props;
        onMouseOut && onMouseOut(node);
    }

    onMouseOver = (): void => {
        const { node, onMouseOver } = this.props;
        onMouseOver && onMouseOver(node);
    }
    onDblClick = (): void => {
        const { node, onDblClick } = this.props;
        onDblClick && onDblClick(node);
    }

    render(): ComponentChild {
        const { node, time } = this.props;
        const { onMouseOver, onMouseOut, onDblClick } = this;
        const deviceType = (node.device as Device).type as string;
        const mappedClas = style[deviceType];
        const cn = cx(style.node, mappedClas, {[style.offline]: !isOnline(node.device, time)});

        switch (node.device.type) {
            case DeviceType.Coordinator:
                return (
                    <path
                        className={cn}
                        ref={this.ref as RefObject<SVGPathElement>}
                        d={getStarShape(14, 5) as string}
                        onMouseOver={onMouseOver}
                        onMouseOut={onMouseOut}
                        onDblClick={onDblClick}
                    />
                );
            default:
                return (
                    <circle
                        onMouseOver={onMouseOver}
                        onMouseOut={onMouseOut}
                        onDblClick={onDblClick}
                        className={cn}
                        ref={this.ref as RefObject<SVGCircleElement>}
                        r={5}
                    />);
        }
    }
}
interface NodesProps extends HoverableNode {
    nodes: NodeI[];
    simulation: d3Force.Simulation<NodeI, LinkI>;
    time: TimeInfo | undefined;
}

interface NodesState {
    tooltipNode: NodeI | undefined;
}

export default class Nodes extends Component<NodesProps, NodesState> {
    updateDrag(): void {
        const { simulation } = this.props;
        const drag = d3Drag
            .drag<SVGCircleElement, NodeI>()
            .on('start', d => {
                if (!d3Selection.event.active) {
                    simulation.alphaTarget(0.3).restart();
                }
                d.fx = d.x;
                d.fy = d.y;
            })
            .on('drag', d => {
                d.fx = d3Selection.event.x;
                d.fy = d3Selection.event.y;
            })
            .on('end', d => {
                if (!d3Selection.event.active) {
                    simulation.alphaTarget(0);
                }
                d.fx = undefined;
                d.fy = undefined;
            });

        d3Selection
            .selectAll<SVGCircleElement, NodeI>(`.${style.node}`)
            .call(drag);
    }

    componentDidMount(): void {
        this.updateDrag();
    }
    componentDidUpdate(): void {
        this.updateDrag();
    }

    render(): ComponentChild {
        const { nodes, onMouseOut, onMouseOver, onDblClick, time } = this.props;
        return (
            <g className={style.nodes}>
                {nodes.map((node: NodeI, index: number) => (
                    <Node
                        time={time}
                        onMouseOut={onMouseOut}
                        onMouseOver={onMouseOver}
                        onDblClick={onDblClick}
                        key={index}
                        node={node}
                    />
                ))}
            </g>
        );
    }
}
