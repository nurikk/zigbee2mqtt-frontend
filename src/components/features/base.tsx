
import { DeviceState, Device, Endpoint } from "../../types";

export interface BaseFeatureProps<T> {
  feature: T;
  deviceState: DeviceState;
  device: Device;
  onChange(endpoint: Endpoint, value: object): void;
}