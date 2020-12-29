import React, { ChangeEvent, Component, InputHTMLAttributes } from "react";
import { Attribute, Cluster } from "../../types";
import clusters from "zigbee-herdsman/dist/zcl/definition/cluster";

interface AttributePickerProps {
    cluster: Cluster;
    value: Attribute;
    onChange: (attr: Attribute) => void;
}

// eslint-disable-next-line react/prefer-stateless-function
export default class AttributePicker extends Component<AttributePickerProps & Omit<InputHTMLAttributes<HTMLSelectElement>, 'onChange'>, {}> {

    onChange = (e: ChangeEvent<HTMLSelectElement>): void => {
        const { onChange } = this.props;
        const { value } = e.target;
        onChange(value);
    }
    render() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { cluster, onChange, ...rest } = this.props;
        let attrs = [];
        const clusterDefinition = clusters[cluster];
        if (clusterDefinition) {
            attrs = Object.keys(clusterDefinition.attributes);
        }
        const options = attrs.map(attr => <option key={attr} value={attr}>{attr}</option>);
        options.unshift(<option key="none" hidden>Select attribute</option>)
        return (<select disabled={attrs.length === 0} className="form-select" onChange={this.onChange} {...rest}>
            {options}
        </select>)
    }
}