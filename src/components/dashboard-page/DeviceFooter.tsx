import PowerSource from '../../components/power-source';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

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
            <Row className="justify-content-between flex-nowrap">
                <Col title="last update" className={`text-truncate`}>
                    {lastSeen(lastSeenTime)}
                </Col>
                <Col className="col-auto text-truncate">
                    {rederedFeatures}
                </Col>
            </Row>
        </footer>
    );
};

export default DeviceFooter;