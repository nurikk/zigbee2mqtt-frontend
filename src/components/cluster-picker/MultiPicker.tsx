import React, { ChangeEvent, useState } from "react";
import { randomString } from "../../utils";
import { MultiPickerProps, isClusterGroup, clusterDescriptions } from "./index";

export function MultiPicker(props: MultiPickerProps): JSX.Element {
    const [pickerId] = useState(randomString(5));
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { clusters = [], onChange, label, value, disabled } = props;

    let options = [] as JSX.Element[];
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked: isChecked, name } = e.target;
        let newVal = [...value];
        if (isChecked) {
            newVal.push(name);
        } else {
            newVal = newVal.filter(v => v !== name);
        }
        onChange(newVal);
    };
    if (isClusterGroup(clusters)) {
        console.warn("Not implemented");
    } else {
        options = [...clusters].sort((a, b) => (a.toString()).localeCompare(b.toString())).map(cluster => (
            <div key={cluster} className="form-check form-check-inline">
                <input className="form-check-input"
                    type="checkbox"
                    checked={value.includes(cluster)}
                    name={cluster as string}
                    id={`${pickerId}_${cluster}`}
                    value={cluster}
                    onChange={onChangeHandler}
                    disabled={disabled} />
                <label className="form-check-label" htmlFor={`${pickerId}_${cluster}`} title={cluster as string}>{clusterDescriptions[cluster] ?? cluster}</label>
            </div>
        ));
    }

    return <div className="form-group">
        {label && <label className="form-label">{label}</label>}
        <div className="form-control border-0">
            {options}
        </div>

    </div>;
}
