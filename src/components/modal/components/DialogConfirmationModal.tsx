import React from "react";
import { useTranslation } from "react-i18next";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "../Modal";
import NiceModal, { useModal } from '@ebay/nice-modal-react';


type DialogConfirmationModalProps = {
    onConfirmHandler(): void;
}

export const DialogConfirmationModal = NiceModal.create((props: DialogConfirmationModalProps): JSX.Element => {
    const { onConfirmHandler } = props;
    const { t } = useTranslation("common");
    const modal = useModal();

    return (
        <Modal isOpen={modal.visible}>
            <ModalHeader>
                <h3>{t('confirmation')}</h3>
            </ModalHeader>
            <ModalBody>
                {t('dialog_confirmation_prompt')}
            </ModalBody>
            <ModalFooter>
                <button type="button" className="btn btn-secondary" onClick={modal.remove}>{t('common:close')}</button>
                <button type="button" className="btn btn-primary" onClick={() => {
                    onConfirmHandler();
                    modal.remove();
                }}>{t('common:ok')}</button>
            </ModalFooter>
        </Modal>
    );
});
