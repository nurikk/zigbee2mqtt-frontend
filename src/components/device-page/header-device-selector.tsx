import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import { Devices } from '../../store';
import { TabName } from './types';
import { TFunction } from 'i18next';
import { Device } from '../../types';
import { withTranslation } from 'react-i18next';

interface HeaderDeviceSelectorProps {
    allDevices: Devices;
    currentDevice: Device;
    tab?: TabName;
    t: TFunction;
}

interface HeaderDeviceSelectorItemsProps {
    devices: Device[];
    currentDevice: Device;
    tab?: TabName;
    setSearchTerm: (value: string) => void;
}

export function HeaderDeviceSelectorRaw(props: HeaderDeviceSelectorProps): JSX.Element {
    const { allDevices, currentDevice, tab = 'info', t } = props;
    const [searchTerm, setSearchTerm] = useState<string>('');

    const selectedDevices = Object.values(allDevices).filter(
        (d) =>
            d.friendly_name.toLowerCase().includes(searchTerm.toLowerCase()) &&
            d.ieee_address !== currentDevice.ieee_address,
    );

    return (
        <h1 className="h3">
            <Dropdown>
                <Dropdown.Toggle aria-label={t('select_a_device')} variant="" size="lg">
                    {currentDevice.friendly_name}{' '}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Form.Control
                        autoFocus
                        className="mx-3 my-2 w-auto"
                        placeholder={t('type_to_filter')}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        value={searchTerm}
                    />
                    <HeaderDeviceSelectorItems
                        devices={selectedDevices}
                        currentDevice={currentDevice}
                        tab={tab}
                        setSearchTerm={setSearchTerm}
                    />
                </Dropdown.Menu>
            </Dropdown>
        </h1>
    );
}

export const HeaderDeviceSelector = withTranslation('devicePage')(HeaderDeviceSelectorRaw);

function HeaderDeviceSelectorItems({
    devices,
    currentDevice,
    tab,
    setSearchTerm,
}: HeaderDeviceSelectorItemsProps): JSX.Element {
    return (
        <>
            {Object.values(devices).map((listDevice) => (
                <Dropdown.Item
                    active={currentDevice.ieee_address === listDevice.ieee_address}
                    key={listDevice.ieee_address}
                    href={`#/device/${listDevice.ieee_address}/${tab}`}
                    onClick={() => setSearchTerm('')}
                >
                    {listDevice.friendly_name}
                </Dropdown.Item>
            ))}
        </>
    );
}
