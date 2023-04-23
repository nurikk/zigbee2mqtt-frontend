import React, { ChangeEvent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { randomString } from '../../utils';
import { SinglePickerProps, isClusterGroup, clusterDescriptions } from './index';

export function SinglePicker(props: SinglePickerProps): JSX.Element {
    const [pickerId] = useState(randomString(5));
    const { clusters = [], onChange, value, label, disabled } = props;
    const { t } = useTranslation(['zigbee', 'common']);
    const options = [
        <option key="hidden" hidden>
            {t('select_cluster')}
        </option>,
    ];

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
        onChange(e.target.value);
    };

    if (isClusterGroup(clusters)) {
        clusters.forEach((group) => {
            const groupOptions = group.clusters.map((cluster) => (
                <option key={cluster} value={cluster}>
                    {clusterDescriptions[cluster] ?? cluster}
                </option>
            ));
            if (groupOptions.length === 0) {
                groupOptions.push(
                    <option key="none" disabled>
                        {t('none')}
                    </option>,
                );
            }
            options.push(
                <optgroup key={group.name} label={t(group.name)}>
                    {groupOptions}
                </optgroup>,
            );
        });
    } else {
        clusters.forEach((cluster) => {
            options.push(
                <option key={cluster} value={cluster}>
                    {clusterDescriptions[cluster] ?? cluster}
                </option>,
            );
        });
    }
    return (
        <div className="form-group">
            {label && (
                <label htmlFor={pickerId} className="form-label">
                    {label}
                </label>
            )}
            <select id={pickerId} value={value} className="form-select" onChange={onChangeHandler} disabled={disabled}>
                {options}
            </select>
        </div>
    );
}
