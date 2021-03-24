import "notyf/notyf.min.css";
import "./styles/styles.global.scss";

import React, { Component, FunctionComponent } from 'react';

import ConnectedMap from "./components/map";

import {
    Switch,
    Route,
    HashRouter
} from "react-router-dom";

import ConnectedDevicePage from "./components/device-page";
import TouchlinkPage from "./components/touchlink-page";

import store from "./store";
import { Provider } from "unistore/react";
import api from './api';


import ConnectedSettingsPage from "./components/settings";
import NavBar from "./components/navbar";
import ConnectedGroupsPage from "./components/groups";
import ConnectedZigbeePage from "./components/zigbee";
import LogsPage from "./components/logs-page";
import OtaPage from "./components/ota-page";
import ReactDOM from "react-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import DashboardPage from "./components/dashboard-page";
import ExtensionsEditorPage from "./components/extensions-editor";
import StateNotifier from "./components/state-notifier/StateNotifier";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

const ConnectedDevicePageWrap: FunctionComponent<{ dev: string }> = ({ dev }) => (
    <ConnectedDevicePageWrap dev={dev} />
);

const themes = {
    light: './css/light.css',
    dark: './css/dark.css',
};

api.connect();


// eslint-disable-next-line react/prefer-stateless-function

const Main = () => {
    const { theme } = store.getState();
    return <Provider store={store}>
        <ThemeSwitcherProvider themeMap={themes} defaultTheme={theme}>
            <HashRouter>
                <StateNotifier />
                <div className="main">
                    <NavBar />
                    <main className="content p-0 p-sm-3">
                        <div className="container-fluid p-0 h-100">
                            <Switch>
                                <Route path="/ota" render={(props) => <ErrorBoundary {...props}><OtaPage /></ErrorBoundary>} />
                                <Route path="/map" render={(props) => <ErrorBoundary {...props}><ConnectedMap /></ErrorBoundary>} />
                                <Route path="/device/:dev/:tab?" render={(props) => <ErrorBoundary {...props}><ConnectedDevicePage /></ErrorBoundary>} />
                                <Route path="/settings/:tab?" render={(props) => <ErrorBoundary {...props}><ConnectedSettingsPage /></ErrorBoundary>} />
                                <Route path="/groups" render={(props) => <ErrorBoundary {...props}><ConnectedGroupsPage /></ErrorBoundary>} />
                                <Route path="/logs" render={(props) => <ErrorBoundary {...props}><LogsPage /></ErrorBoundary>} />
                                <Route path="/touchlink" render={(props) => <ErrorBoundary {...props}><TouchlinkPage /></ErrorBoundary>} />
                                <Route path="/dashboard" render={(props) => <ErrorBoundary {...props}><DashboardPage /></ErrorBoundary>} />
                                <Route path="/extensions" render={(props) => <ErrorBoundary {...props}><ExtensionsEditorPage /></ErrorBoundary>} />
                                <Route path="/" render={(props) => <ErrorBoundary {...props}><ConnectedZigbeePage /></ErrorBoundary>} />
                            </Switch>
                        </div>
                    </main>
                </div>
            </HashRouter>
        </ThemeSwitcherProvider>
    </Provider >
}

ReactDOM.render(<Main />, document.getElementById("root"));
