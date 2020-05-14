import { Component, ComponentChild, h } from "preact";
import { BindRule, Device } from "../../types";
import { ZigbeeClusters } from "./clusters";
import BindRow from "./bind-row";
import actions, { Actions } from "../../actions";
import { connect } from "unistore/preact";
import { GlobalState } from "../../store";
import { Notyf } from "notyf";


export const getClusterName = (id: number, addBraces = true): string => {
    if (ZigbeeClusters[id]) {
        const cleanName = (ZigbeeClusters[id] as string).replace(/^ZCL_CLUSTER_ID_/, "");
        return addBraces ? ` (${cleanName})` : cleanName;
    }
    return "";
};

interface PropsFromStore {
    device: Device;
    devices: Device[];
    bindRules: BindRule[];
}

export class Bind extends Component<PropsFromStore & Actions, {}> {
    onRuleChange = (idx: number, rule: BindRule): void => {
        const { bindRules, setBindRules } = this.props;
        const copyRules = [...bindRules];
        copyRules[idx] = rule;
        setBindRules(copyRules);
    };

    onBindClick = (rule: BindRule): void => {
        const { device, createBind, getDeviceBinds } = this.props;
        createBind(device.nwkAddr, rule).then(() => {
            new Notyf().success(`Created bind rule`);
            getDeviceBinds(device.nwkAddr);
        });
    };

    onUnBindClick = (rule: BindRule): void => {
        const { device, removeBind, getDeviceBinds } = this.props;
        removeBind(device.nwkAddr, rule).then(() => {
            new Notyf().success(`Removed bind rule`);
            getDeviceBinds(device.nwkAddr);
        });
    };

    renderBindsTable(): ComponentChild {
        const { bindRules, devices, device } = this.props;
        return (
            <table class="table table-striped table-borderless">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Source Cluster/Ep</th>
                        <th scope="col">DstNwkAddr</th>
                        <th scope="col">DstEp</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bindRules.map((rule, idx) => <BindRow
                            key={idx}
                            onUnBindClick={this.onUnBindClick}
                            onBindClick={this.onBindClick}
                            onChange={this.onRuleChange}
                            device={device}
                            idx={idx}
                            rule={rule}
                            devices={devices} />)
                    }
                </tbody>
            </table>
        );
    }

    render(): ComponentChild {
        const { device } = this.props;
        if (device) {
            return this.renderBindsTable();
        }
        return "Loading...";

    }
}

const mappedProps = ["device", "devices", "bindRules"];

export default connect<{}, {}, GlobalState, PropsFromStore>(mappedProps, actions)(Bind);