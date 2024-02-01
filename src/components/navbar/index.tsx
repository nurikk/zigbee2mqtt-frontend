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

import BootstrapButton from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Collapse from 'react-bootstrap/esm/Collapse';
import NavbarBrand from 'react-bootstrap/esm/NavbarBrand';

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
    const { devices, setPermitJoin, bridgeInfo, restartBridge, t } = props;
    const ref = useRef<HTMLDivElement>();
    const [navbarIsVisible, setNavbarIsVisible] = useState<boolean>(false);
    useOnClickOutside(ref, () => {
        setNavbarIsVisible(false);
    });
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div ref={ref as React.MutableRefObject<HTMLDivElement>} className="container-fluid align-items-baseline">
                <NavbarBrand href="/#/">
                    <img
                        alt=""
                        src="/images/logo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"

                    />{' '}
                    <Link onClick={() => setNavbarIsVisible(false)} to="/">
                        {isIframe() ? `Z2M@${document.location.hostname}` : 'Zigbee2MQTT'}
                    </Link>
                </NavbarBrand>


                <button
                    onClick={() => {
                        setNavbarIsVisible(!navbarIsVisible);
                    }}
                    className="navbar-toggler"
                    type="button"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className={cx('navbar-collapse collapse d-flex flex-wrap', { 'd-none': navbarIsVisible })}>
                    <ul className="navbar-nav flex-wrap flex-grow-1">
                        {urls.map((url) => (
                            <li key={url.href} className="nav-item">
                                <NavLink
                                    exact={url.exact}
                                    className="nav-link"
                                    to={url.href}
                                    activeClassName="active"
                                >
                                    {t(url.key)}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                    <div className="d-flex align-self-start align-items-stretch flex-wrap justify-content-end">
                        <StartStopJoinButton devices={devices} setPermitJoin={setPermitJoin} bridgeInfo={bridgeInfo} />
                        <LocalePicker />
                        <ThemeSwitcher />
                        {bridgeInfo.restart_required ? (
                            <Button onClick={restartBridge} prompt className="btn btn-danger my-2 mx-1">
                                {t('restart')}
                            </Button>
                        ) : null}
                    </div>
                </div>
            </div>
        </nav>
    );
};
const mappedProps = ['bridgeInfo', 'devices'];
const ConnectedNavBar = withTranslation('navbar')(
    connect<unknown, unknown, PropsFromStore, BridgeApi>(mappedProps, actions)(NavBar),
);
export default ConnectedNavBar;
