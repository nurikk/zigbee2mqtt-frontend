import { h, Component, ComponentChild } from "preact";
import Links from "./links";
import Nodes from "./nodes";
import Labels from "./labels";
import * as d3Force from "d3-force";
import * as d3Selection from "d3-selection";

import * as style from "./map.css";
import { GraphI, NodeI, LinkI } from "./types";
import * as request from "superagent";
import { convert2graph } from "./convert";

interface Props {
    width: number;
    height: number;
    // graph: GraphI;
}
interface State {
    graph: GraphI;
}

type CallbackHandler = (err: unknown, res: request.Response) => void;

const fetchZibeeDevicesList = (callback: CallbackHandler): void => {
    request
        .get("/api/zigbee/devices")
        .responseType("json")
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
        const label = d3Selection.selectAll<SVGTextElement, NodeI>(
            `.${style.label}`
        );
        const ticked = (): void => {
            link.attr("x1", d => (d.source as NodeI).x as number)
                .attr("y1", d => (d.source as NodeI).y as number)
                .attr("x2", d => (d.target as NodeI).x as number)
                .attr("y2", d => (d.target as NodeI).y as number);

            // node.attr("cx", d => d.x as number).attr("cy", d => d.y as number);
            node.attr("transform", d => `translate(${d.x}, ${d.y})`);
            label
                .attr("x", d => (d.x as number) + 5)
                .attr("y", d => (d.y as number) + 5);
        };
        const { graph } = this.state;
        this.simulation.nodes(graph.nodes).on("tick", ticked);
        const linkForce = this.simulation.force("link") as d3Force.ForceLink<
            NodeI,
            LinkI
        >;
        linkForce.links(graph.links);
        this.simulation.restart();
    }
    constructor(props: Props) {
        super(props);
        const { width, height } = this.props;
        const linkForce = d3Force
            .forceLink<NodeI, LinkI>()
            .id(d => d.id)
            .distance(50)
            .strength(0.1);

        const chargeForce = d3Force
            .forceManyBody<NodeI>()
            .distanceMin(10)
            .strength(-200);

        this.simulation = d3Force
            .forceSimulation<NodeI>()
            .force("x", d3Force.forceX(width / 2).strength(0.05))
            .force("y", d3Force.forceY(height / 2).strength(0.05))
            .force("link", linkForce)
            .force("charge", chargeForce)
            .force("center", d3Force.forceCenter<NodeI>(width / 2, height / 2));
        // .nodes(graph.nodes);

        // linkForce.links(graph.links);

        this.state = {
            graph: {
                nodes: [],
                links: []
            }
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
        const { graph } = this.state;
        return (
            <svg className={style.container} width={width} height={height}>
                <Links links={graph.links} />
                <Nodes nodes={graph.nodes} simulation={this.simulation} />
                <Labels nodes={graph.nodes} />
            </svg>
        );
    }
}
