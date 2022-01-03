import React, { Component, FunctionComponent } from "react";
import style from "./style.css";
import { connect } from "unistore/react";
import actions from "../../actions/actions";
import { OtaApi } from "../../actions/OtaApi";
import { GlobalState } from "../../store";
import Button from "../button";
import DeviceImage from "../device-image";
import { genDeviceDetailsLink, toHHMMSS } from "../../utils";
import { Link } from "react-router-dom";
import { Device, DeviceState, OTAState } from "../../types";
import { VendorLink, ModelLink, OTALink } from "../vendor-links/vendor-links";
import { useTranslation, WithTranslation, withTranslation } from "react-i18next";
import { Column } from "react-table";
import { Table } from "../grid/ReactTableCom";


type OtaRowProps = {
    device: Device;
    state: DeviceState;
}

const StateCell: FunctionComponent<OtaRowProps & OtaApi> = (props) => {
    const { t } = useTranslation("ota");
    const { device, state, checkOTA, updateOTA } = props;
    const otaState = (state?.update ?? {}) as OTAState;
    switch (otaState.state) {
        case "updating":
            return (<><div className="progress">
                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: `${otaState.progress}%` }}>
                    {otaState.progress}%</div>
            </div>
                <div>{t('remaining_time', { remaining: toHHMMSS(otaState.remaining) })}</div>
            </>
            );
        case "available":
            return <Button<string> className="btn btn-danger btn-sm" onClick={updateOTA} item={device.friendly_name}
                                   prompt>{t("update")}</Button>
        default:
            return <Button<string> className="btn btn-primary btn-sm" onClick={checkOTA} item={device.friendly_name} >{t('check')}</Button>


    }
}

type PropsFromStore = Pick<GlobalState, 'devices' | 'deviceStates'>;

type OtaGridData = {
    id: string;
    device: Device;
    state: DeviceState;
}
class OtaPage extends Component<PropsFromStore & OtaApi & WithTranslation<"ota">, unknown> {
    getAllOtaDevices() {
        const { devices, deviceStates } = this.props;
        return Object.values(devices)
            .filter(device => device?.definition?.supports_ota)
            .map((device) => {
                const state = deviceStates[device.friendly_name] ?? {} as DeviceState;
                return { id: device.friendly_name, device, state } as OtaGridData;
            })
    }
    checkAllOTA = () => {
        const { checkOTA } = this.props;
        const otaDevices = this.getAllOtaDevices();
        otaDevices.forEach(({ device }) => checkOTA(device.friendly_name));
    }
    render() {
        const { checkOTA, updateOTA, t } = this.props;
        const otaApi = { checkOTA, updateOTA };
        const otaDevices = this.getAllOtaDevices();
        const columns: Column<OtaGridData>[] = [
            {
                Header: t('zigbee:pic') as string,
                Cell: ({ row: { original: { device, state } } }) => <DeviceImage className={style["device-image"]} device={device} deviceStatus={state} />,
                disableSortBy: true,
            },
            {
                Header: t('zigbee:friendly_name') as string,
                accessor: ({ device }) => device.friendly_name,
                Cell: ({ row: { original: { device } } }) => <Link to={genDeviceDetailsLink(device.ieee_address)}>{device.friendly_name}</Link>
            },
            {
                Header: t('zigbee:manufacturer') as string,
                accessor: ({ device }) => [device.manufacturer, device.definition?.vendor].join(' '),
                Cell: ({ row: { original: { device } } }) => <VendorLink device={device} />
            },
            {
                Header: t('zigbee:model') as string,
                accessor: ({ device }) => [device.model_id, device.definition?.model].join(' '),
                Cell: ({ row: { original: { device } } }) => <ModelLink device={device} />
            },
            {
                Header: t('zigbee:firmware_build_date') as string,
                accessor: ({ device }) => device.date_code
            },
            {
                Header: t('zigbee:firmware_version') as string,
                accessor: ({ device }) => device.software_build_id,
                Cell: ({ row: { original: { device } } }) => <OTALink device={device} />
            },
            {
                Header: () => <Button className="btn btn-danger btn-sm" onClick={this.checkAllOTA} prompt>{t('check_all')}</Button>,
                id: 'check_all',
                Cell: ({ row: { original: { device, state } } }) => <StateCell device={device} state={state} {...otaApi} />
            },
        ]

        return <div className="card">
            <div className="table-responsive">
                <Table id="otaDevices" 
                columns={columns as unknown as Column<Record<string, unknown>>[]} 
                data={otaDevices} />
            </div>
        </div>
    }
}

const mappedProps = ["devices", "deviceStates"];

export default withTranslation(["ota", "zigbee", "common"])(connect<unknown, unknown, PropsFromStore, unknown>(mappedProps, actions)(OtaPage));
