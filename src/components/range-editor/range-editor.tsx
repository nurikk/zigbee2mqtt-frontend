import React, { FunctionComponent, InputHTMLAttributes, useEffect, useState } from "react";
import cx from "classnames";
import EnumEditor, { ValueWithLabelOrPrimitive } from "../enum-editor/enum-editor";



type RangeProps = {
    value: number;
    valueStep?: number;
    unit?: string;
    onChange(value: number): void;
    steps?: ValueWithLabelOrPrimitive[];
    minimal?: boolean;
}

const RangeEditor: FunctionComponent<RangeProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>> = (props) => {
    const { onChange, value, valueStep, min, max, unit, steps, minimal, ...rest } = props;
    const [currentValue, setCurrentValue] = useState<number>(value)

    useEffect(() => {
        setCurrentValue(value)
    }, [value]);

    const showRange = min !== undefined && max !== undefined;
    return <div className="input-group align-items-center">
        {!minimal && steps ? <EnumEditor values={steps} onChange={onChange} value={currentValue} /> : null}
        {showRange ? <input
            min={min}
            max={max}
            step={valueStep}
            type="range"
            className="form-range form-control border-0"
            value={currentValue}
            onChange={e => setCurrentValue(e.target.valueAsNumber)}
            onTouchEnd={(() => onChange(currentValue))}
            onMouseUp={(() => onChange(currentValue))}
            {...rest}
        /> : null}
        {(!minimal || !showRange) && <input
            type="number"
            className={cx("form-control", { 'ms-1': showRange })}
            value={currentValue}
            step={valueStep}
            onChange={e => setCurrentValue(e.target.valueAsNumber)}
            onBlur={() => onChange(currentValue)}
            min={min}
            max={max}
            {...rest}
            style={showRange ? { 'maxWidth': '100px' } : {}}
        />}
        {(!minimal && unit) ? <span className="input-group-text" style={{ 'minWidth': '66px' }}>{unit}</span> : null}
    </div>
}

export default RangeEditor;
