import React, { ButtonHTMLAttributes } from "react";
import { useTranslation } from "react-i18next";

interface ButtonProps<T> extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
    item?: T;
    onClick?(arg1: T): void;
    promt?: boolean | string;
}

export default function Button<T>(props: ButtonProps<T>): JSX.Element {
    const { children, item, onClick, promt, ...rest } = props;
    const { t } = useTranslation("common");
    const onClickHandler = (): void => {
        let confirmed = true;
        if (promt) {
            confirmed = confirm(typeof promt === "string" ? promt : t('dialog_configramtion_prompt'));
        }
        confirmed && onClick && onClick(item as T);
    };

    return <button type="button" {...rest} onClick={onClickHandler}>{children}</button>;
}
