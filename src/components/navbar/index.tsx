import { h, FunctionalComponent } from 'preact';
import Match from 'preact-router/match';
import { GlobalState } from '../../store';
import actions, { BridgeApi } from '../../actions';
import { connect } from 'unistore/preact';
import Button from '../button';
import cx from "classnames";
interface StartStopJoinProps {
    setPermitJoin(permit: boolean): void;
    joinEnabled: boolean;
    [k: string]: unknown;
}
const StartStopJoin: FunctionalComponent<StartStopJoinProps> = ({ joinEnabled, setPermitJoin, ...rest }) => {
    return <Button<boolean> item={!joinEnabled} onClick={setPermitJoin} {...rest}>{joinEnabled ? "Disable join" : "Permit join"}</Button>
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

const NavBar: FunctionalComponent<BridgeApi & GlobalState> = ({ setPermitJoin, bridgeInfo }) => (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">z2m admin</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto mb-2 mb-md-0">
                    {
                        urls.map(url => <li class="nav-item">
                            <Match path={url.href}>
                                {({ matches }) => (
                                    <a className={cx("nav-link", { active: matches })} href={url.href}>{url.title}</a>
                                )}
                            </Match>
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

