/* eslint-disable @typescript-eslint/camelcase */
import React, { ChangeEvent, FunctionComponent, useState } from "react";
import Button from "../button";

import { randomString } from "../../utils";

const togglePairs = new Map<string | boolean, string | boolean>([
  ['ON', 'OFF'],
  ['OFF', 'ON'],
  ['OPEN', 'CLOSE'],
  ['CLOSE', 'OPEN'],
  ['LOCK', 'UNLOCK'],
  ['UNLOCK', 'LOCK'],
  [true, false],
  [false, true]
]);


type ToggleProps = {
  name: string;
  onChange(value: object): void;

  value: unknown;
  value_on: unknown;
  value_off: unknown;
  label?: string;
}


const Toggle: FunctionComponent<ToggleProps> = (props) => {
  const { onChange, name, value, label, value_on, value_off } = props;
  const [id, setId] = useState<string>(randomString(5));
  const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => onChange({ [name]: e.target.checked ? value_on : value_off });
  return (
    <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" id={id} checked={value === value_on} onChange={onCheckboxChange} />
      {label ? <label className="form-check-label" htmlFor={id}>{label}</label> : null}
    </div>
  )
}

export default Toggle;
