import React, { Component } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import styles from './DeviceFooter.scss';

type Props = {
    linkquality?: number;
    battery?: number;
    voltage?: number;
    consumption?: number;
    temperature?: number;
    lastUpdate: number;
};

class DeviceFooter extends Component<Props> {
    static defaultProps = {
        voltage: 0,
    };

    render() {
        const { linkquality, battery, voltage, consumption, temperature, lastUpdate } = this.props;

        let batteryIcon = 'fa-battery-empty';
        if (battery) {
            if (battery >= 95) {
                batteryIcon = 'fa-battery-full';
            } else if (battery >= 75) {
                batteryIcon = 'fa-battery-three-quarters';
            } else if (battery >= 50) {
                batteryIcon = 'fa-battery-half';
            } else if (battery >= 10) {
                batteryIcon = 'fa-battery-quarter';
            }
        }

        const outdated = (Date.now() - lastUpdate) / 1000 >= 3600;

        return (
            <footer className={`card-footer ${styles.footer}`}>
                <Row className="justify-content-between flex-nowrap">
                    <Col title="last update" className={`text-truncate ${outdated ? 'text-warning' : ''}`}>
                        {lastUpdate ? new Date(lastUpdate).toLocaleString() : null}
                    </Col>
                    <Col className="col-auto text-truncate">
                        &nbsp;
                        {linkquality ? (
                            <>
                                <i className="fa fa-signal fa-fw" /> {linkquality} LQI
                            </>
                        ) : null}
                        {battery ? (
                            <span title={`${voltage! / 1000} V`}>
                                <i className={`fa ${batteryIcon} fa-fw`} /> {battery}%
                            </span>
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
                    </Col>
                </Row>
            </footer>
        );
    }
}

export default DeviceFooter;
