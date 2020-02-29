import * as d3Selection from 'd3-selection';
import { h, Component, ComponentChild, createRef } from "preact";
import { NodeI } from "./types";
import * as style from "./map.css";

class Label extends Component<{ node: NodeI }, {}> {
    ref = createRef<SVGTextElement>();

    componentDidMount(): void {
        const { current } = this.ref;
        d3Selection.select(current as SVGTextElement).data([this.props.node]);
    }

    render(): ComponentChild {
        const { node } = this.props;
        return (
            <text className={style.label} ref={this.ref}>
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
