/* eslint-disable react/display-name */
import React, { Component, Fragment } from "react";
import { Device, DeviceState } from "../../types";
import { toHex, toHHMMSS } from "../../utils";
import DeviceControlGroup from "../device-control";
import cx from "classnames";
import style from "./style.css";
import { connect } from "unistore/react";
import { GlobalState } from "../../store";
import PowerSourceComp from "../power-source";
import get from 'lodash/get';
import DeviceImage from "../device-image";
import { ModelLink, VendorLink } from "../vendor-links/verndor-links";


type DeviceInfoProps = {
    device: Device;
}
interface PropsFromStore {
    deviceStates: Map<string, DeviceState>;
}

const displayProps = [
    {
        key: 'definition.description',
        label: 'Description',
        if: 'supported'
    },
    {
        render: (device: Device) => <dd className="col-7" ><p className={cx('mb-0', 'font-weight-bold', { 'text-danger': !device.supported, 'text-success': device.supported })}>{device.supported ? 'Supported' : 'Unsupported'}</p></dd>,
        label: 'Support status'
    },
    {
        render: (device: Device) => <dd className="col-7">{device.definition.supports}</dd>,
        label: 'Supports',
        if: 'definition.supports'
    },
    {
        key: 'ieee_address',
        label: 'IEEE address'
    },
    {
        key: 'network_address',
        label: 'Network address',
        render: (device: Device) => <dd className="col-7">{toHex(device.network_address)}</dd>,
    },
    {
        key: 'date_code',
        label: 'Firmware build date',
        if: 'date_code'
    },
    {
        key: 'software_build_id',
        label: 'Firmware version',
        if: 'software_build_id'
    },

    {
        key: 'definition.vendor',
        label: 'Vendor',
        if: 'supported',
        render: (device: Device) => <dd className="col-7"><VendorLink device={device} /></dd>
    },
    {
        key: 'definition.model',
        label: 'Model',
        if: 'supported',
        render: (device: Device) => <dd className="col-7"><ModelLink device={device} /></dd>
    },

    {
        label: 'Power source',
        render: (device: Device, deviceStatus: DeviceState) => <dd className="col-7"><PowerSourceComp source={device.power_source} battery={deviceStatus.battery} /></dd>
    },
    {
        label: 'Interview completed',
        render: (device: Device) => <dd className="col-7">{device.interview_completed ? 'Yes' : 'No'}</dd>
    }
];
// eslint-disable-next-line react/prefer-stateless-function
export class DeviceInfo extends Component<DeviceInfoProps & PropsFromStore, {}> {
    render() {
        const { device, deviceStates } = this.props;
        const deviceStatus: DeviceState = deviceStates.get(device.friendly_name) ?? {} as DeviceState;

        return (
            <div className="card">
                <div className="d-flex justify-content-center">
                    <DeviceImage className={`card-img-top w-auto ${style["device-pic"]}`} device={device} deviceStatus={deviceStatus} />
                </div>

                <div className="card-body">
                    <h5 className="card-title">{device.type}</h5>

                    <dl className="row">
                        {
                            displayProps.filter(prop => prop.if === undefined || get(device, prop.if, false)).map(prop => (
                                <Fragment key={prop.label}>
                                    <dt className="col-5">{prop.label}</dt>
                                    {prop.render ?
                                        prop.render(device, deviceStatus) : <dd className="col-7">{get(device, prop.key)}</dd>}

                                </Fragment>
                            ))
                        }
                        {
                            deviceStatus?.update?.state === "updating" ? (
                                <Fragment>
                                    <dt className="col-5">Updating firmware</dt>
                                    <dd className="col-7">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: `${deviceStatus.update.progress}%` }}>
                                                {deviceStatus.update.progress}%
                                        </div>
                                        </div>
                                        <div>Remaining time {toHHMMSS(deviceStatus.update.remaining)}</div>
                                    </dd>
                                </Fragment>
                            ) : null
                        }
                    </dl>
                </div>
                <div className="card-footer">
                    <DeviceControlGroup device={device} state={deviceStatus} />
                </div>
            </div>
        );
    }
}

const mappedProps = ["deviceStates"];

const ConnectedDeviceInfoPage = connect<DeviceInfoProps, {}, GlobalState, PropsFromStore>(mappedProps)(DeviceInfo);
export default ConnectedDeviceInfoPage;