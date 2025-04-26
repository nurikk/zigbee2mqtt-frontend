import React, { Component, FunctionComponent } from 'react';
import style from './style.module.css';
import { connect } from 'unistore/react';
import actions from '../../actions/actions';
import { OtaApi } from '../../actions/OtaApi';
import { GlobalState } from '../../store';
import Button from '../button';
import { DeviceImage } from '../device-image/DeviceImage';
import { genDeviceDetailsLink, isDeviceDisabled, toHHMMSS, fileVersion2String } from '../../utils';
import { Link } from 'react-router-dom';
import { Device, DeviceState, OTAState } from '../../types';
import { ModelLink, OTALink, VendorLink } from '../vendor-links/vendor-links';
import { useTranslation, WithTranslation, withTranslation } from 'react-i18next';
import { Column } from 'react-table';
import { Table } from '../grid/ReactTableCom';
import cx from 'classnames';

type OtaRowProps = {
    device: Device;
    state: DeviceState;
};

const StateCell: FunctionComponent<OtaRowProps & OtaApi> = (props) => {
    const { t } = useTranslation('ota');
    const { device, state, checkOTA, scheduleOTA, unscheduleOTA, updateOTA } = props;
    const otaState = (state?.update ?? {}) as OTAState;
    switch (otaState.state) {
        case 'updating':
            return (
                <>
                    <div className="progress">
                        <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            style={{ width: `${otaState.progress}%` }}
                        >
                            {otaState.progress}%
                        </div>
                    </div>
                    <div>{t('remaining_time', { remaining: toHHMMSS(otaState.remaining) })}</div>
                </>
            );
        case 'available':
            return (
                <div className="btn-group btn-group-sm" role="group">
                    <Button<string>
                        className="btn btn-danger btn-sm me-1"
                        onClick={updateOTA}
                        item={device.friendly_name}
                        prompt
                    >
                        {t('update')}
                    </Button>
                    <Button<string>
                        className="btn btn-sm btn-info"
                        onClick={scheduleOTA}
                        item={device.friendly_name}
                        title={t('schedule')}
                        prompt
                    >
                        <i className={cx('fa', 'fa-clock')} />
                    </Button>
                </div>
            );
        case 'scheduled':
            return (
                <div className="btn-group btn-group-sm" role="group">
                    <Button<string>
                        className="btn btn-primary btn-sm me-1"
                        onClick={checkOTA}
                        item={device.friendly_name}
                    >
                        {t('check')}
                    </Button>
                    <Button<string>
                        className={cx('btn', 'btn-sm', 'btn-danger')}
                        onClick={unscheduleOTA}
                        item={device.friendly_name}
                        title={t('scheduled')}
                        prompt
                    >
                        <i className={cx('fa', 'fa-clock')} />
                    </Button>
                </div>
            );
        default:
            return (
                <div className="btn-group btn-group-sm" role="group">
                    <Button<string>
                        className="btn btn-primary btn-sm me-1"
                        onClick={checkOTA}
                        item={device.friendly_name}
                    >
                        {t('check')}
                    </Button>
                    <Button<string>
                        className={cx('btn', 'btn-sm', 'btn-info')}
                        onClick={scheduleOTA}
                        item={device.friendly_name}
                        title={t('schedule')}
                        prompt
                    >
                        <i className={cx('fa', 'fa-clock')} />
                    </Button>
                </div>
            );
    }
};

type PropsFromStore = Pick<GlobalState, 'devices' | 'deviceStates' | 'bridgeInfo'>;

type OtaGridData = {
    id: string;
    device: Device;
    state: DeviceState;
};
class OtaPage extends Component<PropsFromStore & OtaApi & WithTranslation<'ota'>, unknown> {
    getAllOtaDevices() {
        const {
            devices,
            deviceStates,
            bridgeInfo: { config },
        } = this.props;
        return Object.values(devices)
            .filter((device) => device?.definition?.supports_ota && !isDeviceDisabled(device, config))
            .map((device) => {
                const state = deviceStates[device.friendly_name] ?? ({} as DeviceState);
                return { id: device.friendly_name, device, state } as OtaGridData;
            });
    }
    checkAllOTA = () => {
        const { checkOTA } = this.props;
        const otaDevices = this.getAllOtaDevices();
        otaDevices.forEach(({ device }) => checkOTA(device.friendly_name));
    };

    render() {
        const { checkOTA, scheduleOTA, unscheduleOTA, updateOTA, t } = this.props;
        const otaApi = { checkOTA, scheduleOTA, unscheduleOTA, updateOTA };
        const otaDevices = this.getAllOtaDevices();
        const columns: Column<OtaGridData>[] = [
            {
                Header: t('zigbee:pic') as string,
                // Disabled always false since OTA page does not contain disabled devices
                Cell: ({
                    row: {
                        original: { device, state },
                    },
                }) => (
                    <DeviceImage
                        className={style['device-image']}
                        device={device}
                        deviceStatus={state}
                        disabled={false}
                    />
                ),
                disableSortBy: true,
            },
            {
                Header: t('zigbee:friendly_name') as string,
                accessor: ({ device }) => device.friendly_name,
                Cell: ({
                    row: {
                        original: { device },
                    },
                }) => <Link to={genDeviceDetailsLink(device.ieee_address)}>{device.friendly_name}</Link>,
            },
            {
                Header: t('zigbee:manufacturer') as string,
                accessor: ({ device }) => [device.manufacturer, device.definition?.vendor].join(' '),
                Cell: ({
                    row: {
                        original: { device },
                    },
                }) => <VendorLink device={device} />,
            },
            {
                Header: t('zigbee:model') as string,
                accessor: ({ device }) => [device.model_id, device.definition?.model].join(' '),
                Cell: ({
                    row: {
                        original: { device },
                    },
                }) => <ModelLink device={device} />,
            },
            {
                Header: t('zigbee:firmware_installed_version') as string,
                accessor: ({ state }) => {
                    const installed_version = ((state?.update ?? {}) as OTAState).installed_version;

                    if (typeof installed_version === 'number' && installed_version)
                        return fileVersion2String(installed_version);
                    else return t('zigbee:firmware_installed_version_na');
                },
            },
            {
                Header: t('zigbee:firmware_available_version') as string,
                accessor: ({ state }) => {
                    const latest_version = ((state?.update ?? {}) as OTAState).latest_version;

                    if (typeof latest_version === 'number' && latest_version) return fileVersion2String(latest_version);
                    else return 'N/A';
                },
            },
            {
                Header: () => (
                    <Button className="btn btn-danger btn-sm" onClick={this.checkAllOTA} prompt>
                        {t('check_all')}
                    </Button>
                ),
                accessor: ({ state }) => {
                    return ((state?.update ?? {}) as OTAState).state + '';
                },
                id: 'check_all',
                Cell: ({
                    row: {
                        original: { device, state },
                    },
                }) => <StateCell device={device} state={state} {...otaApi} />,
            },
        ];

        return (
            <div className="card">
                <div className="table-responsive">
                    <Table
                        id="otaDevices"
                        columns={columns as unknown as Column<Record<string, unknown>>[]}
                        data={otaDevices}
                        initialState={{
                            sortBy: [
                                {
                                    id: 'check_all',
                                    desc: false,
                                },
                            ],
                        }}
                    />
                </div>
            </div>
        );
    }
}

const mappedProps = ['devices', 'deviceStates', 'bridgeInfo'];

export const ConnectedOtaPage = connect<unknown, unknown, PropsFromStore, unknown>(
    mappedProps,
    actions,
)(withTranslation(['ota', 'zigbee', 'common'])(OtaPage));
