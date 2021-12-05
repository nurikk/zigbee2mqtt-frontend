import React from "react";
import { useTranslation } from "react-i18next";
import { useGlobalModalContext } from "../GlobalModal";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "../Modal";

type DialogConfirmationModalProps = {
    onConfirmHandler(): void;
}

export const DialogConfirmationModal = (props: DialogConfirmationModalProps): JSX.Element => {
    const { onConfirmHandler } = props;
    const { t } = useTranslation("common");
    const { hideModal } = useGlobalModalContext();

    return (
        <Modal isOpen={true}>
            <ModalHeader>
                <h3>{t('confirmation')}</h3>
            </ModalHeader>
            <ModalBody>
                {t('dialog_confirmation_prompt')}
            </ModalBody>
            <ModalFooter>
                <button type="button" className="btn btn-secondary" onClick={hideModal}>{t('common:close')}</button>
                <button type="button" className="btn btn-primary" onClick={onConfirmHandler}>{t('common:ok')}</button>
            </ModalFooter>
        </Modal>
    );
};
