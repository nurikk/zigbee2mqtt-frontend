import React, { ChangeEvent, Component, createRef, Fragment } from 'react';
import Links from './links';
import Nodes, { getStarShape } from './nodes';
import { LinkI, NodeI } from './types';
import { MapApi } from '../../actions/actions';
import { forceCenter, forceCollide, ForceLink, forceLink, forceSimulation, forceX, forceY } from 'd3-force';
import { select } from 'd3-selection';
import { forceManyBodyReuse } from 'd3-force-reuse';
import { zoom, zoomIdentity, ZoomTransform } from 'd3-zoom';
import { linkTypes } from './consts';
import Spinner from '../spinner';
import intersection from 'lodash/intersection';
import style from './map.module.css';
import cx from 'classnames';
import { WithTranslation } from 'react-i18next';
import {
    defaultVisibleRelationsLinks,
    getDistance,
    linkStrength,
    MapState,
    processHighlights,
    PropsFromStore,
    ticked,
} from '.';
import { Offcanvas, Button } from 'react-bootstrap';

export class MapComponent extends Component<PropsFromStore & MapApi & WithTranslation<'map'>, MapState> {
    ref = createRef<HTMLDivElement>();
    svgRef = createRef<SVGSVGElement>();
    simulation = forceSimulation<NodeI, LinkI>();
    state: Readonly<MapState> = {
        width: 0,
        height: 0,
        visibleLinks: defaultVisibleRelationsLinks,
        legendIsVisible: false,
    };
    transform: ZoomTransform = zoomIdentity;

    updateNodes = (): void => {
        const { networkGraph } = this.props;
        const { visibleLinks, selectedNode, width, height } = this.state;
        const container = select<SVGElement, Record<string, unknown>>(this.svgRef.current as SVGElement);
        const node = container.selectAll<SVGElement, NodeI>(`.${style.node}`);
        const link = container.selectAll<SVGElement, LinkI>(`.${style.link}`);
        const linkLabel = container.selectAll<SVGElement, LinkI>(`.${style.linkLabel}`);

        const links = networkGraph.links.filter((l) => intersection(visibleLinks, l.relationships).length);
        this.simulation.nodes(networkGraph.nodes.concat(links as unknown as NodeI[]));
        this.simulation.force<ForceLink<NodeI, LinkI>>('link')?.links(links);
        this.simulation.on('tick', () => ticked({ transform: this.transform, node, link, linkLabel, links }));

        //add zoom capabilities
        const everything = container.selectAll<SVGGeometryElement, NodeI>('.everything');
        const zoomHandler = zoom()
            .extent([
                [0, 0],
                [width, height],
            ])
            .scaleExtent([1 / 10, 8])
            .on('zoom', ({ transform }) => {
                everything.attr('transform', transform);
            });
        zoomHandler(container);

        processHighlights({ networkGraph, links, selectedNode, node, link, linkLabel });
        node.on('click', (event, d: NodeI) => {
            this.setState({ selectedNode: selectedNode ? (null as unknown as NodeI) : d });
        });
        this.simulation.alphaTarget(0.03).restart();
    };

    updateForces(width: number, height: number): void {
        this.simulation = this.simulation
            .force(
                'link',
                forceLink<NodeI, LinkI>()
                    .id((d) => d.ieeeAddr)
                    .distance(getDistance)
                    .strength(linkStrength),
            )
            .force('charge', forceManyBodyReuse().strength(-700))
            .force('collisionForce', forceCollide())
            .force('center', forceCenter(width / 2, height / 2))
            .force('x', forceX().strength(0.1))
            .force('y', forceY().strength(0.2));
    }

    initPage = (): void => {
        const { width, height } = (this.ref.current as HTMLDivElement).getBoundingClientRect();
        this.setState({ width, height });
        this.updateForces(width, height);
    };

    componentDidMount(): void {
        setTimeout(this.initPage, 200);
    }

