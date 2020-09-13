import React, { Component } from 'react';
import { connect } from 'unistore/react';
import actions, { TouchlinkApi } from '../../actions';
import { GlobalState } from '../../store';
import Button from '../button';
import { TouchLinkDevice } from '../../types';
import { genDeviceDetailsLink } from '../../utils';
import cx from 'classnames';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prefer-stateless-function
export class TouchlinkPage extends Component<TouchlinkApi & GlobalState, {}> {
    onIdentifyClick = (device: TouchLinkDevice): void => {
        const { touchlinkIdentify } = this.props;
        touchlinkIdentify(device);
    };

    onResetClick = (device: TouchLinkDevice): void => {
        const { touchlinkReset } = this.props;
        touchlinkReset(device);
    };

    renderTouchlinkDevices() {
        const { touchlinkDevices, devices, touchlinkIdentifyInProgress, touchlinkResetInProgress } = this.props;
        const touchlinkInProgress = touchlinkIdentifyInProgress || touchlinkResetInProgress;
        return (
            <div className="table-responsive">
                <table className="table align-middle">
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
                            <tr key={touchlinkDevice.ieee_address}>
                                <td>{idx + 1}</td>
                                <td>
                                    {devices.has(touchlinkDevice.ieee_address) ? (
                                        <Link to={genDeviceDetailsLink(touchlinkDevice.ieee_address)}>
                                            {touchlinkDevice.ieee_address}
                                        </Link>
                                    ) : (
                                        touchlinkDevice.ieee_address
                                    )}
                                </td>
                                <td>{devices.get(touchlinkDevice.ieee_address)?.friendly_name}</td>
                                <td>{touchlinkDevice.channel}</td>
                                <td>
                                    <div className="btn-group float-right" role="group" aria-label="Basic example">
                                        <Button<TouchLinkDevice>
                                            disabled={touchlinkInProgress}
                                            item={touchlinkDevice}
                                            title="Identify"
                                            className="btn btn-primary"
                                            onClick={this.onIdentifyClick}
                                        >
                                            <i
                                                className={cx('fa', {
                                                    'fa-exclamation-triangle': !touchlinkIdentifyInProgress,
                                                    'fas fa-circle-notch fa-spin': touchlinkIdentifyInProgress,
                                                })}
                                            />
                                        </Button>
                                        <Button<TouchLinkDevice>
                                            disabled={touchlinkInProgress}
                                            item={touchlinkDevice}
                                            title="Factory reset"
                                            className="btn btn-danger"
                                            onClick={this.onResetClick}
                                        >
                                            <i
                                                className={cx('fa', {
                                                    'fa-broom': !touchlinkResetInProgress,
                                                    'fas fa-circle-notch fa-spin': touchlinkResetInProgress,
                                                })}
                                            />
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
    renderNoDevices() {
        const { touchlinkScan } = this.props;
        return (
            <Button className="btn btn-primary mx-auto d-block" onClick={touchlinkScan}>
                Scan
            </Button>
        );
    }
    render() {
        const { touchlinkDevices, touchlinkScanInProgress, touchlinkScan } = this.props;
        return (
            <div className="container">
                <div className="card mt-2">
                    <div className="card-header allign-middle">
                        Detected {touchlinkDevices.length} touchlink devices.
                        <Button title="Rescan" className="btn btn-primary btn-sm float-right" onClick={touchlinkScan}>
                            <i className="fa fa-sync" />
                        </Button>
                    </div>

                    <div>
                        <div className="card-body">
                            {touchlinkScanInProgress ? (
                                <div className="d-flex justify-content-center">
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            ) : touchlinkDevices.length === 0 ? (
                                this.renderNoDevices()
                            ) : (
                                this.renderTouchlinkDevices()
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mappedProps = [
    'touchlinkDevices',
    'devices',
    'touchlinkScanInProgress',
    'touchlinkIdentifyInProgress',
    'touchlinkResetInProgress',
];

export default connect<{}, {}, GlobalState, TouchlinkApi>(mappedProps, actions)(TouchlinkPage);
