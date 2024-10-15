import React, { RefObject, useState } from 'react';
import Button from '../button';
import cx from 'classnames';
import useComponentVisible from '../../hooks/useComponentVisible';
import { Device } from '../../types';
import { useTranslation } from 'react-i18next';
import { toHHMMSS } from '../../utils';
import { BridgeApi } from '../../actions/BridgeApi';
import { GlobalState } from '../../store';

export type StartStopJoinButtonProps = Pick<BridgeApi, 'setPermitJoin'> & Pick<GlobalState, 'bridgeInfo' | 'devices'>;

export function StartStopJoinButton({ devices, setPermitJoin, bridgeInfo }: StartStopJoinButtonProps) {
    const { t } = useTranslation(['navbar']);
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    const [selectedRouter, setSelectedRouter] = useState<Device>({} as Device);
    const { permit_join: permitJoin, permit_join_timeout: permitJoinTimeout } = bridgeInfo;

    const selectAndHide = (device: Device) => {
        setSelectedRouter(device);
        setIsComponentVisible(false);
    };
    const sortByName = (a: Device, b: Device) => a.friendly_name.localeCompare(b.friendly_name);
    const prioritizeCoordinator = (a: Device, b: Device) =>
        a.type === 'Coordinator' ? -1 : b.type === 'Coordinator' ? 1 : 0;
    const routers = Object.values(devices)
        .filter((d) => d.type === 'Router' || d.type === 'Coordinator')
        .sort(sortByName)
        .sort(prioritizeCoordinator)
        .map((device) => (
            <li key={device.friendly_name}>
                <Button<Device> item={device} className="dropdown-item" onClick={selectAndHide}>
                    {device.friendly_name}
                </Button>
            </li>
        ));

    const onBtnClick = () => {
        setPermitJoin(!permitJoin, selectedRouter);
    };
    const permitJoinTimer = (
        <>
            {permitJoinTimeout ? (
                <div className="d-inline-block mx-1" style={{ width: '30px', maxWidth: '30px' }}>
                    {toHHMMSS(permitJoinTimeout)}
                </div>
            ) : null}
        </>
    );
    const buttonLabel = (
        <>
            {permitJoin ? t('disable_join') : t('permit_join')} ({selectedRouter?.friendly_name ?? t('all')})
            {permitJoinTimer}
        </>
    );
    return (
        <div className="btn-group text-nowrap me-1">
            <button onClick={onBtnClick} type="button" className="btn btn-outline-secondary">
                {buttonLabel}
            </button>
            {routers.length ? (
                <>
                    <Button<boolean>
                        type="button"
                        className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
                        onClick={setIsComponentVisible}
                        item={!isComponentVisible}
                    >
                        <span className="visually-hidden">{t('toggle_dropdown')}</span>
                    </Button>
                    <ul
                        ref={ref as RefObject<HTMLUListElement>}
                        className={cx('dropdown-menu', { show: isComponentVisible })}
                    >
                        <li key="all">
                            <Button className="dropdown-item" onClick={selectAndHide}>
                                {t('all')}
                            </Button>
                        </li>
                        {routers}
                    </ul>
                </>
            ) : null}
        </div>
    );
}
