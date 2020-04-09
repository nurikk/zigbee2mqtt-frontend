import { Component, ComponentChild, Fragment, h } from "preact";
import { BindRule, Device } from "../../types";
import { createBind, fetchZigbeeDevicesList, loadBindsList, removeBind } from "../actions";
import { ZigbeeClusters } from "./clusters";
import { toHex } from "../../utils";
import flatten from "lodash/flatten";
import cx from "classnames";

interface BindState {
    isLoading: boolean;
    devices: Device[];
    bindRules: BindRule[];
}

interface BindProps {
    device: Device;
}

interface BindRowProps {
    onChange?(idx: number, rule: BindRule): void;

    onBindClick?(rule: BindRule): void;

    onUnBindClick?(rule: BindRule): void;

    idx: number;
    rule: BindRule;
    devices: Device[];
    device: Device;
}

interface BindRowState {
    foo?: number;
}

export const getClusterName = (id: number, addBraces = true): string => {
    if (ZigbeeClusters[id]) {
        const cleanName = (ZigbeeClusters[id] as string).replace(/^ZCL_CLUSTER_ID_/, "");
        return addBraces ? ` (${cleanName})`: cleanName;
    }
    return "";
};
const fields = ["DstNwkAddr", "ClusterId", "SrcEp", "DstEp"];

function isValidBindRule(rule: BindRule): rule is BindRule {
    return fields.some(key => rule[key] !== undefined);
}

class BindRow extends Component<BindRowProps, BindRowState> {

    isExistingBinding(): boolean {
        const { rule } = this.props;
        return rule.id !== undefined;
    }

    onDstChange = (evt) => {
        const { idx, rule, onChange } = this.props;
        const { value } = evt.target;
        onChange && onChange(idx, { ...rule, DstNwkAddr: value, DstEp: undefined });
    };

    renderDstSelect(): ComponentChild {
        const { devices, rule, device } = this.props;
        const options = devices
            .filter(d => d.nwkAddr !== device.nwkAddr) //exclude self from select
            .filter(d => {
                const inC = flatten(Object.values(d.ep ?? {}).map(ep => Object.keys(ep.In ?? {}).map(c => parseInt(c, 10))));
                return inC.includes(rule.ClusterId);
            })
            .map(device => <option selected={device.nwkAddr === rule.DstNwkAddr}
                                   value={device.nwkAddr}>
                {device.nwkAddr} ({device.friendly_name ? device.friendly_name : device.ModelId})</option>);

        options.unshift(<option hidden>Select device ({options.length})</option>);

        return <select disabled={this.isExistingBinding()} onChange={this.onDstChange}
                       class={cx("form-control", { "form-control-plaintext": this.isExistingBinding() })}>{options}</select>;
    }


    onClusterChange = (evt): void => {
        const { onChange, rule, idx } = this.props;
        const { value } = evt.target;
        const [SrcEp, ClusterId] = value.split(",").map(p => parseInt(p, 10));
        onChange && onChange(idx, { ...rule, SrcEp, ClusterId, DstNwkAddr: undefined });
    };

    renderClusterId(): ComponentChild {
        const { device, rule } = this.props;
        const optionGroups = Object.entries(device.ep).map(([epNumber, ep]) => {
            const clusters = Object.keys(ep.Out ?? {}).map(c => parseInt(c, 10));
            return <optgroup label={`Endpoint: #${epNumber}`}>
                {clusters.map(c => <option selected={c === rule.ClusterId && parseInt(epNumber, 10) == rule.SrcEp}
                                           value={[epNumber, c.toString()]}>{toHex(c, 4)}{getClusterName(c, true)}</option>)}
            </optgroup>;
        });
        optionGroups.unshift(<option hidden>Select cluster</option>);

        return <select disabled={this.isExistingBinding()} onChange={this.onClusterChange}
                       class={cx("form-control", { "form-control-plaintext": this.isExistingBinding() })}>{optionGroups}</select>;
    }

