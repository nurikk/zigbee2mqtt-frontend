import api from "../api";
import store, { Extension } from "../store";



export interface ExtensionApi {
    readExtension(extension: Extension): Promise<void>;
    updateExtensionCode(extension: Extension, code: string): Promise<void>;
    saveExtensionCode(extension: Extension): Promise<void>;
}


export default {
    readExtension: (state, extension: Extension): Promise<void> => {
        return api.send(`bridge/extension/request/read`, { name: extension });
    },
    updateExtensionCode: (state, extension: Extension, code: string): Promise<void> => {
        const { extensionCode } = state;
        store.setState({ extensionCode: { ...extensionCode, ...{ [extension]: code } } });
        return Promise.resolve();
    },

    saveExtensionCode: (state, name: Extension): Promise<void> => {
        const { extensionCode } = state;
        debugger
        return api.send(`bridge/extension/request/save`, { name, content: extensionCode[name] });
    }
}
