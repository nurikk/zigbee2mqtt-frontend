import { Component, ComponentChild, h } from "preact";
import { connect } from "unistore/preact";
import actions, { Actions } from "../../actions";
import { GlobalState } from "../../store";
import DeviceInfo from "./info";
import Bind from "./bind";
import Router from "preact-router";
import { Link } from "preact-router/match";
import Redirect from "../Redirect";
import States from "./states";

interface DevicePageProps {
    dev?: string;
    tab?: string;

}

// eslint-disable-next-line react/prefer-stateless-function
export class DevicePage extends Component<DevicePageProps & Actions & GlobalState, {}> {

    render(): ComponentChild {

        const { dev } = this.props;

        return (<div class={"position-relative"}>
            <div className="tabs">
                <ul class="nav nav-tabs nav-justified">
                    <Link className="nav-link" activeClassName="active" href={`/device/${dev}/info`}>About</Link>
                    <Link className="nav-link" activeClassName="active" href={`/device/${dev}/bind`}>Bind</Link>
                    <Link className="nav-link" activeClassName="active" href={`/device/${dev}/state`}>State</Link>
                </ul>
            </div>
            <div className="tab-content">
                <Router>
                    <Redirect to={`/device/${dev}/info`} default />
                    <DeviceInfo path="/device/:dev/info" />
                    <Bind path="/device/:dev/bind" />
                    <States path="/device/:dev/state" />
                </Router>
            </div>
        </div>);

    }
}

const mappedProps = ["isLoading", "isError", "devices"];
const ConnectedDevicePage = connect<DevicePageProps, {}, GlobalState, Actions>(mappedProps, actions)(DevicePage);
export default ConnectedDevicePage;