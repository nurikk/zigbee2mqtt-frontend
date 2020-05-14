import { Component, ComponentChild, Fragment, h } from "preact";

import style from "./style.css";
import cx from "classnames";
import TreeView from "../tree-view";
import CodeMirror from "./codemirror";
import { Dictionary, FileDescriptor } from "../../types";
import { Notyf } from "notyf";
import { connect } from "unistore/preact";
import { GlobalState } from "../../store";
import actions, { Actions } from "../../actions";

interface CodeEditorState {
    sideBarIsVisible: boolean;
}

export class CodeEditor extends Component<GlobalState & Actions, CodeEditorState> {
    constructor() {
        super();
        this.state = {
            sideBarIsVisible: true
        };
    }

    onCodeChange = (code) => {
        const { setCurrentFileContent } = this.props;
        setCurrentFileContent(code);
    };

    onExecuteCode = () => {
        const { currentFileContent, evalCode } = this.props;
        evalCode(currentFileContent).then();
    };
    onSaveCode = () => {
        const { currentFile, currentFileContent, writeFile } = this.props;
        writeFile(currentFile.name, currentFileContent)
            .then(() => new Notyf().success(`Saved ${currentFile.name}`));

    };


    onCreateFile = () => {
        const { writeFile } = this.props;
        let fileName = prompt("Enter file name");
        if (fileName) {
            if (!fileName.startsWith("/")) {
                fileName = `/${fileName}`;
            }
            writeFile(fileName, "").then(() => this.loadFiles("/"));
        }
    };

    onDeleteClick = (file: FileDescriptor): void => {
        const { deleteFile } = this.props;
        if (confirm(`Delete ${file.name}?`)) {
            deleteFile(file).then(() => this.loadFiles("/"));
        }
    };
    loadFile = (file: FileDescriptor): void => {
        const { readFile } = this.props;
        readFile(file);
    };


    renderCodeExecutionResults(): ComponentChild {
        const { executionResults } = this.props;

        if (executionResults) {
            return <div class={cx("h-24", {
                "text-success": executionResults.success,
                "text-danger": !executionResults.success
            })}>
                Output:
                <pre><code>{executionResults.result ?? "NO RESPONSE"}</code></pre>
            </div>;
        }
        return null;

    }

    componentDidMount(): void {
        this.loadFiles("/");
    }

    loadFiles(path: string): void {
        const { getFilesList } = this.props;
        getFilesList(path);
    }

    toggleSideBar = (): void => {
        const { sideBarIsVisible } = this.state;
        this.setState({ sideBarIsVisible: !sideBarIsVisible });
    };

    getFileType(): string {
        const fileExtPattern = /\.([0-9a-z]+)$/i;
        const { currentFile } = this.props;
        if (currentFile) {
            const { name } = currentFile;
            if (fileExtPattern.test(name)) {
                const [extWithDot, ext] = fileExtPattern.exec(name);
                return ext;
            }
        }
        return "";
    }

    onFormatClick = (): void => {
        const { currentFileContent, setCurrentFileContent } = this.props;
        if (this.getFileType() === "json") {
            try {
                const res = JSON.parse(currentFileContent);
                setCurrentFileContent(JSON.stringify(res, null, 2));
            } catch (e) {
                new Notyf().error(e.toString());
            }
        } else {
            new Notyf().error("Not implemented 😢");
        }
    };

    getMode(): string | Dictionary<string | boolean> {

        switch (this.getFileType()) {
            case "json":
                return {
                    name: "javascript",
                    json: true
                };
            case "script":
            case "lua":
                return "lua";
            default:
                return "";
        }

    }

    render(): ComponentChild {
        const { sideBarIsVisible } = this.state;
        const { currentFileContent, executionResults, files, currentFile, clearExecutionResults } = this.props;

        const config = {
            mode: this.getMode(),
            theme: "dracula",
            styleActiveLine: true,
            lineNumbers: true,
            lint: true,
            gutters: ["CodeMirror-lint-markers"],
            extraKeys: {
                "Ctrl-E": this.onExecuteCode,
                "Cmd-E": this.onExecuteCode,
                "Ctrl-S": this.onSaveCode,
                "Cmd-S": this.onSaveCode
            }
        };
        const hasExecutionResults = !!executionResults;
        const hasCode = currentFileContent && currentFileContent.length;


        return (<div className={cx("h-100 px-0 d-flex", style["code-editor"])}>
            <div class={cx("d-flex w-100", style.wrapper, {
                [style.toggled]: !sideBarIsVisible
            })}>

                <div class={cx("bg-light border-right position-relative", style["sidebar-wrapper"])}>
                    <div class={style["sidebar-heading"]}>Files</div>
                    <div class="list-group list-group-flush">

                        <TreeView onItemClick={this.loadFile} onDeleteClick={this.onDeleteClick} items={files} />
                        <button onClick={this.onCreateFile} type="button"
                                class={cx("btn", "btn-primary", style["new-file"])}>New file
                        </button>
                    </div>

                </div>

                <div class={style["page-content-wrapper"]}>

                    <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
                        <button onClick={this.toggleSideBar} class="btn btn-primary">Toggle files</button>
                        {currentFile ? <button type="button" class="btn btn-success"
                                               onClick={this.onSaveCode}>Save(Ctrl-S)</button> : null}
                        {hasCode ? (
                            <Fragment>
                                <button type="button" class="btn btn-danger" onClick={this.onExecuteCode}>Run(Ctrl-E)
                                </button>
                                {
                                    this.getFileType() === "json" ? (
                                        <button type="button" class="btn btn-primary"
                                                onClick={this.onFormatClick}>Format
                                        </button>
                                    ) : null
                                }

                            </Fragment>
                        ) : null}
                        {hasExecutionResults ?
                            <button type="button" class="btn btn-primary" onClick={clearExecutionResults}>Clear
                                output</button> : null}

                        <div>
                            {currentFile ? <input type="text" placeholder={currentFile.name} readOnly /> : null}
                        </div>
                    </nav>


                    <div class="h-75">
                        <div class={"h-75"}>
                            <CodeMirror height={"100%"} width={"100%"} code={currentFileContent} config={config}
                                        onChange={this.onCodeChange} />
                        </div>

                        {this.renderCodeExecutionResults()}
                    </div>
                </div>
            </div>
        </div>);
    }

}

const mappedProps = ["isLoading", "files", "executionResults", "currentFileContent", "currentFile"];
const ConnectedCodeEditor = connect<{}, CodeEditorState, GlobalState, Actions>(mappedProps, actions)(CodeEditor);
export default ConnectedCodeEditor;
