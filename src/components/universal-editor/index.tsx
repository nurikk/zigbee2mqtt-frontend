import React, { RefObject, forwardRef, FocusEvent, ChangeEvent } from "react";
// import { forwardRef } from "react/compat";
import Button from "../button";

interface UniversalEditorProps {
    value: unknown;
    values?: unknown[];
    readonly?: boolean;
    onChange(value: unknown): void;
    [k: string]: unknown;
}

const toggleCommand = 'TOGGLE';
const togglableValues = ['ON', 'OFF'];


const UniversalEditor: React.FunctionComponent<UniversalEditorProps> = (props) => {
    const { value, values, onChange, ...rest } = props;
    const isToggleParameter = togglableValues.includes(value as string);
    const changeHandler = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {

        const { target } = event;
        switch (target.type) {
            case "checkbox":
                onChange((target as HTMLInputElement).checked);

                break;
            case "number":
                (target as HTMLInputElement).valueAsNumber != value && onChange((target as HTMLInputElement).valueAsNumber);
                break;
            default:
                target.value != value && onChange(target.value);
                break;
        }
    };
    if (values) {
        return (<select defaultValue={value as string} className="form-select" onChange={changeHandler}>
            {values.map(val => <option key={val as string} value={val as string}>{val as string}</option>)}
        </select>)
    }
    switch (typeof value) {
        case "boolean":
            return (
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" {...rest} defaultChecked={value} onChange={changeHandler} />
                </div>
            );
        case "number":
            return (<div className="row">
                <div className="col-9">
                    <input type="range" className="form-range align-middle" value={value} onBlur={changeHandler} {...rest} />
                </div>
                <div className="col-3">
                    <input className="form-control col-2" step="any" {...rest} type="number" defaultValue={value} onBlur={changeHandler} />
                </div>


            </div >);
        default:
            if (isToggleParameter) {
                return (
                    <div className="row">
                        <div className="col-3">
                            <Button<string> className="btn btn-primary" item={toggleCommand} title="Toggle" value="Toggle" onClick={onChange}>
                                <i className="fa fa-exchange-alt" />
                            </Button>
                        </div>
                        <div className="col-9">
                            <input className="form-control" {...rest} type="text" defaultValue={value as string} onBlur={changeHandler} />
                        </div>
                    </div>
                );
            }
            return (<input className="form-control" {...rest} type="text" defaultValue={value as string} onBlur={changeHandler} />);


    }
};
export default UniversalEditor;