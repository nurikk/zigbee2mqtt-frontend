import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import { Attribute, Cluster, Device } from '../../types';

import {DataType} from '../../zcl/definition/enums';
import {Clusters} from '../../zcl/definition/cluster';

import { useTranslation } from 'react-i18next';

export interface AttributeDefinition {
    ID: number;
    type: DataType;
    manufacturerCode?: number;
}

interface AttributePickerProps {
    cluster: Cluster;
    device: Device;
    value: Attribute;
    label?: string;
    onChange: (attr: Attribute, definition: AttributeDefinition) => void;
}
// eslint-disable-next-line react/prefer-stateless-function
export default function AttributePicker(
    props: AttributePickerProps & Omit<InputHTMLAttributes<HTMLSelectElement>, 'onChange'>,
): JSX.Element {
    const { cluster, device, onChange, label, value, ...rest } = props;
    const { t } = useTranslation('zigbee');
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
        const { value: inputValue } = e.target;
        const attrs = getClusterAttributes(cluster);
        const attributeInfo = attrs[inputValue];

        // inputValue could be "Select attribute" which isn't a proper cluster attribute
        if (attributeInfo) {
            onChange(inputValue, attributeInfo);
        }
    };
    // Retrieve Cluster attributes: from ZH first, then from device definition (expecting custom cluster as part of the definition)
    const getClusterAttributes = (cluster) : string[] | Readonly<Record<string, Readonly<AttributeDefinition>>> => {
        const _clusterDefinition = Clusters[cluster];

        if (_clusterDefinition) {
            return _clusterDefinition.attributes;
        } else {
            const _customClusters = device.definition?.custom_clusters;

            if (_customClusters && _customClusters[cluster]) {
                return _customClusters[cluster].attributes;
            }
        }
        return [];
    }
    const attrs = Object.keys(getClusterAttributes(cluster));

    if (value !== undefined && !attrs.includes(value)) {
        attrs.push(value);
    }
    const options = attrs.map((attr) => (
        <option key={attr} value={attr}>
            {attr}
        </option>
    ));
    options.unshift(
        <option key="none" hidden>
            {t('select_attribute')}
        </option>,
    );
    return (
        <div className="form-group">
            {label && <label className="form-label">{label}</label>}
            <select
                disabled={attrs.length === 0}
                className="form-control"
                onChange={onChangeHandler}
                value={value}
                {...rest}
            >
                {options}
            </select>
        </div>
    );
}
