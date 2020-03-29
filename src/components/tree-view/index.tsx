import { Component, ComponentChild, h } from "preact";

export interface File {
    name: string;
    size: number;
    is_dir: boolean;
}

interface TreeViewProps {
    files: File[];
    onFileClick(file: File): void;
}

interface FileLinkProps {
    file: File;

    onClick(file: File): void;
}

class FileLink extends Component<FileLinkProps, {}> {
    onClick = (): void => {
        const { onClick, file } = this.props;
        onClick(file);
    };

    render(): ComponentChild {
        const { file } = this.props;
        return <div><a onClick={this.onClick} href={"#"}>{file.name}</a></div>;
    }
}

export default class TreeView extends Component<TreeViewProps, {}> {

    onFileClick = (file: File): void => {
        const { onFileClick } = this.props;
        onFileClick(file);
    };

    render(): ComponentChild {
        const { files } = this.props;

        return <div>
            {files.map(file => (<FileLink file={file} onClick={this.onFileClick}/>))}
        </div>;
    }
}