import { Component, ComponentChild, h, Fragment } from "preact";
import { connect } from "unistore/preact";
import actions, { Actions } from "../../actions";
import { GlobalState } from "../../store";
import DeviceInfo from "./info";
import Bind from "./bind";
import cx from "classnames";
import { Link } from "preact-router/match";
import Redirect from "../Redirect";
import States from "./states";

interface DevicePageProps {
    dev?: string;
    tab?: TabName;

}
type TabName = "info" | "bind" | "state";
// eslint-disable-next-line react/prefer-stateless-function
export class DevicePage extends Component<DevicePageProps & Actions & GlobalState, {}> {
    renderContent(): ComponentChild {
        const { tab, dev } = this.props;
        switch (tab) {
            case "info":
                return <DeviceInfo dev={dev} />;
            case "bind":
                return <Bind dev={dev} />;
            case "state":
                return <States dev={dev} />;
            default:
                return <Redirect to={`/device/${dev}/info`} />;
        }

    }
    render(): ComponentChild {

        const { dev, tab, devices } = this.props;
        const device = devices.find(d => d.ieee_address == dev);
        if (!device) {
            return "Unknown device";
        }

        return (<div class="card h-100">
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                        <Link className={cx("nav-link", { active: tab === "info" })} href={`/device/${dev}/info`}>About</Link>
                    </li>
                    <li class="nav-item">
                        <Link className={cx("nav-link", { active: tab === "bind" })} href={`/device/${dev}/bind`}>Bind</Link>
                    </li>
                    <li class="nav-item">
                        <Link className={cx("nav-link", { active: tab === "state" })} href={`/device/${dev}/state`}>State</Link>
                    </li>
                </ul>
                {/* <div class="d-inline float-right">{dev}</div> */}

            </div>

            <div className="card-body">
            <h5 class="card-title">{device.friendly_name}</h5>
                {this.renderContent()}
            </div>
        </div>);

    }
}

const mappedProps = ["devices"];
const ConnectedDevicePage = connect<DevicePageProps, {}, GlobalState, Actions>(mappedProps, actions)(DevicePage);
export default ConnectedDevicePage;