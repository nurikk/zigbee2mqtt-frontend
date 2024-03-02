import React, { ChangeEvent, Component, lazy } from 'react';
import { connect } from 'unistore/react';
import actions from '../../actions/actions';
import { Extension, GlobalState } from '../../store';

import { ExtensionApi } from '../../actions/ExtensionApi';
import Button from '../button';

import { WithTranslation, withTranslation } from 'react-i18next';
import CreateNewExtension from './CreateNewExtension';

const CodeEditor = lazy(() => import('../CodeEditor'));

type ExtensionsEditorPageState = {
    currentExtension?: string;
};
type PropsFromStore = Pick<GlobalState, 'extensions' | 'theme'>;
class ExtensionsEditorPage extends Component<
    PropsFromStore & ExtensionApi & WithTranslation<'extensions'>,
    ExtensionsEditorPageState
> {
    state: Readonly<ExtensionsEditorPageState> = {};
    loadExtension = (e: ChangeEvent<HTMLSelectElement>): void => {
        const { value } = e.target;

        this.setState({ currentExtension: value });
    };
    onExtensionCodeChange = (code: string): void => {
        const { updateExtensionCode } = this.props;
        const { currentExtension } = this.state;
        currentExtension && updateExtensionCode({ name: currentExtension, code });
    };

    getCurrentExtension(): Extension | undefined {
        const { currentExtension } = this.state;
        const { extensions } = this.props;
        return extensions.find((e) => e.name === currentExtension);
    }
    onSaveClick = (): void => {
        const { saveExtensionCode } = this.props;
        saveExtensionCode(this.getCurrentExtension() as Extension);
    };
    removeExtension = (): void => {
        const { removeExtension } = this.props;
        removeExtension(this.getCurrentExtension() as Extension);
    };

    renderControls(): JSX.Element {
        const { currentExtension } = this.state;
        const { extensions, t, updateExtensionCode } = this.props;
        return (
            <div className="row mb-2">
                <div className="col-6">
                    <select value={currentExtension} className="form-control" onChange={this.loadExtension}>
                        <option key="hidden" hidden>
                            {t('select_extension_to_edit')}
                        </option>
                        {extensions.map(({ name }) => (
                            <option key={name} value={name}>
                                {name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-6">
                    <CreateNewExtension
                        updateExtensionCode={updateExtensionCode}
                        onCreated={(extension: Extension) => this.setState({ currentExtension: extension.name })}
                    />
                    <Button
                        prompt
                        disabled={!currentExtension}
                        onClick={this.removeExtension}
                        className="btn btn-danger me-2"
                    >
                        <i className="fa fa-trash" />
                    </Button>
                    <Button disabled={!currentExtension} onClick={this.onSaveClick} className="btn btn-primary">
                        {t('common:save')}
                    </Button>
                </div>
            </div>
        );
    }
    renderEditor(): JSX.Element {
        const { currentExtension } = this.state;
        const { extensions, theme } = this.props;
        const code = extensions.find((e) => e.name === currentExtension)?.code ?? '';
        return <CodeEditor value={code} onChange={this.onExtensionCodeChange} theme={theme} />;
    }

    render(): JSX.Element {
        return (
            <div className="card h-100">
                <div className="card-body h-100">
                    {this.renderControls()}
                    {this.renderEditor()}
                </div>
            </div>
        );
    }
}

const mappedProps = ['extensions', 'theme'];

export const ConnectedExtensionsEditorPage = connect<unknown, unknown, GlobalState, unknown>(
    mappedProps,
    actions,
)(withTranslation('extensions')(ExtensionsEditorPage));
