import './main.css';

import 'notyf/notyf.min.css';
import 'styles/styles.global.scss';

import React from 'react';

import ConnectedMap from './components/map';

import { Switch, Route, HashRouter } from 'react-router-dom';

import ConnectedDevicePage from './components/device-page';
import TouchlinkPage from './components/touchlink-page';

import store from './store';
import { Provider } from 'unistore/react';
import api from './api';

import ConnectedSettingsPage from './components/settings';
import NavBar from './components/navbar';
import ConnectedGroupsPage from './components/groups';
import ConnectedZigbeePage from './components/zigbee';
import LogsPage from './components/logs-page';
import ReactDOM from 'react-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Dashboard from './components/Dashboard/Dashboard';

const ConnectedDevicePageWrap: React.FC<{ dev: string }> = ({ dev }) => <ConnectedDevicePageWrap dev={dev} />;

api.connect();

const Main: React.FC = () => {
    return (
        <Provider store={store}>
            <HashRouter>
                <NavBar />
                <Switch>
                    <Route
                        path="/map"
                        render={(props) => (
                            <ErrorBoundary {...props}>
                                <ConnectedMap />
                            </ErrorBoundary>
                        )}
                    />
                    <Route path="/dashboard" render={(props) => <Dashboard {...props} />} />
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
                        path="/"
                        render={(props) => (
                            <ErrorBoundary {...props}>
                                <ConnectedZigbeePage />
                            </ErrorBoundary>
                        )}
                    />
                </Switch>
            </HashRouter>
        </Provider>
    );
};

ReactDOM.render(<Main />, document.getElementById('root'));
