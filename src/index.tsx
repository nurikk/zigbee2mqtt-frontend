// Must be the first import




if (process.env.NODE_ENV==='development') {
    // Must use require here as import statements are only allowed
    // to exist at the top of a file.
    require("preact/debug");

}

// const poly = require("preact-cli/lib/lib/webpack/polyfills");
import "notyf/notyf.min.css";

import habitat from "preact-habitat";
import Map from "./components/map";
import ConnectedZigbeeTable from "./components/zigbee";
import Discovery from "./components/discovery";
import LogViewer from "./components/log-viewer";
import CodeEditor from "./components/code-editor";
import ConnectedDevicePage from "./components/device-page";
import store from "./store";
import { Provider } from "unistore/preact";
import { h } from "preact";

const DevicePageApp = () => (
    <Provider store={store}><ConnectedDevicePage /></Provider>
);
const ZigbeeTableApp = () => (
    <Provider store={store}><ConnectedZigbeeTable /></Provider>
);

const initWidgets = (): void => {
    habitat(ZigbeeTableApp).render({
        selector: "[data-widget-host=\"zigbee\"]",
        clean: true
    });

    habitat(DevicePageApp).render({
        selector: "[data-widget-host=\"device-page\"]",
        clean: true
    });

    habitat(Map).render({
        selector: "[data-widget-host=\"map\"]",
        clean: true
    });

    habitat(Discovery).render({
        selector: "[data-widget-host=\"discovery\"]",
        clean: true
    });
    habitat(LogViewer).render({
        selector: "[data-widget-host=\"log-viewer\"]",
        clean: true
    });

    habitat(CodeEditor).render({
        selector: "[data-widget-host=\"code-editor\"]",
        clean: true
    });


};
document.addEventListener("DOMContentLoaded", initWidgets);