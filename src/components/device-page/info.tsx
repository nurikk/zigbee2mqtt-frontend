/* eslint-disable react/display-name */
import React, { Component, Fragment } from "react";
import { BridgeInfo, Device, DeviceState } from "../../types";
import { getLastSeenType, toHex } from "../../utils";
import DeviceControlGroup from "../device-control";
import cx from "classnames";
import style from "./style.css";
import { connect } from "unistore/react";
import { GlobalState } from "../../store";
import get from 'lodash/get';
import DeviceImage from "../device-image";
import { ModelLink, VendorLink } from "../vendor-links/verndor-links";
import PowerSource from "../power-source";
import { LastSeen } from "../LastSeen";


type DeviceInfoProps = {
    device: Device;
}
interface PropsFromStore {
    deviceStates: Map<string, DeviceState>;
}
// [Flower sensor](http://modkam.ru/?p=1700)
const markdownLinkRegex = /\[(.*?)\]\((.*?)\)/;

const displayProps = [
    {
        label: 'Friendly name',
        render: (device: Device) => <dd className="col-12 col-md-7"><strong>{device.friendly_name}</strong></dd>,
    },
    {
        label: 'Last seen',
        render: (device: Device, state: DeviceState, bridgeInfo: BridgeInfo) => <dd className="col-12 col-md-7"><LastSeen lastSeenType={getLastSeenType(bridgeInfo.config.advanced)} state={state}/></dd>,
    },
    {
        key: 'type',
        label: 'Device type'
    },
    {
        key: 'model_id',
        label: 'Zigbee model'
    },
    {
        key: 'definition.description',
        label: 'Description',
        if: 'supported',
        render: (device: Device) => {
            const result = markdownLinkRegex.exec(device.definition?.description as string);
            let content = <span>{device.definition?.description}</span>;
            if (result) {
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const [all, title, link] = result;
                content = <a target="_blank" rel="noopener noreferrer"href={link}>{title}</a>
            }
            return <dd className="col-12 col-md-7">{content}</dd>
        },
    },
    {
        render: (device: Device) => <dd className="col-12 col-md-7" ><p className={cx('mb-0', 'font-weight-bold', { 'text-danger': !device.supported, 'text-success': device.supported })}>{device.supported ? 'Supported' : 'Unsupported'}</p></dd>,
        label: 'Support status'
    },
    {
        render: (device: Device) => <dd className="col-12 col-md-7">{device.definition?.supports}</dd>,
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
        render: (device: Device) => <dd className="col-12 col-md-7">{toHex(device.network_address)}</dd>,
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
        render: (device: Device) => <dd className="col-12 col-md-7"><VendorLink device={device} /></dd>
    },
    {
        key: 'definition.model',
        label: 'Model',
        if: 'supported',
        render: (device: Device) => <dd className="col-12 col-md-7"><ModelLink device={device} /></dd>
    },

    {
        label: 'Power source',
        render: (device: Device, deviceStatus: DeviceState) => <dd className="col-12 col-md-7"><PowerSource showLevel={true} source={device.power_source} battery={deviceStatus.battery as number} batteryLow={deviceStatus.battery_low as boolean} /></dd>
    },
    {
        label: 'Interview completed',
        render: (device: Device) => <dd className="col-12 col-md-7">{device.interview_completed ? 'Yes' : 'No'}</dd>
    }
];
// eslint-disable-next-line react/prefer-stateless-function
export class DeviceInfo extends Component<DeviceInfoProps & PropsFromStore & Pick<GlobalState, 'bridgeInfo'>, unknown> {
    render(): JSX.Element{
        const { device, deviceStates, bridgeInfo } = this.props;

        const deviceState: DeviceState = deviceStates.get(device.friendly_name) ?? {} as DeviceState;
        return (
            <Fragment>
                <div className="d-flex justify-content-center">
                    <DeviceImage className={`card-img-top w-auto ${style["device-pic"]}`} device={device} deviceStatus={deviceState} />
                </div>


                {/* <h2 className="card-title">{device.friendly_name} {device.type}</h2> */}


                <dl className="row">
                    {
                        displayProps.filter(prop => prop.if === undefined || get(device, prop.if, false)).map(prop => (
                            <Fragment key={prop.label}>
                                <dt className="col-12 col-md-5">{prop.label}</dt>
                                {prop.render ?
                                    prop.render(device, deviceState, bridgeInfo) : <dd className="col-12 col-md-7">{get(device, prop.key)}</dd>}

                            </Fragment>
                        ))
                    }
                </dl>


                <DeviceControlGroup device={device} state={deviceState} />

            </Fragment>
        );
    }
}

const mappedProps = ["deviceStates", "bridgeInfo"];

const ConnectedDeviceInfoPage = connect<DeviceInfoProps, unknown, GlobalState, PropsFromStore>(mappedProps)(DeviceInfo);
export default ConnectedDeviceInfoPage;
