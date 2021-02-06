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
import cx from "classnames";
import { JSONSchema7 } from "json-schema";
import cloneDeep from "lodash/cloneDeep";
import uiSchemas from "./uiSchema.json";
import "./style.global.scss";

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
    { ...logLevelSetting },
    {
        key: 'homeassistant',
        path: 'config.homeassistant',
        title: 'Homeassistant support',
        description: 'Home Assistant integration (MQTT discovery)'
    }
]
type SettingsTab = "settings" | "bridge" | "about" | "experimental-settings";

type SettigsKeys = string;
type UrlParams = {
    tab?: SettingsTab;
};
type SettingsPageProps = RouteComponentProps<UrlParams>;

declare const FRONTEND_VERSION: string; //injected by webpack.DefinePlugin

type SettingsPageState = {
    keyName: SettigsKeys;
}

const ROOT_KEY_NAME = 'main';


const ingoredFields = ['groups', 'devices', 'device_options', 'ban', 'whitelist'];



const validJsonSchemasAsTabs = ['object', 'array'];

const removePropertiesFromSchema = (names: string[], schema: JSONSchema7, config: object) => {

    names.forEach(name => {
        if (schema.required) {
            schema.required = schema.required.filter(item => item !== name);
        }

        if (schema.properties) {
            delete schema.properties[name];
        }
        delete config[name];
    });

    return { schema, config };
}

const tabs = [
    {
        title: 'Settings',
        url: `/settings/settings`
    },
    {
        title: 'Raw',
        url: `/settings/bridge`
    },
    {
        title: 'About',
        url: `/settings/about`
    },
    {
        title: 'Experimental Settings',
        url: `/settings/experimental-settings`
    },
];


const isValidKeyToRenderAsTab = (key: string, value: JSONSchema7): boolean => (validJsonSchemasAsTabs.includes(value.type as string) && !ingoredFields.includes(key)) || (value && value.oneOf ? value.oneOf.length > 0 : false);
export class SettingsPage extends Component<SettingsPageProps & BridgeApi & GlobalState & UtilsApi, SettingsPageState> {
    state = {
        keyName: ROOT_KEY_NAME
    }
    updateConfig = (name: string, value: unknown): void => {
        const { updateConfigValue } = this.props;
        updateConfigValue(name, value);
    }
    renderCategoriesTabs() {
        return (
            <ul className="nav nav-tabs">
                {tabs.map(tab => <li key={tab.url} className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to={tab.url}>{tab.title}</NavLink>
                </li>)}
            </ul>
        )
    }
    render() {
        return (
            <>
                {this.renderCategoriesTabs()}
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

        const rows = [
            { title: 'Zigbee2MQTT version', content: <>{zigbee2mqttVersion} {zigbee2mqttCommit}</> },
            { title: 'Coordinator type', content: <>{bridgeInfo.coordinator?.type ?? 'Unknown'}</> },
            { title: 'Coordinator revision', content: <>{bridgeInfo.coordinator?.meta?.revision ?? 'Unknown'}</> },
            { title: 'Frontend version', content: FRONTEND_VERSION },
        ];

        return <div className="mt-2">
            {
                rows.map(row => <dl key={row.title} className="row">
                    <dt className="col-sm-3">{row.title}</dt>
                    <dd className="col-sm-9">{row.content}</dd>
                </dl>)
            }
        </div>
    }
    renderBridgeInfo() {
        const { bridgeInfo } = this.props;
        return <pre>{JSON.stringify(bridgeInfo, null, 4)}</pre>
    }

    renderSettings() {
        const { bridgeInfo, exportState, restartBridge } = this.props;
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
            <Button className="btn btn-primary d-block mt-2" onClick={exportState}>Download state</Button>
            <Button className="btn btn-danger d-block mt-2" onClick={restartBridge} promt>Restart</Button>
        </>
    }
    onSettingsSave = ({ formData }) => {
        const { updateBridgeConfig } = this.props;
        const { keyName } = this.state;
        if (keyName === ROOT_KEY_NAME) {
            updateBridgeConfig(formData);
        } else {
            updateBridgeConfig({ [keyName]: formData });
        }
    }

    getSettingsTabs() {
        const { bridgeInfo: { config_schema: configSchema } } = this.props;
        const tabs = Object.entries<JSONSchema7>(configSchema.properties as unknown as ArrayLike<JSONSchema7>)
            .filter(([key, value]) => isValidKeyToRenderAsTab(key, value))
            .map(([key, value]) => ({
                name: key,
                title: value.title ?? key
            }));
        tabs.unshift({
            name: ROOT_KEY_NAME,
            title: 'Main'
        });
        return tabs;
    }
    getSettingsInfo() {
        const { keyName } = this.state;
        const { bridgeInfo: { config_schema: configSchema, config: originalConfig } } = this.props;

        let configAndSchema = removePropertiesFromSchema(ingoredFields, cloneDeep(configSchema), cloneDeep(originalConfig) as object);

        let currentSchema: JSONSchema7 = configAndSchema.schema;
        let currentConfig = configAndSchema.config[keyName] as object;

        if (keyName === ROOT_KEY_NAME) {
            const ignoreTabNames = this.getSettingsTabs().map(tab => tab.name);
            configAndSchema = removePropertiesFromSchema(ignoreTabNames, configAndSchema.schema, configAndSchema.config)
            currentSchema = configAndSchema.schema;
            currentConfig = configAndSchema.config;
        } else {
            currentConfig = configAndSchema.config[keyName] as object;
            if (configAndSchema.schema.properties) {
                currentSchema = configAndSchema.schema.properties[keyName] as JSONSchema7;
            }
        }
        return { currentSchema, currentConfig };
    }
    renderSettingsTabs() {
        const tabs = this.getSettingsTabs();
        const { keyName } = this.state;
        return <ul className="nav nav-pills nav-fill">
            {tabs.map(tab => <li key={tab.name} className="nav-item">
                <a className={cx("nav-link", { active: keyName === tab.name })} aria-current="page" href="#" onClick={(e) => { this.setState({ keyName: tab.name }); e.preventDefault() }}>{tab.title}</a>
            </li>)}
        </ul>;
    }
    renderExperimentalSettings() {
        const { keyName } = this.state;
        const { bridgeInfo: { config_schema: configSchema } } = this.props;
        if (!configSchema || !configSchema.properties || Object.keys(configSchema.properties).length === 0) {
            return <div>loading...</div>;
        }
        const { currentSchema, currentConfig } = this.getSettingsInfo();

        return <>{this.renderSettingsTabs()}
            <Form key={keyName} schema={currentSchema}
                formData={currentConfig}
                onSubmit={this.onSettingsSave}
                uiSchema={uiSchemas[keyName]}
            /></>
    }
}
const SettingsPageWithRouter = withRouter(SettingsPage);
const mappedProps = ["bridgeInfo"];
const ConnectedSettingsPage = connect<{}, {}, GlobalState, BridgeApi>(mappedProps, actions)(SettingsPageWithRouter);
export default ConnectedSettingsPage;
