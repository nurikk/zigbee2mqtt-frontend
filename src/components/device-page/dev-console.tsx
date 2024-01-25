import React, { Component } from 'react';
import { Cluster, Device, Endpoint } from '../../types';

import Button from '../button';
import { DeviceApi } from '../../actions/DeviceApi';
import { GlobalState, LogMessage } from '../../store';
import { WithTranslation, withTranslation } from 'react-i18next';
import { CommandExecutor } from './CommandExecutor';
import ExternalDefinition from './ExternalDefinition';
import { Theme } from '@rjsf/bootstrap-5';
import AttributeEditor from './AttributeEditor';

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

export class DevConsole extends Component<DevConsoleProps, Record<string, never>> {
    render(): JSX.Element {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <ExternalDefinition
                            theme={this.props.theme}
                            device={this.props.device}
                            generateExternalDefinition={this.props.generateExternalDefinition}
                            generatedExternalDefinitions={this.props.generatedExternalDefinitions}
                        />
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <AttributeEditor
                            theme={this.props.theme}
                            device={this.props.device}
                            logs={this.props.logs}
                            i18n={this.props.i18n}
                            executeCommand={this.props.executeCommand}
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

export default withTranslation(['devConsole', 'common'])(DevConsole);
