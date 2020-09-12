import React, { ChangeEvent, Component, createRef, Fragment, useEffect } from "react";
import Links from "./links";
import Nodes from "./nodes";
import * as d3 from "d3";
import style from "./map.css";
import { LinkI, NodeI, ZigbeeRelationship } from "./types";
import Tooltip from "./tooltip";
import { genDeviceDetailsLink } from "../../utils";
import { connect } from "unistore/react";
import { GlobalState } from "../../store";
import actions, { MapApi } from "../../actions";

import Button from "../button";
import { Route } from "react-router";


export interface MouseEventsResponderNode {
    onMouseOver?: (arg0: NodeI) => void;
    onMouseOut?: (arg0: NodeI) => void;
    onDblClick?: (arg0: NodeI) => void;
}

interface MapState {
    tooltipNode: NodeI | false;
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
    simulation!: d3.Simulation<NodeI, LinkI>;

    constructor(props) {
        super(props);


        this.simulation = d3.forceSimulation<NodeI>();

        this.state = {
            width: 0,
            height: 0,
            tooltipNode: false,
            visibleLinks: [ZigbeeRelationship.NeigbhorIsAChild]
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

                const dx = x2 - x1,
                    dy = y2 - y1;
                const dr = Math.sqrt(dx * dx + dy * dy) * 2;
                if (d.repeated) {
                    return `M${x1},${y1} A${dr},${dr} 0 0, 1${x2},${y2}`;
                }
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
                debugger
                // route(genDeviceDetailsLink(node.friendlyName), true);
                break;
            default:
                break;
        }
    };

    updateForces(): void {
        const { width, height } = this.state;

        const linkForce = d3.forceLink<NodeI, LinkI>()
            .id(d => d.networkAddress.toString())
            .distance(getDistance)
            .strength(0.2);
        const chargeForce = d3.forceManyBody()
            .distanceMin(200)
            .distanceMax(1000)
            .strength(-200);

        const repelForce = d3.forceManyBody()
            .strength(-140)
            .distanceMax(50)
            .distanceMin(20);

        const collisionForce = d3.forceCollide(40)
            .strength(1)
            .iterations(50);

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

    renderMap() {
        const { width, height, tooltipNode, visibleLinks } = this.state;
        const { networkGraph } = this.props;
        const { setTooltip, removeTooltip, openDetailsWindow } = this;
        const visibleLinksGlued = visibleLinks.join('');

        useEffect(() => {
            this.updateNodes();
        }, [networkGraph.nodes.length, visibleLinksGlued]);
        return (
            <svg viewBox={`0 0 ${width} ${height}`} key={visibleLinksGlued}>
                <defs>

                    <marker viewBox="-0 -5 10 10" id="arrowhead" markerWidth="13" markerHeight="13" refX="13" refY="0" orient="auto" markerUnits="strokeWidth">
                        <path d="M 0 0 L 10 4 L 0 8 L2 4 z" fill="#999" />
                    </marker>
                </defs>
                <Links visible={visibleLinks} links={networkGraph.links} />
                <Nodes
                    nodes={networkGraph.nodes}
                    simulation={this.simulation}
                    onMouseOver={setTooltip}
                    onMouseOut={removeTooltip}
                    onDblClick={openDetailsWindow}
                />
                {
                    tooltipNode ? (
                        <foreignObject
                            className={style.foreignObject}
                            x={tooltipNode.x as number + 10}
                            y={tooltipNode.y as number + 5}
                        >
                            <Tooltip info={tooltipNode} />
                        </foreignObject>
                    ) : null
                }
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
            <div className="container h-100">
                <div className="row h-100 justify-content-center align-items-center">
                    {
                        networkGraphIsLoading ? (
                            <div className="justify-content-center align-items-center">
                                <div className="row">
                                    <div className="col-6 mx-auto">
                                        Loading, please wait.
                                        <div className="spinner-border" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6 mx-auto">
                                        Depending on the size of your network this can take somewhere between 10 seconds and 2 minutes.
                                        </div>
                                </div>

                            </div>
                        ) : (
                                <div className=" justify-content-center align-items-centerr">
                                    <div className="row">
                                        <div className="col-6 mx-auto">
                                            No map data.
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6 mx-auto">
                                            <Button onClick={this.onRequestClick} className="btn btn-primary d-block">Requests?</Button>
                                        </div>
                                    </div>
                                </div>
                            )
                    }
                </div>
            </div>
        );
    }
    onLinkTypeFilterChange = (e: ChangeEvent<HTMLInputElement>): void => {
        let { visibleLinks } = this.state;
        const { checked, value } = e.target;
        const inValue = parseInt(value, 10);
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
                    <div className="form-check form-check-inline">
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
