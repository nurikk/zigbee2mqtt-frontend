import React, { ChangeEvent, Component, InputHTMLAttributes } from "react";
import { Attribute, Cluster } from "../../types";

import Clusters from "zigbee-herdsman/dist/zcl/definition/cluster"
import DataType from "zigbee-herdsman/dist/zcl/definition/dataType";

export interface AttributeDefinition {
    ID: number;
    type: DataType;
    manufacturerCode?: number;
}

interface AttributePickerProps {
    cluster: Cluster;
    value: Attribute;
    label?: string;
    onChange: (attr: Attribute, definition: AttributeDefinition) => void;
}
// eslint-disable-next-line react/prefer-stateless-function
export default class AttributePicker extends Component<AttributePickerProps & Omit<InputHTMLAttributes<HTMLSelectElement>, 'onChange'>, {}> {

    onChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        const { onChange, cluster } = this.props;
        const { value } = e.target;
        const currentCluster = Clusters[cluster];
        const attributeInfo = currentCluster.attributes[value]
        onChange(value, attributeInfo);
    }
    render() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { cluster, onChange, label, value, ...rest } = this.props;
        let attrs = [] as string[];
        const clusterDefinition = Clusters[cluster];
        if (clusterDefinition) {
            attrs = Object.keys(clusterDefinition.attributes);
        }
        if (value !== undefined && !attrs.includes(value)) {
            attrs.push(value);
        }
        const options = attrs.map(attr => <option key={attr} value={attr}>{attr}</option>);
        options.unshift(<option key="none" hidden>Select attribute</option>)
        return (<div className="form-group">
            {label && <label className="form-label">{label}</label>}
            <select disabled={attrs.length === 0} className="form-control" onChange={this.onChange} value={value} {...rest}>
                {options}
            </select>
        </div>)
    }
}
