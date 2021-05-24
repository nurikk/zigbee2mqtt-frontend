import { JSONSchema7 } from "json-schema";

export type DeviceType = "EndDevice" | "Router" | "Coordinator";
export type FriendlyName = string;
export type IEEEEAddress = string;

interface OTAState {
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
export interface DeviceState {
    last_seen?: string | number;
    elapsed?: number;
    linkquality: number;
    update?: OTAState;
    [k: string]: string | number | boolean | OTAState | AnyColor | undefined | Record<string, unknown>;
}

export type Cluster = string;
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
    devices: {
        [key: string]: DeviceConfig;
    };
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
    };
    device_options: Record<IEEEEAddress, unknown>;
    restart_required: boolean;
}

export type PowerSource = "Battery" | "Mains (single phase)" | "DC Source";

export type GenericFeatureType = "numeric" | "binary" | "enum" | "text";
export type ComposeiteFeatureType = "fan" | "light" | "switch" | "cover" | "lock" | "composite" | "climate";
export type AllPossibleFeatures = GenericFeatureType & ComposeiteFeatureType;


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

export interface CompositeFeature extends Omit<GenericExposedFeature, "type"> {
    type: ComposeiteFeatureType;
    features: (GenericExposedFeature | CompositeFeature)[];
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
    exposes: GenericExposedFeature[] | CompositeFeature[];
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
export interface EndpointDescription {
    bindings: BindRule[];
    configured_reportings: ReportingConfig[];
    clusters: {
        input: Cluster[];
        output: Cluster[];
    };
}

export interface Device {
    ieee_address: IEEEEAddress;
    type: DeviceType;
    network_address: number;
    model: string;
    friendly_name: FriendlyName;
    power_source: PowerSource;
    model_id: string;
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
export type SortDirection = "asc" | "desc";

export interface TouchLinkDevice {
    ieee_address: IEEEEAddress;
    channel: number;
}


export type KVP = Record<string, unknown>
