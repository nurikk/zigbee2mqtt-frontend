import React, { Fragment, FunctionComponent, InputHTMLAttributes, useEffect, useState } from "react";

import EnumEditor, { ValueWithLabelOrPrimitive } from "../enum-editor/enum-editor";



type RangeProps = {
  value: number;
  unit?: string;
  onChange(value: object | number): void;
  steps?: ValueWithLabelOrPrimitive[];
}

const RangeEditor: FunctionComponent<RangeProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>> = (props) => {
  const { onChange, value, min, max, unit, steps, ...rest } = props;
  const [currentValue, setCurrentValue] = useState<number>(value)

  useEffect(() => {
    setCurrentValue(value)
  }, [value]);
  return <div className="input-group">
    {steps ? <EnumEditor values={steps} onChange={onChange} /> : null}
    {min !== undefined && max !== undefined ? <input
      min={min}
      max={max}
      type="range"
      className="form-range form-control border-0"
      value={currentValue}
      onChange={e => setCurrentValue(e.target.valueAsNumber)}
      onMouseUp={(() => onChange(currentValue))}
      {...rest}
    /> :
      <Fragment>
        <input
          type="number"
          className="form-control"
          value={currentValue}
          onChange={e => setCurrentValue(e.target.valueAsNumber)}
          onBlur={() => onChange(currentValue)}
          {...rest}
        />
        {unit ? <span className="input-group-text">{unit}</span> : null}
      </Fragment>

    }
  </div>
}

export default RangeEditor;
