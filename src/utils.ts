
import { AdvancedConfig, Device, DeviceState, Endpoint, Group, LastSeenType } from "./types";
import { GraphI, LinkI, LinkType, NodeI } from "./components/map/types";
import { Theme } from "./components/theme-switcher";
import JSZip from 'jszip';
import FileSaver from 'file-saver';
import { local } from "@toolz/local-storage";


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


export const lastSeen = (state: DeviceState, lastSeenType: LastSeenType): Date | undefined => {
    if (!state.last_seen) {
        return undefined;
    }
    switch (lastSeenType) {
        case "ISO_8601":
        case "ISO_8601_local":
            return new Date(Date.parse(state.last_seen as string));

        case "epoch":
            return new Date(state.last_seen as number);        

        case "disable":
            return undefined;

        default:
            console.warn("Unknown last_seen type " + lastSeenType);
            return undefined;
    }
};


export const sanitizeGraph = (inGraph: GraphI): GraphI => {
    const nodes = {};
    const links = new Map<string, LinkI>();

    inGraph.nodes.forEach(node => {
        nodes[node.ieeeAddr] = node;
    });

    inGraph.links.sort((a, b) => a.relationship - b.relationship).forEach(link => {

        const src: NodeI = nodes[link.source.ieeeAddr];
        const dst: NodeI = nodes[link.target.ieeeAddr];

        if (src && dst) {
            const linkId = [link.source.ieeeAddr, link.target.ieeeAddr].sort().join('');
            const repeatedLink = links.get(linkId);
            const linkType = [src.type, dst.type].join('2') as LinkType;
            if (repeatedLink) {
                repeatedLink.linkqualities.push(link.linkquality);
                repeatedLink.relationships.push(link.relationship);
            } else {
                links.set(linkId, { ...link, ...{ source: src, target: dst, linkType, linkqualities: [link.linkquality], relationships: [link.relationship] } });
            }
        } else {
            console.warn(`Broken link${src ? "": " ,source node is missing"}${dst ? "": " ,target node is missing"}`, link);
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


export const download = (data: Record<string, unknown>, filename: string): void => {
    const zip = new JSZip();
    zip.file(filename, JSON.stringify(data, null, 4), { compression: 'DEFLATE' });
    zip.generateAsync({ type: "blob" }).then((content) => {
        FileSaver.saveAs(content, `${filename}.zip`);
    });
}

export const sanitizeZ2MDeviceName = (deviceName?: string): string => deviceName ? deviceName.replace(/:|\s|\//g, "-") : "NA";

export const getEndpoints = (obj: Device | Group): Endpoint[] => {
    if (!obj) {
        return [];
    } else if ((obj as Device).endpoints) {
        return Object.keys((obj as Device).endpoints);
    } else if ((obj as Group).members) {
        return (obj as Group).members.map(g => g.endpoint);
    }
    return [];
}


export const stringifyWithPreservingUndefinedAsNull = (data: Record<string, unknown>): string => JSON.stringify(data, (k, v) => v === undefined ? null : v)



export const isOnlyOneBitIsSet = (b: number): number | boolean => {
    return b && !(b & (b - 1));
}
const THEME_STORAGE_KEY = 'theme-v2';

export const getCurrentTheme = (): Theme => local.getItem(THEME_STORAGE_KEY) as Theme ?? 'light';
export const saveCurrentTheme = (theme: string): void => local.setItem(THEME_STORAGE_KEY, theme);
