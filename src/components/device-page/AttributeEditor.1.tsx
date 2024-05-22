import React from 'react';
import { Attribute, Cluster, Endpoint } from '../../types';
import { PickerType } from '../cluster-picker';
import ClusterPicker from '../cluster-picker/ClusterPicker';
import AttributePicker, { AttributeDefinition } from '../attribute-picker';
import Button from '../button';
import { LogMessage } from '../../store';
import EndpointPicker from '../endpoint-picker';
import { getEndpoints } from '../../utils';
import { LastLogResult } from './LastLogResult';
import { AttributeEditorProps, AttributeEditorState, AttributeValueInput } from './AttributeEditor';

export const logStartingStrings = ['Read result of', "Publish 'set' 'read' to", "Publish 'set' 'write' to", 'Wrote '];

export class AttributeEditor extends React.Component<AttributeEditorProps, AttributeEditorState> {
    constructor(props: AttributeEditorProps) {
        super(props);
        const { device, clusters } = props;
        const defaultEndpoint = Object.keys(device.endpoints)[0];
        this.state = {
            endpoint: defaultEndpoint,
            cluster: '',
            attributes: [],
        };
    }

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
                                data-testid="attribute-value-input"
                            />
                        </div>
                        <div className="col-2">
                            <Button<Attribute>
                                className="btn btn-danger btn-sm"
                                item={attribute}
                                data-testid="remove-attribute"
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

    render() {
        const { cluster, attributes, endpoint } = this.state;
        const noAttributesSelected = attributes.length === 0;
        const noSelectedCluster = cluster === '';
        const { t, device, clusters } = this.props;
        const endpoints = getEndpoints(device);
        const logsFilterFn = (l: LogMessage) =>
            logStartingStrings.some((startString) => l.message.startsWith(startString));
        return (
            <>
                <div className="mb-3 row">
                    <div className="col-6 col-sm-3">
                        <EndpointPicker
                            data-testid="endpoint-picker"
                            label={t('zigbee:endpoint')}
                            values={endpoints}
                            value={endpoint as Endpoint}
                            onChange={this.onEndpointChange}
                        />
                    </div>
                    <div className="col-6 col-sm-3">
                        <ClusterPicker
                            data-testid="cluster-picker"
                            label={t('cluster')}
                            pickerType={PickerType.SINGLE}
                            clusters={device.endpoints[endpoint].clusters.input}
                            value={cluster}
                            onChange={this.onClusterChange}
                        />
                    </div>

                    <div className="col-6 col-sm-3">
                        <AttributePicker
                            data-testid="attribute-picker"
                            label={t('attribute')}
                            value={''}
                            cluster={cluster}
                            device={device}
                            clusters={clusters}
                            onChange={this.onAttributeSelect}
                        />
                    </div>
                </div>
                <div className="mb-3 row" data-testid="selected-attribute">
                    {this.renderSelectedAttribute()}
                </div>
                <div className="mb-3 row">
                    <div className="btn-group col col-3" role="group">
                        <Button<void>
                            disabled={noAttributesSelected || noSelectedCluster}
                            className="btn btn-success me-2"
                            data-testid="read-attribute"
                            onClick={this.onReadClick}
                        >
                            {t('read')}
                        </Button>
                        <Button<void>
                            disabled={noAttributesSelected || noSelectedCluster}
                            className="btn btn-danger"
                            data-testid="write-attribute"
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
