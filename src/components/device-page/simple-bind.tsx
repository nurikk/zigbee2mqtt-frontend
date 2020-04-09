import { Component, ComponentChild, h } from "preact";
import { Device, Dictionary } from "../../types";
import style from "./style.css";
import UniversalEditor from "../universal-editor";

interface SimpleBindProps {
    setStateValue?(dev: string, name: string, value: unknown): void;

    setSimpleBindValue?(dev: string, name: string, value: unknown): void;

    device: Device;
}

type DeviceParamTuple = [string, unknown];


export default class SimpleBind extends Component<SimpleBindProps, {}> {
    setStateValue = (name: string, value: unknown): void => {
        const { setStateValue, device } = this.props;
        setStateValue && setStateValue(device.nwkAddr, name, value);
    };
    setSimpleBind = (name: string, value: unknown): void => {
        const { device, setSimpleBindValue } = this.props;
        setSimpleBindValue && setSimpleBindValue(device.nwkAddr, name, value);
    };


    render(): ComponentChild {
        const { device } = this.props;
        const simpleBindRules: Dictionary<string> = device.SB ?? {};

        const kv = Object.entries(device.st ?? {});


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
                            onChange={(value) => this.setStateValue(param[0], value)}
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