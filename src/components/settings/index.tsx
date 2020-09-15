import React, { Component } from "react";
import { connect } from "unistore/react";
import actions, { BridgeApi } from "../../actions";
import { GlobalState } from "../../store";
import get from "lodash/get";
import UniversalEditor from "../universal-editor";
import isEmpty from "lodash/isEmpty";
import { NavLink, Redirect, RouteComponentProps, withRouter } from "react-router-dom";


const settings = [
    {
        key: 'last_seen',
        path: 'advanced.last_seen',
        title: 'Last seen',
        description: 'Add a last_seen attribute to MQTT messages, contains date/time of last Zigbee message',
        values: ['disable', 'ISO_8601', 'ISO_8601_local', 'epoch']
    },
    {
        key: 'elapsed',
        path: 'advanced.elapsed',
        title: 'Elapsed',
        description: 'Add an elapsed attribute to MQTT messages, contains milliseconds since the previous msg'
    },
    {
        key: 'log_level',
        path: 'advanced.log_level',
        title: 'Log level',
        description: 'Logging level',
        values: ['debug', 'info', 'warn', 'error']
    },
    {
        key: 'homeassistant',
        path: 'homeassistant',
        title: 'Homeassistant support',
        description: 'Home Assistant integration (MQTT discovery)'
    }
]
type SettingsTab = "settings" | "bridge"

type UrlParams = {
    tab?: SettingsTab;
};
type SettingsPageProps = RouteComponentProps<UrlParams>;

export class SettingsPage extends Component<SettingsPageProps & BridgeApi & GlobalState, {}> {
    updateConfig = (name: string, value: unknown): void => {
        const { updateConfigValue } = this.props;
        updateConfigValue(name, value);
    }

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to={`/settings/settings`}>Settings</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active" to={`/settings/bridge`}>Bridge</NavLink>
                        </li>
                    </ul>

                </div>

                <div className="card-body">
                    {this.renderSwitcher()}
                </div>
            </div>
        )
    }
    renderSwitcher() {
        const { match } = this.props;
        const { tab } = match.params;
        switch (tab) {
            case "settings":
                return this.renderSettings();
            case "bridge":
                return this.renderBridgeInfo();
            default:
                return <Redirect to={`/settings/settings`} />;
        }
    }

    renderBridgeInfo() {
        const { bridgeInfo } = this.props;
        return <pre>{JSON.stringify(bridgeInfo, null, 4)}</pre>
    }
    renderSettings() {
        const { bridgeInfo } = this.props;
        return <div className="container">

            <form className="mt-2">
                {
                    !isEmpty(bridgeInfo) && settings.map(setting => (
                        <div key={setting.key} className="row">
                            <div className="col">
                                <label htmlFor={setting.key}>{setting.title}</label>
                                <UniversalEditor
                                    disabled={get(bridgeInfo.config, setting.path) === undefined}
                                    value={get(bridgeInfo.config, setting.path) as string | ReadonlyArray<string> | number}
                                    values={setting.values}
                                    onChange={(value) => this.updateConfig(setting.key, value)}
                                />
                                <div className="form-text">{setting.description}</div>
                            </div>
                        </div>
                    ))
                }

            </form>
        </div>

    }
}
const SettingsPageWithRouter = withRouter(SettingsPage);
const mappedProps = ["bridgeInfo"];
const ConnectedSettingsPage = connect<{}, {}, GlobalState, BridgeApi>(mappedProps, actions)(SettingsPageWithRouter);
export default ConnectedSettingsPage;