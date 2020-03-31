// const poly = require("preact-cli/lib/lib/webpack/polyfills");
import "toastr/build/toastr.css";

import habitat from "preact-habitat";
import Map from "./components/map";
import Header from "./components/header";
import ZigbeeTable from "./components/zigbee";
import Discovery from "./components/discovery";
import LogViewer from "./components/log-viewer";
import CodeEditor from "./components/code-editor";


const initWidgets = (): void => {
    habitat(ZigbeeTable).render({
        selector: "[data-widget-host=\"zigbee\"]",
        clean: true
    });

    habitat(Map).render({
        selector: "[data-widget-host=\"map\"]",
        clean: true
    });

    habitat(Header).render({
        selector: "[data-widget-host=\"header\"]",
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