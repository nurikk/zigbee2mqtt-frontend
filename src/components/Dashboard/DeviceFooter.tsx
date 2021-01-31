import PowerSource from 'components/power-source';
import React from 'react';
import { Col, Row } from 'react-bootstrap';

import styles from './DeviceFooter.scss';
import { PowerSource as PowerSourceType } from 'types';
import { lastSeen } from 'utils';

type Props = {
    linkquality?: number;
    battery?: number;
    voltage?: number;
    source: PowerSourceType;
    batteryLow?: boolean;
    consumption?: number;
    temperature?: number;
    lastUpdate?: number | string;
};

const DeviceFooter: React.FC<Props> = ({ linkquality, battery, source, consumption, temperature, lastUpdate }) => {
    return (
        <footer className={`card-footer ${styles.footer}`}>
            <Row className="justify-content-between flex-nowrap">
                <Col title="last update" className={`text-truncate`}>
                    {lastSeen(lastUpdate)}
                </Col>
                <Col className="col-auto text-truncate">
                    &nbsp;
                    {linkquality ? (
                        <>
                            <i className="fa fa-signal fa-fw" /> {linkquality} LQI
                        </>
                    ) : null}
                    {consumption ? (
                        <>
                            <i className="fa fa-plug fa-fw" /> {consumption}kWh
                        </>
                    ) : null}
                    {temperature ? (
                        <>
                            <i className="fa fa-thermometer-half fa-fw" /> {temperature}°C
                        </>
                    ) : null}
                    <PowerSource source={source} battery={battery} />
                </Col>
            </Row>
        </footer>
    );
};

export default DeviceFooter;
