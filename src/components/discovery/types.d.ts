import { DeviceType, PowerSource } from "../../types";


export type MessageCategory = "log" | "zigbee";
export type JoinEvents =
    "TcDeviceInd"
    | "DeviceAnnceInd"
    | "NodeDescRsp"
    | "ActiveEpRsp"
    | "ModelRcv"
    | "SimpleDescRsp";
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
    ieeeAddr?: string;
    type?: DeviceType;
    powerSource?: PowerSource;
    ModelId?: string;
    duration?: number;
}


export interface WebsocketMessage {
    category: MessageCategory;
    payload: string | ZigbeePayload;
}

