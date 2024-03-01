import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './style.module.css';
import { HeaderDeviceSelector } from './header-device-selector';
import { DevicePageProps, getDeviceLinks } from '.';
import { ContentRenderer } from './ContentRenderer';

export function DevicePage(props: DevicePageProps): JSX.Element {
    const { devices, match, t } = props;
    const { dev, tab } = match.params;
    const device = devices[dev];
    if (!device) {
        return <div className="h-100 d-flex justify-content-center align-items-center">{t('unknown_device')}</div>;
    }
    const links = getDeviceLinks(dev);

    return (
        <>
            <HeaderDeviceSelector allDevices={devices} currentDevice={device} tab={tab} />
            <div className="tab">
                <ul className="nav nav-tabs">
                    {links.map((link) => (
                        <li key={link.translationKey} className="nav-item">
                            <NavLink
                                activeClassName="active"
                                className={`nav-link ${styles['small-nav']}`}
                                to={link.url}
                            >
                                {t(link.translationKey)}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active">
                        <ContentRenderer {...props} />
                    </div>
                </div>
            </div>
        </>
    );
}
