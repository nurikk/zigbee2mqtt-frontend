let poly = require("preact-cli/lib/lib/webpack/polyfills");

import { h } from "preact";
import habitat from "preact-habitat";

import Header from "./components/header";

let _habitat = habitat(Header);

_habitat.render({
  selector: '[data-widget-host="habitat"]',
  clean: true
});
