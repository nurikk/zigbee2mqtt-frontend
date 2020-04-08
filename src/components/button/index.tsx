import { Component, ComponentChild, h } from "preact";

interface ButtonProps<T> {
    item: T;
    className?: string;

    onClick?(arg1: T): void;
}

export default class Button<T> extends Component<ButtonProps<T>, {}> {
    onClick = (): void => {
        const { item, onClick } = this.props;
        onClick && onClick(item);

    };

    render(): ComponentChild {
        const { children, ...rest } = this.props;
        return <button {...rest} onClick={this.onClick}>{children}</button>;
    }
}


export class Link<T> extends Component<ButtonProps<T>, {}> {
    onClick = (): void => {
        const { item, onClick } = this.props;
        onClick && onClick(item);

    };

    render(): ComponentChild {
        const { children, ...rest } = this.props;
        return <a href="#" {...rest} onClick={this.onClick}>{children}</a>;
    }
}