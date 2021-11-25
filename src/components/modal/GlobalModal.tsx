import React, { useState, createContext, useContext } from 'react';
import { DialogConfirmationModal } from './components/DialogConfirmationModal';
import { RemoveDeviceModal } from './components/RemoveDeviceModal';
import { RenameDeviceModal } from './components/RenameDeviceModal';

export const MODAL_TYPES = {
    RENAME_DEVICE: "RENAME_DEVICE",
    REMOVE_DEVICE: "REMOVE_DEVICE",
    DIALOG_CONFIRMATION: "DIALOG_CONFIRMATION",
};

const MODAL_COMPONENTS: any = {
    [MODAL_TYPES.RENAME_DEVICE]: RenameDeviceModal,
    [MODAL_TYPES.REMOVE_DEVICE]: RemoveDeviceModal,
    [MODAL_TYPES.DIALOG_CONFIRMATION]: DialogConfirmationModal,

};

type Store = {
    modalType: string;
    modalProps: Record<string, any>;
}

type GlobalModalContextType = {
    showModal: (modalType: string, modalProps?: any) => void;
    hideModal: () => void;
    store: Store;
};


const initalState: GlobalModalContextType = {
    showModal: () => {
        // empty function
    },
    hideModal: () => {
        // empty function
    },
    store: {} as Store,
};

const GlobalModalContext = createContext(initalState);
export const useGlobalModalContext = () => useContext(GlobalModalContext);

export const GlobalModal: React.FC<{}> = ({ children }) => {
    const [store, setStore] = useState<Store>({} as Store);
    const { modalType, modalProps } = store;

    const showModal = (t: string, p: any = {}) => {
        setStore({
            ...store,
            modalType: t,
            modalProps: p,
        });
    };

    const hideModal = () => {
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