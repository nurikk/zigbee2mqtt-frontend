import { DeviceType, PowerSource, PowerSources } from "../../types";


export type MessageCategory = "log" | "zigbee";
export type JoinEvents =
    "TcDeviceInd"
    | "DeviceAnnceInd"
    | "NodeDescRsp"
    | "ActiveEpRsp"
    | "ModelRcv"
    | "SimpleDescRsp"
    | "PowerSrcRcv";

export type ZigbeeEvent = "LinkData" | "LeaveInd" | "PermitJoin" | JoinEvents;

export interface LogMessage {
    category: "log";
    payload: string;
}

export interface ZigbeePayload {
    timestamp: number;
    event: ZigbeeEvent;
    nwkAddr: string;

    ep?: number;
    ieeeAddr: string;
    type?: DeviceType;
    ModelId?: string;
    ManufName?: string;
    duration?: number;
    PowerSource?: PowerSources;
}


export interface WebsocketMessage {
    category: MessageCategory;
    payload: string | ZigbeePayload;
}

