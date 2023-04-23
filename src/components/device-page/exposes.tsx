import React from 'react';
import { CompositeFeature, Device, DeviceState } from '../../types';
import actions from '../../actions/actions';
import { StateApi } from '../../actions/StateApi';
import { connect } from 'unistore/react';
import { GlobalState } from '../../store';

import { FeatureWrapper } from '../features/composite/FeatureWrapper';
import { useTranslation } from 'react-i18next';
import { Feature } from '../features/composite/Feature';

type ExposesProps = {
    device: Device;
};

type PropsFromStore = Pick<GlobalState, 'deviceStates'>;

function Exposes(props: ExposesProps & PropsFromStore & StateApi) {
    const { device, deviceStates, setDeviceState, getDeviceState } = props;
    const { t } = useTranslation(['exposes']);
    const deviceState = deviceStates[device.friendly_name] ?? ({} as DeviceState);
    if (device.definition?.exposes?.length) {
        return (
            <Feature
                // showEndpointLabels={true}
                feature={{ features: device.definition.exposes, type: 'composite' } as CompositeFeature}
                device={device}
                deviceState={deviceState}
                onChange={async (endpoint, value) => {
                    await setDeviceState(device.friendly_name, value);
                }}
                onRead={async (endpoint, value) => {
                    await getDeviceState(device.friendly_name, value);
                }}
                parentFeatures={[]}
                featureWrapperClass={FeatureWrapper}
            />
        );
    } else {
        return t('empty_exposes_definition');
    }
}

const mappedProps = ['deviceStates'];

const ConnectedDeviceExposes = connect<ExposesProps, unknown, GlobalState, StateApi>(mappedProps, actions)(Exposes);
export default ConnectedDeviceExposes;
