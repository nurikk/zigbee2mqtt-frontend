import React from 'react';
import { CompositeFeature, DeviceState, FeatureAccessMode, GenericExposedFeature } from '../../types';
import cx from "classnames";
import { BaseFeatureProps } from '../features/base';
import DeviceFooter from './DeviceFooter';

import styles from './DashboardDevice.scss';

import { Link } from 'react-router-dom';
import { genDeviceDetailsLink, isOnlyOneBitIsSet } from '../../utils';

import Composite from '../features/composite/composite';
import DeviceImage from '../device-image';

type Props = BaseFeatureProps<CompositeFeature>;

const genericRendererIgnoredNames = ['linkquality', 'battery', 'battery_low'];
const whitelistFeatureNames = ['state', 'brightness', 'color_temp'];
const whitelistFeatureTypes = ['light'];
const nullish = ['', null, undefined];
export const onlyValidFeaturesForDashboard = (feature: GenericExposedFeature | CompositeFeature, deviceState: DeviceState): boolean => {
    const { access, property, name, type } = feature;
    if (whitelistFeatureNames.includes(name)) {
        return true;
    }
    if (whitelistFeatureTypes.includes(type)) {
        return true;
    }
    if (!(access & FeatureAccessMode.ACCESS_STATE && !nullish.includes(deviceState[property] as string | null | undefined))) {
        return false;
    }
    if (genericRendererIgnoredNames.includes(name)) {
        return false;
    }

    if (access & FeatureAccessMode.ACCESS_STATE && isOnlyOneBitIsSet(access)) {
        return true;
    }
    return false;
}

const DashboardDevice: React.FC<Props> = ({ onChange, onRead, device, deviceState, feature: { features }, featureWrapperClass }) => {

    const filteredFeatures = features.filter((feature) => onlyValidFeaturesForDashboard(feature, deviceState));


    return (
        <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
            <div className={`${styles.card} card`}>
                <div className="card-header text-truncate">
                    <Link to={genDeviceDetailsLink(device.ieee_address)}>{device.friendly_name}</Link>
                </div>
                <div className={`${styles.cardBody} card-body row`}>
                    <DeviceImage device={device} className={cx(styles.deviceImage, 'col col-1')} />
                    <div className="col col-11">
                        <Composite feature={{ features: filteredFeatures } as CompositeFeature}
                            type="composite"
                            device={device}
                            deviceState={deviceState}
                            onChange={onChange}
                            onRead={onRead}
                            featureWrapperClass={featureWrapperClass}
                            minimal={true}
                        />
                    </div>
                </div>
                <DeviceFooter
                    device={device}
                    deviceState={deviceState}
                />
            </div>
        </div>
    );
};

export default DashboardDevice;
