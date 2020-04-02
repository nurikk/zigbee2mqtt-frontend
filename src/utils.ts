import ReconnectingWebSocket from "reconnecting-websocket";
import { Device, Dictionary } from "./types";

export const genDeviceShortAddress = (deviceKey: string | number): string => {
    let num = deviceKey;
    if (typeof deviceKey == "string") {
        num = parseInt(deviceKey, 10);
    }

    return `0x${(`0000${num.toString(16)}`).substr(-4).toUpperCase()}`;
};
export const genDeviceDetailsLink = (deviceKey: string | number): string => (`/zigbee?nwkAddr=${genDeviceShortAddress(deviceKey)}`);

export const formatIEEEAddr = (addr: string): string => (`0x${addr}`);


/**
 * Returns an array with arrays of the given size.
 *
 * @param inputArr {Array} array to split
 * @param chunkSize {Integer} Size of every group
 */
export function chunkArray<T>(inputArr: T[], chunkSize: number): T[][] {

    const results = [];
    while (inputArr.length) {
        results.push(inputArr.splice(0, chunkSize));
    }
    return results;
}

export const encodeGetParams = (data: Dictionary<string | number>): string => Object.keys(data).map((key) => [key, data[key]].map(encodeURIComponent).join("=")).join("&");

export const WSConnect = (): ReconnectingWebSocket => {
    const { hostname } = document.location;
    if (hostname === "localhost") {
        const { search } = document.location;
        if (search.indexOf("gate") > 0) {
            return new ReconnectingWebSocket(`ws://192.168.1.209:81/log`);
        }
        return new ReconnectingWebSocket(`ws://localhost:8579`);
    } else return new ReconnectingWebSocket(`ws://${document.location.hostname}:81/log`);
};

export const sanitizeModelNameForImageUrl = (modelName: string): string => {
    return modelName ? modelName.replace("/", "_") : null;
};

export const genDeviceImageUrl = (device: Device): string => (`https://raw.githubusercontent.com/slsys/Gateway/master/devices/png/${sanitizeModelNameForImageUrl(device.ModelId)}.png`);

export type LoadableFileTypes = "js" | "css";

export const fetchJs = (url) => {
    return new Promise((resolve, reject) => {
        const scriptElement = document.createElement("script");
        scriptElement.addEventListener("load", resolve);
        scriptElement.addEventListener("error", reject);
        scriptElement.setAttribute("type", "text/javascript");
        scriptElement.setAttribute("src", url);
        document.getElementsByTagName("head")[0].appendChild(scriptElement);
    });
};

export const fetchStyle = (url) => {
    return new Promise((resolve, reject) => {
        const link = document.createElement("link");
        link.addEventListener("load", resolve);
        link.addEventListener("error", reject);
        link.setAttribute("type", "text/css");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute("href", url);
        document.getElementsByTagName("head")[0].appendChild(link)
    });
};

