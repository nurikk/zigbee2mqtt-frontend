import { h, FunctionalComponent } from 'preact';
import { Link } from 'preact-router/match';
import { GlobalState } from '../../store';
import actions, { Actions } from '../../actions';
import { connect } from 'unistore/preact';
import Button from '../button';


const NavBar: FunctionalComponent<Actions> = ({ touchlinkReset, ZNPReset }) => (
    <nav class="navbar navbar-expand-sm navbar-dark info-color  navbar-dark bg-dark">
        <a class="navbar-brand" href="#">z2m lite admin</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <Link className="nav-link waves-effect waves-light" activeClassName="active" href="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link waves-effect waves-light" activeClassName="active" href="/map">Map</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link waves-effect waves-light" activeClassName="active" href="/settings">Settings</Link>
                </li>
                <li class="nav-item">
                    <Link className="nav-link waves-effect waves-light" activeClassName="active" href="/groups">Groups</Link>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Actions
        </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <Button className="dropdown-item btn btn-link" onClick={touchlinkReset}>Touchlink Reset</Button>
                        <Button promt={true} className="dropdown-item btn btn-link" onClick={ZNPReset}>Resets the ZNP</Button>

                    </div>
                </li>
            </ul>
        </div>
    </nav>
);
const mappedProps = [];
const ConnectedNavBar = connect<{}, {}, GlobalState, Actions>(mappedProps, actions)(NavBar);
export default ConnectedNavBar;

