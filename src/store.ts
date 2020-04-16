import createStore from "unistore";
import devtools from "unistore/devtools";

import { BindRule, Device } from "./types";
import { TimeInfo } from "./components/discovery/types";
import { LogLevel } from "./components/log-viewer";


export interface GlobalState {
    isLoading: boolean;
    isError: boolean | string;
    device: Device | undefined;
    devices: Device[];
    bindRules: BindRule[];
    time: TimeInfo | undefined;
    logs: string[];
    logLevel: LogLevel;
}

const initialState: GlobalState = {
    device: undefined,
    isLoading: false,
    isError: false,
    devices: [],
    bindRules: [{} as BindRule],
    time: undefined,
    logs: [],
    logLevel: LogLevel.LOG_DEBUG
};

const store = process.env.NODE_ENV === 'production' ?  createStore(initialState) : devtools(createStore(initialState));

export default store;