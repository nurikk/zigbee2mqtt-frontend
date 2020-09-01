
import { Device, Dictionary } from "./types";
import { Notyf } from "notyf";
import { GraphI, ZigbeeRelationship, NodeI, Target, Source } from "./components/map/types";


export const genDeviceDetailsLink = (deviceIdentifier: string | number): string => (`/#/device/${deviceIdentifier}/info`);

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

export const encodeGetParams = (data: Dictionary<string | number>): string => Object.keys(data).map((key) => [key, data[key]].map(encodeURIComponent).join("=")).join("&");

export const sanitizeModelNameForImageUrl = (model: string): string => {
    return model ? `${model.replace(/:|\s|\//g, "-")}.jpg` : 'generic.jpg';
};

export const genDeviceImageUrl = (modelID: string): string => (`https://www.zigbee2mqtt.io/images/devices/${sanitizeModelNameForImageUrl(modelID)}`);

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
type HttMethod = "GET" | "POST" | "DELETE";
type ContentType = "text" | "json" | "blob";
export type CallbackHandler<T> = (err: boolean, res: T) => void;
export interface ApiResponse<T> {
    success: boolean;
    result: T;
}
export function callApi<T>(url: string, method: HttMethod, params: Dictionary<any>, payload: any, callback: CallbackHandler<T>, contentType: ContentType = "json"): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        fetch(`${url}?${encodeGetParams(params)}`, { method, body: payload })
            .then((res) => {
                if (res.status === 200) {
                    return res[contentType]();
                }
                throw new Error(res.statusText);

            })
            .then(data => {
                callback(false, data);
                resolve();
            })
            .catch(e => {
                new Notyf().error(e.toString());
                callback(e.toString(), undefined);
                reject();
            });
    })
}

export const lastSeen = (lastSeen: string): string => {
    if (!lastSeen) {
        return "N/A";
    }

    const diff = Date.now() - Date.parse(lastSeen);

    if (diff < 0) {
        return "Now";
    }
    return toHHMMSS(diff / 1000);

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

export const noCoordinator = (device: Device): boolean => device.type !== "Coordinator";


export const getDeviceDisplayName = (device: Device): string => {
    return `${toHex(device.network_address)} (${device.friendly_name ? device.friendly_name : device.definition?.model})`;
};

export const randomString = (len: number): string => Math.random().toString(36).substr(2, len);