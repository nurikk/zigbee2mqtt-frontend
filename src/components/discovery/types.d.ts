import { DeviceType, PowerSource } from "../../types";


export type MessageCategory = "log" | "zigbee";
export type JoinEvents = "TcDeviceInd" | "DeviceAnnceInd" | "NodeDescRsp" | "ActiveEpRsp" | "ModelRcv" | "SimpleDescRsp";
export type ZigbeeEvent = "LinkData" | "LeaveInd" | "PermitJoin" | JoinEvents;

export interface ZigbeePayload {
    timestamp: number;
    event: ZigbeeEvent;
    nwkAddr: string;

    ep?: number;
    ieeeAddr?: string;
    type?: DeviceType;
    powerSource?: PowerSource;
    ReceiverOnIdle?: string;
    Security?: string;
    ModelId?: string;
    duration?: number;
}



export interface WebsocketMessage {
    category: MessageCategory;
    payload: string | ZigbeePayload;
}

