
import { Device, Endpoint } from "./types";
import { GraphI, NodeI } from "./components/map/types";
import { format } from 'timeago.js';

export const genDeviceDetailsLink = (deviceIdentifier: string | number): string => (`/device/${deviceIdentifier}`);

export const toHex = (input: number, padding = 4): string => {
    return `0x${(`${'0'.repeat(padding)}${input.toString(16)}`).substr(-1 * padding).toUpperCase()}`;
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
    const createdLinks = new Set<string>();

    inGraph.nodes.forEach(node => {
        nodes[node.ieeeAddr] = node;
    });

    inGraph.links.sort((a, b) => a.relationship - b.relationship).forEach(link => {
        const src: NodeI = nodes[link.source.ieeeAddr];
        const dst: NodeI = nodes[link.target.ieeeAddr];
        if (src && dst) {
            const linkId = [link.source.ieeeAddr, link.target.ieeeAddr].sort().join('');
            const repeatedLink = createdLinks.has(linkId);
            createdLinks.add(linkId);
            const linkType = [src.type, dst.type].join('2');
            links.push({ ...link, ...{ source: link.source.ieeeAddr, target: link.target.ieeeAddr, linkType, repeated: repeatedLink } });
        } else {
            console.warn("Broken link", link);
        }
    });

    inGraph.links = links;
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

export const withEndpoint = (name: string, endpoint: Endpoint) => endpoint ? `${name}_${endpoint}` : name;