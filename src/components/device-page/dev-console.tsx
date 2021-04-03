import React, { ChangeEvent, Component } from "react";
import { Attribute, Cluster, Device, DeviceState } from "../../types";
import ClusterPicker, { PickerType } from "../cluster-picker";
import Clusters from "zigbee-herdsman/dist/zcl/definition/cluster"
import AttributePicker, { AttributeDefinition } from "../attribute-picker";
import Button from "../button";
import { DeviceApi, lastAttributeReadResultKey } from "../../actions/DeviceApi";
import { LogMessage } from "../../store";
import { ALL, LogRow } from "../logs-page";
import cx from "classnames";

interface DevConsoleProps {
    device: Device;
    deviceState: DeviceState;
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
    const { value, onChange, attribute } = props;
    const onValueChanged = (e: ChangeEvent<HTMLInputElement>): void => {
        onChange(attribute, e.target.value);
    }
    return <input className="form-control" type="text" value={value as string | number} onChange={onValueChanged}></input>
}

export default class DevConsole extends Component<DevConsoleProps & Pick<DeviceApi, "readDeviceAttributes" | "writeDeviceAttributes">, DevConsoleState> {
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
        const { deviceState, logs } = this.props;
        const lastAttributeReadResult = deviceState[lastAttributeReadResultKey];
        const filtered = logs.filter(l =>
            l.message.startsWith('Read result of') ||
            l.message.startsWith("Publish 'set' 'read' to") ||
            l.message.startsWith("Publish 'set' 'write' to")
        );
        const lastLogMessage = filtered.length > 0 ? filtered[filtered.length - 1] : null;
        const res: JSX.Element[] = [];
        if (lastLogMessage) {
            res.push(<LogRow key="log" log={lastLogMessage} search={""} logLevel={ALL} />)
        }
        if (lastAttributeReadResult) {
            res.push(<pre key="data">{JSON.stringify(deviceState[lastAttributeReadResultKey], undefined, 4)}</pre>);
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
        return <>
            <div className="mb-3 row">
                <div className="col-6 col-sm-3">
                    <ClusterPicker label="Cluster" pickerType={PickerType.SINGLE}
                        clusters={Object.keys(Clusters)}
                        value={cluster}
                        onChange={this.onClusterChange} />
                </div>
                <div className="col-6 col-sm-3">
                    <AttributePicker label="Attribute" value={""} cluster={cluster} onChange={this.onAttributeSelect} />
                </div>
            </div>
            <div className="mb-3 row">
                {this.renderSelectedAtrribute()}
            </div>
            <div className="mb-3 row">
                <div className="btn-group col col-3" role="group">
                    <Button<void> className="btn btn-success me-2" onClick={this.onReadClick}>Read</Button>
                    <Button<void> className="btn btn-danger" onClick={this.onWriteClick}>Write</Button>
                </div>
            </div>
        </>
    }
    renderWrite(): JSX.Element {
        return <div>renderWrite</div>
    }
    renderModes(): JSX.Element {
        // const {mode} = this.state;
        // switch (mode) {
        //     case "read":
        //         return this.renderRead();
        //     case "write":
        //         return this.renderWrite();
        //     default:
        //         return <div>unknown mode {mode}</div>

        // }
        return this.renderRead();
    }
    render(): JSX.Element {

        return <div>

            {this.renderModes()}
            {this.renderLastResult()}
        </div>
    }
}

