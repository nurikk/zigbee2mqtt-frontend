import React, { ChangeEvent, Component } from "react";
import { Device, Endpoint, Cluster, Attribute } from "../../types";

import EndpointPicker from "../endpoint-picker";
import ClusterPicker, { ClusterGroup, PickerType } from "../cluster-picker";

import { NiceReportingingRule } from "./reporting";
import { getEndpoints } from "../../utils";
import AttributePicker from "../attribute-picker";
import Clusters from "zigbee-herdsman/dist/zcl/definition/cluster"
import Button from "../button";


interface ReportingRowProps {
    rule: NiceReportingingRule;
    device: Device;
    onApply(rule: NiceReportingingRule): void;
}
interface ReportingRowState {
    stateRule: NiceReportingingRule;
}

const getClusters = (device: Device, endpoint: Endpoint, currentCluster: Cluster): ClusterGroup[] => {
    let possibleClusters = Object.keys(Clusters);
    let availableClusters = [] as Cluster[];
    const ep = device.endpoints[endpoint];
    if (ep) {
        availableClusters = availableClusters.concat(ep.clusters.output);
        possibleClusters = possibleClusters.filter(cluster => !availableClusters.includes(cluster))
    }
    if (!availableClusters.includes(currentCluster)) {
        availableClusters.push(currentCluster);
    }
    return [
        {
            name: 'Avaliable',
            clusters: availableClusters
        },
        {
            name: 'Possible',
            clusters: possibleClusters
        }
    ]
}
const requiredRuleFileds = ['maximum_report_interval', 'minimum_report_interval', 'reportable_change', 'endpoint', 'cluster', 'attribute'];
const isValidRule = (rule: NiceReportingingRule): boolean => {
    return requiredRuleFileds.every(field => rule[field] !== undefined)
}
export default class ReportingRow extends Component<ReportingRowProps, ReportingRowState> {

    state: Readonly<ReportingRowState> = {
        stateRule: {} as NiceReportingingRule
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    static getDerivedStateFromProps(props: Readonly<ReportingRowProps>, state: ReportingRowState): Partial<ReportingRowState> {
        const { rule } = props;
        return {
            stateRule: rule
        };
    }

    setSourceEp = (sourceEp: Endpoint): void => {
        const { stateRule } = this.state;
        stateRule.endpoint = sourceEp;
        this.setState({ stateRule });
    }
    setCluster = (cluster: Cluster): void => {
        const { stateRule } = this.state;
        stateRule.cluster = cluster;
        this.setState({ stateRule });
    }

    setAttribute = (attr: Attribute): void => {
        const { stateRule } = this.state;
        stateRule.attribute = attr;
        this.setState({ stateRule });
    }

    changeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
        const { stateRule } = this.state;
        const { name, value } = event.target;
        stateRule[name] = value;
        this.setState({ stateRule });
    }

    applyRule = (): void => {
        const { onApply } = this.props;
        const { stateRule } = this.state;
        onApply(stateRule);
    }

    disableRule = (): void => {
        const { onApply } = this.props;
        const { stateRule } = this.state;

        onApply({ ...stateRule, maximum_report_interval: 0xFFFF });
    }


    render() {
        const { rule, device } = this.props;
        const { stateRule } = this.state;
        const sourceEndpoints = getEndpoints(device);

        return (<div className="row pb-2 border-bottom">

            <div className="col-md-2">
                <EndpointPicker label="Endpoint" disabled={!rule.isNew} values={sourceEndpoints} value={stateRule.endpoint} onChange={this.setSourceEp} />
            </div>
            <div className="col-md-2">
                <ClusterPicker label="Cluster" disabled={!stateRule.endpoint} pickerType={PickerType.SINGLE} clusters={getClusters(device, stateRule.endpoint, stateRule.cluster)} value={stateRule.cluster} onChange={this.setCluster} />
            </div>
            <div className="col-md-2">
                <AttributePicker label="Attribute" value={stateRule.attribute} cluster={stateRule.cluster} onChange={this.setAttribute} />
            </div>
            <div className="col-md-2">
                <div className="form-group">
                    <label className="form-label text-nowrap">Min rep interval</label>
                    <input onChange={this.changeHandler} value={stateRule.minimum_report_interval} required type="number" name="minimum_report_interval" className="form-control" />
                </div>
            </div>
            <div className="col-md-1">
                <div className="form-group">
                    <label className="form-label text-nowrap">Max rep interval</label>
                    <input onChange={this.changeHandler} value={stateRule.maximum_report_interval} required type="number" name="maximum_report_interval" className="form-control" />
                </div>
            </div>
            <div className="col-md-1">
                <div className="form-group">
                    <label className="form-label text-nowrap">Min rep change</label>
                    <input placeholder="Enter 65535 to disable reporting" onChange={this.changeHandler} value={stateRule.reportable_change} required type="number" name="reportable_change" className="form-control" />
                </div>

            </div>
            <div className="col-md-2">
                <div className="form-group">
                    <label className="form-label">Actions</label>
                    <div className="form-group">
                        <div className="btn-group" role="group" aria-label="Basic example">
                            <Button<void> disabled={!isValidRule(stateRule)} className="btn btn-primary" onClick={this.applyRule}>Apply</Button>
                            {!stateRule.isNew ? <Button<void> promt className="btn btn-danger" onClick={this.disableRule}>Disable</Button> : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}
