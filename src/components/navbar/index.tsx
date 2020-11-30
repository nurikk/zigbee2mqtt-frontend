import React, { FunctionComponent, useRef, useState } from 'react';

import { GlobalState } from '../../store';
import actions, { BridgeApi } from '../../actions';
import { connect } from 'unistore/react';
import Button from '../button';
import cx from "classnames";
import { Link, NavLink } from 'react-router-dom';
import useComponentVisible from '../../hooks/useComponentVisible';
import { Device } from '../../types';
import style from "./style.css";
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

const urls = [
    {
        href: '/',
        title: 'Home',
        exact: true
    },
    {
        href: '/map',
        title: 'Map'
    },
    {
        href: '/settings',
        title: 'Settings'
    },
    {
        href: '/groups',
        title: 'Groups'
    },
    {
        href: '/touchlink',
        title: 'Touchlink'
    },
    {
        href: '/logs',
        title: 'Logs'
    }
];
type StartStopJoinButtonProps = {
    devices: Map<string, Device>;
}
const StartStopJoinButton: FunctionComponent<StartStopJoinButtonProps & Pick<BridgeApi, 'setPermitJoin'> & Pick<GlobalState, 'bridgeInfo'>> = ({ devices, setPermitJoin, bridgeInfo }) => {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    const [selectedRouter, setSelectedRouter] = useState<Device>(null);
    const routers = [];
    const selectAndHide = (device: Device) => { setSelectedRouter(device); setIsComponentVisible(false) }
    devices.forEach((device) => {
        if (device.type == "Router") {
            routers.push(<li key={device.friendly_name}>
                <Button<Device> item={device} className="dropdown-item" onClick={selectAndHide}>{device.friendly_name}</Button>
            </li>)
        }
    });
    const onBtnClick = () => {
        setPermitJoin(!bridgeInfo.permit_join, selectedRouter);
    }
    return (
        <div className="input-group w-auto">
            {routers.length ? (<><Button<boolean> type="button" onClick={setIsComponentVisible} item={!isComponentVisible} className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-expanded="false">
                <span className="visually-hidden">Toggle Dropdown</span>
            </Button>
                <ul ref={ref} className={cx('dropdown-menu', style['scrollable-menu'], { show: isComponentVisible })}>
                    <li key='all'>
                        <Button<Device> item={null} className="dropdown-item" onClick={selectAndHide}>All</Button>
                    </li>
                    {routers}
                </ul></>) : null}
            <button onClick={onBtnClick} type="button" className="btn btn-outline-secondary">{bridgeInfo.permit_join ? "Disable join" : "Permit join"} ({selectedRouter?.friendly_name ?? "All"})</button>

        </div>
    );
}

type PropsFromStore = {
    devices: Map<string, Device>;
    bridgeInfo: object;
}
const NavBar: FunctionComponent<PropsFromStore & BridgeApi & Pick<GlobalState, 'bridgeInfo'>> = ({ devices, setPermitJoin, bridgeInfo }) => {
    const ref = useRef<HTMLDivElement>();
    const [navbarIsVisible, setnavbarIsVisible] = useState<boolean>(false);
    useOnClickOutside(ref, () => {
        setnavbarIsVisible(false);
    });
    return (<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div ref={ref}  className="container-fluid">
            <Link onClick={() => setnavbarIsVisible(false)} className="navbar-brand" to="/">Zigbee2MQTT</Link>
            <button  onClick={() => { console.log('click'); setnavbarIsVisible(!navbarIsVisible) }} className="navbar-toggler" type="button">
                <span className="navbar-toggler-icon" />
            </button>
            <div className={cx("navbar-collapse collapse", { show: navbarIsVisible })}>
                <ul className="navbar-nav mr-auto mb-2 mb-md-0">
                    {
                        urls.map(url =>
                            <li key={url.href} className="nav-item">
                                <NavLink onClick={() => setnavbarIsVisible(false)} exact={url.exact} className="nav-link" to={url.href} activeClassName="active">
                                    {url.title}
                                </NavLink>
                            </li>)
                    }
                </ul>
                <StartStopJoinButton
                    devices={devices}
                    setPermitJoin={setPermitJoin}
                    bridgeInfo={bridgeInfo}
                />
            </div>
        </div>
    </nav>)
}
const mappedProps = ["bridgeInfo", "devices"];
const ConnectedNavBar = connect<{}, {}, PropsFromStore, BridgeApi>(mappedProps, actions)(NavBar);
export default ConnectedNavBar;

