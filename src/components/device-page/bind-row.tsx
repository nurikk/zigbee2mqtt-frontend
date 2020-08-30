import { Component, ComponentChild, h } from "preact";
import { Device, Endpoint, Cluster, BindParams } from "../../types";
import DevicePicker from "../device-picker";
import EndpointPicker from "../endpoint-picker";
import ClusterPicker from "../cluster-picker";
import Button from "../button";
import { Group } from "../../store";




interface BindRowProps {
    idx: number;
    devices: Device[];
    groups: Group[];
    device: Device;
    onBind(params: BindParams): void;
    onUnBind(params: BindParams): void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface BindRowState extends BindParams {
}

export default class BindRow extends Component<BindRowProps, BindRowState> {
    setSource = (source: Device): void => {
        this.setState({ source });
    }
    setSourceEp = (sourceEp: Endpoint): void => {
        this.setState({ sourceEp });
    }

    setDestination = (destination: Device): void => {
        this.setState({ destination });
    }

    setDestinationEp = (destinationEp: Endpoint): void => {
        this.setState({ destinationEp });
    }

    setClusters = (clusters: Cluster[]): void => {
        this.setState({ clusters });
    }
    onBindClick = (): void => {
        const { onBind } = this.props;
        const { source, sourceEp, destination, destinationEp, clusters } = this.state;
        onBind({ source, sourceEp, destination, destinationEp, clusters });
    }

    onUnBindClick = (): void => {
        const { onUnBind } = this.props;
        const { source, sourceEp, destination, destinationEp, clusters } = this.state;
        onUnBind({ source, sourceEp, destination, destinationEp, clusters });
    }

    isValidRule(): boolean {
        const { source, destination,  clusters } = this.state;
        return source && destination && (clusters === undefined || clusters.length > 0);
    }

    render(): ComponentChild {
        const { devices, groups, idx } = this.props;
        const { sourceEp, destinationEp, clusters } = this.state;
        return (
            <tr>
                <th scope="row">{idx + 1}</th>
                <td><DevicePicker devices={devices} onSelect={this.setSource} /></td>
                <td><EndpointPicker value={sourceEp} onSelect={this.setSourceEp} /></td>
                <td><DevicePicker devices={devices} groups={groups} onSelect={this.setDestination} /></td>
                <td><EndpointPicker value={destinationEp} onSelect={this.setDestinationEp} /></td>
                <td><ClusterPicker value={clusters} onSelect={this.setClusters} /></td>
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