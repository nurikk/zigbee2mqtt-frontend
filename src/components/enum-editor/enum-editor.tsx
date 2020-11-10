import React, { FunctionComponent } from "react";

import cx from "classnames";

import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';


type Primitive = number | string;

export type ValueWithLabelOrPrimitive = {
  value: number;
  label: string;
} | Primitive;

type EnumProps = {
  value?: ValueWithLabelOrPrimitive;
  onChange(value: unknown): void;
  values: ValueWithLabelOrPrimitive[];
}


function isPrimitive(step: ValueWithLabelOrPrimitive): step is Primitive {
  return ["number", "string", "undefined"].includes(typeof step);
}

const EnumEditor: FunctionComponent<EnumProps> = (props) => {
  const { onChange, values, value } = props;
  return <ToggleButtonGroup exclusive value={isPrimitive(value) ? value : value.value} color="primary" onChange={(e, val) => onChange(val)}>
    {
      values.map(v => <ToggleButton
        value={isPrimitive(v) ? v : v.value}
        key={isPrimitive(v) ? v : v.label}
        className={cx({ active: isPrimitive(v) ? v === value : v.value == (isPrimitive(value) ? value : value?.value) })}
      >{isPrimitive(v) ? v : v.label}</ToggleButton>)
    }
  </ToggleButtonGroup>;
}
export default EnumEditor;