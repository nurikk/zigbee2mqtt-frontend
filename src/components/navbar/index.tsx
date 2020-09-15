import React, { FunctionComponent } from 'react';
import Match from 'react-router';
import { GlobalState } from '../../store';
import actions, { BridgeApi } from '../../actions';
import { connect } from 'unistore/react';
import Button from '../button';
import cx from "classnames";
import { Link, NavLink } from 'react-router-dom';
interface StartStopJoinProps {
    setPermitJoin(permit: boolean): void;
    joinEnabled: boolean;
    [k: string]: unknown;
}
const StartStopJoin: FunctionComponent<StartStopJoinProps> = ({ joinEnabled, setPermitJoin, ...rest }) => {
    return <Button<boolean> {...rest} item={!joinEnabled} onClick={setPermitJoin}>{joinEnabled ? "Disable join" : "Permit join"}</Button>
}
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

const NavBar: FunctionComponent<BridgeApi & GlobalState> = ({ setPermitJoin, bridgeInfo }) => (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">z2m admin</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                <StartStopJoin className="btn btn-primary" setPermitJoin={setPermitJoin} joinEnabled={bridgeInfo.permit_join} />
            </div>
        </div>
    </nav>
);
const mappedProps = ["bridgeInfo"];
const ConnectedNavBar = connect<{}, {}, GlobalState, BridgeApi>(mappedProps, actions)(NavBar);
export default ConnectedNavBar;

