import { Component, ComponentChild, h } from "preact";
import { Device, Cluster, Endpoint, Dictionary } from "../../types";
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

export interface NiceBindingRule {
    isNew?: boolean;
    source: {
        ieee_address: string;
        endpoint: Endpoint;
    };
    target: {
        id?: number;
        endpoint?: Endpoint;
        ieee_address?: string;
        type: "endpoint" | "group";
    };

    clusters: Cluster[];
}
const convertBidningsIntoNiceStructure = (device: Device, coordinator: Device): NiceBindingRule[] => {
    const bindings: Dictionary<NiceBindingRule> = {};
    Object.entries(device.endpoints).forEach(([endpoint, description]) => {
        description.bindings
            .filter(b => b.target.ieee_address !== coordinator.ieee_address)
            .forEach(b => {
                const targetId = b.target.id ?? b.target.ieee_address;
                if (bindings[targetId]) {
                    bindings[targetId].clusters.push(b.cluster);
                } else {
                    bindings[targetId] = {
                        source: {
                            // eslint-disable-next-line @typescript-eslint/camelcase
                            ieee_address: device.ieee_address,
                            endpoint
                        },
                        target: b.target,
                        clusters: [b.cluster]
                    }
                }
            });
    });
    return Object.values(bindings);
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
        // const nonCoordinatorBindings = Object.entries(device.endpoints).map(([endpoint, description]) => {
        //     description.bindings = description.bindings.filter(b => b.target.ieee_address !== coordinator.ieee_address);
        //     return [endpoint, description];
        // }).reduce((prev, [endpoint, description]) => {
        //     prev[endpoint as string] = description;
        //     return prev;
        // }, {});

        
        const niceBindingRules = convertBidningsIntoNiceStructure(device, coordinator);
        niceBindingRules.push({isNew: true, target: {}, source: {}, clusters: [] } as NiceBindingRule);
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
                        niceBindingRules.map((rule, idx) => <BindRow
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
const ConnectedBindPage = connect<BindProps, {}, GlobalState, PropsFromStore & Actions>(mappedProps, actions)(Bind);
export default ConnectedBindPage