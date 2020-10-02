import React, { Component } from "react";
import { Device, Cluster, Endpoint } from "../../types";
import BindRow, { getEndpoints } from "./bind-row";
import actions, { BindApi } from "../../actions";
import { connect } from "unistore/react";
import { GlobalState, Group } from "../../store";


interface PropsFromStore {
    devices: Map<string, Device>;
    groups: Group[];
}
interface BindProps {
    device: Device;
}

export interface NiceBindingRule {
    id?: number;
    isNew?: number;
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
const rule2key = (rule: NiceBindingRule): string => `${rule.isNew}${rule.source.ieee_address}-${rule.target.id}-${rule.target.ieee_address}-${rule.clusters.join('-')}`;
const convertBidningsIntoNiceStructure = (device: Device): NiceBindingRule[] => {
    const bindings = {};
    device.endpoints.forEach((description, endpoint) => {
        description.bindings
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
type BindState = {
    bidingRules: NiceBindingRule[];
}
export class Bind extends Component<BindProps & PropsFromStore & BindApi, BindState> {
    state: BindState = {
        bidingRules: []
    }
    onBindClick = (from: string, to: string, clusters: Cluster[]): void => {
        const { addBind } = this.props;
        addBind(from, to, clusters);
    };
    onUnBindClick = (from: string, to: string, clusters: Cluster[]): void => {
        const { removeBind } = this.props;
        removeBind(from, to, clusters);
    };
    static getDerivedStateFromProps(props: Readonly<BindProps & PropsFromStore>, state: BindState): Partial<BindState> {
        const { device } = props;
        const endpoints = getEndpoints(device);
        const bidingRules = convertBidningsIntoNiceStructure(device);
        // eslint-disable-next-line @typescript-eslint/camelcase
        bidingRules.push({ isNew: Date.now(), target: {}, source: {ieee_address: device.ieee_address, endpoint: endpoints[0]}, clusters: [] } as NiceBindingRule);
        return {
            bidingRules
        };
    }
    render() {
        const { device, devices, groups } = this.props;
        const { bidingRules } = this.state;
        return (
            <div className="card table-responsive">
                <table className="table">
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
                            bidingRules.map((rule, idx) => <BindRow
                                key={rule2key(rule)}
                                rule={rule}
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