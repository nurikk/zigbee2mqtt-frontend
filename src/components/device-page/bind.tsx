import { Component, ComponentChild, h } from "preact";
import { BindRule, Device } from "../../types";
import { ZigbeeClusters } from "./clusters";
import BindRow from "./bind-row";


export const getClusterName = (id: number, addBraces = true): string => {
    if (ZigbeeClusters[id]) {
        const cleanName = (ZigbeeClusters[id] as string).replace(/^ZCL_CLUSTER_ID_/, "");
        return addBraces ? ` (${cleanName})` : cleanName;
    }
    return "";
};

interface BindProps {
    device: Device;
    devices: Device[];
    bindRules: BindRule[];

    createBind(dev: string, rule: BindRule): void;

    removeBind(dev: string, rule: BindRule): void;
}

export default class Bind extends Component<BindProps, {}> {
    onRuleChange = (idx: number, rule: BindRule | undefined): void => {
        const { bindRules } = this.props;
        if (rule === undefined) {
            bindRules.splice(idx, 1);
        } else {
            bindRules[idx] = rule;
        }

        this.setState({ bindRules });
    };

    onBindClick = (rule: BindRule): void => {
        const { device, createBind } = this.props;
        createBind && createBind(device.nwkAddr, rule);
    };

    onUnBindClick = (rule: BindRule): void => {
        const { device, removeBind } = this.props;
        removeBind && removeBind(device.nwkAddr, rule);
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
                        onUnBindClick={this.onUnBindClick}
                        onBindClick={this.onBindClick}
                        onChange={this.onRuleChange}
                        device={device} idx={idx}
                        rule={rule}
                        devices={devices} />)
                }
                </tbody>
            </table>
        );
    }

    render(): ComponentChild {
        const { device, bindRules } = this.props;
        if (device && bindRules.length) {
            return this.renderBindsTable();
        } else {
            return "Loading...";
        }
    }


}