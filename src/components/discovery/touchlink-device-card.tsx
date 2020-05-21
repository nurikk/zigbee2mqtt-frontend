import { Component, ComponentChild, h } from "preact";

import style from "./style.css";
import { genDeviceDetailsLink } from "../../utils";
import cx from "classnames";
import { TouchLinkDevice } from "../../types";
import Button from "../button";
import { Notyf } from "notyf";

interface DeviceCardProps {
    device: TouchLinkDevice;
    touchlinkIdentify(dev: string): Promise<void>;
    touchlinkRest(dev: string): Promise<void>;
}

export default class TouchlinkDeviceCard extends Component<DeviceCardProps, {}> {
    onIdentifyClick = async (): Promise<void> => {
        const { touchlinkIdentify, device } = this.props;
        await touchlinkIdentify(device.ieeeAddr);
        new Notyf().success(`Sent identify commant to ${device.ieeeAddr}`);
    }

    onResetClick = async (): Promise<void> => {
        const { touchlinkRest, device } = this.props;
        await touchlinkRest(device.ieeeAddr);
        new Notyf().success(`Sent reset commant to ${device.ieeeAddr}`);
    }
    render(): ComponentChild {
        const { device } = this.props;
        return (
            <div className={cx("card", "col-sm-4", style["discovery-card"], style["scale-in-center"])}>
                <div class="card-header">
                    Device <a href={genDeviceDetailsLink(device.ieeeAddr)}>{device.ieeeAddr}</a>
                    <p class="card-text"><small class="text-muted">
                        Discovered TouchLink device</small>
                    </p>

                </div>
                <div className="card-body">
                    <div class={`row ${style["scale-in-center"]}`}>
                        <div class="col-5">LinkQuality:</div>
                        <div class="col">{device.LinkQuality}</div>
                    </div>
                </div>
                <div className="card-footer">
                    <div className="btn-group btn-group-sm" role="group">
                        <Button<void> className="btn btn-success" onClick={this.onIdentifyClick}>Identify</Button>
                        <Button<void> className="btn btn-danger" onClick={this.onResetClick}>Reset</Button>
                    </div>
                </div>
            </div>
        );
    }
}