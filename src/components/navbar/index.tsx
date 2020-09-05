import { h, FunctionalComponent } from 'preact';
import { Link, Match } from 'preact-router/match';
import { GlobalState } from '../../store';
import actions, { Actions } from '../../actions';
import { connect } from 'unistore/preact';
import Button from '../button';

interface StartStopJoinProps {
    setPermitJoin(permit: boolean): void;
    joinEnabled: boolean;
    [k: string]: unknown;
}
const StartStopJoin: FunctionalComponent<StartStopJoinProps> = ({ joinEnabled, setPermitJoin, ...rest }) => {
    return <Button<boolean> item={!joinEnabled} onClick={setPermitJoin} {...rest}>{joinEnabled ? "Disable join" : "Permit join"}</Button>
}

const NavBar: FunctionalComponent<Actions & GlobalState> = ({ setPermitJoin, touchlinkReset, bridgeInfo }) => (
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">z2m admin</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon" />
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto mb-2 mb-md-0">
                    <li class="nav-item">
                        <Link className="nav-link" activeClassName="active" href="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" activeClassName="active" href="/map">Map</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" activeClassName="active" href="/settings">Settings</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" activeClassName="active" href="/groups">Groups</Link>
                    </li>
                    <li class="nav-item">
                        <Link className="nav-link" activeClassName="active" href="/touchlink">Touchlink</Link>
                    </li>
                </ul>
                <StartStopJoin className="btn btn-primary" setPermitJoin={setPermitJoin} joinEnabled={bridgeInfo.permit_join} />
            </div>
        </div>
    </nav>
);
const mappedProps = ["bridgeInfo"];
const ConnectedNavBar = connect<{}, {}, GlobalState, Actions>(mappedProps, actions)(NavBar);
export default ConnectedNavBar;

