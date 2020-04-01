import { Component, ComponentChild, createRef, h } from "preact";
import Links from "./links";
import Nodes from "./nodes";
import {
    forceCenter,
    forceCollide,
    forceLink,
    ForceLink,
    forceManyBody,
    forceSimulation,
    Simulation
} from "d3-force";
import { selectAll } from "d3-selection";
import { fetchZigbeeDevicesList } from "../actions";
import style from "./map.css";
import { GraphI, LinkI, NodeI } from "./types";

import { convert2graph } from "./convert";
import Tooltip from "./tooltip";
import Timed, { TimedProps } from "../time";
import { Device } from "../../types";
import { genDeviceDetailsLink } from "../../utils";

export interface MouseEventsResponderNode {
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

const getDistance = (d: LinkI): number => {
    switch (d.type) {
        case "Router2Router":
        case "Router2Coordinator":
            return 300;
        case "EndDevice2Coordinator":
        case "EndDevice2Router":
            return 150;
        default:
            return 200;
    }
};

export class Map extends Component<TimedProps, State> {
    ref = createRef<HTMLDivElement>();
    simulation!: Simulation<NodeI, LinkI>;

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
        const ticked = (): void => {
            const radius = 40;
            const { width, height } = this.state;

            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            link.attr("d", (d: LinkI): string => `M ${Math.max(radius, Math.min(width - radius, d.source.x))} ${Math.max(radius, Math.min(height - radius, d.source.y))} L ${Math.max(radius, Math.min(width - radius, d.target.x))} ${Math.max(radius, Math.min(height - radius, d.target.y))}`);

            linkLabel.attr("transform", function(d) {
                //TODO: add type guard
                if (((d.target as NodeI).x as number) < ((d.source as NodeI).x as number)) {
                    const bbox = this.getBBox();
                    const rx = bbox.x + bbox.width / 2;
                    const ry = bbox.y + bbox.height / 2;
                    return `rotate(180 ${rx} ${ry})`;
                }
                return "rotate(0)";
            });
            const imgXShift = 32 / 2;
            const imgYShift = 32 / 2;
            node.attr("transform", d => `translate(${Math.max(radius, Math.min(width - radius, d.x)) - imgXShift}, ${Math.max(radius, Math.min(height - radius, d.y)) - imgYShift})`);

        };
        const { graph } = this.state;
        this.simulation.nodes(graph.nodes).on("tick", ticked);
        const linkForce = this.simulation.force("link") as ForceLink<NodeI,
            LinkI>;
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
    };

    updateForces(): void {
        const { width, height } = this.state;

        const linkForce = forceLink<NodeI, LinkI>()
            .id(d => d.id)
            .distance(getDistance)
            .strength(0.2);

        const chargeForce = forceManyBody()
                .distanceMin(200)
                .distanceMax(1000)
                .strength(-200);

        const repelForce = forceManyBody()
            .strength(-140)
            .distanceMax(50)
            .distanceMin(10);

        const collisionForce = forceCollide(40)
            .strength(1)
            .iterations(100);

        const centerForce = forceCenter(width / 2, height / 2);

        this.simulation
            .force("link", linkForce)
            .force("charge", chargeForce)
            .force("collisionForce", collisionForce)
            .force("repelForce", repelForce)
            .force("center", centerForce);
    }

    componentDidMount(): void {
        fetchZigbeeDevicesList((err, res: Device[]) => {
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