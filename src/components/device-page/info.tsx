import { Component, ComponentChild, Fragment, h } from "preact";
import { Device } from "../../types";
import SafeImg from "../safe-image";
import { genDeviceDetailsLink, genDeviceImageUrl, toHex } from "../../utils";
import DeviceControlGroup from "../device-control";
import PowerSourceComp from "../power-source";
import style from "./style.css";
import { getClusterName } from "./bind";

interface DeviceInfoProps {
    device: Device;
}

export default class DeviceInfo extends Component<DeviceInfoProps, {}> {
    render(): ComponentChild {
        const { device } = this.props;
        const states = Object.entries(device.st).map(([name, value]) => (
            <Fragment>
                <dt class="col-5">{name}</dt>
                <dd class="col-7">{value.toString()}</dd>
            </Fragment>));

        const endpoints = Object.entries(device.ep).map(([epName, ep]) => {
            const inClusters = Object.entries(ep.In ?? {}).map(([clusterId]) => {
                const cluster = parseInt(clusterId, 10);
                return <small class={"d-block text-nowrap text-truncate"}
                              title={toHex(cluster, 4)}>{getClusterName(cluster, false)}</small>;
            });
            const outClusters = Object.entries(ep.Out ?? {}).map(([clusterId]) => {
                const cluster = parseInt(clusterId, 10);
                return <small class={"d-block text-nowrap text-truncate"}
                              title={toHex(cluster, 4)}>{getClusterName(cluster, false)}</small>;
            });
            return (<Fragment>
                <dt class="col-5">Endpoint #{epName}</dt>
                <dl class={"col-6"} />

                <dd class="col-5">ProfileId</dd>
                <dl class={"col-7"}>{ep.profId}</dl>

                <dd class="col-5">DeviceId</dd>
                <dl class={"col-7"}>{ep.devId}</dl>

                <dd class={"col-5 text-nowrap"}>Input clusters</dd>
                <dl class="col-7">{inClusters.length ? inClusters : <b>None</b>}</dl>
                <dd class={"col-5 text-nowrap"}>Output clusters</dd>
                <dl class="col-7">{outClusters.length ? outClusters : <b>None</b>}</dl>

            </Fragment>);
        });
        return (
            <div class="card mb-3">
                <SafeImg class={`card-img-top ${style["device-pic"]}`} src={genDeviceImageUrl(device)} />
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


                        <dt class="col-5">ieeeAddr</dt>
                        <dd class="col-7">{device.ieeeAddr}</dd>

                        <dt class="col-5">nwkAddr</dt>
                        <dd class="col-7">{device.nwkAddr}</dd>

                        <dt class="col-5">Power source</dt>
                        <dd class="col-7"><PowerSourceComp source={device.PowerSource}
                                                           battery={device?.st?.battery} /></dd>

                        <dt class="col-5">ManufName</dt>
                        <dd class="col-7">{device.ManufName}</dd>

                        <dt class="col-5">ModelId</dt>
                        <dd class="col-7">{device.ModelId}</dd>



                        <dt class="col-5">Routes</dt>
                        <dd class="col-7">{device?.Rtg?.map((route) => <a className={"d-block"}
                                                                          href={genDeviceDetailsLink(route)}>{route}</a>)}</dd>
                        {states}
                        {endpoints}
                    </dl>

                </div>
                <div class="card-footer">
                    <DeviceControlGroup device={device} />
                </div>
            </div>
        );
    }
}