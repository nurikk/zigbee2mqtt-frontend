import { h, Component, ComponentChild } from "preact";
import Links from "./links";
import Nodes from "./nodes";
import Labels from "./labels";
import * as d3Force from "d3-force";
import * as d3Selection from "d3-selection";

import * as style from "./map.css";
import { GraphI, NodeI, LinkI } from "./types";

interface Props {
    width: number;
    height: number;
    graph: GraphI;
}

export default class Map extends Component<Props, {}> {
    simulation: d3Force.Simulation<NodeI, LinkI>;

    constructor(props: Props) {
        super(props);
        const { width, height, graph } = this.props;
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
            .force("x", d3Force.forceX<NodeI>(width / 2).strength(0.05))
            .force("y", d3Force.forceY<NodeI>(height / 2).strength(0.05))
            .force("link", linkForce)
            .force("charge", chargeForce)
            .force("center", d3Force.forceCenter<NodeI>(width / 2, height / 2))
            .nodes(graph.nodes);

        linkForce.links(graph.links);
    }

    componentDidMount(): void {
        const node = d3Selection.selectAll<SVGCircleElement, NodeI>(
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

            node.attr("cx", d => d.x as number).attr("cy", d => d.y as number);
            label
                .attr("x", d => (d.x as number) + 5)
                .attr("y", d => (d.y as number) + 5);
        };
        const { graph } = this.props;
        this.simulation.nodes(graph.nodes).on("tick", ticked);
    }

    render(): ComponentChild {
        const { width, height, graph } = this.props;
        return (
            <svg className={style.container} width={width} height={height}>
                <Links links={graph.links} />
                <Nodes nodes={graph.nodes} simulation={this.simulation} />
                <Labels nodes={graph.nodes} />
            </svg>
        );
    }
}
