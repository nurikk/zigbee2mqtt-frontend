import React, { Component } from "react";
import { NavLink, Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import actions from "../../actions";
import { GlobalState } from "../../store";
import DeviceInfo from "./info";
import Bind from "./bind";
import States from "./states";
import ConnectedDeviceExposes from "./exposes";
import Clusters from "./clusters";
import styles from "./style.css";

type UrlParams = {
    dev: string;
    tab?: TabName;
};
type DevicePageProps = RouteComponentProps<UrlParams>;


type TabName = "info" | "bind" | "state" | "exposes" | "clusters";
// eslint-disable-next-line react/prefer-stateless-function
export class DevicePage extends Component<DevicePageProps & GlobalState, {}> {
    renderContent() {
        const { match, devices } = this.props;
        const { tab, dev } = match.params;
        const device = devices.get(dev);

        switch (tab) {
            case "info":
                return <DeviceInfo device={device} />;
            case "bind":
                return <Bind device={device} />;
            case "state":
                return <States device={device} />;
            case "exposes":
                return <ConnectedDeviceExposes device={device} />;
            case "clusters":
                return <Clusters device={device} />
            default:
                return <Redirect to={`/device/${dev}/info`} />;
        }

    }
    render() {

        const { devices, match } = this.props;
        const { dev } = match.params;
        const device = devices.get(dev);
        if (!device) {
            return <div className="h-100 d-flex justify-content-center align-items-center">Unknown device</div>
        }

        return (<div className="">

            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <NavLink activeClassName="active" className={`nav-link ${styles['small-nav']}`} to={`/device/${dev}/info`}>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" className={`nav-link ${styles['small-nav']}`} to={`/device/${dev}/bind`}>Bind</NavLink>

                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" className={`nav-link ${styles['small-nav']}`} to={`/device/${dev}/state`}>State</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" className={`nav-link ${styles['small-nav']}`} to={`/device/${dev}/exposes`}>Exposes</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink activeClassName="active" className={`nav-link ${styles['small-nav']}`} to={`/device/${dev}/clusters`}>Clusters</NavLink>
                </li>
            </ul>
            {/* <span className="card-title">{device.friendly_name}</span> */}


            <div className="tab-content">
                <div className="tab-pane fade show active">
                    {this.renderContent()}
                </div>

            </div>



        </div>);

    }
}
const devicePageWithRouter = withRouter(DevicePage);
const mappedProps = ["devices"];
const ConnectedDevicePage = connect<{}, {}, GlobalState, {}>(mappedProps, actions)(devicePageWithRouter);
export default ConnectedDevicePage;