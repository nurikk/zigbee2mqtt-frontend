import React, { FunctionComponent } from "react";
import Button from "../button";

type Primitive = number | string;

export type ValueWithLabelOrPrimitive = {
  value: number;
  title: string;
} | Primitive;

type EnumProps = {
  name?: string;
  onChange(value: unknown): void;
  values: ValueWithLabelOrPrimitive[];
}


function isPrimitive(step: ValueWithLabelOrPrimitive): step is Primitive {
  return ["number", "string"].includes(typeof step);
}

const EnumEditor: FunctionComponent<EnumProps> = (props) => {
  const { name, onChange, values } = props;
  return <div className="btn-group mr-2">
    {
      values.map(v => <Button<ValueWithLabelOrPrimitive>
        className="btn btn-outline-secondary"
        onClick={item => onChange(name ? { [name]: item } : item)}
        key={isPrimitive(v) ? v : v.title}
        item={isPrimitive(v) ? v : v.value}
      >{isPrimitive(v) ? v : v.title}</Button>)
    }
  </div>;
}
export default EnumEditor;