import React from "react";
import { CompositeFeature, Device } from "../../types";
import actions from "../../actions/actions";
import { connect } from "unistore/react";
import { GlobalState, WithBridgeInfo } from "../../store";

import Composite from "../features/composite/composite";
import { FeatureWrapper } from "../features/composite/FeatureWrapper";
import { useTranslation } from "react-i18next";
import { DeviceApi } from "../../actions/DeviceApi";

type DeviceSpecificSettingsProps = {
    device: Device;
} & WithBridgeInfo & Pick<DeviceApi, "setDeviceOptions">;


function DeviceSpecificSettings(props: DeviceSpecificSettingsProps & Pick<DeviceApi, "setDeviceOptions">) {
    const { device, bridgeInfo: { config }, setDeviceOptions } = props;
    const { t } = useTranslation(["exposes"]);
    const deviceState = (config.devices[device.ieee_address] ?? {});
    if (device.definition?.options?.length) {
        return <Composite showEndpointLabels={true}
            feature={{ features: device.definition.options } as CompositeFeature}
            type="composite"
            device={device}
            deviceState={deviceState}
            onChange={async (endpoint, value) => {
                await setDeviceOptions(device.ieee_address, value as Record<string, unknown>);
            }}
            onRead={(endpoint, value) => {
                //empty function to prevent read
            }}
            featureWrapperClass={FeatureWrapper}
        />
    } else {
        return t('empty_exposes_definition');
    }
}

const mappedProps = ["bridgeInfo"];

const ConnectedDeviceSpecificSettings = connect<DeviceSpecificSettingsProps, unknown, GlobalState, Pick<DeviceApi, "setDeviceOptions">>(mappedProps, actions)(DeviceSpecificSettings);
export default ConnectedDeviceSpecificSettings;
