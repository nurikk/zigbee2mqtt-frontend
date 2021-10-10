import React from 'react';
import { CompositeFeature } from '../../types';
import cx from "classnames";
import { BaseFeatureProps } from '../features/base';
import DeviceFooter from './DeviceFooter';

import styles from './DashboardDevice.scss';

import { Link } from 'react-router-dom';
import { genDeviceDetailsLink } from '../../utils';

import Composite from '../features/composite/composite';
import DeviceImage from '../device-image';
import { LastSeenType } from '../zigbee';

type Props = BaseFeatureProps<CompositeFeature> & { lastSeenType: LastSeenType, controls?: JSX.Element };


const DashboardDevice: React.FC<Props> = ({ onChange, onRead, device, deviceState, lastSeenType, feature: { features }, featureWrapperClass, controls }) => {
    return (
        <div className="col-xl-3 col-lg-4 col-sm-6 col-12 d-flex">
            <div className={`flex-fill card flex-shrink-1`}>
                <div className="card-header pb-0 d-flex justify-content-between">
                    <Link to={genDeviceDetailsLink(device.ieee_address)}>
                        <DeviceImage device={device} className={cx(styles.deviceImage, 'me-2 d-inline')} />{device.friendly_name}
                    </Link>
                    {controls}
                </div>
                <div className={`card-body align-items-center row`}>
                    <Composite feature={{ features } as CompositeFeature}
                        className="row"
                        type="composite"
                        device={device}
                        deviceState={deviceState}
                        onChange={onChange}
                        onRead={onRead}
                        featureWrapperClass={featureWrapperClass}
                        minimal={true}
                    />
                </div>
                <DeviceFooter
                    device={device}
                    deviceState={deviceState}
                    lastSeenType={lastSeenType}
                />
            </div>
        </div>
    );
};

export default DashboardDevice;
