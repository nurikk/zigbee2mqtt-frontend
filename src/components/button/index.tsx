import React, { ButtonHTMLAttributes } from 'react';
import { DialogConfirmationModal } from '../modal/components/DialogConfirmationModal';
import NiceModal from '@ebay/nice-modal-react';

interface ButtonProps<T> extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
    item?: T;
    onClick?(arg1: T): void;
    prompt?: boolean | string;
}

export default function Button<T>(props: ButtonProps<T>): JSX.Element {
    const { children, item, onClick, prompt, ...rest } = props;

    const onConfirmHandler = (): void => {
        onClick && onClick(item as T);
    };
    const onClickHandler = (): void => {
        if (prompt) {
            NiceModal.show(DialogConfirmationModal, { onConfirmHandler });
        } else {
            onClick && onClick(item as T);
        }
    };
    return (
        <button type="button" {...rest} onClick={onClickHandler}>
            {children}
        </button>
    );
}
