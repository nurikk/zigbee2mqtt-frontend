
import React, { FunctionComponent, PropsWithChildren } from "react";
import { DeviceState, Device, Endpoint, GenericExposedFeature, CompositeFeature } from "../../types";
import { DisplayValue } from "../display-value/DisplayValue";

import { FetatureWrapperProps } from "./composite/FeatureWrapper";

export interface BaseFeatureProps<T> extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
    feature: T;
    deviceState: DeviceState;
    device: Device;
    onChange(endpoint: Endpoint, value: object): void;
    onRead(endpoint: Endpoint, value: object): void;
    // featureWrapperClass: React.ComponentType<FetatureWrapperProps>;
    featureWrapperClass: FunctionComponent<PropsWithChildren<FetatureWrapperProps>>;
    minimal?: boolean;

}


export const BaseViewer: FunctionComponent<BaseFeatureProps<GenericExposedFeature>> = (props) => {
    const { feature: { property, unit, name}, deviceState } = props;
    return <div><strong><DisplayValue value={deviceState[property]} name={name} /></strong>{unit ? <small className="text-muted ms-1">{unit}</small> : null}</div>
}

export const NoAccessError: FunctionComponent<BaseFeatureProps<GenericExposedFeature | CompositeFeature>> = ({ feature: { access } }) => <div className="alert alert-warning p-0" role="alert">Unknown acces {JSON.stringify(access, null, 4)}</div>;
