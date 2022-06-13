import React, { Component } from "react";
import { connect } from "unistore/react";
import actions, { UtilsApi } from "../../actions/actions";
import { GlobalState } from "../../store";
import { NavLink, Redirect, RouteComponentProps, withRouter } from "react-router-dom";
import Button from "../button";
import Form, { ISubmitEvent, UiSchema } from "@rjsf/core";
import cx from "classnames";
import { JSONSchema7 } from "json-schema";
import cloneDeep from "lodash/cloneDeep";
import uiSchemas from "./uiSchema.json";
import { BridgeApi } from "../../actions/BridgeApi";
import { WithTranslation, withTranslation } from "react-i18next";
import customFields from "./../../i18n/rjsf-translation-fields";
import { Stats } from "./stats";
import frontentPackageJson from '../../../package.json';
import { formatDate } from "../../utils";
import { saveAs } from 'file-saver';


type SettingsTab = "settings" | "bridge" | "about" | "tools" | "donate" | "translate";

type SettingsKeys = string;
type UrlParams = {
    tab?: SettingsTab;
};
type SettingsPageProps = RouteComponentProps<UrlParams>;



type SettingsPageState = {
    keyName: SettingsKeys;
}

const ROOT_KEY_NAME = 'main';

const ignoredFields = ['groups', 'devices', 'device_options', 'ban', 'whitelist', 'map_options'];
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
        translationKey: 'translate',
        url: '/settings/translate'
    },
    {
        translationKey: 'donate',
        url: '/settings/donate'
    }
];
const rows = [
    <div key="nurikk" className="row pb-2">
        <div className="col">
            <a target="_blank" rel="noopener noreferrer" href="https://www.buymeacoffee.com/nurikk">
                <img crossOrigin="anonymous" src="https://img.buymeacoffee.com/button-api/?text=Thanks for frontend&emoji=🍺&slug=nurikk&button_colour=FFDD00&font_colour=000000&font_family=Arial&outline_colour=000000&coffee_colour=ffffff" />
            </a>
        </div>
    </div>,
    <div key={"koenkk"} className="row pb-2">
        <div className="col">
            <a target="_blank" rel="noopener noreferrer" href="https://www.buymeacoffee.com/koenkk">
                <img crossOrigin="anonymous" src="https://img.buymeacoffee.com/button-api/?text=Thanks for zigbee2mqtt&emoji=☕&slug=koenkk&button_colour=FFDD00&font_colour=000000&font_family=Arial&outline_colour=000000&coffee_colour=ffffff" />
            </a>
        </div>
    </div>
].sort(() => Math.random() - 0.5);

