import React, { ChangeEvent } from 'react';
import { Attribute, Cluster, Device, Endpoint } from '../../types';
import ClusterPicker, { PickerType } from '../cluster-picker';
import ZclCluster from 'zigbee-herdsman/dist/zcl/definition/cluster';
import AttributePicker, { AttributeDefinition } from '../attribute-picker';
import Button from '../button';
import { GlobalState, LogMessage } from '../../store';
import EndpointPicker from '../endpoint-picker';
import { getEndpoints } from '../../utils';
import { LastLogResult } from './LastLogResult';
import { WithTranslation, withTranslation } from 'react-i18next';
import { DeviceApi } from '../../actions/DeviceApi';
import DataType from 'zigbee-herdsman/dist/zcl/definition/dataType';

export interface AttributeEditorProps
    extends WithTranslation,
        Pick<DeviceApi, 'executeCommand' | 'readDeviceAttributes' | 'writeDeviceAttributes'>,
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
    mode: Mode;
};

export type Mode = 'read' | 'write';

export type AttributeValueInputProps = {
    onChange(attribute: Attribute, value: unknown): void;
    attribute: Attribute;
    definition: AttributeDefinition;
    value?: unknown;
};

function AttributeValueInput(props: AttributeValueInputProps): JSX.Element {
    const { value, onChange, attribute, definition } = props;
    const typesMap = {
        [DataType.charStr]: 'string',
        [DataType.longCharStr]: 'string',
    };
    const type = typesMap[definition.type] ?? 'number';

    const onValueChanged = (e: ChangeEvent<HTMLInputElement>): void => {
        const val = type === 'number' ? e.target.valueAsNumber : e.target.value;
        onChange(attribute, val);
    };

    return <input className="form-control" type={type} value={value as string | number} onChange={onValueChanged} />;
}
const logStartingStrings = ['Read result of', "Publish 'set' 'read' to", "Publish 'set' 'write' to", 'Wrote '];

class AttributeEditor extends React.Component<AttributeEditorProps, AttributeEditorState> {
    constructor(props: AttributeEditorProps) {
        super(props);
        const { device } = props;
        const defaultEndpoint = Object.keys(device.endpoints)[0];
        this.state = {
            endpoint: defaultEndpoint,
            cluster: '',
            attributes: [],
            mode: 'read',
        };
    }

    canRead = (): boolean => {
        const { cluster, attributes, endpoint } = this.state;
        return !!endpoint && attributes.length > 0 && !!cluster;
    };

    onEndpointChange = (endpoint: Endpoint): void => {
        this.setState({ attributes: [], cluster: '', endpoint });
    };

    onClusterChange = (cluster: Cluster): void => {
        this.setState({ attributes: [], cluster });
    };

    onAttributeSelect = (attribute: Attribute, definition: AttributeDefinition): void => {
        const { attributes } = this.state;
        if (!attributes.find((info) => info.attribute === attribute)) {
            const newAttributes = attributes.concat([{ attribute, definition }]);
            this.setState({ attributes: newAttributes });
        }
    };

    onAttributeDelete = (attribute: Attribute): void => {
        const { attributes } = this.state;
        const newAttributes = attributes.filter((info) => info.attribute !== attribute);
        this.setState({ attributes: newAttributes });
    };

    onReadClick = (): void => {
        const { readDeviceAttributes, device } = this.props;
        const { cluster, attributes, endpoint } = this.state;
        readDeviceAttributes(
            device.friendly_name,
            endpoint,
            cluster,
            attributes.map((info) => info.attribute),
            {},
        );
    };

    onWriteClick = (): void => {
        const { writeDeviceAttributes, device } = this.props;
        const { cluster, attributes, endpoint } = this.state;
        writeDeviceAttributes(device.friendly_name, endpoint, cluster, attributes, {});
    };

    onAttributeValueChange = (attribute: Attribute, value: unknown): void => {
        const { attributes } = this.state;
        const newAttributes = [...attributes];
        const attr = newAttributes.find((info) => info.attribute === attribute);
        if (attr) {
            attr.value = value;
        }
        this.setState({ attributes: newAttributes });
    };

    renderSelectedAttribute(): JSX.Element[] {
        const { attributes } = this.state;
        return attributes.map(({ attribute, value = '', definition }) => (
            <div key={attribute} className="row mb-1">
                <div className="col-3">
                    <div className="row">
                        <div className="col-6">{attribute}</div>
                        <div className="col-3">
                            <AttributeValueInput
                                value={value as string | number}
                                attribute={attribute}
                                definition={definition}
                                onChange={this.onAttributeValueChange}
                            />
                        </div>
                        <div className="col-2">
                            <Button<Attribute>
                                className="btn btn-danger btn-sm"
                                item={attribute}
                                onClick={this.onAttributeDelete}
                            >
                                <i className="fas fa-trash" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        ));
    }
    setMode = (mode: Mode): void => {
        this.setState({ mode });
    };

    render() {
        const { cluster, attributes, endpoint } = this.state;
        const noAttributesSelected = attributes.length === 0;
        const noSelectedCluster = cluster === '';
        const { t, device } = this.props;
        const endpoints = getEndpoints(device);
        const logsFilterFn = (l: LogMessage) =>
            logStartingStrings.some((startString) => l.message.startsWith(startString));
        return (
            <>
                <div className="mb-3 row">
                    <div className="col-6 col-sm-3">
                        <EndpointPicker
                            label={t('zigbee:endpoint')}
                            values={endpoints}
                            value={endpoint as Endpoint}
                            onChange={this.onEndpointChange}
                        />
                    </div>
                    <div className="col-6 col-sm-3">
                        <ClusterPicker
                            label={t('cluster')}
                            pickerType={PickerType.SINGLE}
                            clusters={Object.keys(ZclCluster)}
                            value={cluster}
                            onChange={this.onClusterChange}
                        />
                    </div>

                    <div className="col-6 col-sm-3">
                        <AttributePicker
                            label={t('attribute')}
                            value={''}
                            cluster={cluster}
                            onChange={this.onAttributeSelect}
                        />
                    </div>
                </div>
                <div className="mb-3 row">{this.renderSelectedAttribute()}</div>
                <div className="mb-3 row">
                    <div className="btn-group col col-3" role="group">
                        <Button<void>
                            disabled={noAttributesSelected || noSelectedCluster}
                            className="btn btn-success me-2"
                            onClick={this.onReadClick}
                        >
                            {t('read')}
                        </Button>
                        <Button<void>
                            disabled={noAttributesSelected || noSelectedCluster}
                            className="btn btn-danger"
                            onClick={this.onWriteClick}
                        >
                            {t('write')}
                        </Button>
                    </div>
                </div>
                <LastLogResult logs={this.props.logs} filterFn={logsFilterFn} />
            </>
        );
    }
}

export default withTranslation(['devConsole', 'common'])(AttributeEditor);
