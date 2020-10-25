import React, { ChangeEvent, FunctionComponent, useState } from "react";
import { randomString } from "../../utils";

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
    <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" id={id} checked={value === valueOn} onChange={onCheckboxChange} />
      {label ? <label className="form-check-label" htmlFor={id}>{label}</label> : null}
    </div>
  )
}

export default Toggle;
