/* eslint-disable @typescript-eslint/no-unused-vars */


import { GlobalState } from "./store";
import { Store } from "unistore";
import { createBind, fetchZigbeeDevicesList, getDeviceInfo, loadBindsList, removeBind, setState, setSimpleBind } from "./components/actions";
import { BindRule, Device } from "./types";

export interface Actions {
    setLoading(isLoading: boolean): void;

    getDeviceInfo(dev: string): void;

    getDeviceBinds(dev: string): void;

    getZigbeeDevicesList(): void;

    removeBind(dev: string, bindRule: BindRule): Promise<void>;

    createBind(dev: string, bindRule: BindRule): Promise<void>;

    setBindRules(bindRules: BindRule[]): void;


    setStateValue(dev: string, name: string, value: unknown): Promise<void>;
    setSimpleBindValue(dev: string, name: string, value: unknown): Promise<void>;
}

const actions = (store: Store<GlobalState>) => ({
    setLoading(state, isLoading: boolean) {
        store.setState({ isLoading });
    },
    getDeviceInfo: (state, dev: string): void => {
        store.setState({ isLoading: true });
        getDeviceInfo(dev, (err, device) => {
            store.setState({
                isError: err,
                isLoading: false,
                device: device
            });
        }).then();
    },

    setBindRules(state, bindRules: BindRule[]) {
        store.setState({ bindRules });
    },
    getDeviceBinds: (state, dev: string): void => {
        store.setState({ isLoading: true });
        loadBindsList(dev, (err, bindRules: []) => {
            store.setState({
                isError: err,
                isLoading: false,
                bindRules: [{} as BindRule, ...bindRules]
            });
        }).then();
    },
    getZigbeeDevicesList: (state): void => {
        store.setState({ isLoading: true });
        fetchZigbeeDevicesList((err, devices) => {
            store.setState({
                isError: err,
                isLoading: false,
                devices
            });
        }).then();
    },

    removeBind: (state, dev: string, bindRule: BindRule): Promise<void> => {
        store.setState({ isLoading: true });
        return removeBind(dev, bindRule, (err, response) => {
            store.setState({
                isError: err,
                isLoading: false
            });
        });
    },
    createBind: (state, dev: string, bindRule: BindRule): Promise<void> => {
        store.setState({ isLoading: true });
        return createBind(dev, bindRule, (err, response) => {
            store.setState({
                isError: err,
                isLoading: false
            });
        });
    },


    setStateValue(state, dev: string, name: string, value: unknown): Promise<void> {
        store.setState({ isLoading: true });
        return setState(dev, name, value, (err, response) => {
            store.setState({
                isError: err,
                isLoading: false
            });
        });
    },
    setSimpleBindValue(state, dev: string, name: string, value: unknown): Promise<void> {
        store.setState({ isLoading: true });
        return setSimpleBind(dev, name, value, (err, response) => {
            store.setState({
                isError: err,
                isLoading: false
            });
        });
    }
});
export default actions;
