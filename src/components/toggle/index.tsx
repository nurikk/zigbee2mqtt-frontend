import React, { ChangeEvent, Fragment, FunctionComponent, useState } from "react";
import { randomString } from "../../utils";
import Button from "../button";

type ToggleProps = {
  name: string;
  onChange(value: object): void;

  value: unknown;
  valueOn: unknown;
  valueOff: unknown;
  label?: string;
}


const Toggle: FunctionComponent<ToggleProps> = (props) => {
  const { onChange, name, value, label, valueOn, valueOff } = props;
  const [id, setId] = useState<string>(randomString(5));
  const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => onChange({ [name]: e.target.checked ? valueOn : valueOff });
  return (
    <Fragment>
      <Button<unknown> className="btn btn-link pl-0" item={valueOff} onClick={(item) => onChange({ [name]: item })}>{valueOff}</Button>
      <div className="form-check form-switch d-inline-block">
        <input className="form-check-input" type="checkbox" id={id} checked={value === valueOn} onChange={onCheckboxChange} />
        {label ? <label className="form-check-label" htmlFor={id}>{label}</label> : null}
      </div>
      <Button<unknown> className="btn btn-link" item={valueOn} onClick={(item) => onChange({ [name]: item })}>{valueOn}</Button>
    </Fragment>
  )
}

export default Toggle;
