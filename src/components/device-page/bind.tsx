import React, { useMemo, useState } from 'react';
import { Device, Cluster, Endpoint } from '../../types';
import BindRow from './bind-row';
import actions from '../../actions/actions';
import { BindApi } from '../../actions/BindApi';
import { connect } from 'unistore/react';
import { GlobalState } from '../../store';

type PropsFromStore = Pick<GlobalState, 'devices' | 'groups'>;
interface BindProps {
    device: Device;
}
type BindTarget = {
    id?: number;
    endpoint?: Endpoint;
    ieee_address?: string;
    type: 'endpoint' | 'group';
};
type BindSource = {
    ieee_address: string;
    endpoint: Endpoint;
};
export interface NiceBindingRule {
    id?: number;
    isNew?: number;
    source: BindSource;
    target: BindTarget;
    clusters: Cluster[];
}
const rule2key = (rule: NiceBindingRule): string =>
    `${rule.source.endpoint}-${rule.isNew}${rule.source.ieee_address}-${rule.target.id}-${
        rule.target.ieee_address
    }-${rule.clusters.join('-')}`;
const convertBindingsIntoNiceStructure = (device: Device): NiceBindingRule[] => {
    const bindings = {};
    Object.entries(device.endpoints).forEach(([endpoint, description]) => {
        description.bindings.forEach((b) => {
            let targetId = b.target.id ?? `${b.target.ieee_address}-${b.target.endpoint}`;

            targetId = `${targetId}-${endpoint}`;

            if (bindings[targetId]) {
                bindings[targetId].clusters.push(b.cluster);
            } else {
                bindings[targetId] = {
                    source: {
                        ieee_address: device.ieee_address,
                        endpoint,
                    },
                    target: b.target,
                    clusters: [b.cluster],
                };
            }
        });
    });
    return Object.values(bindings);
};
export function Bind(props: BindProps & PropsFromStore & BindApi): JSX.Element {
    const { device, devices, groups, removeBind, addBind } = props;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [newBindingRule] = useState<NiceBindingRule>({
        isNew: Date.now(),
        target: {} as BindTarget,
        source: { ieee_address: device.ieee_address, endpoint: '' },
        clusters: [],
    });

    const bidingRules = useMemo(() => convertBindingsIntoNiceStructure(device), [device]);
    return (
        <div className="container-fluid">
            {[...bidingRules, newBindingRule].map((rule, idx) => (
                <BindRow
                    key={rule2key(rule)}
                    rule={rule}
                    groups={groups}
                    onUnBind={removeBind}
                    onBind={addBind}
                    device={device}
                    idx={idx}
                    devices={devices}
                />
            ))}
        </div>
    );
}

const mappedProps = ['devices', 'groups'];
const ConnectedBindPage = connect<BindProps, unknown, GlobalState, PropsFromStore & BindApi>(
    mappedProps,
    actions,
)(Bind);
export default ConnectedBindPage;
