import React from 'react';
import { Cluster } from '../../types';
import { MultiPicker } from './MultiPicker';
import { SinglePicker } from './SinglePicker';
import { ClusterPickerProps, PickerType } from '.';

export default function ClusterPicker(props: Readonly<ClusterPickerProps>): JSX.Element {
    const { pickerType, onChange, clusters, value, label, disabled, ...rest } = props;
    if (pickerType === PickerType.MULTIPLE) {
        return (
            <MultiPicker
                onChange={onChange}
                clusters={clusters as Cluster[]}
                value={value as Cluster[]}
                disabled={disabled}
                label={label}
                {...rest}
            />
        );
    } else {
        return (
            <SinglePicker
                onChange={onChange}
                clusters={clusters as Cluster[]}
                value={value as Cluster}
                disabled={disabled}
                label={label}
                {...rest}
            />
        );
    }
}
