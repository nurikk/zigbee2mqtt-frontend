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
    stepsConfiguration?: Record<string, unknown>;
    minimal?: boolean;
}

interface CompositeState {
    [key: string]: unknown;
}



export class Composite extends Component<CompositeProps & WithTranslation<"composite">, CompositeState> {
    state: Readonly<CompositeState> = {}
    onChange = (endpoint: Endpoint, value: Record<string, unknown>): void=> {
        const { onChange, feature } = this.props;
        if (isCompositeFeature(feature)) {
            this.setState(value)
        } else {
            onChange(endpoint, value);
        }
    }
    onApplyClick = (): void=> {
        const { onChange, feature: { endpoint, property } } = this.props;
        onChange(endpoint as Endpoint, property ? { [property]: this.state } : this.state);
    }

    onRead = (endpoint: Endpoint, property: Record<string, unknown>): void=> {
        const { onRead, feature } = this.props;
        if (isCompositeFeature(feature)) {
            onRead(endpoint, { [feature.property]: property })
        } else {
            onRead(endpoint, property);
        }
    }
    render(): JSX.Element[] {

        const MAGIC_NO_ENDPOINT = 'MAGIC_NO_ENDPOINT';
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { t, feature, device, deviceState, onRead: _onRead, onChange: _onChange, featureWrapperClass, minimal } = this.props;
        const { features } = feature;

        const doGroupingByEndpoint = !minimal;
        let result = [] as JSX.Element[];
        if (doGroupingByEndpoint) {
            const groupedFeatures = groupBy(features, f => f.endpoint ?? MAGIC_NO_ENDPOINT);

            if (groupedFeatures[MAGIC_NO_ENDPOINT]) {
                result.push(...groupedFeatures[MAGIC_NO_ENDPOINT].map(f => <Feature
                    key={f.name + f.endpoint}
                    feature={f}
                    device={device}
                    deviceState={deviceState}
                    onChange={this.onChange}
                    onRead={this.onRead}
                    featureWrapperClass={featureWrapperClass}
                    minimal={minimal}
                />));
                delete groupedFeatures[MAGIC_NO_ENDPOINT];
            }
            for (const epName in groupedFeatures) {
                const featuresGroup = groupedFeatures[epName];
                result.push(<div key={epName}>Endpoint: {epName}<div className="ps-4">{...featuresGroup.map(f => <Feature
                    key={f.name + f.endpoint}
                    feature={f}
                    device={device}
                    deviceState={deviceState}
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
                deviceState={deviceState}
                onChange={this.onChange}
                onRead={this.onRead}
                featureWrapperClass={featureWrapperClass}
                minimal={minimal}
            />);
            result = result.concat(renderedFeatures);
        }


        if (isCompositeFeature(feature)) {
            result.push(<div key={feature.name + 'apply'}><Button className={cx('btn btn-primary float-end', {'btn-sm': minimal})} onClick={this.onApplyClick}>{t('common:apply')}</Button></div>)
        }
        return result;

    }
}

export default withTranslation(["composite", "common"])(Composite);
