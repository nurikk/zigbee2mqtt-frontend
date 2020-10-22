import React, { useState, ChangeEvent, InputHTMLAttributes, useEffect } from "react";

import Button from "../button";
import RangeEditor from "../range-editor/range-editor";

interface UniversalEditorProps {
    values?: unknown[];
    onChange(arg1: unknown): void;
}

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

const BluringInput: React.FunctionComponent<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>> = (props) => {
    const { onChange, value, ...rest } = props;
    const [internalValue, setInternalValue] = useState(value);
    useEffect(() => {
        setInternalValue(value);
    }, [value]);


    return <input
        value={internalValue}
        onBlur={() => onChange({ target: { value: internalValue } } as ChangeEvent<HTMLInputElement>)}
        onChange={e => setInternalValue(e.target.value)}
        {...rest} />
}

const UniversalEditor: React.FunctionComponent<InputHTMLAttributes<unknown> & UniversalEditorProps> = (props) => {
    const { value, values, onChange, disabled, name, ...rest } = props;

    const isToggleParameter = togglePairs.has(value as string | boolean);


    if (values) {
        return (<select className="form-select"
            disabled={disabled}
            value={value as string}
            onChange={e => onChange(e.target.value)}>
            {values.map(val => <option key={val as string} value={val as string}>{val as string}</option>)}
        </select>)
    }
    switch (typeof value) {
        case "boolean":
            return (
                <div className="form-check form-switch">
                    <input type="checkbox" className="form-check-input"
                        disabled={disabled}
                        checked={value as boolean}
                        onChange={e => onChange(e.target.checked)}
                        {...rest} />
                </div>
            );
        case "number":
            return (<div className="row">
                <div className="col-9">
                    <RangeEditor disabled={disabled} value={value} onChange={v => onChange(v)} {...rest} />
                </div>
                <div className="col-3">
                    <input type="number" step="any" className="form-control col-2"
                        disabled={disabled}
                        value={value as number}
                        onChange={e => onChange(e.target.valueAsNumber)}
                        {...rest} />
                </div>


            </div >);
        default:
            if (isToggleParameter) {
                return (
                    <div className="row">
                        <div className="col-3">
                            <Button<string | boolean> title="Toggle" value="Toggle"
                                className="btn btn-primary"
                                disabled={disabled}
                                item={togglePairs.get(value as string | boolean)}
                                onClick={payload => onChange(payload)}>
                                <i className="fa fa-exchange-alt" />
                            </Button>
                        </div>
                        <div className="col-9">
                            <BluringInput type="text" className="form-control"
                                disabled={disabled}
                                value={value as string}
                                onChange={e => onChange(e.target.value)}
                                {...rest}
                            />
                        </div>
                    </div>
                );
            }
            return (<BluringInput type="text" className="form-control"
                disabled={disabled}
                value={value as string}
                onChange={e => onChange(e.target.value)}
                {...rest} />);


    }
};
export default UniversalEditor;