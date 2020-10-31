import React, { ChangeEvent, Fragment, FunctionComponent, useState } from "react";
import { randomString } from "../../utils";
import Button from "../button";

type ToggleProps = {
  onChange(value: unknown): void;

  value: unknown;
  valueOn: unknown;
  valueOff: unknown;
  label?: string;
}


const Toggle: FunctionComponent<ToggleProps> = (props) => {
  const { onChange, value, label, valueOn, valueOff } = props;
  const [id, setId] = useState<string>(randomString(5));
  const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.checked ? valueOn : valueOff);
  const valueExists = value !== undefined && value !== null;
  return (
    <Fragment>
      <Button<unknown> className="btn btn-link pl-0" item={valueOff} onClick={(item) => onChange(item)}>{valueOff}</Button>
      {valueExists ? (
        <div className="form-check form-switch d-inline-block">
        <input className="form-check-input" type="checkbox" id={id} checked={value === valueOn} onChange={onCheckboxChange} />
        {label ? <label className="form-check-label" htmlFor={id}>{label}</label> : null}
      </div>
      ): <i className="fa fa-question" title="Current value unknown"></i> }
      <Button<unknown> className="btn btn-link" item={valueOn} onClick={(item) => onChange(item)}>{valueOn}</Button>
    </Fragment>
  )
}

export default Toggle;