const isValidKeyToRenderAsTab = (key: string, value: JSONSchema7): boolean => (validJsonSchemasAsTabs.includes(value.type as string) && !ignoredFields.includes(key)) || (value && value.oneOf ? value.oneOf.length > 0 : false);
type PropsFromStore = Pick<GlobalState, 'bridgeInfo' | 'missingTranslations' | 'devices' | 'backup'>;
export class SettingsPage extends Component<PropsFromStore & SettingsPageProps & BridgeApi & UtilsApi & WithTranslation<"setting">, SettingsPageState> {
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
            case "translate":
                return this.renderTranslate();
            default:
                return <Redirect to={`/settings/settings`} />;
        }
    }
    renderTranslate(): JSX.Element {
        return <div className="p-3">
            <p>You can help with the translation at <a target="_blank" rel="noopener noreferrer" href="https://poeditor.com/join/project?hash=Az88waAhPd">POEditor</a></p>
        </div>
    }
    renderAbout(): JSX.Element {
        const { bridgeInfo, devices, t } = this.props;
        const isZigbee2mqttDevVersion = bridgeInfo.version?.match(/^\d+\.\d+\.\d+$/) === null;
        const zigbee2mqttVersion = isZigbee2mqttDevVersion ?
            bridgeInfo.version :
            <a target="_blank" rel="noopener noreferrer" href={`https://github.com/Koenkk/zigbee2mqtt/releases/tag/${bridgeInfo.version}`}>{bridgeInfo.version}</a>;
        const zigbee2mqttCommit = bridgeInfo.commit ?
            <>commit: <a target="_blank" rel="noopener noreferrer" href={`https://github.com/Koenkk/zigbee2mqtt/commit/${bridgeInfo.commit}`}>{bridgeInfo.commit}</a></> :
            null;

        const rows = [
            { translationKey: 'zigbee2mqtt_version', content: <>{zigbee2mqttVersion} {zigbee2mqttCommit}</> },
            { translationKey: 'coordinator_type', content: <>{bridgeInfo.coordinator?.type ?? t('common:unknown')}</> },
            { translationKey: 'coordinator_revision', content: <>{bridgeInfo.coordinator?.meta?.revision ?? t('common:unknown')}</> },
            { translationKey: 'coordinator_ieee_address', content: <>{bridgeInfo.coordinator?.ieee_address ?? t('common:unknown')}</> },
            { translationKey: 'frontend_version', content: frontentPackageJson.version },
            { translationKey: 'stats', content: <Stats devices={devices} /> },
        ];

        return <div className="p-3">{rows.map(row => <dl key={row.translationKey} className="row">
            <dt className="col-sm-3">{t(row.translationKey)}</dt>
            <dd className="col-sm-9">{row.content}</dd>
        </dl>)}</div>;

    }
    renderBridgeInfo(): JSX.Element {
        const { bridgeInfo } = this.props;
        return <div className="p-3"><pre>{JSON.stringify(bridgeInfo, null, 4)}</pre></div>

    }
    downloadBackup = (): void => {
        const { backup } = this.props;
        const ts = formatDate(new Date()).replace(/[\s_:]/g, '-')
        const backupFileName = `z2m-backup.${ts}.zip`;
        saveAs(`data:application/zip;base64,${backup}`, backupFileName);
    }

    renderTools(): JSX.Element {
        const { exportState, restartBridge, requestBackup, backup, t } = this.props;

        return <div className="p-3">
            <Button className="btn btn-primary d-block mt-2" onClick={exportState}>{t('download_state')}</Button>
            <Button className="btn btn-danger d-block mt-2" onClick={restartBridge} prompt>{t('restart_zigbee2mqtt')}</Button>
            {backup ?
                <Button className="btn btn-primary d-block mt-2" onClick={this.downloadBackup}>{t('download_z2m_backup')}</Button> :
                <Button className="btn btn-primary d-block mt-2" onClick={requestBackup}>{t('request_z2m_backup')}</Button>
            }

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
        const { bridgeInfo: { config_schema: configSchema = { properties: {} } }, t } = this.props;
        const tabs = Object.entries<JSONSchema7>(configSchema.properties as unknown as ArrayLike<JSONSchema7>)
            .filter(([key, value]) => isValidKeyToRenderAsTab(key, value))
            .map(([key, value]) => ({
                name: key,
                title: t(key, { defaultValue: value.title })
            }));
        tabs.unshift({
            name: ROOT_KEY_NAME,
            title: t('main', { defaultValue: "Main" })
        });
        return tabs;
    }
    getSettingsInfo(): { currentSchema: JSONSchema7; currentConfig: Record<string, unknown> } {
        const { keyName } = this.state;
        const { bridgeInfo: { config_schema: configSchema, config: originalConfig } } = this.props;

        let configAndSchema = removePropertiesFromSchema(ignoredFields, cloneDeep(configSchema), cloneDeep<Record<string, unknown>>(originalConfig));

        let currentSchema: JSONSchema7 = configAndSchema.schema;
        let currentConfig: Record<string, unknown>;

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
                        <a className={cx("nav-link", { 'bg-primary active': keyName === tab.name })} aria-current="page" href="#" onClick={(e) => { this.setState({ keyName: tab.name }); e.preventDefault() }}>{t(tab.name, { defaultValue: tab.title })}</a>
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
                    <Form idPrefix={keyName} schema={currentSchema}
                        formData={currentConfig}
                        onSubmit={this.onSettingsSave}
                        uiSchema={uiSchemas[keyName] as UiSchema}
                        fields={customFields}
                    />
                </div>
            </div>
        </div>

    }

    renderDonate(): JSX.Element {
        const { t } = this.props;
        const donateText = t("donation_text", { returnObjects: true, defaultValue: [] });
        return <div className="container-fluid">
            {donateText.map(row => <p key={row}>{row}</p>)}
            {rows}
        </div>;
    }
}
const SettingsPageWithRouter = withRouter(SettingsPage);
const mappedProps = ["bridgeInfo", "missingTranslations", "devices", "backup"];
const ConnectedSettingsPage = withTranslation(["settings", "common"])(connect<Record<string, unknown>, Record<string, unknown>, GlobalState, BridgeApi>(mappedProps, actions)(SettingsPageWithRouter));
export default ConnectedSettingsPage;
