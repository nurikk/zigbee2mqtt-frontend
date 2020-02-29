// const poly = require("preact-cli/lib/lib/webpack/polyfills");

import { h } from "preact";
import habitat from "preact-habitat";

import Header from "./components/header";
import Map from "./components/map";

habitat(Header).render({
    selector: '[data-widget-host="habitat"]',
    clean: true
});

habitat(Map).render({
    selector: '[data-widget-host="map"]',
    clean: true
});
