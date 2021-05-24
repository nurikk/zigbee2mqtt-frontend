import React, { ChangeEvent, Component } from "react";
import { Attribute, Cluster, Device, DeviceState } from "../../types";
import ClusterPicker, { PickerType } from "../cluster-picker";

import DataType from "zigbee-herdsman/dist/zcl/definition/dataType";
import ZclCluster from "zigbee-herdsman/dist/zcl/definition/cluster";
import AttributePicker, { AttributeDefinition } from "../attribute-picker";
import Button from "../button";
import { DeviceApi } from "../../actions/DeviceApi";
import { LogMessage } from "../../store";
import { ALL, LogRow } from "../logs-page";
import { WithTranslation, withTranslation } from "react-i18next";

interface DevConsoleProps {
    device: Device;
    logs: LogMessage[];
}
export type AttributeInfo = {
    attribute: Attribute;
    definition: AttributeDefinition;
    value?: unknown;
}
type DevConsoleState = {
    cluster: Cluster;
    attributes: AttributeInfo[];
    mode: Mode;
}

type Mode = "read" | "write";

type AttributeValueEditorProps = {
    onChange(attribute: Attribute, value: unknown): void;
    attribute: Attribute;
    definition: AttributeDefinition;
    value?: unknown;
}
function AttributeValueEditor(props: AttributeValueEditorProps): JSX.Element {
    const { value, onChange, attribute, definition } = props;
    const typesMap = {
        [DataType.charStr]: 'string',
        [DataType.longCharStr]: 'string',
    }
    const type = typesMap[definition.type] ?? 'number';

    const onValueChanged = (e: ChangeEvent<HTMLInputElement>): void => {
        const val = type === 'number' ? e.target.valueAsNumber : e.target.value;
        onChange(attribute, val);
    }


    return <input className="form-control" type={type} value={value as string | number} onChange={onValueChanged}></input>
}
const logStartingStrings = [
    'Read result of',
    "Publish 'set' 'read' to",
    "Publish 'set' 'write' to",
    "Wrote "
]
export class DevConsole extends Component<DevConsoleProps & WithTranslation & Pick<DeviceApi, "readDeviceAttributes" | "writeDeviceAttributes">, DevConsoleState> {
    state: Readonly<DevConsoleState> = {
        cluster: "",
        attributes: [],
        mode: "read"
    }
    canRead = (): boolean => {
        const { cluster, attributes } = this.state;
        return attributes.length > 0 && cluster !== "";
    }

    onClusterChange = (cluster: Cluster): void => {
        this.setState({ attributes: [], cluster });
    }
    onAttributeSelect = (attribute: Attribute, definition: AttributeDefinition): void => {
        const { attributes } = this.state;
        if (!attributes.find(info => info.attribute === attribute)) {
            const newAttributes = attributes.concat([{ attribute, definition }]);
            this.setState({ attributes: newAttributes });
        }
    }

    onAttributeDelete = (attribute: Attribute): void => {
        const { attributes } = this.state;
        const newAttributes = attributes.filter(info => info.attribute !== attribute)
        this.setState({ attributes: newAttributes });

    }
    onReadClick = (): void => {
        const { readDeviceAttributes, device } = this.props;
        const { cluster, attributes } = this.state;
        readDeviceAttributes(device.ieee_address, cluster, attributes.map(info => info.attribute), {});
    }

    onWriteClick = (): void => {
        const { writeDeviceAttributes, device } = this.props;
        const { cluster, attributes } = this.state;
        writeDeviceAttributes(device.ieee_address, cluster, attributes, {});
    }

    renderLastResult(): JSX.Element[] {
        const { logs } = this.props;
        const filtered = logs.filter(l => logStartingStrings.some(startString => l.message.startsWith(startString)));
        const lastLogMessage = filtered.length > 0 ? filtered[filtered.length - 1] : null;
        const res: JSX.Element[] = [];
        if (lastLogMessage) {
            res.push(<LogRow key="log" log={lastLogMessage} search={""} logLevel={ALL} />)
        }
        return res;
    }
    onAttributeValueChange = (attribute: Attribute, value: unknown): void => {
        const { attributes } = this.state;
        const newAttributes = [...attributes];
        const attr = newAttributes.find(info => info.attribute === attribute);
        if (attr) {
            attr.value = value;
        }
        this.setState({ attributes: newAttributes });
    }

    renderSelectedAtrribute(): JSX.Element[] {
        const { attributes } = this.state;
        return attributes.map(({ attribute, value = "", definition }) => <div key={attribute} className="row mb-1">
            <div className="col-3">
                <div className="row">
                    <div className="col-6" >{attribute}</div>
                    <div className="col-3">
                        <AttributeValueEditor
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
                            onClick={this.onAttributeDelete}>
                            <i className="fas fa-trash"></i>
                        </Button>
                    </div>
                </div>
            </div></div>
        )

    }
    setMode = (mode: Mode): void => {
        this.setState({ mode });
    }
    renderRead(): JSX.Element {
        const { cluster } = this.state;
        const { t } = this.props;
        return <>
            <div className="mb-3 row">
                <div className="col-6 col-sm-3">
                    <ClusterPicker
                        label={t('cluster')} pickerType={PickerType.SINGLE}
                        clusters={Object.keys(ZclCluster)}
                        value={cluster}
                        onChange={this.onClusterChange}
                    />
                </div>
                <div className="col-6 col-sm-3">
                    <AttributePicker label={t('attribute')} value={""} cluster={cluster} onChange={this.onAttributeSelect} />
                </div>
            </div>
            <div className="mb-3 row">
                {this.renderSelectedAtrribute()}
            </div>
            <div className="mb-3 row">
                <div className="btn-group col col-3" role="group">
                    <Button<void> className="btn btn-success me-2" onClick={this.onReadClick}>{t('read')}</Button>
                    <Button<void> className="btn btn-danger" onClick={this.onWriteClick}>{t('write')}</Button>
                </div>
            </div>
        </>
    }
    render(): JSX.Element {

        return <div>

            {this.renderRead()}
            {this.renderLastResult()}
        </div>
    }
}

export default withTranslation("common")(DevConsole);
