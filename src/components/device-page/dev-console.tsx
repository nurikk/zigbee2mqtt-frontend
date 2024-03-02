import React, { Component } from 'react';
import { Device } from '../../types';

import { DeviceApi } from '../../actions/DeviceApi';
import { GlobalState, LogMessage } from '../../store';
import { WithTranslation, withTranslation } from 'react-i18next';
import { CommandExecutor } from './CommandExecutor';
import { TranslatedExternalDefinition } from './ExternalDefinition';
import { TranslatedAttributeEditor } from './AttributeEditor';

interface DevConsoleProps
    extends WithTranslation,
        Pick<
            DeviceApi,
            'executeCommand' | 'readDeviceAttributes' | 'writeDeviceAttributes' | 'generateExternalDefinition'
        >,
        Pick<GlobalState, 'generatedExternalDefinitions' | 'theme'> {
    device: Device;
    logs: LogMessage[];
}

class DevConsole extends Component<DevConsoleProps, Record<string, never>> {
    render(): JSX.Element {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <TranslatedExternalDefinition
                            theme={this.props.theme}
                            device={this.props.device}
                            generateExternalDefinition={this.props.generateExternalDefinition}
                            generatedExternalDefinitions={this.props.generatedExternalDefinitions}
                        />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <TranslatedAttributeEditor
                            theme={this.props.theme}
                            device={this.props.device}
                            logs={this.props.logs}
                            i18n={this.props.i18n}
                            readDeviceAttributes={this.props.readDeviceAttributes}
                            writeDeviceAttributes={this.props.writeDeviceAttributes}
                        />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <CommandExecutor
                            device={this.props.device}
                            logs={this.props.logs}
                            executeCommand={this.props.executeCommand}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export const TranslatedDevConsole = withTranslation(['devConsole', 'common'])(DevConsole);
