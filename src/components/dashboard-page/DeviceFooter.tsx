import PowerSource from '../../components/power-source';
import React from 'react';
import { Device, DeviceState, LastSeenType } from '../../types';

import { LastSeen } from '../LastSeen';

type Props = {
    device: Device;
    deviceState: DeviceState;
    lastSeenType: LastSeenType;
};

const DeviceFooter: React.FC<Props> = ({ device, deviceState, lastSeenType }) => {
    const { linkquality } = deviceState;
    const { supported } = device;

    return (
        <footer className="card-footer pt-0">
            <div className="row justify-content-between flex-nowrap">
                <div title="last update" className="col text-truncate">
                    <LastSeen state={deviceState} lastSeenType={lastSeenType} />
                </div>
                <div className="col col-auto text-truncate">
                    <span key="linkquality" className="me-1">
                        <i className="fa fa-signal fa-fw" /> {linkquality} LQI
                    </span>
                    {supported && <PowerSource key={'power'} device={device} deviceState={deviceState} />}
                </div>
            </div>
        </footer>
    );
};

export default DeviceFooter;
