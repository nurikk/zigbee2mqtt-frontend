import React, { ButtonHTMLAttributes } from "react";

import { useTranslation } from "react-i18next";
import useModal from "../../hooks/useModal";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "../modal/Modal";

interface ButtonProps<T> extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
    item?: T;
    onClick?(arg1: T): void;
    promt?: boolean | string;
}

export default function Button<T>(props: ButtonProps<T>): JSX.Element {
    const { children, item, onClick, promt, ...rest } = props;
    const { t } = useTranslation("common");
    const { isOpen, toggle } = useModal(false);

    const onConfirmHandler = (): void => {
        onClick && onClick(item as T);
        toggle()
    }
    const onClickHandler = (): void => {
        if (promt) {
            toggle();
        } else {
            onClick && onClick(item as T);
        }
    };
    return (<>
        <button type="button" {...rest} onClick={onClickHandler}>{children}</button>
        <Modal isOpen={isOpen}>
            <ModalHeader>
                <h3>{t('confirmation')}</h3>
            </ModalHeader>
            <ModalBody>
                {t('dialog_confirmation_prompt')}
            </ModalBody>
            <ModalFooter>
                <button type="button" className="btn btn-secondary" onClick={toggle}>{t('common:close')}</button>
                <button type="button" className="btn btn-primary" onClick={onConfirmHandler}>{t('common:ok')}</button>
            </ModalFooter>
        </Modal>
    </>
    );
}
