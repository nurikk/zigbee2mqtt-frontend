import React, { ChangeEvent, Component, createRef, Fragment } from "react";
import Links from "./links";
import Nodes from "./nodes";
import style from "./map.css";
import { LinkI, NodeI, Source, Target, ZigbeeRelationship } from "./types";
import { connect } from "unistore/react";
import { GlobalState } from "../../store";
import actions, { MapApi } from "../../actions";

import Button from "../button";
import { Simulation, SimulationNodeDatum, ForceLink, forceLink, forceCollide, forceCenter, forceSimulation, forceX, forceY } from "d3-force";
import { select, selectAll } from "d3-selection";
import { forceManyBodyReuse } from "d3-force-reuse"
import { zoom } from "d3-zoom";

export interface MouseEventsResponderNode {
    onMouseOver?: (arg0: NodeI) => void;
    onMouseOut?: (arg0: NodeI) => void;
    onDblClick?: (arg0: NodeI) => void;
}

interface MapState {
    width: number;
    height: number;
    visibleLinks: ZigbeeRelationship[];
}

const getDistance = (d: LinkI): number => {
    let distance = 200;
    switch (d.linkType) {
        case "BrokenLink":
            distance = 450;
            break;
        case "Router2Router":
            distance = 300;
            break;
        case "Coordinator2Router":
            distance = 400;
            break;
        case "Coordinator2EndDevice":
            distance = 100;
            break;
        case "EndDevice2Router":
            distance = 100;
            break;
        default:
            distance = 200;
            break;
    }
    const depth = ~~(Math.min(4, d.depth));
    return 50 * depth + distance;
};
export class Map extends Component<GlobalState & MapApi, MapState> {
    ref = createRef<HTMLDivElement>();
    svgRef = createRef<SVGSVGElement>();
    simulation = forceSimulation<NodeI, LinkI>();
    state: Readonly<MapState> = {
        width: 0,
        height: 0,
        visibleLinks: [ZigbeeRelationship.NeigbhorIsAChild]
    };

    updateNodes = (): void => {

        const { networkGraph } = this.props;
        const { visibleLinks, width, height } = this.state;

        console.log("updateNodes", this.state, this.props);


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
            link.attr("d", (d: LinkI): string => {
                const src = d.source as SimulationNodeDatum;
                const dst = d.target as SimulationNodeDatum;
                const x1 = Math.max(radius, Math.min(width - radius, src.x));
                const y1 = Math.max(radius, Math.min(height - radius, src.y));
                const x2 = Math.max(radius, Math.min(width - radius, dst.x));
                const y2 = Math.max(radius, Math.min(height - radius, dst.y));

                const dx = x2 - x1, dy = y2 - y1;
                const dr = Math.sqrt(dx * dx + dy * dy) * 2;
                if (d.repeated) {
                    return `M${x1},${y1} A${dr},${dr} 0 0, 1${x2},${y2}`;
                }
                return `M ${x1} ${y1} L ${x2} ${y2}`;
            });


            function xpos(s: Source, t: Target) {
                const angle = Math.atan2(t.y - s.y, t.x - s.x);
                return 60 * Math.cos(angle) + s.x;
            };

            function ypos(s: Source, t: Target) {
                const angle = Math.atan2(t.y - s.y, t.x - s.x);
                return 60 * Math.sin(angle) + s.y;
            };

            linkLabel
                .attr('x', function (d) { return xpos(d.source, d.target); })
                .attr('y', function (d) { return ypos(d.source, d.target); });

            const imgXShift = 32 / 2;
            const imgYShift = 32 / 2;
            node.attr("transform", d => `translate(${Math.max(radius, Math.min(width - radius, d.x)) - imgXShift}, ${Math.max(radius, Math.min(height - radius, d.y)) - imgYShift})`);
        };

        this.simulation.nodes(networkGraph.nodes).on("tick", ticked);
        const linkForce = this.simulation.force("link") as ForceLink<NodeI,
            LinkI>;
        const links = networkGraph.links.filter(l => visibleLinks.includes(l.relationship));
        linkForce.links(links);


        //add zoom capabilities
        const everything = select<SVGGeometryElement, NodeI>('.everything');
        const zoomHandler = zoom().on("zoom", (event) => everything.attr("transform", event.transform));
        zoomHandler(select(this.svgRef.current));

