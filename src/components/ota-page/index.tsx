
import React, { Component, FunctionComponent } from "react";

import { connect } from "unistore/react";
import actions, { OtaApi } from "../../actions";
import { GlobalState } from "../../store";
import Button from "../button";
import { genDeviceDetailsLink, toHHMMSS } from "../../utils";
import { Link } from "react-router-dom";
import { Device, DeviceState } from "../../types";
import { VendorLink, ModelLink } from "../vendor-links/verndor-links";


type OtaRowProps = {
    device: Device;
    state: DeviceState;
}

const StateCell: FunctionComponent<OtaRowProps & OtaApi> = (props) => {
    const { device, state, checkOTA, updateOTA } = props;
    switch (state?.update?.state) {
        case "updating":
            return (<><div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: `${state.update.progress}%` }}>
                    {state.update.progress}%</div>
            </div>
                <div>Remaining time {toHHMMSS(state.update.remaining)}</div>
            </>
            );
        case "available":
            return <Button<string> className="btn btn-danger btn-sm" onClick={updateOTA} item={device.friendly_name} title="Update OTA" promt>Update OTA</Button>
        default:
            return <Button<string> className="btn btn-primary btn-sm" onClick={checkOTA} item={device.friendly_name} title="Check OTA">Check OTA</Button>


    }
}
const OtaRow: FunctionComponent<OtaRowProps & OtaApi> = (props) => {
    const { device, state, ...rest } = props;
    return <tr>
        <td><Link to={genDeviceDetailsLink(device.ieee_address)}>{device.friendly_name}</Link></td>

        <td className="text-truncate text-nowrap position-relative"><VendorLink device={device} /></td>
        <td title={device?.definition?.description}><ModelLink device={device} /></td>
        <td>
            <StateCell device={device} state={state} {...rest} />
        </td>
    </tr>
}


class OtaPage extends Component<GlobalState & OtaApi, {}> {
    getAllOtaDevices() {
        const { devices } = this.props;
        return Array.from(devices).filter(([, device]) => device?.definition?.supports_ota)
    }
    checkAllOTA = () => {
        const { checkOTA } = this.props;
        const otaDevices = this.getAllOtaDevices();
        otaDevices.forEach(([, d]) => checkOTA(d.friendly_name));
    }
    render() {
        const { deviceStates, checkOTA, updateOTA } = this.props;
        const otaApi = { checkOTA, updateOTA };
        const otaDevices = this.getAllOtaDevices();

        return <table className="table">
            <thead>
                <tr>
                    <th scope="col">Friendly name</th>
                    <th>Manufacturer</th>
                    <th>Model</th>
                    <th><Button className="btn btn-danger btn-sm" onClick={this.checkAllOTA} promt>Check all OTA</Button></th>
                </tr>
            </thead>
            <tbody>
                {otaDevices.length === 0 ? <tr><td colSpan={4}>You don&apos;t have any devices that support OTA</td></tr> : null}
                {otaDevices.map(([ieeeAddr, device]) => (
                    <OtaRow key={ieeeAddr} device={device} state={deviceStates.get(device.friendly_name) as DeviceState} {...otaApi} />
                ))}
            </tbody>
        </table>
    }
}

const mappedProps = ["devices", "deviceStates"];

export default connect<{}, {}, GlobalState, {}>(mappedProps, actions)(OtaPage);