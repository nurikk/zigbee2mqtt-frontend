import React, { Fragment, FunctionComponent, InputHTMLAttributes, useEffect, useState } from "react";
import { randomString } from "../../utils";
import cx from "classnames";
import EnumEditor, { ValueWithLabelOrPrimitive } from "../enum-editor/enum-editor";
import { Mark, Slider } from "@material-ui/core";



type RangeProps = {
  value: number;
  unit?: string;
  onChange(value: object | number): void;
  steps?: ValueWithLabelOrPrimitive[];
}

const RangeEditor: FunctionComponent<RangeProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>> = (props) => {
  const { onChange, value, min, max, unit, steps, ...rest } = props;
  const [id, setId] = useState<string>(randomString(5));
  const [currentValue, setCurrentValue] = useState<number>(value)

  useEffect(() => {
    setCurrentValue(value)
  }, [value]);

  const showRange = min !== undefined && max !== undefined;

  return ( <Slider
    defaultValue={20}
    min={min as number}
    max={max as number}
    aria-labelledby="discrete-slider-custom"
    step={10}
    valueLabelDisplay="auto"
    value={currentValue}
    onChange={(e, value) => setCurrentValue(value as number)}
    onChangeCommitted={(e, value) => onChange(value)}
    marks={steps as Mark[]}
  />
  )
  // return <div className="input-group">
  //   {steps ? <EnumEditor values={steps} onChange={onChange} /> : null}
  //   {showRange ? <input
  //     id={id}
  //     min={min}
  //     max={max}
  //     type="range"
  //     className="form-range form-control border-0"
  //     value={currentValue}
  //     onChange={e => setCurrentValue(e.target.valueAsNumber)}
  //     onMouseUp={(() => onChange(currentValue))}
  //     {...rest}
  //   /> : null}
  //   <input
  //     type="number"
  //     className={cx("form-control", {'ml-1': showRange})}
  //     value={currentValue}
  //     onChange={e => setCurrentValue(e.target.valueAsNumber)}
  //     onBlur={() => onChange(currentValue)}
  //     {...rest}
  //     style={showRange ? { 'maxWidth': '100px' } : null}
  //   />
  //   {unit ? <span className="input-group-text" style={{ 'minWidth': '66px' }}>{unit}</span> : null}
  // </div>
}

export default RangeEditor;
