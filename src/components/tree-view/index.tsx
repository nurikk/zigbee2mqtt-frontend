import { Component, ComponentChild, h } from "preact";
import styles from "./style.css";

export interface File {
    name: string;
    size: number;
    is_dir: boolean;
}

interface TreeViewProps {
    files: File[];

    onFileClick(file: File): void;
    onDeleteClick(file: File): void;
}

interface FileLinkProps {
    file: File;

    onClick(file: File): void;
    onDeleteClick(file: File): void;
}

class FileLink extends Component<FileLinkProps, {}> {
    onClick = (): void => {
        const { onClick, file } = this.props;
        onClick(file);
    };
    onDeleteClick = (): void => {
        const { onDeleteClick, file } = this.props;
        onDeleteClick(file);
    };

    render(): ComponentChild {
        const { file } = this.props;
        return <div class={`list-group-item list-group-item-action bg-light ${styles['file-link']}`}>
            <a onClick={this.onClick} href={"#"}>{file.name}</a>
            <i onClick={this.onDeleteClick} class="fa fa-trash" />
        </div>;
    }
}

export default class TreeView extends Component<TreeViewProps, {}> {
    render(): ComponentChild {
        const { files, onDeleteClick, onFileClick } = this.props;

        return <div>
            {files.map(file => (<FileLink onDeleteClick={onDeleteClick} file={file} onClick={onFileClick} />))}
        </div>;
    }
}