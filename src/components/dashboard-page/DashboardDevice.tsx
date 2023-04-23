import React from 'react';
import { CompositeFeature, Endpoint, LastSeenType } from '../../types';
import cx from 'classnames';
import { BaseFeatureProps } from '../features/base';
import DeviceFooter from './DeviceFooter';

import styles from './DashboardDevice.module.scss';

import { Link } from 'react-router-dom';
import { genDeviceDetailsLink } from '../../utils';

import Composite from '../features/composite/composite';
import DeviceImage from '../device-image';
import { useTranslation } from 'react-i18next';

type Props = BaseFeatureProps<CompositeFeature> & {
    lastSeenType: LastSeenType;
    controls?: JSX.Element;
    endpoint?: Endpoint;
};

const DashboardDevice: React.FC<Props> = ({
    onChange,
    onRead,
    device,
    endpoint,
    deviceState,
    lastSeenType,
    feature: { features },
    featureWrapperClass,
    controls,
}) => {
    const { t } = useTranslation('zigbee');
    return (
        <div className="col-xl-3 col-lg-4 col-sm-6 col-12 d-flex">
            <div className={`flex-fill card flex-shrink-1`}>
                <div className="card-header pb-0 d-flex justify-content-between">
                    <Link to={genDeviceDetailsLink(device.ieee_address)}>
                        {/* disabled always false because dashboard does not contain disabled devices */}
                        <DeviceImage
                            disabled={false}
                            device={device}
                            className={cx(styles.deviceImage, 'me-2 d-inline')}
                        />
                        {device.friendly_name}
                        {endpoint ? ` (${t('endpoint')}: ${endpoint})` : ''}
                    </Link>
                    {controls}
                </div>

                <div className="card-header py-0 d-flex justify-content-between">
                    <small>{device.description}</small>
                </div>

                <div className={cx('card-body align-items-center row')}>
                    <Composite
                        feature={{ features } as CompositeFeature}
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
                <DeviceFooter device={device} deviceState={deviceState} lastSeenType={lastSeenType} />
            </div>
        </div>
    );
};

export default DashboardDevice;
