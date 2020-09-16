import React, { ButtonHTMLAttributes, Component } from "react";

interface ButtonProps<T> {
    item?: T;
    onClick?(arg1: T): void;
    promt?: boolean | string;
}

export default class Button<T> extends Component<ButtonProps<T> & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'>, {}> {
    onClick = (): void => {
        const { item, onClick, promt } = this.props;
        let confirmed = true;
        if (promt) {
            confirmed = confirm(typeof promt === "string" ? promt : "Are you sure?");
        }
        confirmed && onClick && onClick(item);
    };

    render() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { children, item, promt, ...rest } = this.props;
        return <button type="button" {...rest} onClick={this.onClick}>{children}</button>;
    }
}