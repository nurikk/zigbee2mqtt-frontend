import React, { lazy, Suspense } from 'react';
import NiceModal from '@ebay/nice-modal-react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { ReactNotifications } from 'react-notifications-component';

import store from './store';
import { Provider } from 'unistore/react';

import NavBar from './components/navbar';

import ErrorBoundary from './components/ErrorBoundary';

import ScrollToTop from './components/scroll-to-top';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';

import lightTheme from './bootstrap-theme/css/light.css?url';
import darkTheme from './bootstrap-theme/css/dark.css?url';

const ConnectedTouchlinkPage = lazy(() =>
    import('./components/touchlink-page').then((module) => ({ default: module.ConnectedTouchlinkPage })),
);
const ConnectedOtaPage = lazy(() =>
    import('./components/ota-page').then((module) => ({ default: module.ConnectedOtaPage })),
);
const ConnectedZigbeePage = lazy(() =>
    import('./components/zigbee').then((module) => ({ default: module.ConnectedZigbeePage })),
);
const ConnectedGroupsPage = lazy(() =>
    import('./components/groups').then((module) => ({ default: module.ConnectedGroupsPage })),
);
const ConnectedGroupPage = lazy(() =>
    import('./components/groups/GroupPage').then((module) => ({ default: module.ConnectedGroupPage })),
);
const ConnectedLogsPage = lazy(() =>
    import('./components/logs-page').then((module) => ({ default: module.ConnectedLogsPage })),
);
const ConnectedExtensionsEditorPage = lazy(() =>
    import('./components/extensions-editor').then((module) => ({ default: module.ConnectedExtensionsEditorPage })),
);
const ConnectedMap = lazy(() =>
    import('./components/map/ConnectedMap').then((module) => ({ default: module.ConnectedMap })),
);
const ConnectedSettingsPage = lazy(() =>
    import('./components/settings-page').then((module) => ({ default: module.ConnectedSettingsPage })),
);
const ConnectedDevicePage = lazy(() =>
    import('./components/device-page/ConnectedDevicePage').then((module) => ({ default: module.ConnectedDevicePage })),
);
const ConnectedDashboardPage = lazy(() =>
    import('./components/dashboard-page/Dashboard').then((module) => ({ default: module.ConnectedDashboardPage })),
);

export function Main() {
    const { theme } = store.getState();
    return (
        <React.StrictMode>
            <ReactNotifications />
            <I18nextProvider i18n={i18n}>
                <NiceModal.Provider>
                    <Provider store={store}>
                        <ThemeSwitcherProvider
                            themeMap={{
                                light: lightTheme,
                                dark: darkTheme,
                            }}
                            defaultTheme={theme}
                        >
                            <HashRouter>
                                <ScrollToTop />
                                <div className="main">
                                    <NavBar />
                                    <main className="content p-0 p-sm-3">
                                        <div className="container-fluid p-0 h-100">
                                            <Suspense fallback={<div>Loading...</div>}>
                                                <Switch>
                                                    <Route
                                                        path="/ota"
                                                        render={(props) => (
                                                            <ErrorBoundary {...props}>
                                                                <ConnectedOtaPage />
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
                                                                <ConnectedGroupPage />
                                                            </ErrorBoundary>
                                                        )}
                                                    />

                                                    <Route
                                                        path="/logs"
                                                        render={(props) => (
                                                            <ErrorBoundary {...props}>
                                                                <ConnectedLogsPage />
                                                            </ErrorBoundary>
                                                        )}
                                                    />
                                                    <Route
                                                        path="/touchlink"
                                                        render={(props) => (
                                                            <ErrorBoundary {...props}>
                                                                <ConnectedTouchlinkPage />
                                                            </ErrorBoundary>
                                                        )}
                                                    />
                                                    <Route
                                                        path="/dashboard"
                                                        render={(props) => (
                                                            <ErrorBoundary {...props}>
                                                                <ConnectedDashboardPage />
                                                            </ErrorBoundary>
                                                        )}
                                                    />
                                                    <Route
                                                        path="/extensions"
                                                        render={(props) => (
                                                            <ErrorBoundary {...props}>
                                                                <ConnectedExtensionsEditorPage />
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
                                            </Suspense>
                                        </div>
                                    </main>
                                </div>
                            </HashRouter>
                        </ThemeSwitcherProvider>
                    </Provider>
                </NiceModal.Provider>
            </I18nextProvider>
        </React.StrictMode>
    );
}
