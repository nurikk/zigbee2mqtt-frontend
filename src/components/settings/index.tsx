import React, { Component } from "react";
import { connect } from "unistore/react";
import actions, { UtilsApi } from "../../actions/actions";
import { GlobalState } from "../../store";
import { NavLink, Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import Button from "../button";
import Form from '@rjsf/bootstrap-4';
import cx from "classnames";
import { JSONSchema7 } from "json-schema";
import cloneDeep from "lodash/cloneDeep";
import uiSchemas from "./uiSchema.json";
import { BridgeApi } from "../../actions/BridgeApi";
import { ISubmitEvent, UiSchema } from "@rjsf/core";
import { WithTranslation, withTranslation } from "react-i18next";



type SettingsTab = "settings" | "bridge" | "about" | "tools" | "donate";

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

const ingoredFields = ['groups', 'devices', 'device_options', 'ban', 'whitelist', 'map_options'];
const validJsonSchemasAsTabs = ['object', 'array'];

const removePropertiesFromSchema = (names: string[], schema: JSONSchema7 = {}, config: Record<string, unknown> = {}) => {

    if (schema.required) {
        schema.required = schema.required.filter(item => names.includes(item));
    }

    for (const name of names) {
        if (schema.properties) {
            delete schema.properties[name];
        }
        delete config[name];
    }

    return { schema, config };
}

const tabs = [
    {
        translationKey: 'settings',
        url: `/settings/settings`
    },
    {
        translationKey: 'tools',
        url: `/settings/tools`
    },
    {
        translationKey: 'about',
        url: `/settings/about`
    },
    {
        translationKey: 'raw',
        url: `/settings/bridge`
    },
    {
        translationKey: 'donate',
        url: '/settings/donate'
    }
];
const rows = [
    <div key="nurikk" className="row pb-2">
        <div className="col">
            <a href="https://www.buymeacoffee.com/nurikk">
                <img crossOrigin="anonymous" src="https://img.buymeacoffee.com/button-api/?text=Thanks for frontend&emoji=🍺&slug=nurikk&button_colour=FFDD00&font_colour=000000&font_family=Arial&outline_colour=000000&coffee_colour=ffffff" />
            </a>
        </div>
    </div>,
    <div key={"koenkk"} className="row pb-2">
        <div className="col">
            <a href="https://www.buymeacoffee.com/koenkk">
                <img crossOrigin="anonymous" src="https://img.buymeacoffee.com/button-api/?text=Thanks for zigbee2mqtt&emoji=☕&slug=koenkk&button_colour=FFDD00&font_colour=000000&font_family=Arial&outline_colour=000000&coffee_colour=ffffff" />
            </a>
        </div>
    </div>
].sort(() => Math.random() - 0.5);

const isValidKeyToRenderAsTab = (key: string, value: JSONSchema7): boolean => (validJsonSchemasAsTabs.includes(value.type as string) && !ingoredFields.includes(key)) || (value && value.oneOf ? value.oneOf.length > 0 : false);
export class SettingsPage extends Component<SettingsPageProps & BridgeApi & GlobalState & UtilsApi & WithTranslation<"setting">, SettingsPageState> {
    state = {
        keyName: ROOT_KEY_NAME
    }
    renderCategoriesTabs(): JSX.Element {
        const { t } = this.props;
        return (
            <ul className="nav nav-tabs">
                {tabs.map(tab => <li key={tab.url} className="nav-item">
                    <NavLink className="nav-link" activeClassName="active" to={tab.url}>{t(tab.translationKey)}</NavLink>
                </li>)}
            </ul>
        )
    }
    render(): JSX.Element {
        return (
            <div className="tab">
                {this.renderCategoriesTabs()}
                <div className="tab-content h-100 p-0 p-sm-3">
                    <div className="tab-pane fade show active">
                        {this.renderSwitcher()}
                    </div>
                </div>
            </div>
        )
    }
    renderSwitcher(): JSX.Element {
        const { match } = this.props;
        const { tab } = match.params;
        switch (tab) {
            case "tools":
                return this.renderTools();
            case "bridge":
                return this.renderBridgeInfo();
            case "about":
                return this.renderAbout();
            case "settings":
                return this.renderSettings();
            case "donate":
                return this.renderDonate();
            default:
                return <Redirect to={`/settings/settings`} />;
        }
    }
    renderAbout(): JSX.Element {
        const { bridgeInfo } = this.props;
        const isZigbee2mqttDevVersion = bridgeInfo.version?.match(/^\d+\.\d+\.\d+$/) === null;
        const zigbee2mqttVersion = isZigbee2mqttDevVersion ?
            bridgeInfo.version :
            <a target="_blank" rel="noopener noreferrer" href={`https://github.com/Koenkk/zigbee2mqtt/releases/tag/${bridgeInfo.version}`}>{bridgeInfo.version}</a>;
        const zigbee2mqttCommit = bridgeInfo.commit ?
            <>commit: <a target="_blank" rel="noopener noreferrer" href={`https://github.com/Koenkk/zigbee2mqtt/commit/${bridgeInfo.commit}`}>{bridgeInfo.commit}</a></> :
            null;

        const rows = [
            { translationKey: 'Zigbee2MQTT version', content: <>{zigbee2mqttVersion} {zigbee2mqttCommit}</> },
            { translationKey: 'Coordinator type', content: <>{bridgeInfo.coordinator?.type ?? 'Unknown'}</> },
            { translationKey: 'Coordinator revision', content: <>{bridgeInfo.coordinator?.meta?.revision ?? 'Unknown'}</> },
            { translationKey: 'Frontend version', content: FRONTEND_VERSION },
        ];

        return <div className="p-3">{rows.map(row => <dl key={row.translationKey} className="row">
            <dt className="col-sm-3">{row.translationKey}</dt>
            <dd className="col-sm-9">{row.content}</dd>
        </dl>)}</div>;

    }
    renderBridgeInfo(): JSX.Element {
        const { bridgeInfo } = this.props;
        return <div className="p-3"><pre>{JSON.stringify(bridgeInfo, null, 4)}</pre></div>

    }

    renderTools(): JSX.Element {
        const { exportState, restartBridge } = this.props;
        return <div className="p-3">
            <Button className="btn btn-primary d-block mt-2" onClick={exportState}>Download state</Button>
            <Button className="btn btn-danger d-block mt-2" onClick={restartBridge} promt>Restart Zigbee2MQTT</Button>
        </div>
    }
    onSettingsSave = (e: ISubmitEvent<Record<string, unknown>>): void => {
        const { formData } = e;
        const { updateBridgeConfig } = this.props;
        const { keyName } = this.state;
        if (keyName === ROOT_KEY_NAME) {
            updateBridgeConfig(formData);
        } else {
            updateBridgeConfig({ [keyName]: formData });
        }
    }

    getSettingsTabs(): { name: string, title: string }[] {
        const { bridgeInfo: { config_schema: configSchema = { properties: {} } } } = this.props;
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
    getSettingsInfo(): { currentSchema: JSONSchema7; currentConfig: Record<string, unknown> } {
        const { keyName } = this.state;
        const { bridgeInfo: { config_schema: configSchema, config: originalConfig } } = this.props;

        let configAndSchema = removePropertiesFromSchema(ingoredFields, cloneDeep(configSchema), cloneDeep<Record<string, unknown>>(originalConfig));

        let currentSchema: JSONSchema7 = configAndSchema.schema;
        let currentConfig = configAndSchema.config[keyName] as Record<string, unknown>;

        if (keyName === ROOT_KEY_NAME) {
            const ignoreTabNames = this.getSettingsTabs().map(tab => tab.name);
            configAndSchema = removePropertiesFromSchema(ignoreTabNames, configAndSchema.schema, configAndSchema.config)
            currentSchema = configAndSchema.schema;
            currentConfig = configAndSchema.config;
        } else {
            currentConfig = configAndSchema.config[keyName] as Record<string, unknown>;
            if (configAndSchema.schema.properties) {
                currentSchema = configAndSchema.schema.properties[keyName] as JSONSchema7;
            }
        }
        return { currentSchema, currentConfig };
    }
    renderSettingsTabs(): JSX.Element {
        const { t } = this.props;
        const tabs = this.getSettingsTabs();
        const { keyName } = this.state;
        return <div className="nav nav-pills">
            {
                tabs.map(tab =>
                    <li key={tab.name} className="nav-item">
                        <a className={cx("nav-link", { 'bg-primary active': keyName === tab.name })} aria-current="page" href="#" onClick={(e) => { this.setState({ keyName: tab.name }); e.preventDefault() }}>{t(tab.name, {defaultValue: tab.title})}</a>
                    </li>
                )
            }
        </div>;
    }
    renderSettings(): JSX.Element {
        const { keyName } = this.state;
        const { currentSchema, currentConfig } = this.getSettingsInfo();
        return <div className="tab">
            {this.renderSettingsTabs()}
            <div className="tab-content">
                <div className="tab-pane active">
                    <Form key={keyName} schema={currentSchema}
                        formData={currentConfig}
                        onSubmit={this.onSettingsSave}
                        uiSchema={uiSchemas[keyName] as UiSchema}
                    />
                </div>
            </div>
        </div>

    }

    renderDonate(): JSX.Element {

        return <div className="container-fluid">
            <p>Hello, <mark>%username%</mark>, here you can thank us for hardworking</p>
            <p>Don&apos;t hesitate to say something nice as well ;) </p>
            {rows}
        </div>;
    }
}
const SettingsPageWithRouter = withRouter(SettingsPage);
const mappedProps = ["bridgeInfo"];
const ConnectedSettingsPage = withTranslation("settings")(connect<Record<string, unknown>, Record<string, unknown>, GlobalState, BridgeApi>(mappedProps, actions)(SettingsPageWithRouter));
export default ConnectedSettingsPage;
