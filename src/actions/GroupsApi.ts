import { Endpoint } from '../types';
import api from '../ws-client';

export interface GroupsApi {
    createGroup(name: string, id?: number): Promise<void>;
    removeGroup(name: string): Promise<void>;
    addDeviceToGroup(device: string, endpoint: Endpoint, group: string): Promise<void>;
    removeDeviceFromGroup(device: string, endpoint: Endpoint, group: string): Promise<void>;
    renameGroup(oldName: string, newName: string): Promise<void>;
}


export default {
    createGroup: (state, group: string, id: number): Promise<void> => {
        const payload = {'friendly_name': group};

        if (id) {
            payload['id'] = id;
        }

        return api.send("bridge/request/group/add", payload);
    },

    removeGroup: (state, group: string): Promise<void> => {
        return api.send("bridge/request/group/remove", { id: group });
    },

    addDeviceToGroup: (state, device: string, endpoint: Endpoint, group: string): Promise<void> => {
        return api.send("bridge/request/group/members/add", { group, endpoint, device });
    },

    removeDeviceFromGroup: (state, device: string, endpoint: Endpoint, group: string): Promise<void> => {
        return api.send("bridge/request/group/members/remove", { device, endpoint, group });
    },
    renameGroup: (state, oldName: string, newName: string): Promise<void> => {
        return api.send("bridge/request/group/rename", { from: oldName, to: newName });
    },
}
