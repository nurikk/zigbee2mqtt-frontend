import React, { ChangeEvent, Component, createRef, Fragment } from 'react';
import Links from './links';
import Nodes, { getStarShape } from './nodes';
import { GraphI, LinkI, NodeI, ZigbeeRelationship } from './types';
import { connect } from 'unistore/react';
import { GlobalState } from '../../store';
import actions, { MapApi } from '../../actions/actions';

import Button from '../button';
import { ForceLink, forceLink, forceCollide, forceCenter, forceSimulation, forceX, forceY } from 'd3-force';
import { select, Selection } from 'd3-selection';
import { forceManyBodyReuse } from 'd3-force-reuse';
import { zoom, zoomIdentity, ZoomTransform } from 'd3-zoom';
import { linkTypes } from './consts';
import Spinner from '../spinner';
import intersection from 'lodash/intersection';
import style from './map.module.css';
import cx from 'classnames';
import { WithTranslation, withTranslation } from 'react-i18next';
export interface MouseEventsResponderNode {
    onMouseOver?: (arg0: NodeI, el: SVGElement) => void;
    onMouseOut?: (arg0: NodeI, el: SVGElement) => void;
    onDblClick?: (arg0: NodeI, el: SVGElement) => void;
}

interface MapState {
    selectedNode?: NodeI;
    width: number;
    height: number;
    visibleLinks: ZigbeeRelationship[];
    legendIsVisible: boolean;
}

const parentOrChild = [ZigbeeRelationship.NeigbhorIsAChild, ZigbeeRelationship.NeigbhorIsParent];
const linkStrength = (d: LinkI) => {
    if (d.linkType === 'Router2Router') {
        return 1;
    }
    if (parentOrChild.includes(d.relationship)) {
        return 0.5;
    }

    return 0;
};
const defaultVisibleRelationsLinks = [...parentOrChild, ZigbeeRelationship.NeigbhorIsASibling];
const baseDistance = 100;
const distancesMap = {
    BrokenLink: 5 * baseDistance,
    Router2Router: 2.5 * baseDistance,
    Coordinator2Router: 2.5 * baseDistance,
    Coordinator2EndDevice: baseDistance,
    EndDevice2Router: baseDistance,
};

const getDistance = (d: LinkI): number => {
    return distancesMap[d.linkType] ?? 250;
};

const computeLink = (d: LinkI, transform: ZoomTransform): string => {
    const src = d.source;
    const dst = d.target;
    const [x1, y1] = transform.apply([src.x as number, src.y as number]);
    const [x2, y2] = transform.apply([dst.x as number, dst.y as number]);
    return `M ${x1} ${y1} L ${x2} ${y2}`;
};

type SelNode = Selection<SVGElement, NodeI, SVGElement, Record<string, unknown>>;
type SelLink = Selection<SVGElement, LinkI, SVGElement, Record<string, unknown>>;

type TickedParams = {
    transform: ZoomTransform;
    node: SelNode;
    link: SelLink;
    linkLabel: SelLink;
    links: LinkI[];
};

const ticked = ({ transform, node, link, linkLabel, links }: TickedParams): void => {
    links.forEach((d) => {
        const [x1, y1] = transform.apply([d.source.x as number, d.source.y as number]),
            [x2, y2] = transform.apply([d.target.x as number, d.target.y as number]);

        (d as unknown as NodeI).x = (x2 + x1) / 2;
        (d as unknown as NodeI).y = (y2 + y1) / 2;
    });
    link.attr('d', (d) => computeLink(d, transform));
    linkLabel
        .attr('x', ({ source, target }) => transform.applyX(((source.x as number) + (target.x as number)) / 2))
        .attr('y', ({ source, target }) => transform.applyY(((source.y as number) + (target.y as number)) / 2));

    node.attr('transform', (d: NodeI) => {
        const imgXShift = 32 / 2;
        const imgYShift = 32 / 2;
        const [X, Y] = transform.apply([d.x as number, d.y as number]);
        return `translate(${X - imgXShift}, ${Y - imgYShift})`;
    });
};
type ProcessHighlightsParams = {
    networkGraph: GraphI;
    links: LinkI[];
    selectedNode?: NodeI;
    node: SelNode;
    link: SelLink;
    linkLabel: SelLink;
};
const processHighlights = ({ networkGraph, links, selectedNode, node, link, linkLabel }: ProcessHighlightsParams) => {
    const linkedByIndex = new Set<string>();
    networkGraph.nodes.forEach((n) => linkedByIndex.add(n.ieeeAddr + ',' + n.ieeeAddr));
    links.forEach((l) => linkedByIndex.add(l.source.ieeeAddr + ',' + l.target.ieeeAddr));

    const neighboring = (a: NodeI, b: NodeI): boolean => linkedByIndex.has(a.ieeeAddr + ',' + b.ieeeAddr);
    const computeOpacity = (l: LinkI) => (l?.source === selectedNode || l?.target === selectedNode ? 1 : 0.15);
    if (selectedNode) {
        node.style('opacity', (o: NodeI) => (neighboring(selectedNode, o) || neighboring(o, selectedNode) ? 1 : 0.15));
        link.style('stroke-opacity', computeOpacity);
        linkLabel.style('opacity', computeOpacity);
    } else {
        node.style('opacity', 1);
        link.style('stroke-opacity', 1);
        linkLabel.style('opacity', 1);
    }
};
type PropsFromStore = Pick<
    GlobalState,
    'networkGraph' | 'networkGraphIsLoading' | 'deviceStates' | 'devices' | 'availability'
>;
export class MapComponent extends Component<PropsFromStore & MapApi & WithTranslation<'map'>, MapState> {
    ref = createRef<HTMLDivElement>();
    svgRef = createRef<SVGSVGElement>();
    simulation = forceSimulation<NodeI, LinkI>();
    state: Readonly<MapState> = {
        width: 0,
        height: 0,
        visibleLinks: defaultVisibleRelationsLinks,
        legendIsVisible: true,
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
            <div
                className={cx('fixed-bottom', { 'd-none': !legendIsVisible })}
                onClick={() => this.setState({ legendIsVisible: false })}
            >
                <div className={cx(style.node, style.Coordinator)}>
                    <svg width="28" height="28" viewBox="0 0 28 28">
                        <polygon points={getStarShape(5, 5, 14)} />
                    </svg>{' '}
                    {t('help_is_coordinator')}
                </div>
                <div className={cx(style.node, style.EndDevice)}>{t('help_end_device_description')}</div>
                <div className={cx(style.node, style.Router)}>{t('help_router_description')}</div>

                <div>{t('help_coordinator_link_description')}</div>
                <div>{t('help_router_links_description')}</div>
                <div>{t('help_lqi_description')}</div>
                <div>{t('hide')}</div>
            </div>
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

const mappedProps = ['networkGraph', 'networkGraphIsLoading', 'deviceStates', 'devices', 'availability'];
const ConnectedMap = withTranslation('map')(
    connect<unknown, MapState, GlobalState, unknown>(mappedProps, actions)(MapComponent),
);
export default ConnectedMap;
