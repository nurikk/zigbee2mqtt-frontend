import { FunctionalComponent, h, RefObject } from "preact";
import { forwardRef } from "preact/compat";


interface UniversalEditorProps {
    readonly: boolean;
    value: unknown;
    onChange(value: unknown): void;
    [k: string]: unknown;
}


const UniversalEditor: FunctionalComponent<UniversalEditorProps> = forwardRef((props, ref: RefObject<HTMLInputElement>) => {
    const { value, onChange, ...rest } = props;
    const changeHandler = (event: Event) => {
        const { target } = event as unknown as {target: HTMLInputElement};
        switch (target.type) {
            case "checkbox":
                onChange(target.checked);
                break;
            case "number":
                target.valueAsNumber != value && onChange(target.valueAsNumber);
                break;
            default:
                target.value != value && onChange(target.value);
                break;
        }
    };
    switch (typeof value) {
        case "boolean":
            return <input ref={ref} {...rest} type="checkbox" checked={value} onChange={changeHandler}
                          class="form-check-input" />;
        case "number":
            return <input step="any" ref={ref} {...rest} type="number" value={value} onBlur={changeHandler} />;
        default:
            return <input ref={ref} {...rest} type="text" value={value as string} onBlur={changeHandler} />;
    }
});
export default UniversalEditor;