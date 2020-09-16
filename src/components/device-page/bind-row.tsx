import React, { Component} from "react";
import { Device, Endpoint, Cluster, ObjectType } from "../../types";
import DevicePicker from "../device-picker";
import EndpointPicker from "../endpoint-picker";
import ClusterPicker from "../cluster-picker";
import Button from "../button";
import { Group } from "../../store";
import { NiceBindingRule } from "./bind";




interface BindRowProps {
    rule: NiceBindingRule;
    idx: number;
    devices: Map<string, Device>;
    groups: Group[];
    device: Device;
    onBind(from: string, to: string, clusters: Cluster[]): void;
    onUnBind(from: string, to: string, clusters: Cluster[]): void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BindRowState {
    stateRule: NiceBindingRule;
}

const getEndpoints = (obj: Device | Group): Endpoint[] => {
    if (!obj) {
        return []
    } else if ((obj as Device).endpoints) {
        return Object.keys((obj as Device).endpoints);
    } else if ((obj as Group).members) {
        return (obj as Group).members.map(g => g.endpoint);
    }
    return [];
}
const getTarget = (rule: NiceBindingRule, devices: Map<string, Device>, groups: Group[]) => {
    if (rule.target.type === "group") {
        return groups.find(g => g.id === rule.target.id);
    }
    return devices.get(rule.target.ieee_address);
}

export default class BindRow extends Component<BindRowProps, BindRowState> {

    state: Readonly<BindRowState> = {
        stateRule: this.props.rule,
    }



    setSourceEp = (sourceEp: Endpoint): void => {
        const { stateRule } = this.state;
        stateRule.source.endpoint = sourceEp;
        this.setState({ stateRule });
    }

    setDestination = (destination: Device | Group, type: ObjectType): void => {
        const { stateRule } = this.state;
        if (type === "device") {
            // eslint-disable-next-line @typescript-eslint/camelcase
            stateRule.target.ieee_address = (destination as Device).ieee_address;
            stateRule.target.type = "endpoint";
            delete stateRule.target.id;
        } else if (type === "group") {
            stateRule.target.id = (destination as Group).id;
            stateRule.target.type = "group";
            delete stateRule.target.ieee_address;
        }
        stateRule.clusters = [];

        this.setState({ stateRule });
    }

    setDestinationEp = (destinationEp: Endpoint): void => {

        const { stateRule } = this.state;
        stateRule.target.endpoint = destinationEp;
        stateRule.clusters = [];
        this.setState({ stateRule });
    }

    setClusters = (clusters: Cluster[]): void => {
        const { stateRule } = this.state;
        stateRule.clusters = clusters;
        this.setState({ stateRule });
    }
    onBindClick = (): void => {
        const { onBind, device, groups, devices } = this.props;
        const { stateRule } = this.state;
        const from = `${device.friendly_name}/${stateRule.source.endpoint}`;
        let to: string;
        if (stateRule.target.type === "group") {
            const targetGroup = groups.find(group => group.id === stateRule.target.id);
            to = `${targetGroup.friendly_name}`;

        } else if (stateRule.target.type === "endpoint") {
            const targeDevice = devices.get(stateRule.target.ieee_address);
            to = `${targeDevice.friendly_name}/${stateRule.target.endpoint}`;
        }

        onBind(from, to, stateRule.clusters);

    }

    onUnBindClick = (): void => {
        const { onUnBind, device, groups, devices } = this.props;
        const { stateRule } = this.state;
        const from = `${device.friendly_name}/${stateRule.source.endpoint}`;
        let to: string;
        if (stateRule.target.type === "group") {
            const targetGroup = groups.find(group => group.id === stateRule.target.id);
            to = `${targetGroup.friendly_name}`;
        } else if (stateRule.target.type === "endpoint") {
            const targeDevice = devices.get(stateRule.target.ieee_address);
            to = `${targeDevice.friendly_name}/${stateRule.target.endpoint}`;
        }

        onUnBind(from, to, stateRule.clusters);
    }

    isValidRule(): boolean {
        const { stateRule } = this.state;
        let valid = false;
        if (stateRule.target.type == "endpoint") {
            valid = stateRule.source.endpoint
                && stateRule.target.ieee_address
                && stateRule.target.endpoint
                && stateRule.clusters.length > 0;
        } else if (stateRule.target.type == "group") {
            valid = stateRule.source.endpoint
                && stateRule.target.id
                && stateRule.clusters.length > 0;
        }
        return valid;
    }

    render() {
        const { devices, groups, idx, device } = this.props;
        const { stateRule } = this.state;

        const targetType: ObjectType = stateRule.target.type === "endpoint" ? "device" : "group";

        const sourceEndpoints = getEndpoints(device);
        const target = getTarget(stateRule, devices, groups);
        const destinationEndpoints = getEndpoints(target);
        const sourceClusters = device.endpoints[stateRule.source.endpoint]?.clusters?.output ?? [];
        const possibleClusters: Cluster[] = sourceClusters;
        return (
            <tr>
                <th scope="row">{idx + 1}</th>
                <td><EndpointPicker disabled={!stateRule.isNew} values={sourceEndpoints} value={stateRule.source.endpoint} onChange={this.setSourceEp} /></td>
                <td><DevicePicker disabled={!stateRule.isNew} type={targetType} value={stateRule.target.ieee_address || stateRule.target.id} devices={devices} groups={groups} onChange={this.setDestination} /></td>
                <td>{stateRule.target.type === "endpoint" ? <EndpointPicker disabled={!stateRule.isNew} values={destinationEndpoints} value={stateRule.target.endpoint} onChange={this.setDestinationEp} /> : null}</td>
                <td><ClusterPicker clusters={possibleClusters} value={stateRule.clusters} onChange={this.setClusters} /></td>
                <td>
                    <div className="btn-group btn-group-sm">
                        <Button<void> disabled={!this.isValidRule()} title="Bind" className="btn btn-primary" onClick={this.onBindClick}><i
                            className="fa fa-heart" /></Button>
                        <Button<void> disabled={!stateRule.isNew && !this.isValidRule()} title="Unbind" className="btn btn-secondary" onClick={this.onUnBindClick}><i
                            className="fa fa-heart-broken" /></Button>
                    </div>
                </td>
            </tr>
        );
    }
}