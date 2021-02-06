import api from "../api";
import { Cluster } from "../types";


export interface BindApi {
    addBind(from: string, to: string, clusters: Cluster[]): Promise<void>;
    removeBind(from: string, to: string, clusters: Cluster[]): Promise<void>;
}


export default {
    addBind: (
        state,
        from: string,
        to: string,
        clusters: Cluster[]
    ): Promise<void> => {
        const bindParams = {
            from,
            to,
            clusters,
        };
        return api.send("bridge/request/device/bind", bindParams);
    },
    removeBind: (
        state,
        from: string,
        to: string,
        clusters: Cluster[]
    ): Promise<void> => {
        const bindParams = {
            from,
            to,
            clusters,
        };
        return api.send("bridge/request/device/unbind", bindParams);
    },
}
