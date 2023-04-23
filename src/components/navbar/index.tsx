import React, { FunctionComponent, useRef, useState } from 'react';

import { GlobalState } from '../../store';
import actions, { ThemeActions } from '../../actions/actions';
import { connect } from 'unistore/react';
import Button from '../button';
import cx from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { BridgeApi } from '../../actions/BridgeApi';
import { ThemeSwitcher } from '../theme-switcher';
import { WithTranslation, withTranslation } from 'react-i18next';
import LocalePicker from '../../i18n/LocalePicker';
import { isIframe } from '../../utils';
import { StartStopJoinButton } from './StartStopJoinButton';

const urls = [
    {
        href: '/',
        key: 'devices',
        exact: true,
    },
    {
        href: '/dashboard',
        key: 'dashboard',
    },
    {
        href: '/map',
        key: 'map',
    },
    {
        href: '/settings',
        key: 'settings',
    },
    {
        href: '/groups',
        key: 'groups',
    },
    {
        href: '/ota',
        key: 'ota',
    },
    {
        href: '/touchlink',
        key: 'touchlink',
    },
    {
        href: '/logs',
        key: 'logs',
    },
    {
        href: '/extensions',
        key: 'extensions',
    },
];

type PropsFromStore = Pick<GlobalState, 'devices' | 'bridgeInfo'>;

const NavBar: FunctionComponent<PropsFromStore & ThemeActions & WithTranslation<'navbar'> & BridgeApi> = (props) => {
    const { devices, setPermitJoin, bridgeInfo, restartBridge, setTheme, t } = props;
    const ref = useRef<HTMLDivElement>();
    const [navbarIsVisible, setNavbarIsVisible] = useState<boolean>(false);
    useOnClickOutside(ref, () => {
        setNavbarIsVisible(false);
    });
    return (
        <nav className="navbar navbar-expand-md navbar-light">
            <div ref={ref as React.MutableRefObject<HTMLDivElement>} className="container-fluid">
                <Link onClick={() => setNavbarIsVisible(false)} to="/">
                    {isIframe() ? `Z2M@${document.location.hostname}` : 'Zigbee2MQTT'}
                </Link>

                <button
                    onClick={() => {
                        setNavbarIsVisible(!navbarIsVisible);
                    }}
                    className="navbar-toggler"
                    type="button"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className={cx('navbar-collapse collapse', { show: navbarIsVisible })}>
                    <ul className="navbar-nav">
                        {urls.map((url) => (
                            <li key={url.href} className="nav-item">
                                <NavLink
                                    onClick={() => setNavbarIsVisible(false)}
                                    exact={url.exact}
                                    className="nav-link"
                                    to={url.href}
                                    activeClassName="active"
                                >
                                    {t(url.key)}
                                </NavLink>
                            </li>
                        ))}
                        <LocalePicker />
                    </ul>
                    <StartStopJoinButton devices={devices} setPermitJoin={setPermitJoin} bridgeInfo={bridgeInfo} />
                    <ThemeSwitcher saveCurrentTheme={setTheme} />
                </div>
                {bridgeInfo.restart_required ? (
                    <Button onClick={restartBridge} prompt className="btn btn-danger me-1">
                        {t('restart')}
                    </Button>
                ) : null}
            </div>
        </nav>
    );
};
const mappedProps = ['bridgeInfo', 'devices'];
const ConnectedNavBar = withTranslation('navbar')(
    connect<unknown, unknown, PropsFromStore, BridgeApi>(mappedProps, actions)(NavBar),
);
export default ConnectedNavBar;
