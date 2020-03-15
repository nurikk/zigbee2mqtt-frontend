import { h, Component, ComponentChild, createRef } from 'preact';
import Links from './links';
import Nodes from './nodes';
import Labels from './labels';
import { forceSimulation, Simulation, ForceLink, forceLink, forceManyBody, forceCenter, forceX, forceY } from 'd3-force';
import { selectAll } from 'd3-selection';
import { fetchZibeeDevicesList } from '../actions';
import * as style from './map.css';
import { GraphI, NodeI, LinkI, Dictionary, Device } from './types';

import { convert2graph } from './convert';
import Tooltip from './tooltip';
import Timed, { TimedProps } from '../time';

export interface HoverableNode {
    onMouseOver?: (arg0: NodeI) => void;
    onMouseOut?: (arg0: NodeI) => void;
    onDblClick?: (arg0: NodeI) => void;
}

export interface TimeInfo {
    ntp_enable: boolean;
    ntp_server: string;
    tz: string;
    ts: number;
}

interface State {
    graph: GraphI;
    tooltipNode: NodeI | false;
    width: number;
    height: number;
}

export const genDeviceShortAddress = (deviceKey: string): string => (`0x${parseInt(deviceKey, 10).toString(16)}`)
export const genDeviceDetailsLink = (deviceKey: string): string => (`/zigbee?nwkAddr=${genDeviceShortAddress(deviceKey)}`)
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
const MOBILE_SCREEN_TRESHOLD = 400;
export class Map extends Component<TimedProps, State> {
    ref = createRef<HTMLDivElement>();
    simulation!: Simulation<NodeI, LinkI>;

    updateNodes(): void {
        this.updateForces();
        const node = selectAll<SVGGeometryElement, NodeI>(
            `.${style.node}`
        );
        const link = selectAll<SVGLineElement, LinkI>(
            `.${style.link}`
        );
        const linkLabel = selectAll<SVGLineElement, LinkI>(
            `.${style.linkLabel}`
        );
        const label = selectAll<SVGTextElement, NodeI>(
            `.${style.label}`
        );
        const linkComputeFn = (d: LinkI): string =>
            `M ${(d.source as NodeI).x} ${(d.source as NodeI).y} L ${(d.target as NodeI).x} ${(d.target as NodeI).y}`
        const ticked = (): void => {
            link.attr('d', linkComputeFn);

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
        const linkForce = this.simulation.force('link') as ForceLink<
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
        this.setState({ tooltipNode: false });
    };

    openDetailsWindow = (node: NodeI): void => {
        switch (node.device.type) {
            case "EndDevice":
            case "Router":
                window.open(genDeviceDetailsLink(node.id));
                break;
            default:
                break;
        }
    }
    constructor() {
        super();
        this.state = {
            width: 0,
            height: 0,
            graph: {
                nodes: [],
                links: []
            },
            tooltipNode: false
        };

        this.simulation = forceSimulation<NodeI>();
    }

    updateForces(): void {
        const { width, height } = this.state;

        const linkForce = forceLink<NodeI, LinkI>()
            .id(d => d.id)
            .distance(getDistance)
            .strength(1);

        const chargeForce =
            forceManyBody()
                .distanceMin(200)
                .distanceMax(1000)
                .strength(-200);

        this.simulation
            .force('link', linkForce)
            .force('charge', chargeForce)
            .force('center', forceCenter(width / 2, height / 2));

        if (width < MOBILE_SCREEN_TRESHOLD) {
            this.simulation.force('x', forceX(width / 2).strength(0.1))
                .force('y', forceY(height / 2).strength(0.1))
        }
    }
    componentDidMount(): void {
        fetchZibeeDevicesList((err, res: Dictionary<Device>) => {
            const { width, height } = (this.ref.current as HTMLDivElement).getBoundingClientRect();
            const graph = convert2graph(res);
            this.setState({ graph, width, height }, this.updateNodes);
        });
    }

    render(): ComponentChild {
        const { width, height, graph, tooltipNode } = this.state;
        const { time } = this.props;
        const { setTooltip, removeTooltip, openDetailsWindow } = this;
        return (
            <div className={style.container} ref={this.ref}>
                <svg viewBox={`0 0 ${width} ${height}`}>
                    <Links links={graph.links} />
                    <Nodes
                        nodes={graph.nodes}
                        simulation={this.simulation}
                        onMouseOver={setTooltip}
                        onMouseOut={removeTooltip}
                        onDblClick={openDetailsWindow}
                        time={time}
                    />
                    <Labels
                        nodes={graph.nodes}
                        onMouseOver={setTooltip}
                        onMouseOut={removeTooltip}
                        onDblClick={openDetailsWindow}
                    />
                    {tooltipNode ? (
                        <foreignObject
                            className={style.foreignObject}
                            x={tooltipNode.x as number + 10}
                            y={tooltipNode.y as number + 5}
                        >
                            <Tooltip info={tooltipNode} time={time} />
                        </foreignObject>
                    ) : null}
                </svg>
            </div>
        );
    }
}

export default Timed(Map);