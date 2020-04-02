import ReconnectingWebSocket from "reconnecting-websocket";
import { Device, Dictionary } from "./types";

export const genDeviceDetailsLink = (deviceIdentifier: string | number): string => (`/zigbee?nwkAddr=${encodeURIComponent(deviceIdentifier)}`);


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

