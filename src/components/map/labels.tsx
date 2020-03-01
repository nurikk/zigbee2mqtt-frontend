/* eslint-disable react/prefer-stateless-function */
import * as d3Selection from "d3-selection";
import { h, Component, ComponentChild, createRef } from "preact";
import { NodeI, Device } from "./types";
import * as style from "./map.css";
import cx from "classnames";

class Label extends Component<{ node: NodeI }, {}> {
    ref = createRef<SVGTextElement>();

    componentDidMount(): void {
        const { current } = this.ref;
        d3Selection.select(current as SVGTextElement).data([this.props.node]);
    }

    render(): ComponentChild {
        const { node } = this.props;
        const deviceType = (node.device as Device).type as string;
        const mappedClas = style[deviceType] as string;
        const cn = cx(style.label, mappedClas);
        return (
            <text className={cn} ref={this.ref} dy={-4} dx={3}>
                {node.id}
            </text>
        );
    }
}

export default class Labels extends Component<{ nodes: NodeI[] }, {}> {
    render(): ComponentChild {
        const { nodes } = this.props;
        const labels = nodes.map((node: NodeI, index: number) => {
            return <Label key={index} node={node} />;
        });
        return <g className={style.labels}>{labels}</g>;
    }
}