    componentDidUpdate(): void {
        this.updateNodes();
    }

    renderMap(): JSX.Element {
        const { width, height, visibleLinks } = this.state;

        const { networkGraph, deviceStates, devices, availability } = this.props;
        const links = networkGraph.links.filter((l) => intersection(visibleLinks, l.relationships).length > 0);
        return (
            <svg ref={this.svgRef} viewBox={`0 0 ${width} ${height}`}>
                <g className="everything">
                    <Links links={links} />
                    <Nodes
                        root={this.svgRef.current as SVGElement}
                        nodes={networkGraph.nodes}
                        simulation={this.simulation}
                        deviceStates={deviceStates}
                        devices={devices}
                        availability={availability}
                    />
                </g>
            </svg>
        );
    }
    onRequestClick = (): void => {
        const { networkMapRequest } = this.props;
        networkMapRequest();
    };
    renderMessage(): JSX.Element {
        const { networkGraphIsLoading, t } = this.props;
        return (
            <div className="h-100 d-flex justify-content-center align-items-center">
                {networkGraphIsLoading ? (
                    <div>
                        <Spinner />
                        <div>{t('loading')}</div>
                    </div>
                ) : (
                    <Button onClick={this.onRequestClick} className="btn btn-primary d-block">
                        {t('load')}
                    </Button>
                )}
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
    };
    renderMapControls(): JSX.Element {
        const { visibleLinks } = this.state;
        return (
            <div className={style.controls}>
                {linkTypes.map((linkType) => (
                    <div key={linkType.title} className="form-check form-check-inline">
                        <input
                            onChange={this.onLinkTypeFilterChange}
                            className="form-check-input"
                            type="checkbox"
                            id={linkType.title}
                            value={linkType.relationship}
                            checked={visibleLinks.includes(linkType.relationship)}
                        />
                        <label className="form-check-label" htmlFor={linkType.title}>
                            {linkType.title}
                        </label>
                    </div>
                ))}
                {
                    <div className="btn-group btn-group-sm" role="group">
                        <Button<void> title="Refresh data" className="btn btn-primary" onClick={this.onRequestClick}>
                            <i className="fa fa-sync" />
                        </Button>
                    </div>
                }
            </div>
        );
    }
    renderHelp(): JSX.Element {
        const { t } = this.props;
        const { legendIsVisible } = this.state;
        return (
            <>
                <Button
                    onClick={() => this.setState({ legendIsVisible: true })}
                    style={{ position: 'fixed', bottom: '1rem', left: '1rem' }}
                >
                    <i className="fa fa-question-circle" />
                </Button>
                <Offcanvas show={legendIsVisible} onHide={() => {
                    this.setState({ legendIsVisible: false });
                }}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Map Help</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <ul className="list-unstyled">
                        <li>
                            <div className={cx(style.node, style.Coordinator)}>
                                <svg width="28" height="28" viewBox="0 0 28 28">
                                    <polygon points={getStarShape(5, 5, 14)} />
                                </svg>{' '}
                                {t('help_is_coordinator')}
                            </div>
                        </li>
                        <li className={cx(style.EndDevice)}>{t('help_end_device_description')}</li>
                        <li className={cx(style.Router)}>{t('help_router_description')}</li>
                        <li>{t('help_coordinator_link_description')}</li>
                        <li>{t('help_router_links_description')}</li>
                        <hr />
                        <li>{t('help_lqi_description')}</li>
                    </ul>
                </Offcanvas.Body>
            </Offcanvas>
            </>
        );
    }
    render(): JSX.Element {
        const { networkGraph } = this.props;

        return (
            <div className={style.container} ref={this.ref}>
                {networkGraph.nodes.length ? (
                    <Fragment>
                        {this.renderMapControls()} {this.renderMap()}
                    </Fragment>
                ) : (
                    this.renderMessage()
                )}
                {this.renderHelp()}
            </div>
        );
    }
}
