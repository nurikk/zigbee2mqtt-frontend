import api from "../ws-client";
import store, { Extension } from "../store";



export interface ExtensionApi {
    updateExtensionCode(extension: Extension): Promise<void>;
    saveExtensionCode(extension: Extension): Promise<void>;
    removeExtension(extension: Extension): Promise<void>;
}


export default {
    updateExtensionCode: (state, extension: Extension): Promise<void> => {
        const { extensions } = store.getState();
        const newExtensions = extensions.filter(f => f.name !== extension.name).concat([extension]);
        store.setState({ extensions: newExtensions });
        return Promise.resolve();
    },

    saveExtensionCode: (state, extension: Extension): Promise<void> => {
        return api.send(`bridge/request/extension/save`, extension);
    },
    removeExtension: (state, extension: Extension): Promise<void> => {
        const { extensions } = store.getState();
        const newExtensions = extensions.filter(f => f.name !== extension.name);
        store.setState({ extensions: newExtensions });

        return api.send(`bridge/request/extension/remove`, {name: extension.name});
    }
}
