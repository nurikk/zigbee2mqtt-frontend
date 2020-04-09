import { Component, ComponentChild, FunctionalComponent, h, RefObject } from "preact";
import { Device, Dictionary } from "../../types";
import { setSimpleBind, setState } from "../actions";
import { forwardRef } from "preact/compat";
import style from "./style.css";

interface SimpleBindProps {
    device: Device;
}

type DeviceParamTuple = [string, unknown];


interface UniversalEditorProps {
    value: unknown;

    onChange(value: unknown): void;

    [k: string]: unknown;
}

const UniversalEditor: FunctionalComponent<UniversalEditorProps> = forwardRef((props, ref: RefObject<HTMLInputElement>) => {
    const { value, onChange, ...rest } = props;
    const changeHandler = (event) => {
        const { target } = event;
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

export default class SimpleBind extends Component<SimpleBindProps, {}> {
    setValue = (name: string, value: unknown): void => {
        const { device } = this.props;
        setState(device.nwkAddr, name, value, (err, response) => {
            //pass
        });
    };
    setSimpleBind = (name: string, value: unknown): void => {
        const { device } = this.props;
        setSimpleBind(device.nwkAddr, name, value, (err, response) => {
            //pass
        });
    };


    render(): ComponentChild {
        const { device } = this.props;
        const simpleBindRules: Dictionary<string> = device.SB ? device.SB : {};

        const kv = Object.entries(device.st);


        return <table class="table table-striped table-borderless">
            <thead>
            <tr>
                <th scope="col" />
                <th scope="col">Value</th>
                <th scope="col">SB rule</th>
            </tr>
            </thead>
            <tbody>
            {kv.map((param: DeviceParamTuple) => (
                <tr class={style["props-row"]}>
                    <th scope="row">{param[0]}</th>
                    <td class={style["value-col"]}>
                        <UniversalEditor
                            className="form-control-plaintext"
                            value={param[1]}
                            onChange={(value) => this.setValue(param[0], value)}
                        />
                    </td>
                    <td>
                        <UniversalEditor
                            className="form-control form-control-plaintext"
                            value={simpleBindRules[param[0]] || ""}
                            onChange={(value) => this.setSimpleBind(param[0], value)}
                        />
                    </td>
                </tr>
            ))}
            </tbody>
        </table>;

    }
}