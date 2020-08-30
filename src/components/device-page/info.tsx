import { Component, ComponentChild, Fragment, h } from "preact";
import { Device } from "../../types";
import SafeImg from "../safe-image";
import { genDeviceImageUrl } from "../../utils";
import DeviceControlGroup from "../device-control";
import cx from "classnames";
import style from "./style.css";
// import { getClusterName } from "./bind";
import { connect } from "unistore/preact";
import { GlobalState } from "../../store";
import PowerSourceComp from "../power-source";

interface DeviceInfoProps {
    dev: string;
}

interface PropsFromStore {
    devices: Device[];
}

// eslint-disable-next-line react/prefer-stateless-function
export class DeviceInfo extends Component<DeviceInfoProps & PropsFromStore, {}> {
    render(): ComponentChild {
        const { dev, devices } = this.props;
        const device = devices.find(d => d.ieee_address == dev);
        if (!device) {
            return "Unknown device";
        }
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
        return (
            <div class="card mb-3">
                <SafeImg class={`card-img-top ${style["device-pic"]}`} src={genDeviceImageUrl(device.definition?.model)} />
                <div class="card-body">
                    <h5 class="card-title">{device.type}</h5>

                    <dl class="row">
                        {
                            device.friendly_name ? (
                                <Fragment>
                                    <dt class="col-5">Friendly name</dt>
                                    <dd class="col-7">{device.friendly_name}</dd>
                                </Fragment>
                            ) : null
                        }


                        <dt class="col-5">IEEE address</dt>
                        <dd class="col-7">{device.ieee_address}</dd>

                        <dt class="col-5">Network address</dt>
                        <dd class="col-7">{device.network_address}</dd>


                        <dt class="col-5">Support status</dt>
                        <dd class="col-7" className={cx('col-7', {'bg-danger': !device.supported, 'text-success': device.supported})}>{device.supported ? 'Supported' : 'Unsupported'}</dd>

                        <dt class="col-5">Power source</dt>
                        <dd class="col-7"><PowerSourceComp source={device.power_source} /></dd>

                        <dt class="col-5">Vendor</dt>
                        <dd class="col-7">{device.definition?.vendor}</dd>

                        <dt class="col-5">Model</dt>
                        <dd class="col-7">{device.definition?.model}</dd>



                        {/* <dt class="col-5">Routes</dt>
                        <dd class="col-7">{device?.Rtg?.map((route) => <a className={"d-block"}
                                                                          href={genDeviceDetailsLink(route)}>{route}</a>)}</dd> */}
                        {/* {endpoints} */}
                    </dl>

                </div>
                <div class="card-footer">
                    <DeviceControlGroup device={device} />
                </div>
            </div>
        );
    }
}

const mappedProps = ["devices"];

const ConnectedDeviceInfoPage = connect<{}, {}, GlobalState, DeviceInfoProps & PropsFromStore>(mappedProps)(DeviceInfo);
export default ConnectedDeviceInfoPage;