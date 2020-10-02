
import { Device } from "./types";
import { GraphI, ZigbeeRelationship, NodeI, Target, Source } from "./components/map/types";
import { format } from 'timeago.js';

export const genDeviceDetailsLink = (deviceIdentifier: string | number): string => (`/device/${deviceIdentifier}`);

export const toHex = (input: number, padding = 4): string => {
    return `0x${(`${'0'.repeat(padding)}${input.toString(16)}`).substr(-1 * padding).toUpperCase()}`;
};

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

export const encodeGetParams = (data: Map<string, string | number>): string => Object.keys(data).map((key) => [key, data[key]].map(encodeURIComponent).join("=")).join("&");



export type LoadableFileTypes = "js" | "css";

export const fetchJs = (url: string): Promise<unknown> => {
    return new Promise((resolve, reject) => {
        const scriptElement = document.createElement("script");
        scriptElement.addEventListener("load", resolve);
        scriptElement.addEventListener("error", reject);
        scriptElement.setAttribute("type", "text/javascript");
        scriptElement.setAttribute("src", url);
        document.getElementsByTagName("head")[0].appendChild(scriptElement);
    });
};

export const fetchStyle = (url: string): Promise<unknown> => {
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

export function last<T>(collection: T[]): T {
    return collection[collection.length - 1];
}
export function arrayUnique<T>(input: T[]): T[] {
    return input.filter((v, i, a) => a.indexOf(v) === i);
}



export const bitOps = {
    getBit: (n: number, bitIndex: number): number => {
        const bitMask = 1 << bitIndex;
        const result = n & bitMask;
        return result >>> bitIndex;
    },
    setBit: (n: number, bitIndex: number): number => {
        const bitMask = 1 << bitIndex;
        return n | bitMask;
    },
    clearBit: (n: number, bitIndex: number): number => {
        const bitMask = ~(1 << bitIndex);
        return n & bitMask;
    }
};


export const toHHMMSS = (secs: number): string => {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor(secs / 60) % 60;
    const seconds = Math.floor(secs % 60);

    return [hours, minutes, seconds]
        .map(v => v < 10 ? `0${v}` : v)
        .filter((v, i) => v !== "00" || i > 0)
        .join(":");
};

export type CallbackHandler<T> = (err: boolean, res: T) => void;
export interface ApiResponse<T> {
    success: boolean;
    result: T;
}

export const lastSeen = (lastSeen: string, elapsed: number): string => {
    if (!lastSeen && !elapsed) {
        return "N/A";
    }
    const diff = elapsed ? Date.now() - elapsed : Date.parse(lastSeen);
    return format(diff);
};


export const sanitizeGraph = (inGraph: GraphI): GraphI => {
    const nodes = {};
    const links = [];
    const nodesWithLinks = {};
    let coordinatorNode = {} as NodeI;
    const filteredOutLinks = [];
    const siblings = [];
    const createdLinks = {};

    inGraph.nodes.forEach(node => {
        nodes[node.networkAddress] = node;
        if (node.type == "Coordinator") {
            coordinatorNode = node;
        }
    });
    inGraph.links = inGraph.links.sort((a, b) => a.relationship - b.relationship);

    inGraph.links.forEach(link => {
        const src: NodeI = nodes[(link.source as Source).networkAddress];
        const dst: NodeI = nodes[(link.target as Target).networkAddress];

        if (src && dst) {
            const linkType = [src.type, dst.type].join('2');
            nodesWithLinks[src.networkAddress] = 1;
            nodesWithLinks[dst.networkAddress] = 1;
            const linkId = [src.networkAddress, dst.networkAddress].sort().join('');
            const repeatedLink = createdLinks[linkId] || false;
            if (!repeatedLink) {
                createdLinks[linkId] = true;
            }
            links.push({ ...link, ...{ source: (link.source as Source).networkAddress, target: (link.target as Target).networkAddress, linkType, repeated: repeatedLink } });
        } else {
            switch (link.relationship) {
                case ZigbeeRelationship.NeigbhorIsASibling:
                    siblings.push(link)
                    break;
                default:
                    filteredOutLinks.push(link);
                    break;
            }

        }
    });

    inGraph.nodes.forEach(node => {
        if (!nodesWithLinks[node.networkAddress]) {
            //this node has no links, lets connect it to coordinator manually
            // const linkType = ""
            links.push({ source: node.networkAddress, target: coordinatorNode.networkAddress, linkType: "BrokenLink" });
        }
    });

    inGraph.links = links;
    return inGraph;
};

export const isObject = (obj: unknown): boolean => {
    return obj === Object(obj);
}


export const getDeviceDisplayName = (device: Device): string => {
    return `${device.friendly_name} ${device.definition?.model ? `(${device.definition?.model})` : ''}`;
};

export const randomString = (len: number): string => Math.random().toString(36).substr(2, len);

export const isSecurePage = (): boolean => location.protocol === 'https:';


export const scale = (inputY: number, yRange: Array<number>, xRange: Array<number>): number => {
    const [xMin, xMax] = xRange;
    const [yMin, yMax] = yRange;

    const percent = (inputY - yMin) / (yMax - yMin);
    const outputX = percent * (xMax - xMin) + xMin;

    return outputX;
};

/**
 * https://github.com/usolved/cie-rgb-converter/blob/master/cie_rgb_converter.js
 * Converts CIE color space to RGB color space
 * @param {Number} x
 * @param {Number} y
 * @param {Number} brightness - Ranges from 1 to 254
 * @return {Array} Array that contains the color values for red, green and blue
 */
export function cie_to_rgb(x: number, y: number, brightness = 254): [number, number, number] {
    const z = 1.0 - x - y;
    const Y = parseFloat((brightness / 254).toFixed(2));
    const X = (Y / y) * x;
    const Z = (Y / y) * z;

    //Convert to RGB using Wide RGB D65 conversion
    let red = X * 1.656492 - Y * 0.354851 - Z * 0.255038;
    let green = -X * 0.707196 + Y * 1.655397 + Z * 0.036152;
    let blue = X * 0.051713 - Y * 0.121364 + Z * 1.011530;

    //If red, green or blue is larger than 1.0 set it back to the maximum of 1.0
    if (red > blue && red > green && red > 1.0) {

        green = green / red;
        blue = blue / red;
        red = 1.0;
    }
    else if (green > blue && green > red && green > 1.0) {

        red = red / green;
        blue = blue / green;
        green = 1.0;
    }
    else if (blue > red && blue > green && blue > 1.0) {

        red = red / blue;
        green = green / blue;
        blue = 1.0;
    }

    //Reverse gamma correction
    red = red <= 0.0031308 ? 12.92 * red : (1.0 + 0.055) * Math.pow(red, (1.0 / 2.4)) - 0.055;
    green = green <= 0.0031308 ? 12.92 * green : (1.0 + 0.055) * Math.pow(green, (1.0 / 2.4)) - 0.055;
    blue = blue <= 0.0031308 ? 12.92 * blue : (1.0 + 0.055) * Math.pow(blue, (1.0 / 2.4)) - 0.055;


    //Convert normalized decimal to decimal
    red = Math.round(red * 255);
    green = Math.round(green * 255);
    blue = Math.round(blue * 255);

    if (isNaN(red))
        red = 0;

    if (isNaN(green))
        green = 0;

    if (isNaN(blue))
        blue = 0;


    return [red, green, blue];
}


/**
 * https://github.com/usolved/cie-rgb-converter/blob/master/cie_rgb_converter.js
 * Converts RGB color space to CIE color space
 * @param {Number} red
 * @param {Number} green
 * @param {Number} blue
 * @return {Array} Array that contains the CIE color values for x and y
 */
export function rgb_to_cie(_red: number, _green: number, _blue: number) {
    //Apply a gamma correction to the RGB values, which makes the color more vivid and more the like the color displayed on the screen of your device
    const red = (_red > 0.04045) ? Math.pow((_red + 0.055) / (1.0 + 0.055), 2.4) : (_red / 12.92);
    const green = (_green > 0.04045) ? Math.pow((_green + 0.055) / (1.0 + 0.055), 2.4) : (_green / 12.92);
    const blue = (_blue > 0.04045) ? Math.pow((_blue + 0.055) / (1.0 + 0.055), 2.4) : (_blue / 12.92);

    //RGB values to XYZ using the Wide RGB D65 conversion formula
    const X = red * 0.664511 + green * 0.154324 + blue * 0.162028;
    const Y = red * 0.283881 + green * 0.668433 + blue * 0.047685;
    const Z = red * 0.000088 + green * 0.072310 + blue * 0.986039;

    //Calculate the xy values from the XYZ values
    let x = parseFloat((X / (X + Y + Z)).toFixed(4));
    let y = parseFloat((Y / (X + Y + Z)).toFixed(4));

    if (isNaN(x)) {
        x = 0;
    }

    if (isNaN(y)) {
        y = 0;
    }


    return [x, y];
}