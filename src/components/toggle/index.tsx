import React, { ChangeEvent, Fragment, FunctionComponent, useState } from "react";
import { randomString } from "../../utils";
import Button from "../button";
import { DisplayValue } from "../DisplayValue";

type ToggleProps = {
    onChange(value: unknown): void;
    value: unknown;
    valueOn: unknown;
    valueOff: unknown;
    label?: string;
    minimal?: boolean;
}


const Toggle: FunctionComponent<ToggleProps> = (props) => {
    const { onChange, value, label, valueOn, valueOff, minimal } = props;
    const [id, setId] = useState<string>(randomString(5));
    const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.checked ? valueOn : valueOff);
    const valueExists = value !== undefined && value !== null;
    const showOnOffButtons =  !minimal || (minimal && !valueExists);
    return (
        <Fragment>
            {showOnOffButtons && <Button<unknown> className="btn btn-link ps-0" item={valueOff} onClick={(item) => onChange(item)}><DisplayValue value={valueOff} /></Button>}
            {valueExists ? (
                <div className="form-check form-switch d-inline-block">
                    <input className="form-check-input" type="checkbox" id={id} checked={value === valueOn} onChange={onCheckboxChange} />
                    {label ? <label className="form-check-label" htmlFor={id}>{label}</label> : null}
                </div>
            ) : <i  className="fa fa-question" title="Current value unknown"></i>}
            {showOnOffButtons && <Button<unknown> className="btn btn-link" item={valueOn} onClick={(item) => onChange(item)}><DisplayValue value={valueOn} /></Button>}
        </Fragment>
    )
}

export default Toggle;
