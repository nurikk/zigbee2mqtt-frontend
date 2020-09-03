import { FunctionalComponent, h, RefObject } from "preact";
import { forwardRef } from "preact/compat";
import findKey from "lodash/findKey";

interface UniversalEditorProps {
    value: unknown;
    values?: unknown[];
    readonly?: boolean;
    onChange(value: unknown): void;
    [k: string]: unknown;
}

const togglePairs: { [k: string]: boolean } = {
    ON: true,
    OFF: false
};



const UniversalEditor: FunctionalComponent<UniversalEditorProps> = forwardRef((props, ref: RefObject<HTMLInputElement | HTMLSelectElement>) => {
    const { value, values, onChange, ...rest } = props;
    const isToggleParameter = value in togglePairs;
    const changeHandler = (event: Event) => {

        const { target } = event as unknown as { target: HTMLInputElement | HTMLSelectElement };
        switch (target.type) {
            case "checkbox":
                if (isToggleParameter) {
                    const key = findKey(togglePairs, v => (target as HTMLInputElement).checked === v);
                    onChange(key);
                }
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
        return (<select ref={ref as RefObject<HTMLSelectElement>} class="form-select" onChange={changeHandler}>
            {values.map(val => <option selected={val === value} value={val as string}>{val as string}</option>)}
        </select>)
    }
    switch (typeof value) {
        case "boolean":
            return (
                <div class="form-check form-switch">
                    <input ref={ref as RefObject<HTMLInputElement>} class="form-check-input" type="checkbox" {...rest} checked={value} onChange={changeHandler} />
                </div>
            );
        case "number":
            return (<div class="row">
                <div class="col-10">
                    <input min={0} max={255} type="range" class="form-range" value={value} onChange={changeHandler} {...rest} />
                </div>
                <div class="col-2">
                    <input min={0} max={255} className="form-control col-2" step="any" ref={ref as RefObject<HTMLInputElement>} {...rest} type="number" value={value} onBlur={changeHandler} />
                </div>


            </div >);
        default:
            if (isToggleParameter) {
                return (
                    <div class="row">
                        <div class="col-2">
                            <div class="form-check form-switch">
                                <input ref={ref as RefObject<HTMLInputElement>} class="form-check-input" type="checkbox" {...rest} checked={togglePairs[value as string]} onChange={changeHandler} />
                            </div>
                        </div>
                        <div class="col-10">
                            <input className="form-control" ref={ref as RefObject<HTMLInputElement>} {...rest} type="text" value={value as string} onBlur={changeHandler} />
                        </div>
                    </div>
                );
            }
            return (<input className="form-control" ref={ref as RefObject<HTMLInputElement>} {...rest} type="text" value={value as string} onBlur={changeHandler} />);


    }
});
export default UniversalEditor;