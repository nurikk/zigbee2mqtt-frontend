import { Component, ComponentChild, createRef, h, Fragment } from "preact";
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
import { useEffect } from "preact/hooks";

export interface MouseEventsResponderNode {
    onMouseOver?: (arg0: NodeI) => void;
    onMouseOut?: (arg0: NodeI) => void;
    onDblClick?: (arg0: NodeI) => void;
}

interface MapState {
    tooltipNode: NodeI | false;
    width: number;
    height: number;

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
            tooltipNode: false
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
            link.attr("d", (d: LinkI): string => {
                const src = d.source as d3.SimulationNodeDatum;
                const dst = d.target as d3.SimulationNodeDatum;
                const x1 = Math.max(radius, Math.min(width - radius, src.x));
                const y1 = Math.max(radius, Math.min(height - radius, src.y));
                const x2 = Math.max(radius, Math.min(width - radius, dst.x));
                const y2 = Math.max(radius, Math.min(height - radius, dst.y));
                return `M ${x1} ${y1} L ${x2} ${y2}`;
            });

            linkLabel.attr("transform", function (d) {
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
        const { networkGraph } = this.props;
        this.simulation.nodes(networkGraph.nodes).on("tick", ticked);
        const linkForce = this.simulation.force("link") as d3.ForceLink<NodeI,
            LinkI>;
        linkForce.links(networkGraph.links);
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
        const { width, height } = (this.ref.current as HTMLDivElement).getBoundingClientRect();
        this.setState({ width, height });
    }

    async componentDidMount(): Promise<void> {
        await this.initPage()
    }

    renderMap(): ComponentChild {
        const { width, height, tooltipNode } = this.state;
        const { networkGraph } = this.props;
        const { setTooltip, removeTooltip, openDetailsWindow } = this;

        useEffect(() => {
            this.updateNodes();
        }, [networkGraph.nodes.length]);
        return (
            <svg viewBox={`0 0 ${width} ${height}`}>
                <Links links={networkGraph.links} />
                <Nodes
                    nodes={networkGraph.nodes}
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
        )
    }
    onRequestClick = (): void => {
        const { networkMapRequest } = this.props;
        networkMapRequest();
    }
    renderMessage(): ComponentChild {
        const { isLoading } = this.props;
        return (<div class="container">
            {
                isLoading ? (
                    "Loading, please wait.Depending on the size of your network this can take somewhere between 10 seconds and 2 minutes.") : (
                        <Fragment>No map data.
                            <button onClick={this.onRequestClick} className="btn btn-primary">Requests?</button>
                        </Fragment>

                    )
            }

        </div>);
    }
    render(): ComponentChild {
        const { networkGraph } = this.props;

        console.log('graph', networkGraph);


        return (
            <div className={style.container} ref={this.ref}>
                {networkGraph.nodes.length ? this.renderMap() : this.renderMessage()}
            </div>
        );
    }
}
export const toD3 = (inGraph: GraphI): GraphI => {

    const nodes = {};
    const links = [];

    inGraph.nodes.forEach(node => {
        nodes[node.ieeeAddr] = true;
    });

    inGraph.links.forEach(link => {
        if (nodes[link.sourceIeeeAddr] && nodes[link.targetIeeeAddr]) {
            links.push({ ...link, ...{ source: link.sourceIeeeAddr, target: link.targetIeeeAddr } });
        }

    });
    inGraph.links = links;
    return inGraph;
};
const mappedProps = ["networkGraph", "isLoading"];
const ConnectedMap = connect<{}, MapState, GlobalState, Actions>(mappedProps, actions)(Map);
export default ConnectedMap;
