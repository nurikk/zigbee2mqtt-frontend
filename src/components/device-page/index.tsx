import React, { Component } from "react";
import { NavLink, Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import { connect } from "unistore/react";
import actions from "../../actions/actions";
import { GlobalState } from "../../store";
import DeviceInfo from "./info";
import Bind from "./bind";
import Reporting from "./reporting";
import States from "./states";
import ConnectedDeviceExposes from "./exposes";
import Clusters from "./clusters";
import DeviceSettings from "./settings";
import styles from "./style.css";

import DevConsole from "./dev-console";
import { DeviceApi } from "../../actions/DeviceApi";


type UrlParams = {
    dev: string;
    tab?: TabName;
};
type DevicePageProps = RouteComponentProps<UrlParams>;


type TabName = "info" | "bind" | "state" | "exposes" | "clusters" | "reporting" | "settings" | "settings-specific" | "dev-console";
const getDeviceLinks = (dev: string) => ([
    {
        title: 'About',
        url: `/device/${dev}/info`
    },
    {
        title: 'Exposes',
        url: `/device/${dev}/exposes`
    },
    {
        title: 'Bind',
        url: `/device/${dev}/bind`
    },
    {
        title: 'Reporting',
        url: `/device/${dev}/reporting`
    },
    {
        title: 'Settings',
        url: `/device/${dev}/settings`
    },
    {
        title: 'Settings(specific)',
        url: `/device/${dev}/settings-specific`
    },
    {
        title: 'State',
        url: `/device/${dev}/state`
    },
    {
        title: 'Clusters',
        url: `/device/${dev}/clusters`
    },
    {
        title: 'Dev console',
        url: `/device/${dev}/dev-console`
    },

]);
export class DevicePage extends Component<DevicePageProps & GlobalState & DeviceApi, {}> {
    renderContent(): JSX.Element {
        const { match, devices, logs } = this.props;
        const { readDeviceAttributes, writeDeviceAttributes } = this.props;
        const { tab, dev } = match.params;
        const device = devices[dev];

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
            case "reporting":
                return <Reporting device={device} />
            case "settings":
                return <DeviceSettings device={device} type="generic" />
            case "settings-specific":
                return <DeviceSettings device={device} type="specific" />
            case "dev-console":
                return <DevConsole
                    device={device}
                    logs={logs}
                    readDeviceAttributes={readDeviceAttributes}
                    writeDeviceAttributes={writeDeviceAttributes}
                />
            default:
                return <Redirect to={`/device/${dev}/info`} />;
        }

    }
    render(): JSX.Element {
        const { devices, match } = this.props;
        const { dev } = match.params;
        const device = devices[dev];
        if (!device) {
            return <div className="h-100 d-flex justify-content-center align-items-center">Unknown device</div>
        }
        const links = getDeviceLinks(dev);

        return (<>
            <h1 className="h3">{device.friendly_name}</h1>

            <div className="tab">
                <ul className="nav nav-tabs">
                    {links.map(link => <li key={link.title} className="nav-item">
                        <NavLink activeClassName="active" className={`nav-link ${styles['small-nav']}`} to={link.url}>{link.title}</NavLink>
                    </li>)}
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active">
                        {this.renderContent()}
                    </div>
                </div>
            </div>

        </>);

    }
}
const devicePageWithRouter = withRouter(DevicePage);
const mappedProps = ["devices", "deviceStates", "logs"];
const ConnectedDevicePage = connect<{}, {}, GlobalState, {}>(mappedProps, actions)(devicePageWithRouter);
export default ConnectedDevicePage;
