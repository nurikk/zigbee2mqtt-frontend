import React, { ChangeEvent, Fragment, FunctionComponent, useState } from "react";
import { randomString } from "../../utils";
import Button from "../button";
import { DisplayValue } from "../display-value/DisplayValue";


type ToggleProps = {
    onChange(value: unknown): void;
    value: unknown;
    name: string;
    valueOn: unknown;
    valueOff: unknown;
    label?: string;
    minimal?: boolean;
}
type ControlButtonProps = {
    value: unknown;
    onClick(value: unknown): void;
    name: string;
}
const ControlButton: FunctionComponent<ControlButtonProps> = (props) => {
    const { value, onClick, name } = props;
    return <Button<unknown> className="btn btn-link ps-0" item={value} onClick={onClick}>
        <DisplayValue value={value} name={name} />
    </Button>
}

const Toggle: FunctionComponent<ToggleProps> = (props) => {
    const { onChange, value, label, valueOn, valueOff, minimal, name } = props;
    const [id, setId] = useState<string>(randomString(5));
    const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.checked ? valueOn : valueOff);
    const valueExists = value !== undefined && value !== null;
    const showOnOffButtons = !minimal || (minimal && !valueExists);
    return (
        <Fragment>

            {showOnOffButtons && <ControlButton value={valueOff} name={name} onClick={onChange} />}
            {valueExists ? (
                <div className="form-check form-switch d-inline-block">
                    <input className="form-check-input" type="checkbox" id={id} checked={value === valueOn} onChange={onCheckboxChange} />
                    {label ? <label className="form-check-label" htmlFor={id}>{label}</label> : null}
                </div>
            ) : <i className="fa fa-question" title="Current value unknown"></i>}
            {showOnOffButtons && <ControlButton value={valueOn} name={name} onClick={onChange} />}

        </Fragment>
    )
}

export default Toggle;
