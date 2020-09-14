import React, { Component} from "react";

interface ButtonProps<T> {
    item?: T;
    onClick?(arg1: T): void;
    promt?: boolean | string;
    [k: string]: unknown;
}

export default class Button<T> extends Component<ButtonProps<T>, {}> {
    onClick = (): void => {
        const { item, onClick, promt } = this.props;
        let confirmed = true;
        if (promt) {
            confirmed = confirm(typeof promt === "string" ? promt : "Are you sure?");
        }
        confirmed && onClick && onClick(item);
    };

    render() {
        const { children, item, promt, ...rest } = this.props;
        return <button type="button" {...rest} onClick={this.onClick}>{children}</button>;
    }
}