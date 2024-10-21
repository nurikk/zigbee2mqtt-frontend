import api from '../ws-client';
import { Cluster, Endpoint } from '../types';

export type BindParams = {
    from: string;
    from_endpoint: Endpoint;
    to: string;
    to_endpoint?: Endpoint;
    clusters: Cluster[];
}
export interface BindApi {
    addBind(params: BindParams): Promise<void>;
    removeBind(params: BindParams): Promise<void>;
}

type BindOperation = "bind" | "unbind";
const bindOp = (operation: BindOperation, params: Record<string, unknown>) => {
    return api.send(`bridge/request/device/${operation}`, params);
}
export default {
    addBind: (state, params: BindParams): Promise<void> => bindOp("bind", params),
    removeBind: (state, params: BindParams): Promise<void> => bindOp("unbind", params),
}
