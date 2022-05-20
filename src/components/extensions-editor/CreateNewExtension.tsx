import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import NiceModal, { useModal } from '@ebay/nice-modal-react';


import { Extension } from "../../store";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "../modal/Modal";
import exampleExtensionCode from './example-extension.js?raw';
import Button from "../button";


type CreateNewExtensionProps = {
    updateExtensionCode(extension: Extension): void;
    onCreated(extension: Extension): void;
    ts: number;
}

const CreateNewExtensionModal = NiceModal.create((props: CreateNewExtensionProps): JSX.Element => {
    const { updateExtensionCode, onCreated, ts } = props;
    const { t } = useTranslation(["extensions", "common"]);
    const modal = useModal();
    const [extensionName, setExtensionName] = useState(`example-user-extension${ts}.js`);
    const templatedCode = exampleExtensionCode.replace(/_TS_/g, ts.toString());

    const onConfirmHandler = (): void => {
        updateExtensionCode({ name: extensionName, code: templatedCode });
        onCreated({ name: extensionName, code: templatedCode });
        modal.remove();
    }

    return <Modal isOpen={modal.visible}>
        <ModalHeader>
            {t('create_new_extension')}
        </ModalHeader>
        <ModalBody>
            <label className="form-label">{t('extension_name_propmt')}</label>
            <input type="text" className="form-control"
                value={extensionName}
                onChange={(e) => setExtensionName(e.target.value)}>
            </input>
        </ModalBody>
        <ModalFooter>
            <button type="button" className="btn btn-secondary" onClick={modal.remove}>{t('common:close')}</button>
            <button type="button" className="btn btn-primary" onClick={onConfirmHandler}>{t('common:ok')}</button>
        </ModalFooter>
    </Modal>
        ;
});

export default function CreateNewExtension(props: Omit<CreateNewExtensionProps, 'ts'>): JSX.Element {
    return <Button className="btn btn-success me-2"
            onClick={() => NiceModal.show(CreateNewExtensionModal, { ts: Date.now(), ...{ ...props } })}
        >
            <i className="fa fa-plus" />
        </Button>
}
