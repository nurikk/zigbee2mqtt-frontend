
import { Device, Endpoint } from "./types";
import { GraphI, LinkI, NodeI } from "./components/map/types";
import { format, TDate } from 'timeago.js';
import { Group } from "./store";

export const genDeviceDetailsLink = (deviceIdentifier: string | number): string => (`/device/${deviceIdentifier}`);

export const toHex = (input: number, padding = 4): string => {
    return `0x${(`${'0'.repeat(padding)}${input.toString(16)}`).substr(-1 * padding).toUpperCase()}`;
};


export const toHHMMSS = (secs: number): string => {
    if (!secs) {
        return 'N/A';
    }
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

export const lastSeen = (lastSeen?: string | number, elapsed?: number): string => {
    if (!lastSeen && !elapsed) {
        return "N/A";
    }
    let diff: TDate;
    if (elapsed !== undefined) {
        diff = Date.now() - elapsed;
    } else {
        if (typeof lastSeen === "string") {
            diff = Date.parse(lastSeen);
        } else {
            diff = new Date(lastSeen as number);
        }
    }
    return format(diff);
};


export const sanitizeGraph = (inGraph: GraphI): GraphI => {
    const nodes = {};
    const links = new Map<string, any>();

    inGraph.nodes.forEach(node => {
        nodes[node.ieeeAddr] = node;
    });

    inGraph.links.sort((a, b) => a.relationship - b.relationship).forEach(link => {
        const src: NodeI = nodes[link.source.ieeeAddr];
        const dst: NodeI = nodes[link.target.ieeeAddr];
        if (src && dst) {
            const linkId = [link.source.ieeeAddr, link.target.ieeeAddr].sort().join('');
            const repeatedLink = links.get(linkId);
            const linkType = [src.type, dst.type].join('2');
            if (repeatedLink) {
                repeatedLink.linkqualities.push(link.linkquality);
                repeatedLink.relationships.push(link.relationship);
            } else {
                links.set(linkId, { ...link, ...{ source: link.source.ieeeAddr, linkType, target: link.target.ieeeAddr, linkqualities: [link.linkquality], relationships: [link.relationship]} });
            }
        } else {
            console.warn("Broken link", link);
        }
    });

    inGraph.links = Array.from(links.values());
    return inGraph;
};

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




function replacer(key: string, value: object) {
    const originalObject = this[key];
    if (originalObject instanceof Map) {
        return {
            dataType: 'Map',
            value: Array.from(originalObject.entries()),
        };
    } else {
        return value;
    }
}

function reviver(key: string, value: { dataType: string; value: Iterable<readonly [unknown, unknown]>; }) {
    if (typeof value === 'object' && value !== null) {
        if (value.dataType === 'Map') {
            return new Map(value.value);
        }
    }
    return value;
}

export const serialize = (data: object) => {
    return JSON.stringify(data, replacer);
}

export const deSerialize = (str: string) => {
    return JSON.parse(str, reviver);
}


export const download = (data: object, filename: string): void => {
    const blob = new Blob([serialize(data)], { type: 'octet/stream' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.href = url;
    a.download = filename;

    setTimeout(() => {
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }, 1);

}

export const sanitizeZ2MDeviceName = (deviceName?: string): string => deviceName ? deviceName.replace(/:|\s|\//g, "-") : "NA";


export const getEndpoints = (obj: Device | Group): Endpoint[] => {
    if (!obj) {
        return [];
    } else if ((obj as Device).endpoints) {
        return Array.from((obj as Device).endpoints.keys());
    } else if ((obj as Group).members) {
        return (obj as Group).members.map(g => g.endpoint);
    }
    return [];
}
