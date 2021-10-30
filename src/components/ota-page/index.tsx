
import React, { Component, FunctionComponent } from "react";

import { connect } from "unistore/react";
import actions from "../../actions/actions";
import { OtaApi } from "../../actions/OtaApi";
import { GlobalState } from "../../store";
import Button from "../button";
import { genDeviceDetailsLink, toHHMMSS } from "../../utils";
import { Link } from "react-router-dom";
import { Device, DeviceState } from "../../types";
import { VendorLink, ModelLink, OTALink } from "../vendor-links/verndor-links";
import { useTranslation, WithTranslation, withTranslation } from "react-i18next";


type OtaRowProps = {
    device: Device;
    state: DeviceState;
}

const StateCell: FunctionComponent<OtaRowProps & OtaApi> = (props) => {
    const { t } = useTranslation("ota");
    const { device, state, checkOTA, updateOTA } = props;
    switch (state?.update?.state) {
        case "updating":
            return (<><div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: `${state.update.progress}%` }}>
                    {state.update.progress}%</div>
            </div>
                <div>{t('remaining_time', { remaining: toHHMMSS(state.update.remaining) })}</div>
            </>
            );
        case "available":
            return <Button<string> className="btn btn-danger btn-sm" onClick={updateOTA} item={device.friendly_name} promt>{t("update")}</Button>
        default:
            return <Button<string> className="btn btn-primary btn-sm" onClick={checkOTA} item={device.friendly_name} >{t('check')}</Button>


    }
}
const OtaRow: FunctionComponent<OtaRowProps & OtaApi> = (props) => {
    const { device, state, ...rest } = props;
    return <tr>
        <td><Link to={genDeviceDetailsLink(device.ieee_address)}>{device.friendly_name}</Link></td>

        <td className="text-truncate text-nowrap position-relative"><VendorLink device={device} /></td>
        <td title={device?.definition?.description}><ModelLink device={device} /></td>
        <td>{device.date_code}</td>
        <td><OTALink device={device} /></td>
        <td>
            <StateCell device={device} state={state} {...rest} />
        </td>
    </tr>
}
type PropsFromStore = Pick<GlobalState, 'devices' | 'deviceStates'>;

class OtaPage extends Component<PropsFromStore & OtaApi & WithTranslation<"ota">, unknown> {
    getAllOtaDevices() {
        const { devices } = this.props;
        return Object.values(devices).filter(device => device?.definition?.supports_ota)
    }
    checkAllOTA = () => {
        const { checkOTA } = this.props;
        const otaDevices = this.getAllOtaDevices();
        otaDevices.forEach(device => checkOTA(device.friendly_name));
    }
    render() {
        const { deviceStates, checkOTA, updateOTA, t } = this.props;
        const otaApi = { checkOTA, updateOTA };
        const otaDevices = this.getAllOtaDevices();

        return <div className="card">
            <div className="card-body table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">{t("zigbee:friendly_name")}</th>
                            <th>{t("zigbee:manufacturer")}</th>
                            <th>{t("zigbee:model")}</th>
                            <th>{t("zigbee:firmware_build_date")}</th>
                            <th>{t("zigbee:firmware_version")}</th>
                            <th><Button className="btn btn-danger btn-sm" onClick={this.checkAllOTA} promt>{t('check_all')}</Button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {otaDevices.length === 0 ? <tr><td colSpan={6}>{t('empty_ota_message')}</td></tr> : null}
                        {otaDevices.map(device => (
                            <OtaRow key={device.ieee_address} device={device} state={deviceStates[device.friendly_name]} {...otaApi} />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    }
}

const mappedProps = ["devices", "deviceStates"];

export default withTranslation(["ota", "zigbee", "common"])(connect<unknown, unknown, PropsFromStore, unknown>(mappedProps, actions)(OtaPage));
