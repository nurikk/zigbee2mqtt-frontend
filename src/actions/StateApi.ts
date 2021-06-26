import api from "../api";

export interface StateApi {
    setStateValue(dev: string, name: string, value: unknown): Promise<void>;
    setDeviceState(dev: string, value: Record<string, unknown>): Promise<void>;
    getDeviceState(dev: string, value: Record<string, unknown>): Promise<void>;
}

export default {
    setStateValue(
        state,
        dev: string,
        name: string,
        value: string | number | boolean
    ): Promise<void> {
        return api.send(`${dev}/set`, { [name]: value });
    },
    setDeviceState(state, dev: string, value: Record<string, unknown>):Promise<void> {
        return api.send(`${dev}/set`, value);
    },
    getDeviceState(state, dev: string, value: Record<string, unknown>):Promise<void> {
        return api.send(`${dev}/get`, value);
    },
}
