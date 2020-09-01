import { Component, ComponentChild, h } from "preact";
import { Device, Endpoint, Cluster, BindParams, BindRule, ObjectType } from "../../types";
import DevicePicker from "../device-picker";
import EndpointPicker from "../endpoint-picker";
import ClusterPicker from "../cluster-picker";
import Button from "../button";
import { Group } from "../../store";




interface BindRowProps {
    rule: BindRule;
    idx: number;
    devices: Device[];
    groups: Group[];
    device: Device;
    onBind(from: string, to: string, clusters: Cluster[]): void;
    onUnBind(from: string, to: string, clusters: Cluster[]): void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BindRowState {
    stateRule: BindRule;
    clusters: Cluster[];
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
const getTarget = (rule: BindRule, devices: Device[], groups: Group[]) => {
    if (rule.target.type === "group") {
        return groups.find(g => g.id === rule.target.id);
    }
    return devices.find(d => d.ieee_address === rule.target.ieee_address);
}

export default class BindRow extends Component<BindRowProps, BindRowState> {

    constructor(props: BindRowProps) {
        super(props);
        const { rule } = props;
        this.state = { stateRule: rule, clusters: rule.cluster ? [rule.cluster] : [] } as Readonly<BindRowState>;
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
        stateRule.cluster = undefined;

        this.setState({ stateRule });
    }

    setDestinationEp = (destinationEp: Endpoint): void => {

        const { stateRule } = this.state;
        stateRule.target.endpoint = destinationEp;
        this.setState({ stateRule });
    }

    setClusters = (clusters: Cluster[]): void => {
        this.setState({ clusters });
    }
    onBindClick = (): void => {
        const { onBind, device, groups, devices } = this.props;
        const { stateRule, clusters } = this.state;
        const from = `${device.friendly_name}/${stateRule.source.endpoint}`;
        let to: string;
        if (stateRule.target.type === "group") {
            const targetGroup = groups.find(group => group.id === stateRule.target.id);
            to = `${targetGroup.friendly_name}`;

        } else if (stateRule.target.type === "endpoint") {
            const targeDevice = devices.find(d => d.ieee_address === stateRule.target.ieee_address);
            to = `${targeDevice.friendly_name}/${stateRule.target.endpoint}`;
        }

        onBind(from, to, clusters);

    }

    onUnBindClick = (): void => {
        const { onUnBind, device, groups, devices } = this.props;
        const { stateRule, clusters } = this.state;
        const from = `${device.friendly_name}/${stateRule.source.endpoint}`;
        let to: string;
        if (stateRule.target.type === "group") {
            const targetGroup = groups.find(group => group.id === stateRule.target.id);
            to = `${targetGroup.friendly_name}`;
        } else if (stateRule.target.type === "endpoint") {
            const targeDevice = devices.find(d => d.ieee_address === stateRule.target.ieee_address);
            to = `${targeDevice.friendly_name}/${stateRule.target.endpoint}`;
        }

        onUnBind(from, to, clusters);
    }

    isValidRule(): boolean {
        return true;
        // const { destination, clusters } = this.state;
        // return destination && (clusters === undefined || clusters.length > 0);
    }

    render(): ComponentChild {
        const { devices, groups, idx, device } = this.props;
        const { stateRule, clusters } = this.state;

        const targetType: ObjectType = stateRule.target.type === "endpoint" ? "device" : "group";

        const sourceEndpoints = getEndpoints(device);
        const target = getTarget(stateRule, devices, groups);
        const destinationEndpoints = getEndpoints(target);
        const sourceClusters = device.endpoints[stateRule.source.endpoint]?.clusters?.output;
        console.log('stateRule', stateRule, groups);
        // const destinationClusters = device.endpoints[stateRule.de.endpoint]?.clusters?.output;
        // let intersection = devices.filter(x => arrB.includes(x));
        const possibleClusters: Cluster[] = sourceClusters;
        // if (targetType === "device") {
        //     const targetEP = (target as Device).endpoints[stateRule.target.endpoint];
        //     if (targetEP) {
        //         possibleClusters = possibleClusters.filter(cluster => targetEP.clusters.input.includes(cluster))
        //     }
        // }
        return (
            <tr>
                <th scope="row">{idx + 1}</th>
                <td><EndpointPicker values={sourceEndpoints} value={stateRule.source.endpoint} onSelect={this.setSourceEp} /></td>
                <td><DevicePicker type={targetType} value={stateRule.target.ieee_address || stateRule.target.id} devices={devices} groups={groups} onSelect={this.setDestination} /></td>
                <td>{stateRule.target.type === "endpoint" ? <EndpointPicker values={destinationEndpoints} value={stateRule.target.endpoint} onSelect={this.setDestinationEp} /> : null}</td>
                <td><ClusterPicker clusters={possibleClusters} value={clusters} onSelect={this.setClusters} /></td>
                <td>
                    <div class="btn-group btn-group-sm">
                        <Button<void> disabled={!this.isValidRule()} title="Bind" className="btn btn-primary" onClick={this.onBindClick}><i
                            className="fa fa-heart" /></Button>
                        <Button<void> disabled={!this.isValidRule()} title="Unbind" className="btn btn-secondary" onClick={this.onUnBindClick}><i
                            className="fa fa-heart-broken" /></Button>
                    </div>
                </td>
            </tr>
        );
    }
}