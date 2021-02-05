import PowerSource from '../../components/power-source';
import React from 'react';
import styles from './DeviceFooter.scss';
import { Device, DeviceDefinition, DeviceState, GenericExposedFeature } from '../../types';
import { lastSeen } from '../../utils';


type Props = {
    device: Device;
    deviceState: DeviceState;
};

const footerFeatures = [
    "linkquality"
];

const DeviceFooter: React.FC<Props> = ({ device, deviceState }) => {
    const {
        last_seen: lastSeenTime,
        linkquality,
    } = deviceState;
    const { exposes } = device.definition as DeviceDefinition;
    const rederedFeatures = [] as JSX.Element[];
    (exposes as GenericExposedFeature[])
        .filter(e => footerFeatures.includes(e.name))
        .forEach(e => {
            switch (e.name) {
                case "linkquality":
                    rederedFeatures.push(<span key="linkquality"><i className="fa fa-signal fa-fw" /> {linkquality} LQI</span>);
                    break;
                default:
                    break;
            }
        });

    rederedFeatures.push(<PowerSource key={"power"} source={device.power_source} battery={deviceState.battery as number} />);
    return (
        <footer className={`card-footer ${styles.footer}`}>
            <div className="row justify-content-between flex-nowrap">
                <div title="last update" className={`col text-truncate`}>
                    {lastSeen(lastSeenTime)}
                </div>
                <div className="col col-auto text-truncate">
                    {rederedFeatures}
                </div>
            </div>
        </footer>
    );
};

export default DeviceFooter;