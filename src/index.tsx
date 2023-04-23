import 'react-app-polyfill/stable';
import 'react-notifications/lib/notifications.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/styles.global.scss';
import { NotificationContainer } from 'react-notifications';
import React, { FunctionComponent } from 'react';
import NiceModal from '@ebay/nice-modal-react';

import ConnectedMap from './components/map';

import { Switch, Route, HashRouter } from 'react-router-dom';

import ConnectedDevicePage from './components/device-page';
import TouchlinkPage from './components/touchlink-page';

import store from './store';
import { Provider } from 'unistore/react';
import api from './ws-client';

import ConnectedSettingsPage from './components/settings';
import NavBar from './components/navbar';
import ConnectedGroupsPage from './components/groups';
import ConnectedZigbeePage from './components/zigbee';
import LogsPage from './components/logs-page';
import OtaPage from './components/ota-page';
import ReactDOM from 'react-dom';
import ErrorBoundary from './components/ErrorBoundary';
import DashboardPage from './components/dashboard-page';
import ExtensionsEditorPage from './components/extensions-editor';
import GroupPage from './components/groups/GroupPage';

import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

const ConnectedDevicePageWrap: FunctionComponent<{ dev: string }> = ({ dev }) => <ConnectedDevicePageWrap dev={dev} />;

import lightTheme from './bootstrap-theme/css/light.css?url';
import darkTheme from './bootstrap-theme/css/dark.css?url';
const themes = {
    light: lightTheme,
    dark: darkTheme,
};

api.connect();

const Main = () => {
    const { theme } = store.getState();
    return (
        <>
            <NotificationContainer />
            <I18nextProvider i18n={i18n}>
                <NiceModal.Provider>
                    <Provider store={store}>
                        <ThemeSwitcherProvider themeMap={themes} defaultTheme={theme}>
                            <HashRouter>
                                <div className="main">
                                    <NavBar />
                                    <main className="content p-0 p-sm-3">
                                        <div className="container-fluid p-0 h-100">
                                            <Switch>
                                                <Route
                                                    path="/ota"
                                                    render={(props) => (
                                                        <ErrorBoundary {...props}>
                                                            <OtaPage />
                                                        </ErrorBoundary>
                                                    )}
                                                />
                                                <Route
                                                    path="/map"
                                                    render={(props) => (
                                                        <ErrorBoundary {...props}>
                                                            <ConnectedMap />
                                                        </ErrorBoundary>
                                                    )}
                                                />
                                                <Route
                                                    path="/device/:dev/:tab?"
                                                    render={(props) => (
                                                        <ErrorBoundary {...props}>
                                                            <ConnectedDevicePage />
                                                        </ErrorBoundary>
                                                    )}
                                                />
                                                <Route
                                                    path="/settings/:tab?"
                                                    render={(props) => (
                                                        <ErrorBoundary {...props}>
                                                            <ConnectedSettingsPage />
                                                        </ErrorBoundary>
                                                    )}
                                                />
                                                <Route
                                                    path="/groups"
                                                    render={(props) => (
                                                        <ErrorBoundary {...props}>
                                                            <ConnectedGroupsPage />
                                                        </ErrorBoundary>
                                                    )}
                                                />
                                                <Route
                                                    path="/group/:groupId?"
                                                    render={(props) => (
                                                        <ErrorBoundary {...props}>
                                                            <GroupPage />
                                                        </ErrorBoundary>
                                                    )}
                                                />

                                                <Route
                                                    path="/logs"
                                                    render={(props) => (
                                                        <ErrorBoundary {...props}>
                                                            <LogsPage />
                                                        </ErrorBoundary>
                                                    )}
                                                />
                                                <Route
                                                    path="/touchlink"
                                                    render={(props) => (
                                                        <ErrorBoundary {...props}>
                                                            <TouchlinkPage />
                                                        </ErrorBoundary>
                                                    )}
                                                />
                                                <Route
                                                    path="/dashboard"
                                                    render={(props) => (
                                                        <ErrorBoundary {...props}>
                                                            <DashboardPage />
                                                        </ErrorBoundary>
                                                    )}
                                                />
                                                <Route
                                                    path="/extensions"
                                                    render={(props) => (
                                                        <ErrorBoundary {...props}>
                                                            <ExtensionsEditorPage />
                                                        </ErrorBoundary>
                                                    )}
                                                />
                                                <Route
                                                    path="/"
                                                    render={(props) => (
                                                        <ErrorBoundary {...props}>
                                                            <ConnectedZigbeePage />
                                                        </ErrorBoundary>
                                                    )}
                                                />
                                            </Switch>
                                        </div>
                                    </main>
                                </div>
                            </HashRouter>
                        </ThemeSwitcherProvider>
                    </Provider>
                </NiceModal.Provider>
            </I18nextProvider>
        </>
    );
};

ReactDOM.render(<Main />, document.getElementById('root'));
