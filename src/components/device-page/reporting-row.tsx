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
  idx: number;
  device: Device;
  onApply(rule: NiceReportingingRule): void;
}
interface ReportingRowState {
  stateRule: NiceReportingingRule;
}

const getClusters = (device: Device, endpoint: Endpoint): ClusterGroup[] => {
  let possibleClusters = Object.keys(Clusters);
  let availableClusters = [];
  const ep = device.endpoints.get(endpoint);
  if (ep) {
    availableClusters = availableClusters.concat(ep.clusters.output);
    possibleClusters = possibleClusters.filter(cluster => !availableClusters.includes(cluster))
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
    // eslint-disable-next-line @typescript-eslint/camelcase
    onApply({ ...stateRule, maximum_report_interval: 0xFFFF });
  }


  render() {
    const { rule, idx, device } = this.props;
    const { stateRule } = this.state;
    const sourceEndpoints = getEndpoints(device);

    return (<tr>
      <th scope="row">{idx + 1}</th>
      <td><EndpointPicker disabled={!rule.isNew} values={sourceEndpoints} value={stateRule.endpoint} onChange={this.setSourceEp} /></td>
      <td><ClusterPicker disabled={!stateRule.endpoint} pickerType={PickerType.SINGLE} clusters={getClusters(device, stateRule.endpoint)} value={stateRule.cluster} onChange={this.setCluster} /></td>
      <td><AttributePicker value={stateRule.attribute} cluster={stateRule.cluster} onChange={this.setAttribute} /></td>
      <td><input onChange={this.changeHandler} value={stateRule.minimum_report_interval} required type="number" name="minimum_report_interval" className="form-control" /></td>
      <td><input onChange={this.changeHandler} value={stateRule.maximum_report_interval} required type="number" name="maximum_report_interval" className="form-control" /></td>
      <td><input placeholder="Enter 65535 to disable reporting" onChange={this.changeHandler} value={stateRule.reportable_change} required type="number" name="reportable_change" className="form-control" /></td>
      <td>
        <div className="btn-group" role="group" aria-label="Basic example">
          <Button<void> disabled={!isValidRule(stateRule)} className="btn btn-primary" onClick={this.applyRule}>Apply</Button>
          {!stateRule.isNew ? <Button<void> promt className="btn btn-danger" onClick={this.disableRule}>Disable</Button> : null}
        </div>
      </td>
    </tr>);
  }
}