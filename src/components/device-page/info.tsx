import { Component, ComponentChild, Fragment, h } from "preact";
import { Device, DeviceState } from "../../types";
import SafeImg from "../safe-image";
import { genDeviceImageUrl, toHex } from "../../utils";
import DeviceControlGroup from "../device-control";
import cx from "classnames";
import style from "./style.css";
import { connect } from "unistore/preact";
import { GlobalState } from "../../store";
import PowerSourceComp from "../power-source";
import get from 'lodash/get';
interface DeviceInfoProps {
    dev: string;
}

interface PropsFromStore {
    devices: Map<string, Device>;
    deviceStates: DeviceState[];
}

// eslint-disable-next-line react/prefer-stateless-function
export class DeviceInfo extends Component<DeviceInfoProps & PropsFromStore, {}> {
    render(): ComponentChild {
        const { dev, devices, deviceStates } = this.props;
        const device = devices.get(dev);
        if (!device) {
            return "Unknown device";
        }
        const deviceStatus: DeviceState = deviceStates[device.friendly_name];

        const displayProps = [
            {
                key: 'definition.description',
                label: 'Description',
                if: 'supported'
            },
            {
                render: (device: Device): ComponentChild => <dd class="col-7" ><p className={cx('mb-0', 'font-weight-bold', { 'text-danger': !device.supported, 'text-success': device.supported })}>{device.supported ? 'Supported' : 'Unsupported'}</p></dd>,
                label: 'Support status'
            },
            {
                render: (device: Device): ComponentChild => <dd class="col-7">{device.definition.supports}</dd>,
                label: 'Supports',
                if: 'supported'
            },
            {
                key: 'ieee_address',
                label: 'IEEE address'
            },
            {
                key: 'network_address',
                label: 'Network address',
                render: (device: Device): ComponentChild => <dd class="col-7">{toHex(device.network_address)}</dd>,
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
                if: 'supported'
            },
            {
                key: 'definition.model',
                label: 'Model',
                if: 'supported'
            },

            {
                label: 'Power source',
                render: (device: Device): ComponentChild => <dd class="col-7"><PowerSourceComp source={device.power_source} /></dd>
            },
            {
                label: 'Interview completed',
                render: (device: Device): ComponentChild => <dd class="col-7">{device.interview_completed ? 'Yes' : 'No'}</dd>
            }
        ];
        return (
            <div class="card">
                <SafeImg class={`card-img-top ${style["device-pic"]}`} src={genDeviceImageUrl(device.definition?.model)} />
                <div class="card-body">
                    <h5 class="card-title">{device.type}</h5>

                    <dl class="row">
                        {
                            displayProps.filter(prop => get(device, prop.if, false)).map(prop => (
                                <Fragment>
                                    <dt class="col-5">{prop.label}</dt>
                                    {prop.render ?
                                        prop.render(device) : <dd class="col-7">{get(device, prop.key)}</dd>}

                                </Fragment>
                            ))
                        }



                        {
                            deviceStatus?.update?.state === "updating" ? (
                                <Fragment>
                                    <dt class="col-5">Updating firmware</dt>
                                    <dd class="col-7"><div class="progress">
                                        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={`width: ${deviceStatus.update.progress}%`} >
                                        {deviceStatus.update.progress}%
                                        </div>
                                    </div></dd>
                                </Fragment>
                            ) : null
                        }
                    </dl>



                </div>
                <div class="card-footer">
                    <DeviceControlGroup device={device} state={deviceStatus} />
                </div>
            </div>
        );
    }
}

const mappedProps = ["devices", "deviceStates"];

const ConnectedDeviceInfoPage = connect<DeviceInfoProps, {}, GlobalState, PropsFromStore>(mappedProps)(DeviceInfo);
export default ConnectedDeviceInfoPage;