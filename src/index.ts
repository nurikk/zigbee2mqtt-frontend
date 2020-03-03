// const poly = require("preact-cli/lib/lib/webpack/polyfills");
import habitat from "preact-habitat";
import Map from "./components/map";

habitat(Map).render({
    selector: '[data-widget-host="map"]',
    clean: true
});
