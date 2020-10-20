import React, { ChangeEvent, Component, createRef, Fragment } from "react";
import Links from "./links";
import Nodes from "./nodes";
import style from "./map.css";
import { LinkI, NodeI, Source, Target, ZigbeeRelationship } from "./types";
import { connect } from "unistore/react";
import { GlobalState } from "../../store";
import actions, { MapApi } from "../../actions";

import Button from "../button";
import { ForceLink, forceLink, forceCollide, forceCenter, forceSimulation, forceX, forceY } from "d3-force";
import { select, selectAll } from "d3-selection";
import { forceManyBodyReuse } from "d3-force-reuse"
import { zoom, zoomIdentity, ZoomTransform } from "d3-zoom";

export interface MouseEventsResponderNode {
    onMouseOver?: (arg0: NodeI, el: SVGPolygonElement | SVGCircleElement | SVGImageElement) => void;
    onMouseOut?: (arg0: NodeI, el: SVGPolygonElement | SVGCircleElement | SVGImageElement) => void;
    onDblClick?: (arg0: NodeI, el: SVGPolygonElement | SVGCircleElement | SVGImageElement) => void;
}

interface MapState {
    selectedNode: NodeI;
    width: number;
    height: number;
    visibleLinks: ZigbeeRelationship[];
}

const xpos = (offset: number, s: Source, t: Target) => {
    const angle = Math.atan2(t.y - s.y, t.x - s.x);
    return offset * Math.cos(angle) + s.x;
};

const ypos = (offset: number, s: Source, t: Target) => {
    const angle = Math.atan2(t.y - s.y, t.x - s.x);
    return offset * Math.sin(angle) + s.y;
};
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


export class MapComponent extends Component<GlobalState & MapApi, MapState> {
    ref = createRef<HTMLDivElement>();
    svgRef = createRef<SVGSVGElement>();
    simulation = forceSimulation<NodeI, LinkI>();
    state: Readonly<MapState> = {
        selectedNode: null,
        width: 0,
        height: 0,
        visibleLinks: [ZigbeeRelationship.NeigbhorIsAChild]
    };
    transform = zoomIdentity;

    updateNodes = (): void => {
        const { networkGraph } = this.props;
        const { visibleLinks, selectedNode } = this.state;

        const node = selectAll<SVGElement, NodeI>(
            `.${style.node}`
        );
        const link = selectAll<SVGElement, LinkI>(
            `.${style.link}`
        );
        const linkLabel = selectAll<SVGElement, LinkI>(
            `.${style.linkLabel}`
        );
        const ticked = (transform: ZoomTransform): void => {
            const radius = 40;
            const { width, height } = this.state;
            link.attr("d", (d: LinkI): string => {
                const src = d.source;
                const dst = d.target;
                const x1 = transform.applyX(Math.max(radius, Math.min(width - radius, src.x)));
                const y1 = transform.applyY(Math.max(radius, Math.min(height - radius, src.y)));
                const x2 = transform.applyX(Math.max(radius, Math.min(width - radius, dst.x)));
                const y2 = transform.applyY(Math.max(radius, Math.min(height - radius, dst.y)));

                const dx = x2 - x1, dy = y2 - y1;
                const dr = Math.sqrt(dx * dx + dy * dy);
                if (d.repeated) {
                    return `M${x1},${y1} A${dr},${dr} 0 0, 1${x2},${y2}`;
                }
                return `M ${x1} ${y1} L ${x2} ${y2}`;
            });

            linkLabel
                .attr('text-anchor', (d) => d.repeated ? 'start' : 'end')
                .attr('x', (d) => transform.applyX(xpos(d.repeated ? 30 : 60, d.source, d.target)))
                .attr('y', (d) => transform.applyY(ypos(d.repeated ? 30 : 60, d.source, d.target)))

            const imgXShift = 32 / 2;
            const imgYShift = 32 / 2;
            node.attr("transform", d => {
                const nodeX = Math.max(radius, Math.min(width - radius, transform.applyX(d.x))) - imgXShift;
                const nodeY = Math.max(radius, Math.min(height - radius, transform.applyY(d.y))) - imgYShift;
                return `translate(${nodeX}, ${nodeY})`;
            });
        };

        const links = networkGraph.links.filter(l => visibleLinks.includes(l.relationship));
        this.simulation.nodes(networkGraph.nodes);
        this.simulation.force<ForceLink<NodeI, LinkI>>("link").links(links);
        this.simulation.on("tick", () => ticked(this.transform));
        this.simulation.restart();


        //add zoom capabilities
        const everything = select<SVGGeometryElement, NodeI>('.everything');
        const zoomHandler = zoom().on("zoom", ({ transform }) => {
            everything.attr("transform", transform);
            this.transform = transform;
            ticked(transform);
        });
        zoomHandler(select(this.svgRef.current));


        const linkedByIndex = new Set<string>();
        networkGraph.nodes.forEach(n => linkedByIndex.add(n.ieeeAddr + "," + n.ieeeAddr));
        links.forEach((l) => linkedByIndex.add(l.sourceIeeeAddr + "," + l.targetIeeeAddr));

        const neighboring = (a: Source, b: Target): boolean => linkedByIndex.has(a.ieeeAddr + "," + b.ieeeAddr)

        if (selectedNode) {
            node.style("opacity", (o: NodeI) => neighboring(selectedNode, o) || neighboring(o, selectedNode) ? 1 : 0.15);
            link.style("stroke-opacity", (l: LinkI) => (l.source === selectedNode || l.target === selectedNode ? 1 : 0.15));
            linkLabel.style("opacity", (l: LinkI) => (l.source === selectedNode || l.target === selectedNode ? 1 : 0.15));
        } else {
            node.style("opacity", 1);
            link.style("stroke-opacity", 1);
            linkLabel.style("opacity", 1);

        }
        node.on("click", (event, d: NodeI) => {
            const { selectedNode } = this.state;
            this.setState({ selectedNode: selectedNode ? null : d });
        });
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
            .strength(1);

        const centerForce = forceCenter(width / 2, height / 2);

        this.simulation = forceSimulation<NodeI, LinkI>()
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
        this.setState({ width, height });
        this.updateForces(width, height);
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
const ConnectedMap = connect<{}, MapState, GlobalState, {}>(mappedProps, actions)(MapComponent);
export default ConnectedMap;
