import React, { ChangeEvent, InputHTMLAttributes } from "react";
import { Attribute, Cluster } from "../../types";

import Clusters from "zigbee-herdsman/dist/zcl/definition/cluster"
import DataType from "zigbee-herdsman/dist/zcl/definition/dataType";
import { useTranslation } from "react-i18next";

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
export default function AttributePicker(props: AttributePickerProps & Omit<InputHTMLAttributes<HTMLSelectElement>, 'onChange'>): JSX.Element {
    const { cluster, onChange, label, value, ...rest } = props;
    const { t } = useTranslation("zigbee");
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {

        const { value: inputValue } = e.target;
        const currentCluster = Clusters[cluster];
        const attributeInfo = currentCluster.attributes[inputValue]
        onChange(inputValue, attributeInfo);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    let attrs = [] as string[];
    const clusterDefinition = Clusters[cluster];
    if (clusterDefinition) {
        attrs = Object.keys(clusterDefinition.attributes);
    }
    if (value !== undefined && !attrs.includes(value)) {
        attrs.push(value);
    }
    const options = attrs.map(attr => <option key={attr} value={attr}>{attr}</option>);
    options.unshift(<option key="none" hidden>{t('select_attribute')}</option>)
    return (<div className="form-group">
        {label && <label className="form-label">{label}</label>}
        <select disabled={attrs.length === 0} className="form-control" onChange={onChangeHandler} value={value} {...rest}>
            {options}
        </select>
    </div>)

}
