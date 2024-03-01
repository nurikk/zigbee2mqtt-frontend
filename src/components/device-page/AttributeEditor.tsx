import React, { ChangeEvent } from 'react';
import { Attribute, Cluster, Device, Endpoint } from '../../types';
import { AttributeDefinition } from '../attribute-picker';
import { GlobalState, LogMessage } from '../../store';
import { WithTranslation, withTranslation } from 'react-i18next';
import { DeviceApi } from '../../actions/DeviceApi';
import DataType from 'zigbee-herdsman/dist/zcl/definition/dataType';
import { AttributeEditor } from './AttributeEditor.1';

export interface AttributeEditorProps
    extends WithTranslation,
        Pick<DeviceApi, 'readDeviceAttributes' | 'writeDeviceAttributes'>,
        Pick<GlobalState, 'theme'> {
    device: Device;
    logs: LogMessage[];
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

export function AttributeValueInput(props: AttributeValueInputProps): JSX.Element {
    const { value, onChange, attribute, definition, ...rest } = props;
    const typesMap = {
        [DataType.charStr]: 'string',
        [DataType.longCharStr]: 'string',
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
