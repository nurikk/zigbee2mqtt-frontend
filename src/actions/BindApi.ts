import api from "../api";
import { Cluster } from "../types";

export type BindParams = {
    from: string;
    to: string;
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
