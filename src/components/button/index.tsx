import { h, ComponentChild, Component } from "preact";

interface ButtonProps {
    item: unknown;
    className?: string;
    onClick?(arg1: unknown): void;
}

export default class Button extends Component<ButtonProps, {}> {
    onClick = (): void => {
        const { item, onClick } = this.props;
        onClick && onClick(item);

    }
    render(): ComponentChild {
        const { children, ...rest } = this.props;
        return <button {...rest} onClick={this.onClick}>{children}</button>
    }
}