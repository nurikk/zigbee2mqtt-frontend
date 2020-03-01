/* eslint-disable react/display-name */
import {
    h,
    Component,
    createRef,
    ComponentChild
} from "preact";

import * as d3Shape from "d3-shape";
import * as d3Drag from "d3-drag";
import * as d3Force from "d3-force";
import * as d3Selection from "d3-selection";
import { NodeI, LinkI, Device, DeviceType } from "./types";
import cx from "classnames";
import * as style from "./map.css";

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

interface NodeProps {
    node: NodeI;
    color: string;
    onMouseOver?: (arg0: NodeI) => void;
    onMouseOut?: (arg0: NodeI) => void;
}

class Node extends Component<NodeProps, {}> {
    ref = createRef<SVGElement>();

    componentDidMount(): void {
        const { current } = this.ref;
        const { node } = this.props;

        d3Selection.select(current as SVGElement).data([node]);
    }

    render(): ComponentChild {
        const { node, onMouseOver, onMouseOut } = this.props;
        const deviceType = (node.device as Device).type as string;
        const mappedClas = style[deviceType] as string;
        const cn = cx(style.node, mappedClas);

        switch (node.device.type) {
            case DeviceType.Coordinator:
                return (
                    <path
                        className={cn}
                        ref={this.ref}
                        d={getStarShape(14, 5)}
                        onMouseOver={() => onMouseOver(node)}
                        onMouseOut={() => onMouseOut(node)}
                    />
                );
            default:
                return (
                    <circle
                        onMouseOver={() => onMouseOver(node)}
	                    onMouseOut={()=> onMouseOut(node)}
                        className={cn}
                        ref={this.ref}
                        r={5}
                />);
        }
    }
}
interface NodesProps {
    nodes: NodeI[];
    simulation: d3Force.Simulation<NodeI, LinkI>;
    [k: string]: unknown;
    onMouseOver?: () => void;
    onMouseOut?: () => void;
}

interface NodesState {
    tooltipNode: NodeI | undefined;
}

export default class Nodes extends Component<NodesProps, NodesState> {
    updateDrag(): void {
        const { simulation } = this.props;
        const drag = d3Drag
            .drag<SVGCircleElement, NodeI>()
            .on("start", d => {
                if (!d3Selection.event.active) {
                    simulation.alphaTarget(0.3).restart();
                }
                d.fx = d.x;
                d.fy = d.y;
            })
            .on("drag", d => {
                d.fx = d3Selection.event.x;
                d.fy = d3Selection.event.y;
            })
            .on("end", d => {
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
        const { nodes, onMouseOut, onMouseOver, ...rest } = this.props;
        return (
            <g className={style.nodes}>
                {nodes.map((node: NodeI, index: number) => {
                    return (
                        <Node
	onMouseOut={onMouseOut}
	onMouseOver={onMouseOver}
	{...rest}
	key={index}
	node={node}
	color={"red"}
                        />
                    );
                })}
            </g>
        );
    }
}
