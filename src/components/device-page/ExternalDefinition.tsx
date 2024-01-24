import { WithTranslation, withTranslation } from 'react-i18next';
import { DeviceApi } from '../../actions/DeviceApi';
import { GlobalState } from '../../store';
import { Device } from '../../types';
import React from 'react';
import AceEditor from 'react-ace';
import { supportNewDevicesUrl } from '../../utils';
import Button from '../button';

export interface ExternalDefinitionProps
    extends WithTranslation,
        Pick<DeviceApi, 'generateExternalDefinition'>,
        Pick<GlobalState, 'generatedExternalDefinitions' | 'theme'> {
    device: Device;
}

class ExternalDefinition extends React.Component<ExternalDefinitionProps, {}> {
    onGenerateExternalDefinitionClick = (): void => {
        const { generateExternalDefinition, device } = this.props;
        generateExternalDefinition(device.ieee_address);
    };

    render(): JSX.Element {
        const { t, generatedExternalDefinitions, device, theme } = this.props;
        const externalDefinition = generatedExternalDefinitions[device.ieee_address];
        if (externalDefinition) {
            const editorTheme = theme === 'light' ? 'github' : 'dracula';
            return (
                <>
                    {t('generated_external_definition')} (
                    <a href={supportNewDevicesUrl} target="_blank" rel="noreferrer">
                        {t('documentation')}
                    </a>
                    )
                    <AceEditor
                        setOptions={{ useWorker: false }}
                        mode="javascript"
                        readOnly={true}
                        name="UNIQUE_ID_OF_DIV"
                        editorProps={{ $blockScrolling: true }}
                        value={externalDefinition}
                        width="100%"
                        maxLines={Infinity}
                        theme={editorTheme}
                        showPrintMargin={false}
                    />
                </>
            );
        } else {
            return (
                <Button<void> className="btn btn-primary" onClick={this.onGenerateExternalDefinitionClick}>
                    {t('generate_external_definition')}
                </Button>
            );
        }
    }
}

export default withTranslation(['devConsole', 'common'])(ExternalDefinition);
