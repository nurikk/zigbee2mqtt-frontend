import React, { FunctionComponent, InputHTMLAttributes } from "react";
import Button from "../button";

type Payload = number;
export type RangeStep = {
  title: string;
  stepValue: number;
}
type RangeProps = {
  value: Payload;
  onChange(name: string, value: Payload): void;
  steps?: number[] | RangeStep[];
}

function isStep(step: number | RangeStep): step is RangeStep {
  return typeof step !== "number";
}

const Range: FunctionComponent<RangeProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>> = (props) => {
  const { onChange, name, value, min = 0, max = 100, steps, ...rest } = props;
  const stepEls = [];
  steps && steps.forEach((step: number | RangeStep) => {
    let stepValue: number, title: string;
    if (isStep(step)) {
      stepValue = step.stepValue;
      title = step.title;
    } else {
      stepValue = step;
      title = step + '';
    }
    stepEls.push(<Button<number>
      className="btn btn-outline-secondary"
      onClick={item => onChange(name, item)}
      key={title}
      item={stepValue}
    >{title as string}</Button>);
  })

  return <div className="input-group">
    <div className="btn-group mr-2">
      {stepEls}
    </div>
    <input
      min={min}
      max={max}
      type="range"
      className="form-range form-control border-0"
      value={value}
      onChange={e => onChange(name, e.target.valueAsNumber)}
      {...rest}
    />
  </div>
}

export default Range;
