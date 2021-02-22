import React, { Component } from "react";
import { connect } from "unistore/react";
import actions from "../../actions/actions";
import { Extension, GlobalState } from "../../store";

import exampleExtensionCode from './example-extension.js.txt';

import { ExtensionApi } from "../../actions/ExtensionApi";
import Button from "../button";

type ExtensionsEditorPageState = {
    currentExtension?: Extension;
}
const NEW_CONST = "hardcoded-new-extension-key";

export class ExtensionsEditorPage extends Component<GlobalState & ExtensionApi, ExtensionsEditorPageState> {
    state: Readonly<ExtensionsEditorPageState> = {}
    loadExtension = (e) => {
        const { value } = e.target;
        const { readExtension, updateExtensionCode } = this.props;

        if (value === NEW_CONST) {
            const ts = Date.now() + '';
            const newName = prompt("Enter new extension name", `user-extension${ts}.js`);
            const templatedCode = exampleExtensionCode.replace(/%TS%/g, ts);
            if (newName !== null) {
                updateExtensionCode(newName as Extension, templatedCode);
                this.setState({ currentExtension: newName as Extension });
            }
        } else {
            this.setState({ currentExtension: value });
            readExtension(value as Extension);

        }


    }
    onExtensionCodeChange = (e) => {
        const { updateExtensionCode } = this.props;
        const { currentExtension } = this.state;
        const { value } = e.target;

        currentExtension && updateExtensionCode(currentExtension, value);
    }
    onSaveClick = () => {
        const { saveExtensionCode } = this.props;
        const { currentExtension } = this.state;
        currentExtension && saveExtensionCode(currentExtension);
    }
    render() {
        const { currentExtension } = this.state;
        const { extensionCode } = this.props;
        const code = extensionCode[currentExtension as string] ?? "";

        return <div className="card">
            <div className="card-body">
                <select value={currentExtension} className="form-control" onChange={this.loadExtension}>
                    <option key="hidden" hidden>Select extension to edit</option>
                    <option key={NEW_CONST} value={NEW_CONST}>Create new extension</option>
                    {Object.keys(extensionCode).map(extension => <option key={extension} value={extension}>{extension}</option>)}
                </select>
                <textarea onChange={this.onExtensionCodeChange} className="form-control" rows={10} value={code}></textarea>
                <Button disabled={!currentExtension} onClick={this.onSaveClick} className="btn btn-primary">Save</Button>
            </div>
        </div>

    }
}

const mappedProps = ["extensions", "extensionCode"];

export default connect<{}, {}, GlobalState, {}>(mappedProps, actions)(ExtensionsEditorPage);
