import React, { Component } from "react";
import { Device, Endpoint, Cluster, ObjectType } from "../../types";
import DevicePicker from "../device-picker";
import EndpointPicker from "../endpoint-picker";
import ClusterPicker, { PickerType } from "../cluster-picker";
import Button from "../button";
import { Group } from "../../store";
import { NiceBindingRule } from "./bind";
import { getEndpoints } from "../../utils";
import { BindParams } from "../../actions/BindApi";




interface BindRowProps {
    rule: NiceBindingRule;
    idx: number;
    devices: Record<string, Device>;
    groups: Group[];
    device: Device;
    onBind(params: BindParams): void;
    onUnBind(params: BindParams): void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BindRowState {
    stateRule: NiceBindingRule;
}
const getTarget = (rule: NiceBindingRule, devices: Record<string, Device>, groups: Group[]): Device | Group => {
    if (rule.target.type === "group") {
        return groups.find(g => g.id === rule.target.id) as Group;
    }
    return devices[rule.target?.ieee_address as string];
}
type Action = "Bind" | "Unbind";
export default class BindRow extends Component<BindRowProps, BindRowState> {
    state: Readonly<BindRowState> = {
        stateRule: {} as NiceBindingRule
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static getDerivedStateFromProps(props: Readonly<BindRowProps>, state: BindRowState): Partial<BindRowState> {
        const { rule } = props;
        return {
            stateRule: rule
        };
    }
    setSourceEp = (sourceEp: Endpoint): void => {
        const { stateRule } = this.state;
        stateRule.source.endpoint = sourceEp;
        this.setState({ stateRule });
    }

    setDestination = (destination: Device | Group, type: ObjectType): void => {
        const { stateRule } = this.state;
        if (type === "device") {
            const endpoints = getEndpoints(destination);
            stateRule.target['ieee_address'] = (destination as Device)['ieee_address'];
            stateRule.target.type = "endpoint";
            stateRule.target.endpoint = endpoints[0];
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

    getBidningParams(): { from: string; to: string; clusters: string[] } {
        const { device, groups, devices } = this.props;
        const { stateRule } = this.state;
        const from = `${device.friendly_name}/${stateRule.source.endpoint}`;
        let to = "";
        if (stateRule.target.type === "group") {
            const targetGroup = groups.find(group => group.id === stateRule.target.id) as Group;
            to = `${targetGroup.friendly_name}`;
        } else if (stateRule.target.type === "endpoint") {
            const targeDevice = devices[stateRule.target?.ieee_address as string];
            if (targeDevice.type === "Coordinator") {
                to = `${targeDevice.friendly_name}`;
            } else {
                to = `${targeDevice.friendly_name}/${stateRule.target.endpoint}`;
            }
        }
        return { from, to, clusters: stateRule.clusters };
    }

    onBindOrUnBindClick = (action: Action): void => {
        const { onUnBind, onBind } = this.props;
        const { from, to, clusters } = this.getBidningParams();
        if (action == "Bind") {
            onBind({ from, to, clusters });
        } else {
            onUnBind({ from, to, clusters });
        }
    }

    isValidRule(): boolean {
        const { stateRule } = this.state;
        let valid;
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
        return !!valid;
    }

    render() {
        const { devices, groups, device } = this.props;
        const { stateRule } = this.state;

        const targetType: ObjectType = stateRule.target.type === "endpoint" ? "device" : "group";

        const sourceEndpoints = getEndpoints(device);
        const target = getTarget(stateRule, devices, groups);
        const destinationEndpoints = getEndpoints(target);

        const possibleClusters: Set<Cluster> = new Set(stateRule.clusters);
        const destEndpoint = device.endpoints[stateRule.source.endpoint];
        if (destEndpoint) {
            destEndpoint.clusters.output.forEach(cluster => possibleClusters.add(cluster));
        }
        return (
            <div className="row pb-2 border-bottom">
                <div className="col-md-2">
                    <EndpointPicker label="Source EP" disabled={!stateRule.isNew} values={sourceEndpoints} value={stateRule.source.endpoint} onChange={this.setSourceEp} />
                </div>
                <div className="col-md-2">
                    <DevicePicker label="Destination" disabled={!stateRule.isNew} type={targetType} value={(stateRule.target.ieee_address || stateRule.target.id) as string} devices={devices} groups={groups} onChange={this.setDestination} />
                </div>
                <div className="col-md-2">
                    {stateRule.target.type === "endpoint" ? <EndpointPicker label="Destination EP" disabled={!stateRule.isNew} values={destinationEndpoints} value={stateRule.target.endpoint as Endpoint} onChange={this.setDestinationEp} /> : null}
                </div>
                <div className="col-md-4">
                    <ClusterPicker label="Clusters" pickerType={PickerType.MULTIPLE} clusters={Array.from(possibleClusters)} value={stateRule.clusters} onChange={this.setClusters} />
                </div>
                <div className="col-md-2">
                    <div className="form-group">
                        <label className="form-label">Actions</label>
                        <div className="form-control border-0">
                            <div className="btn-group btn-group-sm">
                                <Button<Action> item={"Bind"} disabled={!this.isValidRule()} title="Bind" className="btn btn-primary" onClick={this.onBindOrUnBindClick}>
                                    Bind&nbsp;<i
                                        className="fa fa-heart" /></Button>
                                <Button<Action> item={"Unbind"} disabled={!stateRule.isNew && !this.isValidRule()} title="Unbind" className="btn btn-danger" onClick={this.onBindOrUnBindClick}><i
                                    className="fa fa-heart-broken" />&nbsp;Unbind</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
