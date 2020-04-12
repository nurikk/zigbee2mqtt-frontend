import { Component, ComponentChild, Fragment, h } from "preact";

import style from "./style.css";
import cx from "classnames";
import TreeView from "../tree-view";
import { ApiResponse, deleteFile, evalCode, getFilesList, readFile, writeFile } from "../actions";
import CodeMirror from "./codemirror";
import { Dictionary, FileDescriptor } from "../../types";
import { Notyf } from "notyf";
import orderBy from "lodash/orderBy";
import { parse } from "luaparse";

interface CodeEditorState {
    isLoadingFiles: boolean;
    files: FileDescriptor[];

    isExecutingCode: boolean;
    executionResults: ApiResponse<string> | null;

    currentFileContent: string;
    currentFile: FileDescriptor;

    sideBarIsVisible: boolean;
}

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
            if (!error) {
                this.setState({ executionResults: response, isExecutingCode: false });
            }
        });
    };
    onSaveCode = () => {
        const { currentFile, currentFileContent } = this.state;
        writeFile(currentFile.name, currentFileContent, (err, response) => {
            new Notyf().success(`Saved ${currentFile.name}`);
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
                if (!err && response.success) {
                    this.loadFiles("/");
                }
            });
        }
    };

    onDeleteClick = (file: FileDescriptor): void => {
        if (confirm(`Delete ${file.name}?`)) {
            deleteFile(file.name, (err, response) => {
                if (!err && response.success) {
                    this.loadFiles("/");
                }
            });

        }
    };
    loadFile = (file: FileDescriptor): void => {
        this.setState({ currentFileContent: "" });
        readFile(file.name, (error, response) => {
            if (!error) {
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
                        files: orderBy(result, ["name"])
                    });
                }
            }
        });
    }

    toggleSideBar = (): void => {
        const { sideBarIsVisible } = this.state;
        this.setState({ sideBarIsVisible: !sideBarIsVisible });
    };

    getFileType(): string {
        const fileExtPattern = /\.([0-9a-z]+)$/i;
        const { currentFile } = this.state;
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
        const { currentFileContent } = this.state;
        if (this.getFileType() === "json") {
            try {
                const res = JSON.parse(currentFileContent);
                this.setState({ currentFileContent: JSON.stringify(res, null, 2) });
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
        const { currentFileContent, executionResults, files, isLoadingFiles, currentFile, sideBarIsVisible } = this.state;
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

                        {
                            isLoadingFiles ? (
                                <div class="text-center">
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                            ) : <TreeView onItemClick={this.loadFile} onDeleteClick={this.onDeleteClick}
                                          items={files} />
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
                        {hasCode ? (
                            <Fragment>
                                <button type="button" class="btn btn-danger" onClick={this.onExecuteCode}>Run(Ctrl-E)
                                </button>
                                {
                                    this.getFileType() === "json" ? (
                                        <button type="button" class="btn btn-primary" onClick={this.onFormatClick}>Format
                                        </button>
                                    )  : null
                                }

                            </Fragment>
                        ) : null}
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