import createStore from "unistore";
import { Device, DeviceState, BridgeConfig, BridgeInfo, TouchLinkDevice, BridgeState, FriendlyName, IEEEEAddress, Group } from "./types";
import { GraphI } from "./components/map/types";
import { getCurrentTheme } from "./utils";
import { Theme } from "./components/theme-switcher";

import initialState from './initialState.json';
export interface LogMessage {
    level: "error" | "info" | "warning";
    message: string;
    timestamp: Date;
}

export type Extension = {
    name: string;
    code: string;
};

export type Devices = Record<IEEEEAddress, Device>;

export type WithDevices = {
    devices: Devices;
}

export type WithDeviceStates = {
    deviceStates: Record<FriendlyName, DeviceState>;
}
export type WithGroups = {
    groups: Group[];
}
export type WithBridgeInfo = {
    bridgeInfo: BridgeInfo;
}


export type OnlineOrOffline = 'online' | 'offline';

export type AvailabilityState = OnlineOrOffline | {
    state: OnlineOrOffline;
}


export type WithAvailability = {
    availability: Record<FriendlyName, AvailabilityState>;
}

export type Base64String = string

export interface GlobalState extends WithDevices, WithDeviceStates, WithGroups, WithBridgeInfo, WithAvailability {
    touchlinkDevices: TouchLinkDevice[];
    touchlinkScanInProgress: boolean;
    touchlinkIdentifyInProgress: boolean;
    touchlinkResetInProgress: boolean;
    networkGraph: GraphI;
    networkGraphIsLoading: boolean;
    bridgeConfig: BridgeConfig;
    bridgeState: BridgeState;
    logs: LogMessage[];
    extensions: Extension[];
    theme: Theme;
    missingTranslations: Map<string, unknown>;
    prepearingBackup: boolean;
    backup: Base64String;
}

const theme = getCurrentTheme();

(initialState as unknown as GlobalState).theme = theme;

const store = createStore<GlobalState>(initialState as unknown as GlobalState);

export default store;