    onDstEpChange = (evt) => {
        const { onChange, rule, idx } = this.props;
        const { value } = evt.target;
        onChange && onChange(idx, { ...rule, DstEp: parseInt(value, 10) });
    };

    renderDstEp(): ComponentChild {
        const { devices, rule } = this.props;
        const dstDevice = devices.find((d) => d.nwkAddr === rule.DstNwkAddr);

        let options = [];

        if (dstDevice) {
            const dstEndpoints = Object.entries(dstDevice.ep)
                .filter(([epName, ep]) => Object.prototype.hasOwnProperty.call(ep.In, rule.ClusterId.toString()));
            options = options.concat(dstEndpoints.map(([epName, ep]) => <option
                selected={parseInt(epName, 10) === rule.DstEp} value={epName}>{epName}</option>));
        }
        options.unshift(<option hidden>Select destination ({options.length})</option>);

        return <select disabled={this.isExistingBinding()} onChange={this.onDstEpChange}
                       class={cx("form-control", { "form-control-plaintext": this.isExistingBinding() })}>{options}</select>;

    }

    onBindClick = (): void => {
        const { onBindClick, rule } = this.props;
        onBindClick && onBindClick(rule);
    };
    onUnBindClick = (): void => {
        const { onUnBindClick, rule } = this.props;
        onUnBindClick && onUnBindClick(rule);
    };
    onRemoveClick = (): void => {
        const { onChange, idx } = this.props;
        onChange && onChange(idx, undefined);
    };

    renderActionButton(): ComponentChild {
        const { rule } = this.props;
        return (
            this.isExistingBinding() ? (
                <button onClick={this.onUnBindClick} type="button" class="btn btn-danger w-100">Unbind</button>
            ) : (
                <button disabled={!isValidBindRule(rule)} onClick={this.onBindClick} type="button"
                        class="btn btn-primary w-100">Bind</button>
            )

        );
    }

    render(): ComponentChild {
        const { idx } = this.props;
        return (
            <tr>
                <th scope="row">{idx + 1}</th>
                <td>{this.renderClusterId()}</td>
                <td>{this.renderDstSelect()}</td>
                <td>{this.renderDstEp()}</td>
                <td>
                    {this.renderActionButton()}
                </td>
            </tr>
        );
    }
}

export default class Bind extends Component<BindProps, BindState> {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            devices: [],
            bindRules: []
        };
    }

    componentDidMount(): void {
        this.init();
    }

    loadBindsList(): void {
        this.setState({ isLoading: true });
        const { device } = this.props;
        loadBindsList(device.nwkAddr, (err, bindRules) => {
            this.setState({ bindRules: [{} as BindRule, ...bindRules], isLoading: false });
        });
    }

    fetchZigbeeDevicesList(): void {
        this.setState({ isLoading: true });
        fetchZigbeeDevicesList((err, devices) => {
            if (!err) {
                this.setState({
                    isLoading: false,
                    devices
                });
            }
        });
    }

    init(): void {
        this.loadBindsList();
        this.fetchZigbeeDevicesList();
    }

    onRuleChange = (idx: number, rule: BindRule | undefined): void => {
        // debugger
        const { bindRules } = this.state;
        if (rule === undefined) {
            bindRules.splice(idx, 1);
        } else {
            bindRules[idx] = rule;
        }

        this.setState({ bindRules });
    };

    onBindClick = (rule: BindRule): void => {
        const { device } = this.props;
        this.setState({ isLoading: true });
        createBind(device.nwkAddr, rule, (err, response) => {
            this.setState({ isLoading: false });
            if (!err) {
                this.loadBindsList();
            }
        });
    };

    onUnBindClick = (rule: BindRule): void => {
        const { device } = this.props;
        this.setState({ isLoading: true });
        removeBind(device.nwkAddr, rule, (err, response) => {
            this.setState({ isLoading: false });
            if (!err) {
                this.loadBindsList();
            }
        });
    };

    renderBindsTable(): ComponentChild {
        const { bindRules, devices } = this.state;
        const { device } = this.props;
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
        return <Fragment>

            {this.renderBindsTable()}
        </Fragment>;
    }
}