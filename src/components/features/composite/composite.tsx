import React, { Component } from "react";
import { CompositeFeature, Endpoint, GenericExposedFeature } from "../../../types";
import { isCompositeFeature, isGenericExposedFeature } from "../../device-page/type-guards";
import { BaseFeatureProps } from "../base";
import Button from "../../button";
import groupBy from "lodash/groupBy";
import { Feature } from "./Feature";
import cx from "classnames";
import { WithTranslation, withTranslation } from "react-i18next";

type CompositeType = "composite" | "light" | "switch" | "cover" | "lock" | "fan" | "climate";

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



export class Composite extends Component<CompositeProps & WithTranslation<"composite">, CompositeState> {
    state: Readonly<CompositeState> = {}
    onChange = (endpoint: Endpoint, value: Record<string, unknown>): void => {
        const { onChange, feature } = this.props;
        if (this.isCompositeRoot()) {
            this.setState({...this.state, ...value});
        } else {
            if (isCompositeFeature(feature)) {
                this.setState(value, () => onChange(endpoint, {[feature.property]: this.state}));
            } else {
                onChange(endpoint, value);
            }
        }
    }

    allInnerFeaturesHaveValues = (): boolean => {
        const checkRecurse = (feature: CompositeFeature | GenericExposedFeature, state: CompositeState) => {
            if (!isGenericExposedFeature(feature) && feature.type !== 'composite') {
                feature = feature.features[0];
            }

            if (state[feature.property] === undefined) {
                return false;
            } else if (isCompositeFeature(feature)) {
                return feature.features.every(f => checkRecurse(f, state[feature.property] as CompositeState));
            }
            return true;
        }

        return this.props.feature.features.every(f => checkRecurse(f, this.state));
    }
    
    isCompositeRoot = (): boolean => {
        return isCompositeFeature(this.props.feature) && !this.props.parentFeatures?.find((f) => f.type);
    }
    
    onCompositeFeatureApply = (): void => {
        const { onChange, feature: { endpoint, property } } = this.props;
        onChange(endpoint as Endpoint, property ? { [property]: this.state } : this.state);
    }

    onRead = (endpoint: Endpoint, property: Record<string, unknown>): void => {
        const { onRead, feature } = this.props;
        if (isCompositeFeature(feature)) {
            onRead && onRead(endpoint, { [feature.property]: property })
        } else {
            onRead && onRead(endpoint, property);
        }
    }
    render(): JSX.Element[] {

        const MAGIC_NO_ENDPOINT = 'MAGIC_NO_ENDPOINT';
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { t, showEndpointLabels = false, feature, device, deviceState, onRead: _onRead, onChange: _onChange, featureWrapperClass, minimal } = this.props;
        const { features = [] } = feature;
        const parentFeatures = this.props.parentFeatures ?? [];
        const { state } = this;
        const doGroupingByEndpoint = !minimal;
        let result = [] as JSX.Element[];
        const combinedState = { ...deviceState, ...state };
        if (doGroupingByEndpoint) {
            const groupedFeatures = groupBy(features, f => f.endpoint ?? MAGIC_NO_ENDPOINT);

            if (groupedFeatures[MAGIC_NO_ENDPOINT]) {
                result.push(...groupedFeatures[MAGIC_NO_ENDPOINT].map(f => <Feature
                    key={JSON.stringify(f)}
                    feature={f}
                    parentFeatures={[...parentFeatures, feature]}
                    device={device}
                    deviceState={combinedState}
                    onChange={this.onChange}
                    onRead={this.onRead}
                    featureWrapperClass={featureWrapperClass}
                    minimal={minimal}
                />));
                delete groupedFeatures[MAGIC_NO_ENDPOINT];
            }
            for (const epName in groupedFeatures) {
                const featuresGroup = groupedFeatures[epName];
                result.push(<div key={epName}>{showEndpointLabels ? `Endpoint: ${epName}` : null}<div className="ps-4">{featuresGroup.map(f => <Feature
                    key={f.name + f.endpoint}
                    feature={f}
                    parentFeatures={[...parentFeatures, feature]}
                    device={device}
                    deviceState={combinedState}
                    onChange={this.onChange}
                    onRead={this.onRead}
                    featureWrapperClass={featureWrapperClass}
                    minimal={minimal}
                />)}</div></div>);
            }
        } else {
            const renderedFeatures = features.map(f => <Feature
                key={JSON.stringify(f)}
                feature={f}
                parentFeatures={[...parentFeatures, feature]}
                device={device}
                deviceState={combinedState}
                onChange={this.onChange}
                onRead={this.onRead}
                featureWrapperClass={featureWrapperClass}
                minimal={minimal}
            />);
            result = result.concat(renderedFeatures);
        }


        if (this.isCompositeRoot()) {
            result.push(<div key={feature.name + 'apply'}>
                <Button disabled={!this.allInnerFeaturesHaveValues()} className={cx('btn btn-primary float-end', { 'btn-sm': minimal })} onClick={this.onCompositeFeatureApply}>{t('common:apply')}</Button>
            </div>)
        }
        return result;

    }
}

export default withTranslation(["composite", "common"])(Composite);
