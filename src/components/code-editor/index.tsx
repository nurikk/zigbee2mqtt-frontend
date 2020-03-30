import { Component, ComponentChild, h } from "preact";

import style from "./style.css";
import cx from "classnames";
import TreeView, { File } from "../tree-view";
import { ApiResponse, deleteFile, evalCode, getFilesList, readFile, writeFile } from "../actions";
import CodeMirror from "./codemirror";

interface CodeEditorState {
    isLoadingFiles: boolean;
    files: File[];

    isExecutingCode: boolean;
    executionResults: ApiResponse<string> | null;

    currentFileContent: string;
    currentFile: File;

    sideBarIsVisible: boolean;
}

const isScript = (file: File): boolean => {
    return /\.(script|lua)$/.test(file.name);
};

export default class CodeEditor extends Component<{}, CodeEditorState> {
    constructor() {
        super();
        this.state = {
            sideBarIsVisible: true,
            isLoadingFiles: false,
            files: [],
            isExecutingCode: false,
            executionResults: null,
            currentFileContent: "",
            currentFile: null
        };
    }

    onCodeChange = (code) => {
        this.setState({ currentFileContent: code });
    };

    onExecuteCode = () => {
        const { currentFileContent } = this.state;
        this.setState({ isExecutingCode: true, executionResults: null });
        evalCode(currentFileContent, (error, response) => {
            if (error) {
                alert(response);
            } else {
                this.setState({ executionResults: response, isExecutingCode: false });
            }

        });
    };
    onSaveCode = () => {
        const { currentFile, currentFileContent } = this.state;
        writeFile(currentFile.name, currentFileContent, (err, response) => {
            err && alert(response);
        });
    };

    clearExecutionResults = () => {
        this.setState({
            executionResults: null
        });
    };

    onCreateFile = () => {
        let fileName = prompt("Enter file name");
        if (fileName) {
            if (!fileName.startsWith("/")) {
                fileName = `/${fileName}`;
            }
            writeFile(fileName, "", (err, response) => {
                if (err) {
                    alert(response);
                } else if (response.success) {
                    this.loadFiles("/");
                }
            });
        }
    };

    onDeleteClick = (file: File): void => {
        if (confirm(`Delete ${file.name}?`)) {
            deleteFile(file.name, (err, response) => {
                if (err) {
                    alert(response);
                } else if (response.success) {
                    this.loadFiles("/");
                }
            });

        }
    };
    loadFile = (file: File): void => {
        this.setState({ currentFileContent: "" });
        readFile(file.name, (error, response) => {
            if (error) {
                alert(response);
            } else {
                this.setState({ currentFileContent: response, currentFile: file });
            }

        });
    };


    renderCodeExecutionResults(): ComponentChild {
        const { executionResults, isExecutingCode } = this.state;
        if (isExecutingCode) {
            return <div class="text-center">
                <div class="spinner-border" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>;
        }

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
        this.setState({ isLoadingFiles: true });
        getFilesList(path, (err, response) => {
            if (!err) {
                const { success, result } = response;
                if (success) {
                    this.setState({
                        isLoadingFiles: false,
                        files: result
                    });
                }
            }
        });
    }

    toggleSideBar = (): void => {
        const { sideBarIsVisible } = this.state;
        this.setState({ sideBarIsVisible: !sideBarIsVisible });
    };

    render(): ComponentChild {
        const { currentFileContent, executionResults, files, isLoadingFiles, currentFile, sideBarIsVisible } = this.state;
        const config = {
            mode: "lua",
            theme: "dracula",
            styleActiveLine: true,
            lineNumbers: true,
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
            <div class={cx("d-flex", style.wrapper, {
                [style.toggled]: !sideBarIsVisible
            })}>

                <div class={cx("bg-light border-right position-relative", style["sidebar-wrapper"])}>
                    <div class={style["sidebar-heading"]}>Files</div>
                    <div class="list-group list-group-flush">

                        {
                            isLoadingFiles ? (
                                <div class="text-center">
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                            ) : <TreeView onFileClick={this.loadFile} onDeleteClick={this.onDeleteClick}
                                          files={files} />
                        }
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
                        {hasCode ? <button type="button" class="btn btn-danger"
                                           onClick={this.onExecuteCode}>Run(Ctrl-E)</button> : null}
                        {hasExecutionResults ?
                            <button type="button" class="btn btn-primary" onClick={this.clearExecutionResults}>Clear
                                output</button> : null}

                        <div>
                            {currentFile ? <input type="text" placeholder={currentFile.name} readOnly /> : null}
                        </div>
                    </nav>


                    <div class="h-100">
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