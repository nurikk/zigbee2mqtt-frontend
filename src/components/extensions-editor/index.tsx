import React, { Component } from "react";
import { connect } from "unistore/react";
import actions from "../../actions/actions";
import { GlobalState } from "../../store";

import exampleExtensionCode from './example-extension.js.txt';

import { ExtensionApi } from "../../actions/ExtensionApi";
import Button from "../button";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import 'ace-builds/src-noconflict/theme-github';
import 'ace-builds/src-noconflict/theme-dracula';

type ExtensionsEditorPageState = {
    currentExtension?: string;
}
export class ExtensionsEditorPage extends Component<GlobalState & ExtensionApi, ExtensionsEditorPageState> {
    state: Readonly<ExtensionsEditorPageState> = {};
    loadExtension = (e) => {
        const { value } = e.target;

        this.setState({ currentExtension: value });
    }
    onExtensionCodeChange = (code: string) => {
        const { updateExtensionCode } = this.props;
        const { currentExtension } = this.state;

        currentExtension && updateExtensionCode({ name: currentExtension, code });
    }
    onSaveClick = () => {
        const { saveExtensionCode } = this.props;
        const { currentExtension } = this.state;
        const { extensions } = this.props;
        const extension = extensions.find(e => e.name === currentExtension);

        extension && saveExtensionCode(extension);
    }
    removeExtension = () => {
        const { removeExtension } = this.props;
        const { currentExtension } = this.state;
        const { extensions } = this.props;
        const extension = extensions.find(e => e.name === currentExtension);

        extension && removeExtension(extension);
    }

    addNewExtension = () => {
        const { updateExtensionCode } = this.props;
        const ts = Date.now() + '';
        const newName = prompt("Enter new extension name", `user-extension${ts}.js`);
        const templatedCode = exampleExtensionCode.replace(/_TS_/g, ts);
        if (newName !== null) {
            updateExtensionCode({ name: newName, code: templatedCode });
            this.setState({ currentExtension: newName });
        }
    }
    renderEditor() {
        const { currentExtension } = this.state;
        const { extensions, theme } = this.props;
        const code = extensions.find(e => e.name === currentExtension)?.code ?? "";
        const editorTheme = theme === "light" ? "github" : "dracula";
        return (
            <>
                <div className="row mb-2">
                    <div className="col-6">
                        <select value={currentExtension} className="form-control" onChange={this.loadExtension}>
                            <option key="hidden" hidden>Select extension to edit</option>
                            {extensions.map(({ name }) => <option key={name} value={name}>{name}</option>)}
                        </select>
                    </div>
                    <div className="col-6">
                        <Button onClick={this.addNewExtension} className="btn btn-success me-2"><i className="fa fa-plus"></i></Button>
                        <Button promt disabled={!currentExtension} onClick={this.removeExtension} className="btn btn-danger me-2"><i className="fa fa-trash"></i></Button>
                        <Button disabled={!currentExtension} onClick={this.onSaveClick} className="btn btn-primary">Save</Button>
                    </div>
                </div>
                <AceEditor
                    mode="javascript"
                    onChange={this.onExtensionCodeChange}
                    name="UNIQUE_ID_OF_DIV"
                    editorProps={{ $blockScrolling: true }}
                    value={code}
                    width="100%"
                    maxLines={Infinity}
                    theme={editorTheme}
                    showPrintMargin={false}
                />

            </>
        )
    }

    render() {
        return <div className="card h-100">
            <div className="card-body h-100">
                {this.renderEditor()}
            </div>
        </div>
    }
}

const mappedProps = ["extensions", "theme"];

export default connect<{}, {}, GlobalState, {}>(mappedProps, actions)(ExtensionsEditorPage);
