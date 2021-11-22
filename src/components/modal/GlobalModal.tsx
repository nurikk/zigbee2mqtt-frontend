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

type GlobalModalContext = {
    showModal: (modalType: string, modalProps?: any) => void;
    hideModal: () => void;
    store: any;
};

const initalState: GlobalModalContext = {
    showModal: () => { },
    hideModal: () => { },
    store: {},
};

const GlobalModalContext = createContext(initalState);
export const useGlobalModalContext = () => useContext(GlobalModalContext);

export const GlobalModal: React.FC<{}> = ({ children }) => {
    const [store, setStore] = useState<Record<string, unknown>>();
    const { modalType, modalProps } = store || {};

    const showModal = (modalType: string, modalProps: any = {}) => {
        setStore({
            ...store,
            modalType,
            modalProps,
        });
    };

    const hideModal = () => {
        setStore({
            ...store,
            modalType: null,
            modalProps: {},
        });
    };

    const renderComponent = () => {
        const ModalComponent = MODAL_COMPONENTS[modalType as any];
        if (!modalType || !ModalComponent) {
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