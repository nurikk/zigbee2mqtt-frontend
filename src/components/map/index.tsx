import { h, Component, ComponentChild } from 'preact';
import Links from './links';
import Nodes from './nodes';
import Labels from './labels';
import * as d3Force from 'd3-force';
import * as d3Selection from 'd3-selection';

import * as style from './map.css';
import { GraphI, NodeI, LinkI } from './types';
import * as request from 'superagent';
import { convert2graph } from './convert';
import Tooltip from './tooltip';

export interface HoverableNode {
    onMouseOver?: (arg0: NodeI) => void;
    onMouseOut?: (arg0: NodeI) => void;
}
interface Props {
    width: number;
    height: number;
}
interface State {
    graph: GraphI;
    tooltipNode: NodeI | false;
}

type CallbackHandler = (err: unknown, res: request.Response) => void;

const fetchZibeeDevicesList = (callback: CallbackHandler): void => {
    request
        .get('/api/zigbee/devices')
        .responseType('json')
        .end(callback);
};



export default class Map extends Component<Props, State> {
    simulation: d3Force.Simulation<NodeI, LinkI>;

    updateNodes(): void {
        const node = d3Selection.selectAll<SVGGeometryElement, NodeI>(
            `.${style.node}`
        );
        const link = d3Selection.selectAll<SVGLineElement, LinkI>(
            `.${style.link}`
        );
        const linkLabel = d3Selection.selectAll<SVGLineElement, LinkI>(
            `.${style.linkLabel}`
        );
        const label = d3Selection.selectAll<SVGTextElement, NodeI>(
            `.${style.label}`
        );
        const ticked = (): void => {
            link.attr(
                'd',
                d =>
                    `M ${(d.source as NodeI).x} ${(d.source as NodeI).y} L ${(d.target as NodeI).x} ${(d.target as NodeI).y}`
            );

            linkLabel.attr('transform', function (d) {
                //TODO: add type guard
                if (((d.target as NodeI).x as number) < ((d.source as NodeI).x as number)) {
                    const bbox = this.getBBox();
                    const rx = bbox.x + bbox.width / 2;
                    const ry = bbox.y + bbox.height / 2;
                    return `rotate(180 ${rx} ${ry})`;
                }
                return 'rotate(0)';
            });
            node.attr('transform', d => `translate(${d.x}, ${d.y})`);
            label
                .attr('x', d => (d.x as number) + 5)
                .attr('y', d => (d.y as number) + 5);
        };
        const { graph } = this.state;
        this.simulation.nodes(graph.nodes).on('tick', ticked);
        const linkForce = this.simulation.force('link') as d3Force.ForceLink<
            NodeI,
            LinkI
        >;
        linkForce.links(graph.links);
        this.simulation.restart();
    }

    setTooltip = (tooltipNode: NodeI): void => {
        this.setState({ tooltipNode });
    };
    removeTooltip = (): void => {
        // this.setState({ tooltipNode: false });
    };
    constructor(props: Props) {
        super(props);
        const { width, height } = this.props;
        const getDistance = (d: LinkI): number => {
            switch (d.type) {
                case 'Router2Router':
                case 'Router2Coordinator':
                    return 200;
                case 'EndDevice2Coordinator':
                case 'EndDevice2Router':
                    return 100;
                default:
                    return 150;
            }
        };
        const linkForce = d3Force
            .forceLink<NodeI, LinkI>()
            .id(d => d.id)
            .distance(getDistance)
            .strength(1);

        const chargeForce = d3Force
            .forceManyBody<NodeI>()
            .distanceMin(200)
            .distanceMax(1000)
            .strength(-200);

        this.simulation = d3Force
            .forceSimulation<NodeI>()
            .force('x', d3Force.forceX(width / 2).strength(0.05))
            .force('y', d3Force.forceY(height / 2).strength(0.05))
            .force('link', linkForce)
            .force('charge', chargeForce)
            .force('center', d3Force.forceCenter<NodeI>(width / 2, height / 2));

        this.state = {
            graph: {
                nodes: [],
                links: []
            },
            tooltipNode: false
        };
    }
    componentDidMount(): void {
        fetchZibeeDevicesList((err, res) => {
            const graph = convert2graph(res.body);
            this.setState({ graph }, this.updateNodes);
        });
    }

    render(): ComponentChild {
        const { width, height } = this.props;
        const { graph, tooltipNode } = this.state;
        const { setTooltip, removeTooltip } = this;
        return (
            <svg className={style.container} width={width} height={height}>
                <Links links={graph.links} />
                <Nodes
                    nodes={graph.nodes}
                    simulation={this.simulation}
                    onMouseOver={setTooltip}
                    onMouseOut={removeTooltip}
                />
                <Labels
                    nodes={graph.nodes}
                    onMouseOver={setTooltip}
                    onMouseOut={removeTooltip}
                />
                {tooltipNode ? (
                    <foreignObject
                        className={style.foreignObject}
                        x={tooltipNode.x as number + 10}
                        y={tooltipNode.y as number + 5}
                    >
                        <Tooltip info={tooltipNode} />
                    </foreignObject>
                ) : null}
            </svg>
        );
    }
}
