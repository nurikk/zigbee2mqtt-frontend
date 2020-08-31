import { Component, ComponentChild, Fragment, h } from "preact";
import { Device, DeviceStats } from "../../types";
import SafeImg from "../safe-image";
import { genDeviceImageUrl } from "../../utils";
import DeviceControlGroup from "../device-control";
import cx from "classnames";
import style from "./style.css";
// import { getClusterName } from "./bind";
import { connect } from "unistore/preact";
import { GlobalState } from "../../store";
import PowerSourceComp from "../power-source";
import get from 'lodash/get';
interface DeviceInfoProps {
    dev: string;
}

interface PropsFromStore {
    devices: Device[];
    deviceStates: DeviceStats[];
}

// eslint-disable-next-line react/prefer-stateless-function
export class DeviceInfo extends Component<DeviceInfoProps & PropsFromStore, {}> {
    render(): ComponentChild {
        const { dev, devices, deviceStates } = this.props;
        const device = devices.find(d => d.ieee_address == dev);
        console.log(device);
        if (!device) {
            return "Unknown device";
        }
        const deviceStatus: DeviceStats = deviceStates[device.friendly_name];

        // const endpoints = Object.entries(device.ep ?? {}).map(([epName, ep]) => {
        //     // const inClusters = Object.entries(ep.In ?? {}).map(([clusterId]) => {
        //     //     const cluster = parseInt(clusterId, 10);
        //     //     return <small class={"d-block text-nowrap text-truncate"}
        //     //                   title={toHex(cluster, 4)}>{getClusterName(cluster, false)}</small>;
        //     // });
        //     // const outClusters = Object.entries(ep.Out ?? {}).map(([clusterId]) => {
        //     //     const cluster = parseInt(clusterId, 10);
        //     //     return <small class={"d-block text-nowrap text-truncate"}
        //     //                   title={toHex(cluster, 4)}>{getClusterName(cluster, false)}</small>;
        //     // });
        //     return (<Fragment>
        //         <dt class="col-5">Endpoint #{epName}</dt>
        //         <dl class={"col-6"} />

        //         {/* <dd class="col-5">ProfileId</dd>
        //         <dl class={"col-7"}>{ep.profId}</dl>

        //         <dd class="col-5">DeviceId</dd>
        //         <dl class={"col-7"}>{ep.devId}</dl> */}

        //         <dd class={"col-5 text-nowrap"}>Input clusters</dd>
        //         <dl class="col-7">{inClusters.length ? inClusters : <b>None</b>}</dl>
        //         <dd class={"col-5 text-nowrap"}>Output clusters</dd>
        //         <dl class="col-7">{outClusters.length ? outClusters : <b>None</b>}</dl>

        //     </Fragment>);
        // });
        const displayProps = [
            {
                key: 'friendly_name',
                label: 'Friendly name'
            },
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
                label: 'Network address'
            },
            {
                key: 'date_code',
                label: 'Firmware build date'
            },
            {
                key: 'software_build_id',
                label: 'Firmware version'
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
        console.log(deviceStatus);
        return (
            <div class="card mb-3">
                <SafeImg class={`card-img-top ${style["device-pic"]}`} src={genDeviceImageUrl(device.definition?.model)} />
                <div class="card-body">
                    <h5 class="card-title">{device.type}</h5>

                    <dl class="row">
                        {
                            displayProps.filter(prop => get(device, prop.if, true)).map(prop => (
                                <Fragment>
                                    <dt class="col-5">{prop.label}</dt>
                                    {prop.render ?
                                        prop.render(device) : <dd class="col-7">{get(device, prop.key)}</dd>}

                                </Fragment>
                            ))
                        }


                        {/* <dt class="col-5">Routes</dt>
                        <dd class="col-7">{device?.Rtg?.map((route) => <a className={"d-block"}
                                                                          href={genDeviceDetailsLink(route)}>{route}</a>)}</dd> */}
                        {/* {endpoints} */}

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

const mappedProps = ["devices", "deviceStates", "forceRender"];

const ConnectedDeviceInfoPage = connect<{}, {}, GlobalState, DeviceInfoProps & PropsFromStore>(mappedProps)(DeviceInfo);
export default ConnectedDeviceInfoPage;