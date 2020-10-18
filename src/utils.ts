
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
    const createdLinks = {};

    inGraph.nodes.forEach(node => {
        nodes[node.ieeeAddr] = node;
    });

    inGraph.links.sort((a, b) => a.relationship - b.relationship).forEach(link => {
        const src: NodeI = nodes[link.sourceIeeeAddr];
        const dst: NodeI = nodes[link.targetIeeeAddr];
        if (src && dst) {
            const linkType = [src.type, dst.type].join('2');
            nodesWithLinks[link.sourceIeeeAddr] = 1;
            nodesWithLinks[link.targetIeeeAddr] = 1;
            const linkId = [link.sourceIeeeAddr, link.targetIeeeAddr].sort().join('');
            const repeatedLink = createdLinks[linkId] ?? false;
            createdLinks[linkId] = true;
            links.push({ ...link, ...{ source: link.sourceIeeeAddr, target: link.targetIeeeAddr, linkType, repeated: repeatedLink } });
        } else {
            console.warn("Broken link", link);
            // switch (link.relationship) {
            //     case ZigbeeRelationship.NeigbhorIsASibling:
            //         siblings.push(link)
            //         break;
            //     default:
            //         filteredOutLinks.push(link);
            //         break;
            // }

        }
    });
    // console.log({ siblings, filteredOutLinks });

    // inGraph.nodes.forEach(node => {
    //     // if (!nodesWithLinks[node.networkAddress]) {
    //     //     //this node has no links, lets connect it to coordinator manually
    //     //     // const linkType = ""
    //     //     links.push({ source: node.networkAddress, target: coordinatorNode.networkAddress, linkType: "BrokenLink" });
    //     // }
    // });

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