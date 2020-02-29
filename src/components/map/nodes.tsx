import { h, Component, createRef, ComponentChild } from "preact";
import * as d3Drag from "d3-drag";
import * as d3Force from "d3-force";
import { NodeI, LinkI } from "./types";

import * as d3Selection from "d3-selection";
import * as style from "./map.css";
interface NodeProps {
    node: NodeI;
    color: string;
}

class Node extends Component<NodeProps, {}> {
    ref = createRef<SVGCircleElement>();

    componentDidMount(): void {
        const { current } = this.ref;
        d3Selection.select(current as SVGCircleElement).data([this.props.node]);
    }

    render(): ComponentChild {
        return (
            <circle
                className={style.node}
                r={5}
                fill={this.props.color}
                ref={this.ref}
            >
                <title>{this.props.node.id}</title>
            </circle>
        );
    }
}
interface NodesProps {
    nodes: NodeI[];
    simulation: d3Force.Simulation<NodeI, LinkI>;
}

export default class Nodes extends Component<NodesProps, {}> {
    componentDidMount(): void {
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

    render(): ComponentChild {
        const { nodes } = this.props;

        return (
            <g className={style.nodes}>
                {nodes.map((node: NodeI, index: number) => {
                    return <Node key={index} node={node} color={"red"} />;
                })}
            </g>
        );
    }
}
