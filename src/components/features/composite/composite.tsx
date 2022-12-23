import React, { Component } from "react";
import { CompositeFeature, Endpoint } from "../../../types";
import { isCompositeFeature } from "../../device-page/type-guards";
import { BaseFeatureProps } from "../base";
import Button from "../../button";
import groupBy from "lodash/groupBy";
import { Feature } from "./Feature";
import cx from "classnames";
import { WithTranslation, withTranslation } from "react-i18next";

type CompositeType = "composite" | "light" | "switch" | "cover" | "lock" | "fan" | "climate";

interface CompositeProps extends BaseFeatureProps<CompositeFeature> {
    type: CompositeType;
    depth?: number;
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

        if (isCompositeFeature(feature)) {
            const { features = [] } = feature;
            const isOnlyOneFeature = features.length == 1;
            this.setState(value, () => {
                if (isOnlyOneFeature) {
                    this.onCompositeFeatureApply();
                }
            })

        } else {
            onChange(endpoint, value);
        }
    }

    allInnerFeaturesHaveValues = (): boolean => {
        const { feature: { features }, deviceState } = this.props;

        const combinedState = { ...deviceState, ...this.state };

        return features.every(el => combinedState[el.property] !== undefined)
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
        const depth = this.props.depth ?? 0;
        const { state } = this;
        const isThisACompositeFeature = isCompositeFeature(feature)
        const isMoreThanOneFeature = features.length > 1;
        const doGroupingByEndpoint = !minimal;
        let result = [] as JSX.Element[];
        const combinedState = { ...deviceState, ...state };
        if (doGroupingByEndpoint) {
            const groupedFeatures = groupBy(features, f => f.endpoint ?? MAGIC_NO_ENDPOINT);

            if (groupedFeatures[MAGIC_NO_ENDPOINT]) {
                result.push(...groupedFeatures[MAGIC_NO_ENDPOINT].map(f => <Feature
                    key={JSON.stringify(f)}
                    feature={f}
                    device={device}
                    deviceState={combinedState}
                    depth={depth + 1}
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
                    device={device}
                    deviceState={combinedState}
                    depth={depth + 1}
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
                device={device}
                depth={depth + 1}
                deviceState={combinedState}
                onChange={this.onChange}
                onRead={this.onRead}
                featureWrapperClass={featureWrapperClass}
                minimal={minimal}
            />);
            result = result.concat(renderedFeatures);
        }


        if (isThisACompositeFeature && isMoreThanOneFeature && depth === 1) {
            result.push(<div key={feature.name + 'apply'}>
                <Button disabled={!this.allInnerFeaturesHaveValues()} className={cx('btn btn-primary float-end', { 'btn-sm': minimal })} onClick={this.onCompositeFeatureApply}>{t('common:apply')}</Button>
            </div>)
        }
        return result;

    }
}

export default withTranslation(["composite", "common"])(Composite);
