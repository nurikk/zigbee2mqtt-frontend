import React, { Component } from "react";
import { connect } from "unistore/react";
import actions from "../../actions/actions";
import { GlobalState } from "../../store";

import exampleExtensionCode from './example-extension.js.txt';

import { ExtensionApi } from "../../actions/ExtensionApi";
import Button from "../button";

type ExtensionsEditorPageState = {
    currentExtension?: string;
}
export class ExtensionsEditorPage extends Component<GlobalState & ExtensionApi, ExtensionsEditorPageState> {
    state: Readonly<ExtensionsEditorPageState> = {}
    loadExtension = (e) => {
        const { value } = e.target;

        this.setState({ currentExtension: value });



    }
    onExtensionCodeChange = (e) => {
        const { updateExtensionCode } = this.props;
        const { currentExtension } = this.state;
        const { value } = e.target;

        currentExtension && updateExtensionCode({ name: currentExtension, code: value });
    }
    onSaveClick = () => {
        const { saveExtensionCode } = this.props;
        const { currentExtension } = this.state;
        const { extensions } = this.props;
        const extension = extensions.find(e => e.name === currentExtension);

        extension && saveExtensionCode(extension);
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
    render() {
        const { currentExtension } = this.state;
        const { extensions } = this.props;
        const code = extensions.find(e => e.name === currentExtension)?.code ?? "";

        return <div className="card h-100">
            <div className="card-body h-100">
                <div className="row mb-2">
                    <div className="col-6">
                        <select value={currentExtension} className="form-control" onChange={this.loadExtension}>
                            <option key="hidden" hidden>Select extension to edit</option>
                            {extensions.map(({ name }) => <option key={name} value={name}>{name}</option>)}
                        </select>
                    </div>
                    <div className="col-6">
                        <Button onClick={this.addNewExtension} className="btn btn-success me-2"><i className="fa fa-plus"></i></Button>
                        <Button disabled={!currentExtension} onClick={this.onSaveClick} className="btn btn-primary">Save</Button>
                    </div>
                </div>
                <textarea style={{height: '80%'}} spellCheck={false} onChange={this.onExtensionCodeChange} className="form-control" value={code} />
            </div>
        </div>

    }
}

const mappedProps = ["extensions"];

export default connect<{}, {}, GlobalState, {}>(mappedProps, actions)(ExtensionsEditorPage);
