import React, { FunctionComponent, PropsWithChildren } from "react";

import { CompositeFeature, Device, DeviceState, Endpoint, GenericExposedFeature } from "../../../types";
import { isBinaryFeature, isNumericFeature, isTextualFeature, isEnumFeature, isLightFeature, isSwitchFeature, isCoverFeature, isLockFeature, isColorFeature, isClimateFeature, isCompositeFeature, isFanFeature, isListFeature } from "../../device-page/type-guards";
import Binary from "../binary/binary";
import Climate from "../climate/climate";
import Cover from "../cover/cover";
import Color from "../composite/color/color";
import Enum from "../enum/enum";
import Light from "../light/light";
import Lock from "../lock/lock";
import Numeric from "../numeric/numeric";
import Textual from "../textual/textual";
import Composite from "./composite";
import Switch from "../switch/switch";
import { FeatureWrapperProps } from "./FeatureWrapper";
import { ValueWithLabelOrPrimitive } from "../../enum-editor/enum-editor";
import Fan from "../fan/fan";
import List from "../list/list";


interface FeatureProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
    feature: CompositeFeature | GenericExposedFeature;
    deviceState: DeviceState;
    device: Device;
    stepsConfiguration?: Record<string, unknown>;
    onChange(endpoint: Endpoint, value: Record<string, unknown>): void;
    onRead(endpoint: Endpoint, value: Record<string, unknown>): void;
    featureWrapperClass: FunctionComponent<PropsWithChildren<FeatureWrapperProps>>;
    minimal?: boolean;
}

export const Feature = (props: FeatureProps): JSX.Element => {

    const { feature, device, deviceState, stepsConfiguration, onRead, onChange, featureWrapperClass: FeatureWrapper, minimal } = props;

    const genericParams = { key: JSON.stringify(feature), device, deviceState, onChange, onRead, featureWrapperClass: FeatureWrapper, minimal };
    const wrapperParams = { key: JSON.stringify(feature), feature, onRead, deviceState };

    if (isBinaryFeature(feature)) {
        return <FeatureWrapper {...wrapperParams} >
            <Binary feature={feature} {...genericParams} />
        </FeatureWrapper>
    } else if (isNumericFeature(feature)) {
        return <FeatureWrapper {...wrapperParams}>
            <Numeric feature={feature} {...genericParams}
                steps={stepsConfiguration?.[feature.name] as ValueWithLabelOrPrimitive[]}
            />
        </FeatureWrapper>
    } else if (isListFeature(feature)) {
        return <FeatureWrapper {...wrapperParams}>
            <List feature={feature} {...genericParams} />
        </FeatureWrapper>
    } else if (isTextualFeature(feature)) {
        return <FeatureWrapper {...wrapperParams}>
            <Textual feature={feature} {...genericParams} />
        </FeatureWrapper>
    } else if (isEnumFeature(feature)) {
        return <FeatureWrapper {...wrapperParams}>
            <Enum feature={feature} {...genericParams} />
        </FeatureWrapper>
    } else if (isLightFeature(feature)) {
        return <Light feature={feature} {...genericParams} />
    } else if (isSwitchFeature(feature)) {
        return <Switch feature={feature} {...genericParams} />
    } else if (isCoverFeature(feature)) {
        return <Cover feature={feature} {...genericParams} />
    } else if (isLockFeature(feature)) {
        return <Lock feature={feature} {...genericParams} />
    } else if (isColorFeature(feature)) {
        return <FeatureWrapper {...wrapperParams}>
            <Color feature={feature} {...genericParams} />
        </FeatureWrapper>
    } else if (isClimateFeature(feature)) {
        return <Climate feature={feature} {...genericParams} />
    } else if (isFanFeature(feature)) {
        return <Fan feature={feature} {...genericParams} />
    } else if (isCompositeFeature(feature)) {
        return <FeatureWrapper {...wrapperParams}>
            <Composite type="composite" feature={feature} {...genericParams} deviceState={(deviceState[feature.property] ?? {}) as DeviceState} />
        </FeatureWrapper>
    }
    return (<FeatureWrapper {...wrapperParams}>
        <pre>{JSON.stringify(feature, null, 4)}</pre>
    </FeatureWrapper>);
}
