import React, { useMemo } from 'react';
import style from './style.module.css';
import { genDeviceDetailsLink, lastSeen, toHex } from '../../utils';
import { useTranslation } from 'react-i18next';
import DeviceImage from '../device-image';
import { ModelLink, VendorLink } from '../vendor-links/vendor-links';
import { Link } from 'react-router-dom';
import { DisplayValue } from '../display-value/DisplayValue';
import { LastSeen } from '../LastSeen';
import PowerSource from '../power-source';
import DeviceControlGroup from '../device-control/DeviceControlGroup';
import { Table } from '../grid/ReactTableCom';
import { Column } from 'react-table';
import { DevicesPageData } from './index';
import { Availability } from './Availability';
import { LastSeenType } from '../../types';
import { DeviceApi } from '../../actions/DeviceApi';
import isString from 'lodash/isString';

export type DevicesTableProps = {
    data: DevicesPageData[];
    lastSeenType: LastSeenType;
    availabilityFeatureEnabled: boolean;
    homeassistantEnabled: boolean;
};

export const DEVICES_GLOBAL_NAME = 'zigbee';

export function DevicesTable(
    props: DevicesTableProps &
        Pick<DeviceApi, 'configureDevice' | 'renameDevice' | 'removeDevice' | 'setDeviceDescription'>,
): JSX.Element {
    const { data, lastSeenType, availabilityFeatureEnabled, homeassistantEnabled, setDeviceDescription } = props;
    const { renameDevice, removeDevice, configureDevice } = props;

    const { t } = useTranslation(['zigbee', 'common', 'avaliability']);
    const lastSeenCol =
        lastSeenType !== 'disable'
            ? [
                  {
                      id: 'last_seen',
                      Header: t('last_seen'),
                      accessor: ({ state }) => lastSeen(state, lastSeenType)?.getTime(),
                      Cell: ({
                          row: {
                              original: { state },
                          },
                      }) => <LastSeen state={state} lastSeenType={lastSeenType} />,
                  },
              ]
            : [];
    const availabilityCol = availabilityFeatureEnabled
        ? [
              {
                  id: 'availability',
                  Header: t('avaliability:avaliability'),
                  accessor: ({ availabilityState }) =>
                      isString(availabilityState) ? availabilityState : availabilityState.state,
                  Cell: ({
                      row: {
                          original: { availabilityState, availabilityEnabledForDevice, disabled },
                      },
                  }) => {
                      return (
                          <Availability
                              disabled={disabled}
                              availability={availabilityState}
                              availabilityEnabledForDevice={availabilityEnabledForDevice}
                          />
                      );
                  },
              },
          ]
        : [];
    const columns = useMemo(
        () => [
            {
                id: 'pic',
                Header: t('pic'),
                Cell: ({
                    row: {
                        original: { device, state, disabled },
                    },
                }) => (
                    <DeviceImage
                        className={style['device-image']}
                        device={device}
                        deviceStatus={state}
                        disabled={disabled}
                    />
                ),
                accessor: (rowData) => rowData,
                disableSortBy: true,
            },
            {
                id: 'friendly_name',
                Header: t('friendly_name'),
                accessor: ({ device }) => [device.friendly_name, device.description].join(' '),
                Cell: ({
                    row: {
                        original: { device },
                    },
                }) => (
                    <>
                        <Link to={genDeviceDetailsLink(device.ieee_address)}>{device.friendly_name}</Link>
                        <small className="d-block">{device.description}</small>
                    </>
                ),
            },
            {
                id: 'ieee_address',
                Header: t('ieee_address'),
                accessor: ({ device }) => [device.ieee_address, toHex(device.network_address, 4)].join(' '),
                Cell: ({
                    row: {
                        original: { device },
                    },
                }) => (
                    <>
                        <div>{device.ieee_address}</div>
                        <div>({toHex(device.network_address, 4)})</div>
                    </>
                ),
            },
            {
                id: 'manufacturer',
                Header: t('manufacturer'),
                accessor: ({ device }) => [device.definition?.vendor, device.manufacturer].join(' '),
                Cell: ({
                    row: {
                        original: { device },
                    },
                }) => <VendorLink device={device} />,
            },
            {
                id: 'model',
                Header: t('model'),
                accessor: ({ device }) => [device.definition?.model, device.model_id].join(' '),
                Cell: ({
                    row: {
                        original: { device },
                    },
                }) => <ModelLink device={device} />,
            },
            {
                id: 'lqi',
                Header: t('lqi'),
                accessor: ({ state }) => state.linkquality,
                Cell: ({
                    row: {
                        original: { state },
                    },
                }) => <DisplayValue value={state.linkquality} name="linkquality" />,
            },
            ...lastSeenCol,
            ...availabilityCol,
            {
                id: 'power',
                Header: t('power'),
                accessor: ({ state, device }) => [state.battery, device.definition?.power].join(' '),
                Cell: ({
                    row: {
                        original: { state, device },
                    },
                }) => <PowerSource device={device} deviceState={state} />,
            },
            {
                id: 'controls',
                Header: '',
                Cell: ({
                    row: {
                        original: { device, state },
                    },
                }) => {
                    return (
                        <DeviceControlGroup
                            device={device}
                            state={state}
                            homeassistantEnabled={homeassistantEnabled}
                            {...{ renameDevice, removeDevice, configureDevice, setDeviceDescription }}
                        />
                    );
                },
                disableSortBy: true,
            },
        ],
        [lastSeenCol, availabilityCol, t, homeassistantEnabled, renameDevice, removeDevice, configureDevice],
    );

    return (
        <div className="card">
            <div className="table-responsive">
                <Table
                    id={DEVICES_GLOBAL_NAME}
                    columns={columns as unknown as Column<Record<string, unknown>>[]}
                    data={data as unknown as Record<string, unknown>[]}
                />
            </div>
        </div>
    );
}
