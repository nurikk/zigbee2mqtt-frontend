import React, { FunctionComponent } from 'react';

import { GlobalState } from '../../store';
import actions, { BridgeApi } from '../../actions';
import { connect } from 'unistore/react';
import Button from '../button';
import cx from "classnames";
import { NavLink } from 'react-router-dom';
import useComponentVisible from '../../hooks/useComponentVisible';

const urls = [
    {
        href: '/',
        title: 'Home'
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

const NavBar: FunctionComponent<BridgeApi & GlobalState> = ({ setPermitJoin, bridgeInfo }) => {
    const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
    return (<nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">z2m admin</a>
            <Button<boolean> onClick={setIsComponentVisible} item={!isComponentVisible} className={cx("navbar-toggler")} type="button">
                <span className="navbar-toggler-icon" />
            </Button>
            <div ref={ref} className={cx("navbar-collapse collapse", { show: isComponentVisible })}>
                <ul className="navbar-nav mr-auto mb-2 mb-md-0">
                    {
                        urls.map(url =>
                            <li key={url.href} className="nav-item">
                                <NavLink className="nav-link" to={url.href} activeClassName="active">
                                    {url.title}
                                </NavLink>
                            </li>)
                    }
                </ul>
                <Button<boolean> item={!bridgeInfo.permit_join} onClick={setPermitJoin}>{bridgeInfo.permit_join ? "Disable join" : "Permit join"}</Button>
            </div>
        </div>
    </nav>)
}
const mappedProps = ["bridgeInfo"];
const ConnectedNavBar = connect<{}, {}, GlobalState, BridgeApi>(mappedProps, actions)(NavBar);
export default ConnectedNavBar;

