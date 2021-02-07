import React, { ChangeEvent, FunctionComponent } from "react";

import Button from "../button";
import { DisplayValue } from "../display-value/DisplayValue";


type ToggleProps = {
    onChange(value: unknown): void;
    value: unknown;
    name: string;
    valueOn: unknown;
    valueOff: unknown;
    minimal?: boolean;
}
type ControlButtonProps = {
    value: unknown;
    onClick(value: unknown): void;
    name: string;
}
const ControlButton: FunctionComponent<ControlButtonProps> = (props) => {
    const { value, onClick, name } = props;
    return <Button<unknown> className="btn btn-link" item={value} onClick={onClick}>
        <DisplayValue value={value} name={name} />
    </Button>
}

const Toggle: FunctionComponent<ToggleProps> = (props) => {
    const { onChange, value, valueOn, valueOff, minimal, name } = props;

    const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.checked ? valueOn : valueOff);
    const valueExists = value !== undefined && value !== null;
    const showOnOffButtons = !minimal || (minimal && !valueExists);
    return (
        <div>
            {showOnOffButtons && <ControlButton value={valueOff} name={name} onClick={onChange} />}
            {valueExists ? (
                <div className="form-check form-switch form-check-inline align-middle me-0">
                    <input className="form-check-input" type="checkbox" checked={value === valueOn} onChange={onCheckboxChange} />
                </div>
            ) : <i className="fa fa-question" title="Current value unknown"></i>}
            {showOnOffButtons && <ControlButton value={valueOn} name={name} onClick={onChange} />}

        </div>
    )
}

export default Toggle;
