import { Component, ComponentChild, createRef, h } from "preact";
import Links from "./links";
import Nodes from "./nodes";
import * as d3 from "d3";
import style from "./map.css";
import { LinkI, NodeI, GraphI } from "./types";
import Tooltip from "./tooltip";
import { genDeviceDetailsLink } from "../../utils";
import { connect } from "unistore/preact";
import { GlobalState } from "../../store";
import actions, { Actions } from "../../actions";

export interface MouseEventsResponderNode {
    onMouseOver?: (arg0: NodeI) => void;
    onMouseOut?: (arg0: NodeI) => void;
    onDblClick?: (arg0: NodeI) => void;
}

interface MapState {
    tooltipNode: NodeI | false;
    width: number;
    height: number;
    graph: GraphI;
}

// const getDistance = (d: LinkI): number => {
//     switch (d.type) {
//         case "Router2Router":
//         case "Router2Coordinator":
//             return 300;
//         case "EndDevice2Coordinator":
//         case "EndDevice2Router":
//             return 150;
//         default:
//             return 200;
//     }
// };

export class Map extends Component<GlobalState & Actions, MapState> {
    ref = createRef<HTMLDivElement>();
    simulation!: d3.Simulation<NodeI, LinkI>;

    constructor() {
        super();


        this.simulation = d3.forceSimulation<NodeI>();

        this.state = {
            width: 0,
            height: 0,
            tooltipNode: false,
            graph: {
                nodes: [],
                links: []
            }
        };
    }

    updateNodes(): void {
        this.updateForces();
        const node = d3.selectAll<SVGGeometryElement, NodeI>(
            `.${style.node}`
        );
        const link = d3.selectAll<SVGLineElement, LinkI>(
            `.${style.link}`
        );
        const linkLabel = d3.selectAll<SVGLineElement, LinkI>(
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
        const linkForce = this.simulation.force("link") as d3.ForceLink<NodeI,
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
        switch (node.type) {
            case "EndDevice":
            case "Router":
                window.open(genDeviceDetailsLink(node.friendlyName));
                break;
            default:
                break;
        }
    };

    updateForces(): void {
        const { width, height } = this.state;

        const linkForce = d3.forceLink<NodeI, LinkI>()
            .id(d => d.ieeeAddr)
            .distance(d => d.linkquality)
            .strength(0.2);
        const chargeForce = d3.forceManyBody()
            .distanceMin(200)
            .distanceMax(1000)
            .strength(-200);

        const repelForce = d3.forceManyBody()
            .strength(-140)
            .distanceMax(50)
            .distanceMin(10);

        const collisionForce = d3.forceCollide(40)
            .strength(1)
            .iterations(100);

        const centerForce = d3.forceCenter(width / 2, height / 2);

        this.simulation
            .force("link", linkForce)
            .force("charge", chargeForce)
            .force("collisionForce", collisionForce)
            .force("repelForce", repelForce)
            .force("center", centerForce);
    }

    async initPage(): Promise<void> {
        // const { getZigbeeDevicesList } = this.props;
        // await getZigbeeDevicesList(true);
        // const { devices } = this.props;
        // const graph = convert2graph(devices);
        const { networkGraph } = this.props;
        const { width, height } = (this.ref.current as HTMLDivElement).getBoundingClientRect();
        this.setState({ width, height, graph: Object.assign({}, networkGraph) }, this.updateNodes);
    }

    async componentDidMount(): Promise<void> {
        await this.initPage()
    }

    render(): ComponentChild {
        const { width, height, tooltipNode, graph } = this.state;

        console.log('graph', graph);
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
            </div>
        );
    }
}

const mappedProps = ["networkGraph"];
const ConnectedMap = connect<{}, MapState, GlobalState, Actions>(mappedProps, actions)(Map);
export default ConnectedMap;
