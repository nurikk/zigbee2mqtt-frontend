/* eslint-disable react/prefer-stateless-function */
import * as d3Selection from "d3-selection";
import { h, Component, ComponentChild, createRef } from "preact";
import { NodeI, Device } from "./types";
import * as style from "./map.css";
import cx from "classnames";
import { HoverableNode } from ".";

interface LabelProps extends HoverableNode {
    node: NodeI;
}
class Label extends Component<LabelProps, {}> {
    ref = createRef<SVGTextElement>();

    componentDidMount(): void {
        const { current } = this.ref;
        d3Selection.select(current as SVGTextElement).data([this.props.node]);
    }

    render(): ComponentChild {
        const { node, onMouseOut, onMouseOver } = this.props;
        const deviceType = (node.device as Device).type as string;
        const mappedClas = style[deviceType] as string;
        const cn = cx(style.label, mappedClas);
        return (
            <text onMouseOut={()=> onMouseOut(node)} onMouseOver={() => onMouseOver(node)} className={cn} ref={this.ref} dy={-4} dx={3}>
                {node.id}
            </text>
        );
    }
}
interface LabelsProps extends HoverableNode {
    nodes: NodeI[];
}
export default class Labels extends Component<LabelsProps, {}> {
    render(): ComponentChild {
        const { nodes, onMouseOut, onMouseOver } = this.props;
        const labels = nodes.map((node: NodeI, index: number) => {
            return (
                <Label
                    onMouseOut={onMouseOut}
                    onMouseOver={onMouseOver}
                    key={index}
                    node={node}
                />
            );
        });
        return <g className={style.labels}>{labels}</g>;
    }
}
