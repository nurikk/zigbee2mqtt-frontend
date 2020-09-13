import React, { Component, Fragment } from 'react';
import { Device, DeviceState } from '../../types';
import SafeImg from '../safe-image';
import { genDeviceImageUrl, toHex } from '../../utils';
import DeviceControlGroup from '../device-control';
import cx from 'classnames';
import style from './style.css';
import { connect } from 'unistore/react';
import { GlobalState } from '../../store';
import PowerSourceComp from '../power-source';
import get from 'lodash/get';

type DeviceInfoProps = {
    device: Device;
};
interface PropsFromStore {
    deviceStates: Map<string, DeviceState>;
}

// eslint-disable-next-line react/prefer-stateless-function
export class DeviceInfo extends Component<DeviceInfoProps & PropsFromStore, {}> {
    render() {
        const { device, deviceStates } = this.props;
        const deviceStatus: DeviceState = deviceStates.get(device.friendly_name);

        const displayProps = [
            {
                key: 'definition.description',
                label: 'Description',
                if: 'supported',
            },
            {
                render: (device: Device) => (
                    <dd className="col-7">
                        <p
                            className={cx('mb-0', 'font-weight-bold', {
                                'text-danger': !device.supported,
                                'text-success': device.supported,
                            })}
                        >
                            {device.supported ? 'Supported' : 'Unsupported'}
                        </p>
                    </dd>
                ),
                label: 'Support status',
            },
            {
                render: (device: Device) => <dd className="col-7">{device.definition.supports}</dd>,
                label: 'Supports',
                if: 'supported',
            },
            {
                key: 'ieee_address',
                label: 'IEEE address',
            },
            {
                key: 'network_address',
                label: 'Network address',
                render: (device: Device) => <dd className="col-7">{toHex(device.network_address)}</dd>,
            },
            {
                key: 'date_code',
                label: 'Firmware build date',
                if: 'date_code',
            },
            {
                key: 'software_build_id',
                label: 'Firmware version',
                if: 'software_build_id',
            },

            {
                key: 'definition.vendor',
                label: 'Vendor',
                if: 'supported',
            },
            {
                key: 'definition.model',
                label: 'Model',
                if: 'supported',
            },

            {
                label: 'Power source',
                render: (device: Device) => (
                    <dd className="col-7">
                        <PowerSourceComp source={device.power_source} />
                    </dd>
                ),
            },
            {
                label: 'Interview completed',
                render: (device: Device) => <dd className="col-7">{device.interview_completed ? 'Yes' : 'No'}</dd>,
            },
        ];
        return (
            <div className="card">
                <SafeImg
                    className={`card-img-top ${style['device-pic']}`}
                    src={genDeviceImageUrl(device.definition?.model)}
                />
                <div className="card-body">
                    <h5 className="card-title">{device.type}</h5>

                    <dl className="row">
                        {displayProps
                            .filter((prop) => get(device, prop.if, false))
                            .map((prop) => (
                                <Fragment key={prop.label}>
                                    <dt className="col-5">{prop.label}</dt>
                                    {prop.render ? (
                                        prop.render(device)
                                    ) : (
                                        <dd className="col-7">{get(device, prop.key)}</dd>
                                    )}
                                </Fragment>
                            ))}

                        {deviceStatus?.update?.state === 'updating' ? (
                            <Fragment>
                                <dt className="col-5">Updating firmware</dt>
                                <dd className="col-7">
                                    <div className="progress">
                                        <div
                                            className="progress-bar progress-bar-striped progress-bar-animated"
                                            role="progressbar"
                                            aria-valuemax={100}
                                            aria-valuemin={0}
                                            style={{ width: `${deviceStatus.update.progress}%` }}
                                        >
                                            {deviceStatus.update.progress}%
                                        </div>
                                    </div>
                                </dd>
                            </Fragment>
                        ) : null}
                    </dl>
                </div>
                <div className="card-footer">
                    <DeviceControlGroup device={device} state={deviceStatus} />
                </div>
            </div>
        );
    }
}

const mappedProps = ['deviceStates'];

const ConnectedDeviceInfoPage = connect<DeviceInfoProps, {}, GlobalState, PropsFromStore>(mappedProps)(DeviceInfo);
export default ConnectedDeviceInfoPage;
