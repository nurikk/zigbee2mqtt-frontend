import React, { FunctionComponent, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { CompositeFeature, GenericExposedFeature, Endpoint, FeatureAccessMode, DeviceState } from '../../../types';
import Button from '../../button';
import { isColorFeature } from '../../device-page/type-guards';

export type FeatureWrapperProps = {
    feature: CompositeFeature | GenericExposedFeature;
    parentFeatures: (CompositeFeature | GenericExposedFeature)[];
    deviceState?: DeviceState;
    onRead(endpoint: Endpoint, property: Record<string, unknown>): void;
};
export const FeatureWrapper: FunctionComponent<PropsWithChildren<FeatureWrapperProps>> = (props) => {
    const { t } = useTranslation(['featureDescriptions']);
    const { children, feature, onRead } = props;
    const isColor = isColorFeature(feature);
    const isReadable = (feature.property && feature.access & FeatureAccessMode.ACCESS_READ) || isColor;

    const parentFeature = props.parentFeatures?.[props.parentFeatures.length - 1]
    let label = feature.label;
    if (feature.name === 'state' && !['light', 'switch'].includes(parentFeature.type)) {
        label = `${parentFeature.label} ${feature.label.charAt(0).toLowerCase()}${feature.label.slice(1)}`;
    }

    // if (feature.name === 'state')
    const leftColumn = (
        <div className="col-12 col-md-3">
            <label className="col-form-label w-100">
                <div className="d-flex justify-content-between">
                    <strong title={JSON.stringify(feature)}>{label}</strong>
                    {isReadable ? (
                        <Button<CompositeFeature | GenericExposedFeature>
                            item={feature}
                            onClick={(item) => {
                                onRead(feature.endpoint as Endpoint, { [item.property as string]: '' });
                            }}
                            className="btn btn-primary btn-sm"
                        >
                            <i className="fa fa-sync" />
                        </Button>
                    ) : null}
                </div>
                {feature.description ? <small className="d-block text-muted">{t(feature.description)}</small> : null}
            </label>
        </div>
    );
    return (
        <div className="row border-bottom py-1 w-100 align-items-center">
            {(isReadable || feature.description) && leftColumn}
            <div className="col-12 col-md-9">{children}</div>
        </div>
    );
};
