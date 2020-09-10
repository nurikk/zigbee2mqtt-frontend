import { Component, ComponentChild, h } from "preact";
import { Device, Cluster, Endpoint } from "../../types";
import { ZigbeeClusters } from "./clusters";
import BindRow from "./bind-row";
import actions, { BindApi } from "../../actions";
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
    devices: Map<string, Device>;
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
    const bindings = {};
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

export class Bind extends Component<BindProps & PropsFromStore & BindApi, {}> {
    onBindClick = (from: string, to: string, clusters: Cluster[]): void => {
        const { addBind } = this.props;
        addBind(from, to, clusters);
    };
    onUnBindClick = (from: string, to: string, clusters: Cluster[]): void => {
        const { removeBind } = this.props;
        removeBind(from, to, clusters);
    };
    render(): ComponentChild {
        const { dev, devices, groups } = this.props;

        const coordinator = Array.from(devices.values()).find(d => d.type === "Coordinator");
        const device = devices.get(dev);
        if (!device) {
            return "Unknown device";
        }

        const niceBindingRules = convertBidningsIntoNiceStructure(device, coordinator);
        niceBindingRules.push({ isNew: true, target: {}, source: {}, clusters: [] } as NiceBindingRule);
        return (
            <div class="card">
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
            </div>
        );
    }
}

const mappedProps = ["devices", "groups"];
const ConnectedBindPage = connect<BindProps, {}, GlobalState, PropsFromStore & BindApi>(mappedProps, actions)(Bind);
export default ConnectedBindPage