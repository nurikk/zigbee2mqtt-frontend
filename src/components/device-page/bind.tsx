import React, { Component } from "react";
import { Device, Cluster, Endpoint } from "../../types";
import BindRow from "./bind-row";
import actions from "../../actions/actions";
import { BindApi } from "../../actions/BindApi";
import { connect } from "unistore/react";
import { GlobalState, Group } from "../../store";
import { getEndpoints } from "../../utils";


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
const rule2key = (rule: NiceBindingRule): string => `${rule.source.endpoint}-${rule.isNew}${rule.source.ieee_address}-${rule.target.id}-${rule.target.ieee_address}-${rule.clusters.join('-')}`;
const convertBidningsIntoNiceStructure = (device: Device): NiceBindingRule[] => {
    const bindings = {};
    device.endpoints.forEach((description, endpoint) => {
        description.bindings
            .forEach(b => {
                let targetId = b.target.id ?? `${b.target.ieee_address}-${b.target.endpoint}`;

                targetId = `${targetId}-${endpoint}`;

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
    static getDerivedStateFromProps(props: Readonly<BindProps & PropsFromStore>): Partial<BindState> {
        const { device } = props;
        const endpoints = getEndpoints(device);
        const bidingRules = convertBidningsIntoNiceStructure(device);
        bidingRules.push({ isNew: Date.now(), target: {}, source: { 'ieee_address': device.ieee_address, endpoint: endpoints[0] }, clusters: [] } as unknown as NiceBindingRule);
        return { bidingRules };
    }
    renderHeader() {
        const columns = ['#', 'Source EP', 'Destination', 'Destination EP', 'Clusters', 'Actions'];
        return <thead><tr>{columns.map(column => <th key={column} scope="col">{column}</th>)}</tr></thead>
    }
    renderBody() {
        const { device, devices, groups, removeBind, addBind } = this.props;
        const { bidingRules } = this.state;
        return <tbody>{bidingRules
            .map((rule, idx) => <BindRow
                key={rule2key(rule)}
                rule={rule}
                groups={groups}
                onUnBind={removeBind}
                onBind={addBind}
                device={device}
                idx={idx}
                devices={devices} />)
        }</tbody>
    }
    render() {
        return <div className="table-responsive">
            <table className="table">
                {this.renderHeader()}
                {this.renderBody()}
            </table>
        </div>;
    }
}

const mappedProps = ["devices", "groups"];
const ConnectedBindPage = connect<BindProps, {}, GlobalState, PropsFromStore & BindApi>(mappedProps, actions)(Bind);
export default ConnectedBindPage
