import React, { useState } from 'react';

import { Device } from '../../types';
import { useTranslation } from 'react-i18next';
import { toHHMMSS } from '../../utils';
import { BridgeApi } from '../../actions/BridgeApi';
import { GlobalState } from '../../store';

import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export type StartStopJoinButtonProps = Pick<BridgeApi, 'setPermitJoin'> & Pick<GlobalState, 'bridgeInfo' | 'devices'>;

export function StartStopJoinButton({ devices, setPermitJoin, bridgeInfo }: StartStopJoinButtonProps) {
    const { t } = useTranslation(['navbar']);
    const [selectedRouter, setSelectedRouter] = useState<Device>({} as Device);
    const { permit_join: permitJoin, permit_join_timeout: permitJoinTimeout } = bridgeInfo;

    const select = (device?: Device) => {
        setSelectedRouter(device ? device : {} as Device);
    };
    const sortByName = (a: Device, b: Device) => a.friendly_name.localeCompare(b.friendly_name);
    const routers = Object.values(devices)
        .filter((d) => d.type === 'Router')
        .sort(sortByName)
        .map((device) => (
            <Dropdown.Item key={device.friendly_name} active={selectedRouter?.ieee_address === device.ieee_address ? true : false} onClick={() => { select(device) }}>
                {device.friendly_name}
            </Dropdown.Item>
        ));
    const coordinator = Object.values(devices)
    .filter((d) => d.type === 'Coordinator')
    .map((device) => (
        <Dropdown.Item key={device.friendly_name} active={selectedRouter?.ieee_address === device.ieee_address ? true : false} onClick={() => { select(device) }}>
            {t('zigbee:coordinator')}
        </Dropdown.Item>
    ));

    const onBtnClick = () => {
        setPermitJoin(!permitJoin, selectedRouter);
    };
    const permitJoinTimer = (
        <>
            {permitJoin ? (
                <div className={'d-inline-block ms-1'}>
                    {toHHMMSS(permitJoinTimeout)}
                </div>
            ) : null}
        </>
    );
    const buttonLabel = (
        <>
            {permitJoin ? t('disable_join') : t('permit_join')}
            {permitJoinTimer}
        </>
    );
    return (
        <Dropdown as={ButtonGroup}>
            <Button onClick={onBtnClick} type={'button'} variant={'outline-secondary'}
                className={'text-nowrap text-truncate overflow-hidden'} style={{ maxWidth: '300px' }}>
                {buttonLabel}
            </Button>
            {routers.length ? (
                <>
                    <Dropdown.Toggle split={true} variant={'outline-secondary'} data-bs-reference={'parent'}>
                        <span className={'visually-hidden'}>{t('toggle_dropdown')}</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="end" className={'my-1'}>
                        <Dropdown.Item key={'all'} onClick={() => { select(undefined) }} active={selectedRouter?.friendly_name ? false : true}>
                            {t('all')}
                        </Dropdown.Item>
                        {coordinator}
                        {routers}
                    </Dropdown.Menu>
                </>
            ) : null}
        </Dropdown>
    );
}
