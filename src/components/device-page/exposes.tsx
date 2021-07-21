import React from "react";
import { CompositeFeature, Device, DeviceState } from "../../types";
import actions from "../../actions/actions";
import { StateApi } from "../../actions/StateApi";
import { connect } from "unistore/react";
import { GlobalState } from "../../store";

import Composite from "../features/composite/composite";
import { FeatureWrapper } from "../features/composite/FeatureWrapper";
import { useTranslation } from "react-i18next";

type ExposesProps = {
    device: Device;
}

type PropsFromStore = Pick<GlobalState, 'deviceStates'>;

function Exposes(props: ExposesProps & PropsFromStore & StateApi) {
    const { device, deviceStates, setDeviceState, getDeviceState } = props;
    const { t } = useTranslation();
    const deviceState = deviceStates[device.friendly_name] ?? {} as DeviceState;
    if (device.definition?.exposes) {
        return <Composite showEndpointLabels={true} feature={{ features: device.definition.exposes } as CompositeFeature} type="composite" device={device} deviceState={deviceState}
            onChange={(endpoint, value) => {
                setDeviceState(`${device.friendly_name}${endpoint ? `/${endpoint}` : ''}`, value)
            }}
            onRead={(endpoint, value) => {
                getDeviceState(`${device.friendly_name}${endpoint ? `/${endpoint}` : ''}`, value)
            }}
            featureWrapperClass={FeatureWrapper}
        />
    } else {
        return t('empty_exposes_definition');
    }

}

const mappedProps = ["deviceStates"];

const ConnectedDeviceExposes = connect<ExposesProps, unknown, GlobalState, StateApi>(mappedProps, actions)(Exposes);
export default ConnectedDeviceExposes;