        this.simulation.alphaTarget(0.3).restart();
    }


    updateForces(width: number, height: number): void {


        const linkForce = forceLink<NodeI, LinkI>()
            .id(d => d.ieeeAddr)
            .distance(getDistance)
            .strength(0.2);

        const chargeForce = forceManyBodyReuse()
            .distanceMin(200)
            .distanceMax(1000)
            .strength(-200);

        const repelForce = forceManyBodyReuse()
            .strength(-140)
            .distanceMax(50)
            .distanceMin(20);

        const collisionForce = forceCollide(40)
            .strength(1)
        // .iterations(50);

        const centerForce = forceCenter(width / 2, height / 2);

        this.simulation
            .force("link", linkForce)
            .force("charge", chargeForce)
            .force("collisionForce", collisionForce)
            .force("repelForce", repelForce)
            .force("center", centerForce)
            .force("x", forceX())
            .force("y", forceY())
    }

    initPage(): void {
        const { width, height } = (this.ref.current as HTMLDivElement).getBoundingClientRect();
        this.updateForces(width, height);
        this.setState({ width, height });
    }

    componentDidMount(): void {
        this.initPage()
    }

    componentDidUpdate(): void {
        this.updateNodes();
    }

    renderMap() {
        const { width, height, visibleLinks } = this.state;
        const { networkGraph } = this.props;
        const links = networkGraph.links.filter(l => visibleLinks.includes(l.relationship));
        return (
            <svg ref={this.svgRef} viewBox={`0 0 ${width} ${height}`}>
                <g className="everything">
                    <Links links={links} />
                    <Nodes
                        nodes={networkGraph.nodes}
                        simulation={this.simulation}
                    />
                </g>
            </svg >
        )
    }
    onRequestClick = (): void => {
        const { networkMapRequest } = this.props;
        networkMapRequest();
    }
    renderMessage() {
        const { networkGraphIsLoading } = this.props;
        return (
            <div className="h-100 d-flex justify-content-center align-items-center">
                {
                    networkGraphIsLoading ? (
                        <div>
                            <div className="d-flex align-items-center">
                                <strong>Loading, please wait.</strong>
                                <div className="spinner-border ml-2" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                            <div>Depending on the size of your network this can take somewhere between 10 seconds and 2 minutes.</div>
                        </div>

                    ) : <Button onClick={this.onRequestClick} className="btn btn-primary d-block">Load map</Button>
                }
            </div>
        );
    }
    onLinkTypeFilterChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { visibleLinks: stateVisibleLinks } = this.state;
        const { checked, value } = e.target;
        const inValue = parseInt(value, 10);
        let visibleLinks = [...stateVisibleLinks];
        if (checked) {
            visibleLinks.push(inValue);
        } else {
            visibleLinks = visibleLinks.filter((v) => v !== inValue);
        }
        this.setState({ visibleLinks });
    }
    renderMapControls() {
        const { visibleLinks } = this.state;
        interface LinkType {
            title: string;
            relationship: ZigbeeRelationship;
        }
        const linkTypes: LinkType[] = [
            {
                title: 'IsParent',
                relationship: ZigbeeRelationship.NeigbhorIsParent
            },
            {
                title: 'IsAChild',
                relationship: ZigbeeRelationship.NeigbhorIsAChild
            },
            {
                title: 'IsASibling',
                relationship: ZigbeeRelationship.NeigbhorIsASibling
            },
            {
                title: 'NoneOfTheAbove',
                relationship: ZigbeeRelationship.NoneOfTheAbove
            }

        ];
        return <div className={style.controls}>
            {
                linkTypes.map(linkType => (
                    <div key={linkType.title} className="form-check form-check-inline">
                        <input onChange={this.onLinkTypeFilterChange} className="form-check-input" type="checkbox" id={linkType.title} value={linkType.relationship} checked={visibleLinks.includes(linkType.relationship)} />
                        <label className="form-check-label" htmlFor={linkType.title}>{linkType.title}</label>
                    </div>
                ))
            }
            {
                <div className="btn-group btn-group-sm" role="group">
                    <Button<void> title="Refresh data" className="btn btn-primary" onClick={this.onRequestClick}><i
                        className="fa fa-sync" /></Button>
                </div>
            }
        </div>
    }
    render() {
        const { networkGraph } = this.props;
        return (
            <div className={style.container} ref={this.ref}>
                {networkGraph.nodes.length ? <Fragment>{this.renderMapControls()} {this.renderMap()}</Fragment> : this.renderMessage()}
            </div>
        );
    }
}


const mappedProps = ["networkGraph", "networkGraphIsLoading"];
const ConnectedMap = connect<{}, MapState, GlobalState, {}>(mappedProps, actions)(Map);
export default ConnectedMap;
