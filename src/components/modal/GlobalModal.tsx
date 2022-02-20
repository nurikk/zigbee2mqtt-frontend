import React, { useState, createContext, useContext } from 'react';
import { DialogConfirmationModal } from './components/DialogConfirmationModal';
import { RemoveDeviceModal } from './components/RemoveDeviceModal';
import { RenameDeviceModal } from './components/RenameDeviceModal';
import { RenameGroupForm } from './components/RenameGroupModal';

export const MODAL_TYPES = {
    RENAME_DEVICE: "RENAME_DEVICE",
    REMOVE_DEVICE: "REMOVE_DEVICE",
    DIALOG_CONFIRMATION: "DIALOG_CONFIRMATION",
    RENAME_GROUP: "RENAME_GROUP",
};

const MODAL_COMPONENTS: Record<string, (props) => JSX.Element> = {
    [MODAL_TYPES.RENAME_DEVICE]: RenameDeviceModal,
    [MODAL_TYPES.REMOVE_DEVICE]: RemoveDeviceModal,
    [MODAL_TYPES.DIALOG_CONFIRMATION]: DialogConfirmationModal,
    [MODAL_TYPES.RENAME_GROUP]: RenameGroupForm,

};

type Store = {
    modalType: string;
    modalProps: Record<string, unknown>;
}

type GlobalModalContextType = {
    showModal: (modalType: string, modalProps?: Record<string, unknown>) => void;
    hideModal: () => void;
    store: Store;
};


const initialState: GlobalModalContextType = {
    showModal: () => {
        // empty function
    },
    hideModal: () => {
        // empty function
    },
    store: {} as Store,
};

const GlobalModalContext = createContext(initialState);
export const useGlobalModalContext = () => useContext(GlobalModalContext);

export const GlobalModal: React.FC<Record<string, unknown>> = ({ children }) => {
    const [store, setStore] = useState<Store>({} as Store);
    const { modalType, modalProps } = store;

    const showModal = (t: string, p: Record<string, unknown> = {}) => {
        setStore({
            ...store,
            modalType: t,
            modalProps: p,
        });
    };

    const hideModal = () => {
        debugger
        setStore({
            ...store,
            modalType: "",
            modalProps: {},
        });
    };

    const renderComponent = () => {
        if (!modalType) {
            return null;
        }
        const ModalComponent = MODAL_COMPONENTS[modalType];
        if (!ModalComponent) {
            return null;
        }
        return <ModalComponent id="global-modal" {...modalProps} />;
    };

    return (
        <GlobalModalContext.Provider value={{ store, showModal, hideModal }}>
            {renderComponent()}
            {children}
        </GlobalModalContext.Provider>
    );
};
