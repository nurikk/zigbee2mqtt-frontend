import { Component, ComponentChild, h } from "preact";
import { connect } from "unistore/preact";
import actions, { TouchlinkApi } from "../../actions";
import { GlobalState } from "../../store";
import Button from "../button";
import { TouchLinkDevice } from "../../types";
import { genDeviceDetailsLink } from "../../utils";
import cx from "classnames";



// eslint-disable-next-line react/prefer-stateless-function
export class TouchlinkPage extends Component<TouchlinkApi & GlobalState, {}> {
    onIdentifyClick = (device: TouchLinkDevice): void => {
        const { touchlinkIdentify } = this.props;
        touchlinkIdentify(device);
    }

    onResetClick = (device: TouchLinkDevice): void => {
        const { touchlinkReset } = this.props;
        touchlinkReset(device);
    }

    renderTouchlinkDevices(): ComponentChild {
        const { touchlinkDevices, devices, touchlinkIdentifyInProgress, touchlinkResetInProgress } = this.props;
        const touchlinkInProgress = touchlinkIdentifyInProgress || touchlinkResetInProgress;
        return (
            <div class="table-responsive">
                <table class="table align-middle">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">ieee_address</th>
                            <th scope="col">friendly_name</th>
                            <th scope="col">channel</th>
                            <th scope="col">&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {touchlinkDevices.map((touchlinkDevice, idx) => (
                            <tr>
                                <td>{idx + 1}</td>
                                <td>{
                                    devices.has(touchlinkDevice.ieee_address) ?
                                        (<a href={genDeviceDetailsLink(touchlinkDevice.ieee_address)}>{touchlinkDevice.ieee_address}</a>) : touchlinkDevice.ieee_address}</td>
                                <td>{devices.get(touchlinkDevice.ieee_address)?.friendly_name}</td>
                                <td>{touchlinkDevice.channel}</td>
                                <td>
                                    <div class="btn-group float-right" role="group" aria-label="Basic example">
                                        <Button<TouchLinkDevice> disabled={touchlinkInProgress} item={touchlinkDevice} title="Identify" className="btn btn-primary" onClick={this.onIdentifyClick}><i
                                            className={cx("fa", { "fa-exclamation-triangle": !touchlinkIdentifyInProgress, "fas fa-circle-notch fa-spin": touchlinkIdentifyInProgress })} /></Button>
                                        <Button<TouchLinkDevice> disabled={touchlinkInProgress} item={touchlinkDevice} title="Factory reset" className="btn btn-danger" onClick={this.onResetClick}><i
                                            className={cx("fa", { "fa-broom": !touchlinkResetInProgress, "fas fa-circle-notch fa-spin": touchlinkResetInProgress })} /></Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
    renderNoDevices(): ComponentChild {
        const { touchlinkScan } = this.props;
        return (
            <Button className="btn btn-primary mx-auto d-block" onClick={touchlinkScan}>Scan</Button>
        );
    }
    render(): ComponentChild {
        const { touchlinkDevices, touchlinkScanInProgress, touchlinkScan } = this.props;
        return (
            <div class="container">
                <div class="card mt-2">
                    <div class="card-header allign-middle">
                        Detected {touchlinkDevices.length} touchlink devices.
                        <Button title="Rescan" className="btn btn-primary btn-sm float-right" onClick={touchlinkScan}><i class="fa fa-sync" /></Button>
                    </div>

                    <div>
                        <div class="card-body">
                            {touchlinkScanInProgress ? (
                                <div class="d-flex justify-content-center">
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                            ) : touchlinkDevices.length === 0 ? this.renderNoDevices() : this.renderTouchlinkDevices()}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mappedProps = ["touchlinkDevices", "devices", "touchlinkScanInProgress", "touchlinkIdentifyInProgress", "touchlinkResetInProgress"];

export default connect<{}, {}, GlobalState, TouchlinkApi>(mappedProps, actions)(TouchlinkPage);