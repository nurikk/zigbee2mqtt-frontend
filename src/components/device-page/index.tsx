import React from 'react';
import { NavLink, Redirect, RouteComponentProps, withRouter } from 'react-router-dom';
import { connect } from 'unistore/react';
import actions from '../../actions/actions';
import { GlobalState } from '../../store';
import DeviceInfo from './info';
import Bind from './bind';
import Reporting from './reporting';
import States from './states';
import ConnectedDeviceExposes from './exposes';
import Clusters from './clusters';
import DeviceSettings from './settings';
import Scene from './scene';
import styles from './style.module.css';

import DevConsole from './dev-console';
import { DeviceApi } from '../../actions/DeviceApi';
import { WithTranslation, withTranslation } from 'react-i18next';
import DeviceSpecificSettings from './DeviceSpecificSettings';

const getDeviceLinks = (dev: string) => [
    {
        translationKey: 'about',
        url: `/device/${dev}/info`,
    },
    {
        translationKey: 'exposes',
        url: `/device/${dev}/exposes`,
    },
    {
        translationKey: 'bind',
        url: `/device/${dev}/bind`,
    },
    {
        translationKey: 'reporting',
        url: `/device/${dev}/reporting`,
    },
    {
        translationKey: 'settings',
        url: `/device/${dev}/settings`,
    },
    {
        translationKey: 'settings_specific',
        url: `/device/${dev}/settings-specific`,
    },
    {
        translationKey: 'state',
        url: `/device/${dev}/state`,
    },
    {
        translationKey: 'clusters',
        url: `/device/${dev}/clusters`,
    },
    {
        translationKey: 'scene',
        url: `/device/${dev}/scene`,
    },
    {
        translationKey: 'dev_console',
        url: `/device/${dev}/dev-console`,
    },
];
type TabName =
    | 'info'
    | 'bind'
    | 'state'
    | 'exposes'
    | 'clusters'
    | 'reporting'
    | 'settings'
    | 'settings-specific'
    | 'dev-console'
    | 'scene';
type UrlParams = {
    dev: string;
    tab?: TabName;
};
type PropsFromStore = Pick<GlobalState, 'bridgeInfo' | 'devices' | 'logs' | 'deviceStates'>;

type DevicePageProps = RouteComponentProps<UrlParams> & PropsFromStore & DeviceApi & WithTranslation<'devicePage'>;

function ContentRenderer(props: DevicePageProps): JSX.Element {
    const { match, devices, logs } = props;
    const { readDeviceAttributes, writeDeviceAttributes, setDeviceOptions, executeCommand, bridgeInfo, deviceStates } =
        props;
    const { tab, dev } = match.params;
    const device = devices[dev];
    const deviceState = deviceStates[device.friendly_name] ?? {};

    switch (tab) {
        case 'info':
            return <DeviceInfo device={device} />;
        case 'bind':
            return <Bind device={device} />;
        case 'state':
            return <States device={device} />;
        case 'exposes':
            return <ConnectedDeviceExposes device={device} />;
        case 'clusters':
            return <Clusters device={device} />;
        case 'reporting':
            return <Reporting device={device} />;
        case 'settings':
            return <DeviceSettings device={device} setDeviceOptions={setDeviceOptions} bridgeInfo={bridgeInfo} />;
        case 'settings-specific':
            return (
                <DeviceSpecificSettings device={device} setDeviceOptions={setDeviceOptions} bridgeInfo={bridgeInfo} />
            );
        case 'dev-console':
            return (
                <DevConsole
                    device={device}
                    logs={logs}
                    readDeviceAttributes={readDeviceAttributes}
                    writeDeviceAttributes={writeDeviceAttributes}
                    executeCommand={executeCommand}
                />
            );
        case 'scene':
            return <Scene device={device} deviceState={deviceState} />;
        default:
            return <Redirect to={`/device/${dev}/info`} />;
    }
}

export function DevicePage(props: DevicePageProps): JSX.Element {
    const { devices, match, t } = props;
    const { dev } = match.params;
    const device = devices[dev];
    if (!device) {
        return <div className="h-100 d-flex justify-content-center align-items-center">{t('unknown_device')}</div>;
    }
    const links = getDeviceLinks(dev);

    return (
        <>
            <h1 className="h3">{device.friendly_name}</h1>

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
const devicePageWithRouter = withRouter(DevicePage);
const mappedProps = ['devices', 'deviceStates', 'logs', 'bridgeInfo'];
const ConnectedDevicePage = withTranslation('devicePage')(
    connect<unknown, unknown, GlobalState, unknown>(mappedProps, actions)(devicePageWithRouter),
);
export default ConnectedDevicePage;
