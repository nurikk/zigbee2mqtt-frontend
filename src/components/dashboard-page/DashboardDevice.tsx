import React from 'react';
import { CompositeFeature, GenericExposedFeature } from '../../types';
import DeviceImage from '../device-image';
import { BaseFeatureProps } from '../features/base';
import DeviceFooter from './DeviceFooter';

import styles from './DashboardDevice.scss';
import { GenericDashboardFeatureRenderer } from './ComponentRenderers';
import { Link } from 'react-router-dom';
import { genDeviceDetailsLink } from '../../utils';
import { isCompositeFeature } from '../device-page/type-guards';


type Props = BaseFeatureProps<CompositeFeature>;


const genericRendererIgnoredNames = ["battery", "linkquality", "action"];

const DashboardDevice: React.FC<Props> = ({ onChange, device, deviceState, feature: { features } }) => {

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange('', { state: event.target.checked ? 'ON' : 'OFF' });
  };
  const handleChange = () => { };
  const handleRead = () => { };

  return (
    <div className="col-xl-3 col-lg-4 col-sm-6 col-12 mb-3">
      <div className={`${styles.card} card`}>
        <div className="card-header text-truncate"><Link to={genDeviceDetailsLink(device.ieee_address)}>{device.friendly_name}</Link></div>
        <div className={`${styles.cardBody} card-body`}>
          <DeviceImage device={device} className={styles.deviceImage} />
          <div className={styles.exposes}>
            {/* {state.isThermostat ? <Thermostat deviceState={deviceState} /> : null} */}
            {/*
            {(features as CompositeFeature[])
              .filter(isSwitchFeature)
              .map((feature) =>
                <Switch
                  key={`${feature.property}-${feature.name}`}
                  device={device}
                  deviceState={deviceState}
                  feature={feature.features[0] as BinaryFeature}
                  onChange={handleChange}
                  onRead={handleRead}
                />
            )} */}

            {features
              .filter(feature => !isCompositeFeature(feature))
              .filter(({ name }) => !genericRendererIgnoredNames.includes(name))
              .filter(({ property }) => deviceState[property] !== undefined)
              .map((feature) =>
                <GenericDashboardFeatureRenderer
                  key={`${feature.property}-${feature.name}`}
                  device={device}
                  deviceState={deviceState}
                  feature={feature as GenericExposedFeature}
                  onChange={handleChange}
                  onRead={handleRead}
                />
              )}
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