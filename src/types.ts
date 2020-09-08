export type DeviceType = "EndDevice" | "Router" | "Coordinator";

export type Dictionary<V> = { [index: string]: V }

interface OTAState {
    state: "available" | "updating";
    progress: number;
    remaining: number;
}
export interface DeviceState {
    battery: number;
    last_seen?: string;
    elapsed?: number;
    linkquality: number;
    update?: OTAState;
    [k: string]: string | number | boolean | OTAState;
}

export type Cluster = string;

export type Endpoint = string | number;




export interface Meta {
    revision: number;
    transportrev: number;
    product: number;
    majorrel: number;
    minorrel: number;
    maintrel: number;
}

export interface Coordinator {
    type: string;
    meta: Meta;
}

export interface Network {
    channel: number;
    pan_id: number;
    extended_pan_id: number[];
}
export interface Z2MConfig {
    homeassistant: boolean;
    [k: string]: unknown;
}
export interface BridgeConfig {
    version: string;
    commit: string;
    coordinator: Coordinator;
    network: Network;
    log_level: string;
    permit_join: boolean;

}

export interface BridgeInfo {
    config: Z2MConfig;
    permit_join: boolean;
}

export type PowerSource = "Battery" | "Mains (single phase)";

export interface DeviceDefinition {
    description: string;
    model: string;
    supports: string;
    vendor: string;
}

export interface EndpointDescription {
    bindings: BindRule[];
    clusters: {
        input: Cluster[];
        output: Cluster[];
    };
}

export interface Device {
    ieee_address: string;
    type: DeviceType;
    network_address: number;
    model: string;
    friendly_name: string;
    power_source: PowerSource;
    interviewing: boolean;
    interview_completed: boolean;
    software_build_id: number;
    supported: boolean;
    definition?: DeviceDefinition;
    date_code: string;
    endpoints: Dictionary<EndpointDescription>;
}

export type ObjectType = "device" | "group";
export interface BindRule {
    cluster: Cluster;
    target: {
        id?: number;
        endpoint?: Endpoint;
        ieee_address?: string;
        type: "endpoint" | "group";
    };

}
export type SortDirection = "asc" | "desc";

export interface TouchLinkDevice {
    ieee_address: string;
    channel: number;
}