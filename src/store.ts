import createStore from "unistore";
import devtools from "unistore/devtools";

import { BindRule, Device, FileDescriptor } from "./types";
import { TimeInfo } from "./components/discovery/types";
import { LogLevel } from "./components/log-viewer";
import { ApiResponse } from "./utils";


export interface GlobalState {
    isLoading: boolean;
    isError: boolean | string;
    device: Device | undefined;
    devices: Device[];
    bindRules: BindRule[];
    time: TimeInfo | undefined;
    logs: string[];
    logLevel: LogLevel;


    files: FileDescriptor[];
    executionResults: ApiResponse<string> | null;

    currentFileContent: string;
    currentFile: FileDescriptor;



}

const initialState: GlobalState = {
    device: undefined,
    isLoading: false,
    isError: false,
    devices: [],
    bindRules: [{} as BindRule],
    time: undefined,
    logs: [],
    logLevel: LogLevel.LOG_DEBUG,


    files: [],
    executionResults: null,
    currentFileContent: "",
    currentFile: null
};

const store = process.env.NODE_ENV === 'production' ?  createStore(initialState) : devtools(createStore(initialState));

export default store;