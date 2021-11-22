import React, { ButtonHTMLAttributes } from "react";
import { MODAL_TYPES, useGlobalModalContext } from "../modal/GlobalModal";
interface ButtonProps<T> extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
    item?: T;
    onClick?(arg1: T): void;
    promt?: boolean | string;
}

export default function Button<T>(props: ButtonProps<T>): JSX.Element {
    const { children, item, onClick, promt, ...rest } = props;

    const { showModal, hideModal } = useGlobalModalContext();
    const onConfirmHandler = (): void => {
        onClick && onClick(item as T);
        hideModal()
    }
    const onClickHandler = (): void => {
        if (promt) {
            showModal(MODAL_TYPES.DIALOG_CONFIRMATION, { onConfirmHandler });
        } else {
            onClick && onClick(item as T);
        }
    };
    return <button type="button" {...rest} onClick={onClickHandler}>{children}</button>;


}
