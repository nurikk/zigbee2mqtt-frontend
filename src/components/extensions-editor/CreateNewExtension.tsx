import React, { useState } from "react";

import { useTranslation } from "react-i18next";
import useModal from "../../hooks/useModal";
import { Extension } from "../../store";
import Button from "../button";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "../modal/Modal";
import exampleExtensionCode from './example-extension.js.txt';


type CreateNewExtensionProps = {
    updateExtensionCode(extension: Extension): void;
    onCreated(extension: Extension): void;
}

export default function CreateNewExtension(props: CreateNewExtensionProps): JSX.Element {
    const ts = Date.now() + '';
    const { updateExtensionCode, onCreated } = props;
    const { t } = useTranslation(["extensions", "common"]);
    const { isOpen, toggle } = useModal(false);
    const [extensionName, setExtensionName] = useState(`example-user-extension${ts}.js`);
    const templatedCode = exampleExtensionCode.replace(/_TS_/g, ts);

    const onConfirmHandler = (): void => {
        updateExtensionCode({ name: extensionName, code: templatedCode });
        onCreated({ name: extensionName, code: templatedCode });
        toggle()
    }

    return (<>
        <Button onClick={toggle} className="btn btn-success me-2"><i className="fa fa-plus"></i></Button>
        <Modal isOpen={isOpen}>
            <ModalHeader>
                {t('create_new_extension')}
            </ModalHeader>
            <ModalBody>
                <label htmlFor="exampleFormControlInput1" className="form-label">{t('extension_name_propmt')}</label>
                <input id="exampleFormControlInput1" className="form-control" type="text" name="" value={extensionName} onChange={(e) => setExtensionName(e.target.value)}></input>
            </ModalBody>
            <ModalFooter>
                <button type="button" className="btn btn-secondary" onClick={toggle}>{t('common:close')}</button>
                <button type="button" className="btn btn-primary" onClick={onConfirmHandler}>{t('common:ok')}</button>
            </ModalFooter>
        </Modal>
    </>
    );
}
