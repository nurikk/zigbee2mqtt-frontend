// const poly = require("preact-cli/lib/lib/webpack/polyfills");


import habitat from "preact-habitat";
import Map from "./components/map";
import Header from "./components/header";
import ZigbeeTable from "./components/zigbee";
import Discovery from "./components/discovery";


const initWidgets = (): void => {
    habitat(ZigbeeTable).render({
        selector: '[data-widget-host="zigbee"]',
        clean: true
    });

    habitat(Map).render({
        selector: '[data-widget-host="map"]',
        clean: true
    });

    habitat(Header).render({
        selector: '[data-widget-host="header"]',
        clean: true
    });

    habitat(Discovery).render({
        selector: '[data-widget-host="discovery"]',
        clean: true
    });
};
document.addEventListener("DOMContentLoaded", initWidgets);