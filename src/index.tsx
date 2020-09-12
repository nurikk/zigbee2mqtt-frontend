/* eslint-disable @typescript-eslint/camelcase */
import "./main.css";

import "notyf/notyf.min.css";
import "bootstrap/dist/css/bootstrap.min.css";



import React, { Component, Fragment, FunctionComponent } from 'react';

import ConnectedMap from "./components/map";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    HashRouter
} from "react-router-dom";

// import ConnectedDiscovery from "./components/discovery";
// import ConnectedLogViewer from "./components/log-viewer";
// import ConnectedCodeEditor from "./components/code-editor";
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
import ReactDOM from "react-dom";


const ConnectedDevicePageWrap: FunctionComponent<{ dev: string }> = ({ dev }) => (
    <ConnectedDevicePageWrap dev={dev} />
);


api.connect();

// eslint-disable-next-line react/prefer-stateless-function
class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>

                    <HashRouter>
                        <NavBar />
                        <Switch>



                            <Route path="/map">
                                <ConnectedMap />
                            </Route>

                            {/* <Route path="/device/:dev/:tab?"> */}
                            <Route path="/device/:dev/:tab?" component={ConnectedDevicePage} />

                            {/* </Route> */}

                            <Route path="/settings/:tab?">
                                <ConnectedSettingsPage />
                            </Route>


                            <Route path="/groups">
                                <ConnectedGroupsPage />
                            </Route>

                            <Route path="/logs">
                                <LogsPage />
                            </Route>

                            <Route path="/touchlink">
                                <TouchlinkPage />
                            </Route>


                            <Route path="/">
                                <ConnectedZigbeePage />
                            </Route>
                        </Switch>
                    </HashRouter>
                </Fragment>
            </Provider>

        );
    }
}


ReactDOM.render(<Main />, document.getElementById("root"));
