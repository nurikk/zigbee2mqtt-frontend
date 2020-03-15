export type DeviceType = "EndDevice" | "Router" | "Coordinator";

export interface DeviceStats {
    linkquality: number;
    battery?: number;
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
    State?: 0 | 1 | 2 | 3 | 4;
}

export type PowerSource = "Main" | "Battery";
export interface Device {
    /** A 64-bit IEEE address (also called MAC address or Extended address) */
    ieeeAddr?: string | undefined;
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
}

export type Dictionary<V> = { [index: string]: V }