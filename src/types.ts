export type DeviceType = "EndDevice" | "Router" | "Coordinator";

export type Dictionary<V> = { [index: string]: V }

export interface DeviceStats {
    linkquality?: number;
    battery?: number;
    occupancy?: boolean;
}

export const inteviewsCount = 4;

export enum InterviewState {
    StateUnknown = -1,
    AnnouncementReceived = 0,
    DescriptionRecieved = 1,
    EndpointsRecieved = 2,
    ClustersRecieved = 3,
    ModelRecieved = 4
}



interface Interview {
    /** Last intreview timestamp */
    TS?: number;
    /**
     * 0 - получен анонс, запускает интервью
     * 1 - получено описание устройства
     * 2 - получено количествы активные эндпоинты
     * 3 - получены кластеры
     * 4- получена модель
     */
    State?: InterviewState;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Cluster {

}
export interface Enpoint {
    "profId": number;
    "In": Dictionary<Cluster[]>;
    "Out": Dictionary<Cluster[]>;
    "devId": number;
}

export type PowerSource = "Main" | "Battery";
export interface Device {
    /** A 64-bit IEEE address (also called MAC address or Extended address) */
    ieeeAddr?: string | undefined;
    nwkAddr: string;
    /** Node last message timestamp */
    last_seen?: string | undefined;
    type?: DeviceType | undefined;

    ManufName?: string | undefined;
    ModelId?: string | undefined;
    /** Device status */
    st?: DeviceStats | undefined;
    friendly_name?: string | undefined;
    /** Routes list, each item is an 16-bit network address (also called logical address or short address). */
    Rtg?: number[] | undefined;
    /** Features discovery status, aka interview */
    Interview?: Interview | undefined;
    powerSource?: PowerSource | undefined;
    ep?: Dictionary<Enpoint>;
}

