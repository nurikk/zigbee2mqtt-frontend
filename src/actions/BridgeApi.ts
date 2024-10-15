import api from '../ws-client';
import { Device } from '../types';
import store from '../store';

export interface BridgeApi {
    setPermitJoin(permit: boolean, device: Device): Promise<void>;
    updateBridgeConfig(options: unknown): Promise<void>;
    restartBridge(): Promise<void>;
    requestBackup(): Promise<void>;
    addInstallCode(installCode: string): Promise<void>;
}


const setPermitJoin = (_state, permit = true, device?: Device, time = 254): Promise<void> => {
    return api.send("bridge/request/permit_join", { value: permit, time, device: device?.friendly_name });
}

export default {
    setPermitJoin,
    updateBridgeConfig(_state, options: unknown): Promise<void> {
        return api.send('bridge/request/options', { options });
    },
    restartBridge(_state): Promise<void> {
        return api.send('bridge/request/restart', {});
    },
    requestBackup(_state): Promise<void> {
        store.setState({ preparingBackup: true });
        return api.send('bridge/request/backup');
    },
    async addInstallCode(_state, installCode: string): Promise<void> {
        await api.send('bridge/request/install_code/add', { value: installCode });
        return setPermitJoin(_state, true)
    }
}
