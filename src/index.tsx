/* eslint-disable @typescript-eslint/camelcase */
// Must be the first import



if (process.env.NODE_ENV === 'development') {
    // Must use require here as import statements are only allowed
    // to exist at the top of a file.
    require("preact/debug");

}
import "./main.css";

import "notyf/notyf.min.css";
import "bootstrap/dist/css/bootstrap.min.css";



import { render, h, Component, ComponentChild, Fragment, FunctionalComponent } from 'preact';

import ConnectedMap from "./components/map";

import Router, { CustomHistory } from 'preact-router';

// import ConnectedDiscovery from "./components/discovery";
// import ConnectedLogViewer from "./components/log-viewer";
// import ConnectedCodeEditor from "./components/code-editor";
import ConnectedDevicePage from "./components/device-page";
import TouchlinkPage from "./components/touchlink-page";

import store from "./store";
import { Provider } from "unistore/preact";
import { createHashHistory } from 'history';



import api from './api';


import ConnectedSettingsPage from "./components/settings";
import NavBar from "./components/navbar";
import ConnectedGroupsPage from "./components/groups";
import ConnectedZigbeePage from "./components/zigbee";
import LogsPage from "./components/logs-page";


const ConnectedDevicePageWrap: FunctionalComponent<{ dev: string }> = ({ dev }) => (
    <ConnectedDevicePageWrap dev={dev} />
);


api.connect();

// eslint-disable-next-line react/prefer-stateless-function
class Main extends Component {
    render(): ComponentChild {
        return (
            <Provider store={store}>
                <Fragment>
                    <NavBar />
                    <Router path="/" history={(createHashHistory() as unknown as CustomHistory)}>
                        <ConnectedZigbeePage path="/" default />
                        <ConnectedMap path="/map" />
                        <ConnectedDevicePage path="/device/:dev/:tab?" />
                        <ConnectedSettingsPage path="/settings" />
                        <ConnectedGroupsPage path="/groups" />
                        <LogsPage path="/logs" />
                        <TouchlinkPage path="/touchlink" />
                    </Router>
                </Fragment>
            </Provider>

        );
    }
}


render(<Main />, document.body);
