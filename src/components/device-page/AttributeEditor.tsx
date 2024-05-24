import React, { ChangeEvent } from 'react';
import { Attribute, Cluster, Device, Endpoint, BridgeDefinitions } from '../../types';
import { AttributeDefinition } from '../attribute-picker';
import { GlobalState, LogMessage } from '../../store';
import { WithTranslation, withTranslation } from 'react-i18next';
import { DeviceApi } from '../../actions/DeviceApi';
import { DataType } from '../../ZCLenums';
import { AttributeEditor } from './AttributeEditor.1';

export interface AttributeEditorProps
    extends WithTranslation,
        Pick<DeviceApi, 'readDeviceAttributes' | 'writeDeviceAttributes'>,
        Pick<GlobalState, 'theme'> {
    device: Device;
    logs: LogMessage[];
    clusters?: BridgeDefinitions;
}
export type AttributeInfo = {
    attribute: Attribute;
    definition: AttributeDefinition;
    value?: unknown;
};

export type AttributeEditorState = {
    cluster: Cluster;
    endpoint: Endpoint;
    attributes: AttributeInfo[];
};

export type AttributeValueInputProps = {
    onChange(attribute: Attribute, value: unknown): void;
    attribute: Attribute;
    definition: AttributeDefinition;
    value?: unknown;
};

export function AttributeValueInput(props: Readonly<AttributeValueInputProps>): JSX.Element {
    const { value, onChange, attribute, definition, ...rest } = props;
    const typesMap = {
        [DataType.CHAR_STR]: 'string',
        [DataType.LONG_CHAR_STR]: 'string',
    };
    const type = typesMap[definition.type] ?? 'number';

    const onValueChanged = (e: ChangeEvent<HTMLInputElement>): void => {
        const val = type === 'number' ? e.target.valueAsNumber : e.target.value;
        onChange(attribute, val);
    };

    return (
        <input
            className="form-control"
            type={type}
            value={value as string | number}
            onChange={onValueChanged}
            {...rest}
        />
    );
}

export const TranslatedAttributeEditor = withTranslation(['devConsole', 'common'])(AttributeEditor);
