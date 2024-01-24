import React, { Component } from 'react';
import { CompositeFeature, Endpoint, GenericExposedFeature } from '../../../types';
import { isCompositeFeature, isGenericExposedFeature } from '../../device-page/type-guards';
import { BaseFeatureProps } from '../base';
import Button from '../../button';
import groupBy from 'lodash/groupBy';
import { Feature } from './Feature';
import cx from 'classnames';
import { WithTranslation, withTranslation } from 'react-i18next';
import isEqual from 'lodash/isEqual';

type CompositeType = 'composite' | 'light' | 'switch' | 'cover' | 'lock' | 'fan' | 'climate';

interface CompositeProps extends BaseFeatureProps<CompositeFeature> {
    type: CompositeType;
    parentFeatures?: (CompositeFeature | GenericExposedFeature)[];
    stepsConfiguration?: Record<string, unknown>;
    minimal?: boolean;
    showEndpointLabels?: boolean;
}

interface CompositeState {
    [key: string]: unknown;
}

export class Composite extends Component<CompositeProps & WithTranslation<'composite'>, CompositeState> {
    state: Readonly<CompositeState> = {};
    onChange = (endpoint: Endpoint, value: Record<string, unknown>): void => {
        const { onChange, feature } = this.props;
        this.setState({ ...this.state, ...value });
        if (!this.isCompositeRoot()) {
            if (isCompositeFeature(feature)) {
                onChange(endpoint, feature.property ? { [feature.property]: { ...this.state, ...value } } : value);
            } else {
                onChange(endpoint, value);
            }
        }
    };

    isCompositeRoot = (): boolean => {
        const { parentFeatures } = this.props;
        return (
            isCompositeFeature(this.props.feature) &&
            parentFeatures !== undefined &&
            (parentFeatures.length === 1 ||
                // When parent is e.g. climate
                (parentFeatures.length === 2 && ![undefined, 'composite', 'list'].includes(parentFeatures[1].type)))
        );
    };

    onCompositeFeatureApply = (): void => {
        const {
            deviceState,
            onChange,
            feature: { endpoint, property },
        } = this.props;
        const { state } = this;
        const newState = { ...deviceState, ...state };
        onChange(endpoint as Endpoint, property ? { [property]: newState } : newState);
    };

    onRead = (endpoint: Endpoint, property: Record<string, unknown>): void => {
        const { onRead, feature } = this.props;
        if (isCompositeFeature(feature)) {
            onRead && onRead(endpoint, feature.property ? { [feature.property]: property } : property);
        } else {
            onRead && onRead(endpoint, property);
        }
    };
    render(): JSX.Element[] {
        const MAGIC_NO_ENDPOINT = 'MAGIC_NO_ENDPOINT';
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const {
            t,
            showEndpointLabels = false,
            feature,
            device,
            deviceState,
            onRead: _onRead,
            onChange: _onChange,
            featureWrapperClass,
            minimal,
        } = this.props;
        const { features = [] } = feature;
        const parentFeatures = this.props.parentFeatures ?? [];
        const { state } = this;
        const doGroupingByEndpoint = !minimal;
        let result = [] as JSX.Element[];
        const combinedState = { ...deviceState, ...state };
        if (doGroupingByEndpoint) {
            const groupedFeatures = groupBy(features, (f) => f.endpoint ?? MAGIC_NO_ENDPOINT);

            if (groupedFeatures[MAGIC_NO_ENDPOINT]) {
                result.push(
                    ...groupedFeatures[MAGIC_NO_ENDPOINT].map((f) => (
                        <Feature
                            key={JSON.stringify(f)}
                            feature={f}
                            parentFeatures={[...parentFeatures, feature]}
                            device={device}
                            deviceState={combinedState}
                            onChange={this.onChange}
                            onRead={this.onRead}
                            featureWrapperClass={featureWrapperClass}
                            minimal={minimal}
                        />
                    )),
                );
                delete groupedFeatures[MAGIC_NO_ENDPOINT];
            }
            for (const epName in groupedFeatures) {
                const featuresGroup = groupedFeatures[epName];
                result.push(
                    <div key={epName}>
                        {showEndpointLabels ? `Endpoint: ${epName}` : null}
                        <div className="ps-4">
                            {featuresGroup.map((f) => (
                                <Feature
                                    key={f.name + f.endpoint}
                                    feature={f}
                                    parentFeatures={parentFeatures}
                                    device={device}
                                    deviceState={combinedState}
                                    onChange={this.onChange}
                                    onRead={this.onRead}
                                    featureWrapperClass={featureWrapperClass}
                                    minimal={minimal}
                                />
                            ))}
                        </div>
                    </div>,
                );
            }
        } else {
            const renderedFeatures = features.map((f) => (
                <Feature
                    key={JSON.stringify(f)}
                    feature={f}
                    parentFeatures={parentFeatures}
                    device={device}
                    deviceState={combinedState}
                    onChange={this.onChange}
                    onRead={this.onRead}
                    featureWrapperClass={featureWrapperClass}
                    minimal={minimal}
                />
            ));
            result = result.concat(renderedFeatures);
        }

        if (this.isCompositeRoot()) {
            result.push(
                <div key={feature.name + 'apply'}>
                    <Button
                        className={cx('btn btn-primary float-end', { 'btn-sm': minimal })}
                        onClick={this.onCompositeFeatureApply}
                    >
                        {t('common:apply')}
                    </Button>
                </div>,
            );
        }
        return result;
    }
}
function compositePropsAreEqual(prevProps: CompositeProps, nextProps: CompositeProps) {
    const checkProps: (keyof CompositeProps)[] = ['deviceState', 'device', 'feature'];
    return checkProps.every((p) => isEqual(prevProps[p], nextProps[p]));
}
export default withTranslation(['composite', 'common'])(React.memo(Composite, compositePropsAreEqual));
