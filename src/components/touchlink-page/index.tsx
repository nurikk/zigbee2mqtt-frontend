import React, { Component } from "react";
import { connect } from "unistore/react";
import actions from "../../actions/actions";

import { GlobalState } from "../../store";
import Button from "../button";
import { TouchLinkDevice } from "../../types";
import { genDeviceDetailsLink } from "../../utils";
import cx from "classnames";
import { Link } from "react-router-dom";
import { TouchlinkApi } from "../../actions/TouchlinkApi";
import { WithTranslation, withTranslation } from "react-i18next";
import { Column } from "react-table";
import { Table } from "../grid/ReactTableCom";



// eslint-disable-next-line react/prefer-stateless-function
export class TouchlinkPage extends Component<TouchlinkApi & GlobalState & WithTranslation<"touchlink">, unknown> {
    onIdentifyClick = (device: TouchLinkDevice): void => {
        const { touchlinkIdentify } = this.props;
        touchlinkIdentify(device);
    }

    onResetClick = (device: TouchLinkDevice): void => {
        const { touchlinkReset } = this.props;
        touchlinkReset(device);
    }

    renderTouchlinkDevices(): JSX.Element {
        const { touchlinkDevices, devices, touchlinkIdentifyInProgress, touchlinkResetInProgress, t } = this.props;
        const touchlinkInProgress = touchlinkIdentifyInProgress || touchlinkResetInProgress;
        const columns: Column<TouchLinkDevice>[] = [
            {
                Header: t('zigbee:ieee_address') as string,
                accessor: (touchlinkDevice) => touchlinkDevice.ieee_address,
                Cell: ({ row: { original: touchlinkDevice } }) => devices[touchlinkDevice.ieee_address] ?
                    (<Link to={genDeviceDetailsLink(touchlinkDevice.ieee_address)}>{touchlinkDevice.ieee_address}</Link>) : touchlinkDevice.ieee_address

            },
            {
                Header: t('zigbee:friendly_name') as string,
                accessor: (touchlinkDevice) => devices[touchlinkDevice.ieee_address]?.friendly_name,
            },
            {
                id: 'channel',
                Header: t('zigbee:channel') as string,
                accessor: 'channel'

            },

            {
                id: 'actions',
                Header: '',
                Cell: ({ row: { original: touchlinkDevice } }) => {
                    return (
                        <div className="btn-group float-right" role="group" aria-label="Basic example">
                            <Button<TouchLinkDevice> disabled={touchlinkInProgress} item={touchlinkDevice} title={t('identify')} className="btn btn-primary" onClick={this.onIdentifyClick}><i
                                className={cx("fa", { "fa-exclamation-triangle": !touchlinkIdentifyInProgress, "fas fa-circle-notch fa-spin": touchlinkIdentifyInProgress })} /></Button>
                            <Button<TouchLinkDevice> disabled={touchlinkInProgress} item={touchlinkDevice} title={t('factory_reset')} className="btn btn-danger" onClick={this.onResetClick}><i
                                className={cx("fa", { "fa-broom": !touchlinkResetInProgress, "fas fa-circle-notch fa-spin": touchlinkResetInProgress })} /></Button>
                        </div>
                    )
                }
            },


        ];
        return (
            <div className="table-responsive">
                <Table id="touchlinkDevices" columns={columns as unknown as Column<Record<string, unknown>>[]} data={touchlinkDevices as unknown as Record<string, unknown>[]} />
            </div>
        );
    }
    renderNoDevices(): JSX.Element {
        const { touchlinkScan, t } = this.props;
        return (
            <Button className="btn btn-primary mx-auto d-block" onClick={touchlinkScan}>{t('scan')}</Button>
        );
    }
    render(): JSX.Element {
        const { touchlinkDevices, touchlinkScanInProgress, touchlinkScan, t } = this.props;
        return (
            <div className="card">
                <div className="card-header allign-middle">
                    {t('detected_devices_message', { count: touchlinkDevices.length })}
                    <Button title={t('rescan')} className="btn btn-primary btn-sm float-right" onClick={touchlinkScan}><i className="fa fa-sync" /></Button>
                </div>
                <div className="card-body">
                    {touchlinkScanInProgress ? (
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">{t('common:loading')}</span>
                            </div>
                        </div>
                    ) : touchlinkDevices.length === 0 ? this.renderNoDevices() : this.renderTouchlinkDevices()}

                </div>
            </div>
        );
    }
}
const mappedProps = ["touchlinkDevices", "devices", "touchlinkScanInProgress", "touchlinkIdentifyInProgress", "touchlinkResetInProgress"];

export default withTranslation(["touchlink", "zigbee", "common"])(connect<unknown, unknown, GlobalState, TouchlinkApi>(mappedProps, actions)(TouchlinkPage));
