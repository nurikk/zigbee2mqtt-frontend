import React, { Component } from "react";
import { connect } from "unistore/react";
import actions, { BridgeApi, UtilsApi } from "../../actions";
import { GlobalState } from "../../store";
import get from "lodash/get";
import UniversalEditor from "../universal-editor";
import isEmpty from "lodash/isEmpty";
import { NavLink, Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import Button from "../button";
import Form from '@rjsf/bootstrap-4';

export const logLevelSetting = {
    key: 'log_level',
    path: 'log_level',
    title: 'Log level',
    description: 'Logging level',
    values: ['debug', 'info', 'warn', 'error']
};
const settings = [
    {
        key: 'last_seen',
        path: 'config.advanced.last_seen',
        title: 'Last seen',
        description: 'Add a last_seen attribute to MQTT messages, contains date/time of last Zigbee message',
        values: ['disable', 'ISO_8601', 'ISO_8601_local', 'epoch']
    },
    {
        key: 'elapsed',
        path: 'config.advanced.elapsed',
        title: 'Elapsed',
        description: 'Add an elapsed attribute to MQTT messages, contains milliseconds since the previous msg'
    },
    {...logLevelSetting},
    {
        key: 'homeassistant',
        path: 'config.homeassistant',
        title: 'Homeassistant support',
        description: 'Home Assistant integration (MQTT discovery)'
    }
]
type SettingsTab = "settings" | "bridge" | "about" | "experimental-settings";

type UrlParams = {
    tab?: SettingsTab;
};
type SettingsPageProps = RouteComponentProps<UrlParams>;

declare const FRONTEND_VERSION: string; //injected by webpack.DefinePlugin

const log = (type) => console.log.bind(console, type);
export class SettingsPage extends Component<SettingsPageProps & BridgeApi & GlobalState & UtilsApi, {}> {
    updateConfig = (name: string, value: unknown): void => {
        const { updateConfigValue } = this.props;
        updateConfigValue(name, value);
    }

    render() {
        return (
            <>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to={`/settings/settings`}>Settings</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to={`/settings/bridge`}>Raw</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to={`/settings/about`}>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" to={`/settings/experimental-settings`}>Experimental Settings</NavLink>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active">
                        <div className="container">
                            {this.renderSwitcher()}
                        </div>
                    </div>
                </div>
            </>
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
            case "about":
                return this.renderAbout();
            case "experimental-settings":
                return this.renderExperimentalSettings();
            default:
                return <Redirect to={`/settings/settings`} />;
        }
    }
    renderAbout() {
        const { bridgeInfo } = this.props;
        const isZigbee2mqttDevVersion = bridgeInfo.version?.match(/^\d+\.\d+\.\d+$/) === null;
        const zigbee2mqttVersion = isZigbee2mqttDevVersion ?
            bridgeInfo.version :
            <a target="_blank" rel="noopener noreferrer" href={`https://github.com/Koenkk/zigbee2mqtt/releases/tag/${bridgeInfo.version}`}>{bridgeInfo.version}</a>;
        const zigbee2mqttCommit = bridgeInfo.commit ?
            <>commit: <a target="_blank" rel="noopener noreferrer" href={`https://github.com/Koenkk/zigbee2mqtt/commit/${bridgeInfo.commit}`}>{bridgeInfo.commit}</a></> :
            null;
        const v = FRONTEND_VERSION;
        return <>
            <dl className="row">
                <dt className="col-sm-3">zigbee2mqtt version</dt>
                <dd className="col-sm-9">{zigbee2mqttVersion} {zigbee2mqttCommit}</dd>
            </dl>

            <dl className="row">
                <dt className="col-sm-3">coordinator type</dt>
                <dd className="col-sm-9">{bridgeInfo.coordinator?.type ?? 'Unknown'}</dd>
            </dl>
            <dl className="row">
                <dt className="col-sm-3">coordinator revision</dt>
                <dd className="col-sm-9">{bridgeInfo.coordinator?.meta?.revision ?? 'Unknown'}</dd>
            </dl>

            <dl className="row">
                <dt className="col-sm-3">frontend version</dt>
                <dd className="col-sm-9">{v}</dd>
            </dl>
        </>
    }
    renderBridgeInfo() {
        const { bridgeInfo } = this.props;
        return <pre>{JSON.stringify(bridgeInfo, null, 4)}</pre>
    }

    renderSettings() {
        const { bridgeInfo, exportState } = this.props;
        return <><div className="mt-2">
            {
                !isEmpty(bridgeInfo) && settings.map(setting => (
                    <div key={setting.key} className="row border-bottom pt-1">
                        <div className="col mb-3">
                            <label htmlFor={setting.key} className="form-label">{setting.title}</label>
                            <UniversalEditor
                                disabled={get(bridgeInfo, setting.path) === undefined}
                                value={get(bridgeInfo, setting.path) as string | ReadonlyArray<string> | number}
                                values={setting.values}
                                onChange={(value) => this.updateConfig(setting.key, value)}
                            />
                            <div className="form-text">{setting.description}</div>
                        </div>
                    </div>
                ))
            }
        </div>
            <Button<void> className="mt-2 btn btn-primary" onClick={exportState}>Download state</Button>
        </>
    }

    renderExperimentalSettings() {
        const { bridgeInfo: { configSchema, config } } = this.props;
        return <Form schema={configSchema}
        formData={config}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />;
    }
}
const SettingsPageWithRouter = withRouter(SettingsPage);
const mappedProps = ["bridgeInfo"];
const ConnectedSettingsPage = connect<{}, {}, GlobalState, BridgeApi>(mappedProps, actions)(SettingsPageWithRouter);
export default ConnectedSettingsPage;