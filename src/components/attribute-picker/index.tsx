import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import { Attribute, Cluster, Device, BridgeDefinitions } from '../../types';

import { DataType } from '../../ZCLenums';

import { useTranslation } from 'react-i18next';
import store from '../../store';

export interface AttributeDefinition {
    ID: number;
    type: DataType;
    manufacturerCode?: number;
}

interface AttributePickerProps {
    cluster: Cluster;
    device: Device;
    value: Attribute;
    clusters?: BridgeDefinitions;
    label?: string;
    onChange: (attr: Attribute, definition: AttributeDefinition) => void;
}

// eslint-disable-next-line react/prefer-stateless-function
export default function AttributePicker(
    props: AttributePickerProps & Omit<InputHTMLAttributes<HTMLSelectElement>, 'onChange'>,
): JSX.Element {
    const { cluster, device, onChange, label, value, clusters, ...rest } = props;
    const { bridgeDefinitions } = store.getState();
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
    // Retrieve Cluster attributes: from ZH first, then from device definition
    const getClusterAttributes = (cluster): string[] | Readonly<Record<string, Readonly<AttributeDefinition>>> => {
        // If the clusters definition have been passed as attribute (for example for testing), we use it
        // Otherwise we retrieve from the store state
        const _bridgedefinition: BridgeDefinitions = clusters ?? bridgeDefinitions;

        if (_bridgedefinition.clusters) {
            const _clusterDefinition = _bridgedefinition.clusters[cluster];

            if (_clusterDefinition) {
                return _clusterDefinition.attributes;
            } else {
                const _customClusters = _bridgedefinition.custom_clusters[device.ieee_address];

                if (_customClusters && _customClusters[cluster]) {
                    return _customClusters[cluster].attributes;
                }
            }
        }

        return [];
    };
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
