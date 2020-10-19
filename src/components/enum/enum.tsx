import React, { FunctionComponent } from "react";
import Button from "../button";



type EnumProps = {
  name?: string;
  onChange(value: unknown): void;
  values: unknown[];
}

const Enum: FunctionComponent<EnumProps> = (props) => {
  const { name, onChange, values } = props;

  return <div className="input-group">
    <div className="btn-group mr-2">
      {
        values.map(v => <Button<unknown>
          className="btn btn-outline-secondary"
          onClick={item => onChange(name ? { [name]: item } : item)}
          key={v as string}
          item={v}
        >{v as string}</Button>)
      }
    </div>
  </div>;
}
export default Enum;