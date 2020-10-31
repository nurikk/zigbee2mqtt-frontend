import React, { FunctionComponent } from "react";
import Button from "../button";
import cx from "classnames";
type Primitive = number | string;

export type ValueWithLabelOrPrimitive = {
  value: number;
  title: string;
} | Primitive;

type EnumProps = {
  value?: ValueWithLabelOrPrimitive;
  onChange(value: unknown): void;
  values: ValueWithLabelOrPrimitive[];
}


function isPrimitive(step: ValueWithLabelOrPrimitive): step is Primitive {
  return ["number", "string"].includes(typeof step);
}

const EnumEditor: FunctionComponent<EnumProps> = (props) => {
  const { onChange, values, value } = props;
  return <div className="btn-group mr-2">
    {
      values.map(v => <Button<ValueWithLabelOrPrimitive>
        className={cx("btn btn-outline-secondary", { active: isPrimitive(v) ? v === value : v.value == (isPrimitive(value) ? value : value?.value) })}
        onClick={item => onChange(item)}
        key={isPrimitive(v) ? v : v.title}
        item={isPrimitive(v) ? v : v.value}
      >{isPrimitive(v) ? v : v.title}</Button>)
    }
  </div>;
}
export default EnumEditor;