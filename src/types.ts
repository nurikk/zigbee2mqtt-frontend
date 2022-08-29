import { JSONSchema7 } from "json-schema";

export type DeviceType = "EndDevice" | "Router" | "Coordinator";
export type FriendlyName = string;
export type IEEEEAddress = string;

export type OTAState = {
    state: "available" | "updating";
    progress: number;
    remaining: number;
}
export type RGBColor = {
    r: number;
    g: number;
    b: number;
}
export type HueSaturationColor = {
    hue: number;
    saturation: number;
}

export type XYColor = {
    x: number;
    y: number;
}
export type AnyColor = RGBColor | XYColor | HueSaturationColor;
export type DeviceState = Record<string, unknown>;
export type Cluster = string | number;
export type Attribute = string;

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

export type DeviceConfig = Record<string, unknown>;
export interface AdvancedConfig {
    elapsed: boolean;
    last_seen: 'disable' | 'ISO_8601' | 'ISO_8601_local' | 'epoch';
    legacy_api: boolean;

}
export interface Z2MConfig {
    homeassistant: boolean;
    advanced: AdvancedConfig;
    devices: Record<string, DeviceConfig>;
    device_options: DeviceConfig;
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
export type BridgeState = "online" | "offline";
export interface BridgeInfo {
    config: Z2MConfig;
    config_schema: JSONSchema7;
    permit_join: boolean;
    permit_join_timeout: number;
    commit?: string;
    version?: string;
    coordinator?: {
        meta?: {
            revision?: string;
        };
        type?: string;
        ieee_address: string;
    };
    device_options: Record<IEEEEAddress, unknown>;
    restart_required: boolean;
}

export type PowerSource = "Battery" | "Mains (single phase)" | "DC Source";

export type GenericFeatureType = "numeric" | "binary" | "enum" | "text" | "list";
export type CompositeFeatureType = "fan" | "light" | "switch" | "cover" | "lock" | "composite" | "climate";


export enum FeatureAccessMode {
    NONE,
    ACCESS_STATE = 0b001,
    ACCESS_WRITE = 0b010,
    ACCESS_READ = 0b100,
}
export interface GenericExposedFeature {
    type: GenericFeatureType;
    name: string;
    unit?: "string";
    access: FeatureAccessMode;
    endpoint?: Endpoint;
    property: string;
    description?: string;
}

export interface BinaryFeature extends GenericExposedFeature {
    type: "binary";
    value_on: unknown;
    value_off: unknown;
    value_toggle?: unknown;
}

export interface ListFeature extends GenericExposedFeature {
    type: "list";
    item_type: "number";
}

export interface CompositeFeature extends Omit<GenericExposedFeature, "type"> {
    type: CompositeFeatureType;
    features: GenericOrCompositeFeature[];
}

export type GenericOrCompositeFeature = GenericExposedFeature | CompositeFeature;

export interface NumericFeaturePreset {
    name: string;
    value: number;
    description?: string;
}
export interface NumericFeature extends GenericExposedFeature {
    type: "numeric";
    value_min?: number;
    value_max?: number;
    value_step?: number;
    presets?: NumericFeaturePreset[];
}

export interface TextualFeature extends GenericExposedFeature {
    type: "text";
}

export interface EnumFeature extends GenericExposedFeature {
    type: "enum";
    values: unknown[];
}

export interface LightFeature extends CompositeFeature {
    type: "light";
}

export interface SwitchFeature extends CompositeFeature {
    type: "switch";
}

export interface CoverFeature extends CompositeFeature {
    type: "cover";
}

export interface LockFeature extends CompositeFeature {
    type: "lock";
}
export interface FanFeature extends CompositeFeature {
    type: "fan";
}

export interface ClimateFeature extends CompositeFeature {
    type: "climate";
}

export interface ColorFeature extends CompositeFeature {
    type: "composite";
    name: "color_xy" | "color_hs";
    features: NumericFeature[];
}

export interface DeviceDefinition {
    description: string;
    model: string;
    supports: string;
    vendor: string;
    exposes: GenericOrCompositeFeature[];
    options: GenericOrCompositeFeature[];
    supports_ota: boolean;
    icon?: string;
}
export interface ReportingConfig {
    cluster: Cluster;
    attribute: Attribute;
    maximum_report_interval: number;
    minimum_report_interval: number;
    reportable_change: number;
}
export interface WithScenes {
    scenes?: Scene[];
}
export interface EndpointDescription extends WithScenes {
    bindings: BindRule[];
    configured_reportings: ReportingConfig[];
    clusters: {
        input: Cluster[];
        output: Cluster[];
    };
}
export interface WithDescription {
    description: string;
}
export interface WithFriendlyName {
    friendly_name: FriendlyName;
}
export interface GroupAddress {
    endpoint: Endpoint;
    ieee_address: IEEEEAddress;
}

export type Scene = {
    id: number;
    name?: string;
    endpoint?: Endpoint;
}
export interface Group extends WithFriendlyName, WithDescription, WithScenes {
    id: number;
    members: GroupAddress[];
}

export interface Device extends WithFriendlyName, WithDescription {
    ieee_address: IEEEEAddress;
    type: DeviceType;
    network_address: number;
    power_source?: PowerSource;
    model_id: string;
    manufacturer: string;
    interviewing: boolean;
    interview_completed: boolean;
    software_build_id: number;
    supported: boolean;
    definition?: DeviceDefinition;
    date_code: string;
    endpoints: Record<Endpoint, EndpointDescription>;
}

export type ObjectType = "device" | "group";
export interface BindRule {
    cluster: Cluster;
    target: {
        id?: number;
        endpoint?: Endpoint;
        ieee_address?: IEEEEAddress;
        type: "endpoint" | "group";
    };

}

export interface TouchLinkDevice {
    ieee_address: IEEEEAddress;
    channel: number;
}

export type LastSeenType = "disable" | "ISO_8601" | "ISO_8601_local" | "epoch";

export type KVP = Record<string, unknown>


export type Prev = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, ...0[]]

export type Join<K, P> = K extends string | number ?
    P extends string | number ?
    `${K}${"" extends P ? "" : "."}${P}`
    : never : never;


export type Paths<T, D extends number = 10> = [D] extends [never] ? never : T extends object ?
    { [K in keyof T]-?: K extends string | number ?
        `${K}` | Join<K, Paths<T[K], Prev[D]>>
        : never
    }[keyof T] : ""

export type Leaves<T, D extends number = 10> = [D] extends [never] ? never : T extends object ?
    { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>> }[keyof T] : "";