import { Component, ComponentChild, h } from "preact";
import { connect } from "unistore/preact";
import actions, { Actions, TouchlinkApi } from "../../actions";
import { GlobalState } from "../../store";
import Button from "../button";
import { TouchLinkDevice } from "../../types";



// eslint-disable-next-line react/prefer-stateless-function
export class TouchlinkPage extends Component<TouchlinkApi & GlobalState, {}> {
    onIdentifyClick = (device: TouchLinkDevice): void => {
        const { identifyRequest } = this.props;
        identifyRequest(device);
    }

    onResetClick = (device: TouchLinkDevice): void => {
        const { resetToFactoryNew } = this.props;
        resetToFactoryNew(device);
    }

    renderTouchlinkDevices(): ComponentChild {
        const { touchlinkDevices } = this.props;
        return (
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <th scope="col">#</th>
                        <th scope="col">ieee_address</th>
                        <th scope="col">linkquality</th>
                        <th scope="col">Actions</th>
                    </thead>
                    <tbody>
                        {touchlinkDevices.map((touchlinkDevice, idx) => (
                            <tr>
                                <td>{idx + 1}</td>
                                <td>{touchlinkDevice.ieee_address}</td>
                                <td>{touchlinkDevice.linkquality}</td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <Button<TouchLinkDevice> item={touchlinkDevice} title="Identify" className="btn btn-primary" onClick={this.onIdentifyClick}><i
                                            className="fa fa-exclamation" /></Button>
                                        <Button<TouchLinkDevice> item={touchlinkDevice} title="Identify" className="btn btn-danger" onClick={this.onResetClick}><i
                                            className="fa fa-broom" /></Button>
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
        const { touchlinkReset } = this.props;
        return (
            <Button className="btn btn-primary mx-auto d-block" onClick={touchlinkReset}>Touchlink Reset</Button>
        );
    }
    render(): ComponentChild {
        const { touchlinkDevices, touchlinkReset } = this.props;
        return (
            <div class="container-fluid">
                <div class="card">
                    <div class="card-header allign-middle">
                        Detected {touchlinkDevices.length} touchlink devices.
                        <Button title="Rescan" className="btn btn-primary btn-sm float-right" onClick={touchlinkReset}><i class="fa fa-sync" /></Button>
                    </div>

                    <div>
                        <div class="card-body">
                            {touchlinkDevices.length === 0 ? this.renderNoDevices() : this.renderTouchlinkDevices()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mappedProps = ["touchlinkDevices"];

export default connect<{}, {}, GlobalState, TouchlinkApi>(mappedProps, actions)(TouchlinkPage);