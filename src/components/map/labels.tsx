import { select } from 'd3-selection';
import { h, Component, ComponentChild, createRef, FunctionalComponent } from 'preact';
import { NodeI } from './types';
import style from './map.css';
import cx from 'classnames';
import { MouseEventsResponderNode } from '.';
import { Device } from '../../types';

interface LabelProps extends MouseEventsResponderNode {
    node: NodeI;
}

class Label extends Component<LabelProps, {}> {
    ref = createRef<SVGTextElement>();

    componentDidMount(): void {
        const { current } = this.ref;
        select(current as SVGTextElement).data([this.props.node]);
    }

    onMouseOut = (): void => {
        const { node, onMouseOut } = this.props;
        onMouseOut && onMouseOut(node);
    };

    onMouseOver = (): void => {
        const { node, onMouseOver } = this.props;
        onMouseOver && onMouseOver(node);
    };
    onDblClick = (): void => {
        const { node, onDblClick } = this.props;
        onDblClick && onDblClick(node);
    };

    render(): ComponentChild {
        const { node } = this.props;
        const deviceType = (node.device as Device).type;
        const cn = cx(style.label, style[deviceType]);
        const { onMouseOut, onMouseOver, onDblClick } = this;
        return (
            <text
                onMouseOut={onMouseOut}
                onMouseOver={onMouseOver}
                onDblClick={onDblClick}
                className={cn}
                ref={this.ref}
                dy={-4}
                dx={3}
            >
                {node.name}
            </text>
        );
    }
}

interface LabelsProps extends MouseEventsResponderNode {
    nodes: NodeI[];
}


const Labels: FunctionalComponent<LabelsProps> = (props) => {
    const { nodes, onMouseOut, onMouseOver, onDblClick } = props;
        const labels = nodes.map((node: NodeI, index: number) => (
            <Label
                onMouseOut={onMouseOut}
                onMouseOver={onMouseOver}
                onDblClick={onDblClick}
                key={index}
                node={node}
            />
        ));
        return <g className={style.labels}>{labels}</g>;
};
export default Labels;
