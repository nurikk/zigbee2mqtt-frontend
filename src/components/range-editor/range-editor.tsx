import React, { FunctionComponent, InputHTMLAttributes, useEffect, useState } from "react";

import EnumEditor, { ValueWithLabelOrPrimitive } from "../enum-editor/enum-editor";



type RangeProps = {
  value: number;
  onChange(value: object | number): void;
  steps?: ValueWithLabelOrPrimitive[];
}

const RangeEditor: FunctionComponent<RangeProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>> = (props) => {
  const { onChange, name, value, min = 0, max = 100, steps, ...rest } = props;
  const [currentValue, setCurrentValue] = useState<number>(value)

  useEffect(() => {
    setCurrentValue(value)
  }, [value]);
  return <div className="input-group">
    {steps ? <EnumEditor name={name} values={steps} onChange={onChange} /> : null}
    <input
      min={min}
      max={max}
      type="range"
      className="form-range form-control border-0"
      value={currentValue}
      onChange={e => setCurrentValue(e.target.valueAsNumber)}
      onMouseUp={(() => onChange(name ? { [name]: currentValue } : currentValue))}
      {...rest}
    />
  </div>
}

export default RangeEditor;
