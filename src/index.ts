// const poly = require("preact-cli/lib/lib/webpack/polyfills");
import habitat from "preact-habitat";
import Map from "./components/map";
import Header from "./components/header";

habitat(Map).render({
    selector: '[data-widget-host="map"]',
    clean: true
});

habitat(Header).render({
    selector: '[data-widget-host="header"]',
    clean: true
});
