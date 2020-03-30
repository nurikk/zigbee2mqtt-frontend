import { Component, ComponentChild, h } from "preact";
import styles from "./style.css";

export interface Named {
    name: string;
}

interface TreeViewProps<T extends Named> {
    items: T[];

    onItemClick(item: T): void;

    onDeleteClick(item: T): void;
}

interface FileLinkProps<T extends Named> {
    items: T;

    onClick(item: T): void;

    onDeleteClick(item: T): void;
}

class TreeItem<T extends Named> extends Component<FileLinkProps<T>, {}> {
    onClick = (): void => {
        const { onClick, items } = this.props;
        onClick(items);
    };
    onDeleteClick = (): void => {
        const { onDeleteClick, items } = this.props;
        onDeleteClick(items);
    };

    render(): ComponentChild {
        const { items } = this.props;
        return <div class={`list-group-item list-group-item-action bg-light ${styles["file-link"]}`}>
            <a onClick={this.onClick} href={"#"}>{items.name}</a>
            <i onClick={this.onDeleteClick} class="fa fa-trash" />
        </div>;
    }
}

export default class TreeView<T extends Named> extends Component<TreeViewProps<T>, {}> {
    render(): ComponentChild {
        const { items, onDeleteClick, onItemClick } = this.props;

        return <div>
            {items.map(file => (<TreeItem onDeleteClick={onDeleteClick} items={file} onClick={onItemClick} />))}
        </div>;
    }
}