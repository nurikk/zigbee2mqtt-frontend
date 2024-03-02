import { WithTranslation, withTranslation } from 'react-i18next';
import { DeviceApi } from '../../actions/DeviceApi';
import { GlobalState } from '../../store';
import { Device } from '../../types';
import React, { lazy } from 'react';
import { supportNewDevicesUrl } from '../../utils';
import Button from '../button';

const CodeEditor = lazy(() => import('../CodeEditor'));

export interface ExternalDefinitionProps
    extends WithTranslation,
        Pick<DeviceApi, 'generateExternalDefinition'>,
        Pick<GlobalState, 'generatedExternalDefinitions' | 'theme'> {
    device: Device;
}

class ExternalDefinition extends React.Component<ExternalDefinitionProps, Record<string, never>> {
    onGenerateExternalDefinitionClick = (): void => {
        const { generateExternalDefinition, device } = this.props;
        generateExternalDefinition(device.ieee_address);
    };

    render(): JSX.Element {
        const { t, generatedExternalDefinitions, device, theme } = this.props;
        const externalDefinition = generatedExternalDefinitions[device.ieee_address];

        if (externalDefinition) {
            return (
                <>
                    {t('generated_external_definition')} (
                    <a href={supportNewDevicesUrl} target="_blank" rel="noreferrer">
                        {t('documentation')}
                    </a>
                    )
                    <CodeEditor value={externalDefinition} theme={theme} />
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

export const TranslatedExternalDefinition = withTranslation(['devConsole', 'common'])(ExternalDefinition);
