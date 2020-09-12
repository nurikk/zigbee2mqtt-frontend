import React, { useState, ChangeEvent, InputHTMLAttributes } from "react";

import Button from "../button";

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


const UniversalEditor: React.FunctionComponent<InputHTMLAttributes<unknown> & UniversalEditorProps> = (props) => {
    const { value, values, onChange, disabled, ...rest } = props;
    const [innerValue, setInnerValue] = useState<unknown>(value);
    const isToggleParameter = togglePairs.has(value as string | boolean);

    if (innerValue != value && !disabled) {
        console.log({ innerValue, value });
        onChange(innerValue);
    }

    if (values) {
        return (<select className="form-select"
            disabled={disabled}
            value={value as string}
            onChange={e => setInnerValue(e.target.value)}>
            {values.map(val => <option key={val as string} value={val as string}>{val as string}</option>)}
        </select>)
    }
    switch (typeof value) {
        case "boolean":
            return (
                <div className="form-check form-switch">
                    <input type="checkbox" className="form-check-input"
                        disabled={disabled}
                        checked={innerValue as boolean}
                        onChange={e => setInnerValue(e.target.checked)}
                        {...rest} />
                </div>
            );
        case "number":
            return (<div className="row">
                <div className="col-9">
                    <input type="range" className="form-range align-middle"
                        disabled={disabled}
                        value={innerValue as number}
                        onChange={e => setInnerValue(e.target.valueAsNumber)}
                        {...rest} />
                </div>
                <div className="col-3">
                    <input type="number" step="any" className="form-control col-2"
                        disabled={disabled}
                        value={innerValue as number}
                        onChange={e => setInnerValue(e.target.valueAsNumber)}
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
                                onClick={payload => setInnerValue(payload)}>
                                <i className="fa fa-exchange-alt" />
                            </Button>
                        </div>
                        <div className="col-9">
                            <input type="text" className="form-control"
                                disabled={disabled}
                                value={innerValue as string}
                                onChange={e => setInnerValue(e.target.value)}
                                {...rest}
                            />
                        </div>
                    </div>
                );
            }
            return (<input type="text" className="form-control"
                disabled={disabled}
                value={innerValue as string}
                onChange={e => setInnerValue(e.target.value)}
                {...rest} />);


    }
};
export default UniversalEditor;