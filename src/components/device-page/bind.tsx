import { Component, ComponentChild, h } from "preact";
import { Device, BindRule, Cluster } from "../../types";
import { ZigbeeClusters } from "./clusters";
import BindRow from "./bind-row";
import actions, { Actions } from "../../actions";
import { connect } from "unistore/preact";
import { GlobalState, Group } from "../../store";



export const getClusterName = (id: number, addBraces = true): string => {
    if (ZigbeeClusters[id]) {
        const cleanName = (ZigbeeClusters[id] as string).replace(/^ZCL_CLUSTER_ID_/, "");
        return addBraces ? ` (${cleanName})` : cleanName;
    }
    return "";
};

interface PropsFromStore {
    devices: Device[];
    groups: Group[];
}
interface BindProps {
    dev?: string;
}
export class Bind extends Component<BindProps & PropsFromStore & Actions, {}> {


    onBindClick = (from: string, to: string, clusters: Cluster[]): void => {
        const { bindReqest } = this.props;
        bindReqest(true, from, to, clusters);
    };

    onUnBindClick = (from: string, to: string, clusters: Cluster[]): void => {
        const { bindReqest } = this.props;
        bindReqest(false, from, to, clusters);
    };

    render(): ComponentChild {
        const { dev, devices, groups } = this.props;
        const coordinator = devices.find(d => d.type === "Coordinator");
        const device = devices.find(d => d.ieee_address == dev);
        if (!device) {
            return "Unknown device";
        }
        const nonCoordinatorBindings = device.bindings.filter(b => b.target.ieee_address !== coordinator.ieee_address);
        nonCoordinatorBindings.push({isNew: true, target: {}, source: {}, clusters: [] } as BindRule);
        return (
            <table class="table table-striped table-borderless">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Source EP</th>
                        <th scope="col">Destination</th>
                        <th scope="col">Destination EP</th>
                        <th scope="col">Clusters</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        nonCoordinatorBindings.map((rule, idx) => <BindRow
                            rule={rule}
                            key={idx}
                            groups={groups}
                            onUnBind={this.onUnBindClick}
                            onBind={this.onBindClick}
                            device={device}
                            idx={idx}
                            devices={devices} />)
                    }
                </tbody>
            </table>
        );
    }
}

const mappedProps = ["devices", "groups"];
const ConnectedBindPage = connect<{}, {}, GlobalState, BindProps & PropsFromStore & Actions>(mappedProps, actions)(Bind);
export default ConnectedBindPage