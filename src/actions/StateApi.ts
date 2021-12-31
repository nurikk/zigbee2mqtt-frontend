import api from "../api";
import { FriendlyName } from "../types";

export interface StateApi {
    setStateValue(friendlyName: FriendlyName, name: string, value: unknown): Promise<void>;
    setDeviceState(friendlyName: FriendlyName, value: Record<string, unknown>): Promise<void>;
    getDeviceState(friendlyName: FriendlyName, value: Record<string, unknown>): Promise<void>;
}

export default {
    setStateValue(
        state,
        friendlyName: FriendlyName,
        name: string,
        value: string | number | boolean
    ): Promise<void> {
        return api.send(`${friendlyName}/set`, { [name]: value });
    },
    setDeviceState(state, friendlyName: FriendlyName, value: Record<string, unknown>):Promise<void> {
        return api.send(`${friendlyName}/set`, value);
    },
    getDeviceState(state, friendlyName: FriendlyName, value: Record<string, unknown>):Promise<void> {
        return api.send(`${friendlyName}/get`, value);
    },
}
