import React, { ChangeEvent, Component, Fragment } from 'react';

import { MapApi } from '../../actions/actions';
import Button from '../button';
import Spinner from '../spinner';

import style from './map.module.css';
import { WithTranslation } from 'react-i18next';
import { defaultVisibleRelationsLinks, MapState, PropsFromStore } from '.';
import { ControlsContainer, FullScreenControl, SearchControl, SigmaContainer, ZoomControl } from '@react-sigma/core';

import { createNodeImageProgram } from '@sigma/node-image';
import { LayoutsControl } from './LayoutsControl';
import { EdgeCurvedArrowProgram } from '@sigma/edge-curve';
import { createNodeBorderProgram } from '@sigma/node-border';

import '@react-sigma/core/lib/react-sigma.min.css';

import { createNodeCompoundProgram, EdgeArrowProgram } from 'sigma/rendering';

import { ZigbeeGraph } from './ZigbeeGraph';
import { GraphEvents } from './GraphEvents';
import { MultiDirectedGraph } from 'graphology';
import { linkTypes } from './consts';

const sigmaSettings = {
    allowInvalidContainer: true,
    defaultNodeType: 'pictogram',
    nodeProgramClasses: {
        pictogram: createNodeCompoundProgram([
            createNodeBorderProgram({
                borders: [
                    { size: { value: 0.1 }, color: { attribute: 'pictoColor' } },
                    { size: { value: 1 }, color: { attribute: 'color' } },
                ],
            }),
            createNodeImageProgram({
                padding: 0.1,
            }),
        ]),
    },
    zIndex: true,
    renderEdgeLabels: true,
    defaultEdgeType: 'straight',
    edgeProgramClasses: {
        straight: EdgeArrowProgram,
        curved: EdgeCurvedArrowProgram,
    },
    labelColor: { color: '#00f' },
    labelDensity: 0.07,
    labelGridCellSize: 60,
    labelRenderedSizeThreshold: 15,
};

export class MapComponent extends Component<PropsFromStore & MapApi & WithTranslation<'map'>, MapState> {
    state: Readonly<MapState> = {
        visibleLinks: defaultVisibleRelationsLinks,
        legendIsVisible: true,
    };

    renderMap(): JSX.Element {
        const { networkGraph, devices } = this.props;
        const { visibleLinks } = this.state;
        return (
            <SigmaContainer settings={sigmaSettings} graph={MultiDirectedGraph}>
                <ZigbeeGraph devices={devices} networkGraph={networkGraph} visibleLinks={visibleLinks} />
                <GraphEvents />
                <ControlsContainer position={'bottom-right'}>
                    <ZoomControl />
                    <FullScreenControl />
                    <LayoutsControl />
                </ControlsContainer>
                <ControlsContainer position={'top-right'}>
                    <SearchControl style={{ width: '200px' }} />
                    {this.renderMapControls()}
                </ControlsContainer>
            </SigmaContainer>
        );
    }

    onRequestClick = async () => {
        const { networkMapRequest } = this.props;
        await networkMapRequest();
    };

    renderMessage(): JSX.Element {
        const { networkGraphIsLoading, t } = this.props;
        return (
            <div className="h-100 d-flex justify-content-center align-items-center">
                {networkGraphIsLoading ? (
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">
                                <Spinner />
                            </div>
                            <div>{t('loading')}</div>
                        </div>
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
    render(): JSX.Element {
        const { networkGraph } = this.props;

        return (
            <div className={style.container}>
                {networkGraph.nodes.length ? <Fragment>{this.renderMap()}</Fragment> : this.renderMessage()}
            </div>
        );
    }
}
