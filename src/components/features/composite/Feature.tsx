import React, { FunctionComponent, PropsWithChildren } from "react";

import { CompositeFeature, Device, DeviceState, Endpoint, GenericExposedFeature } from "../../../types";
import { isBinaryFeature, isNumericFeature, isTextualFeature, isEnumFeature, isLightFeature, isSwitchFeature, isCoverFeature, isLockFeature, isColorFeature, isClimateFeature, isCompositeFeature } from "../../device-page/type-guards";
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
import { FetatureWrapperProps } from "./FeatureWrapper";


interface FeatureProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
    feature: CompositeFeature | GenericExposedFeature;
    deviceState: DeviceState;
    device: Device;
    stepsConfiguration?: object;
    onChange(endpoint: Endpoint, value: object): void;
    onRead(endpoint: Endpoint, value: object): void;
    featureWrapperClass: FunctionComponent<PropsWithChildren<FetatureWrapperProps>>;
    minimal?: boolean;
}

export const Feature = (props: FeatureProps) => {

    const { feature, device, deviceState, stepsConfiguration, onRead, onChange, featureWrapperClass: FeatureWrapper, minimal } = props;

    const genericParams = { key: JSON.stringify(feature), device, deviceState, onChange, onRead, featureWrapperClass: FeatureWrapper, minimal };
    const wrapperParams = { key: JSON.stringify(feature), feature, onRead };

    if (isBinaryFeature(feature)) {
        return <FeatureWrapper {...wrapperParams} >
            <Binary feature={feature} {...genericParams} featureWrapperClass={FeatureWrapper} />
        </FeatureWrapper>
    } else if (isNumericFeature(feature)) {
        return <FeatureWrapper {...wrapperParams}>
            <Numeric feature={feature} {...genericParams}
                steps={stepsConfiguration?.[feature.name]}
                featureWrapperClass={FeatureWrapper}
            />
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
    } else if (isCompositeFeature(feature)) {
        return <FeatureWrapper {...wrapperParams}>
            {/* <div className="row" > */}
            <Composite className="row" type="composite" feature={feature} {...genericParams} />
            {/* </div> */}
        </FeatureWrapper>
    }
    return (<FeatureWrapper {...wrapperParams}>
        <pre>{JSON.stringify(feature, null, 4)}</pre>
    </FeatureWrapper>);
}
