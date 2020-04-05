import { Component, ComponentChild, createRef, h, RefObject } from "preact";
import { Device, Dictionary } from "../../types";
import Editable from "../editable";
import style from "./style.css";
import { setState, setSimpleBind } from "../actions";

interface SimpleBindState {
    isOk: boolean;


    valueInputRefs: Dictionary<RefObject<HTMLInputElement | HTMLTextAreaElement>>;
    simpleBindInputRefs: Dictionary<RefObject<HTMLInputElement | HTMLTextAreaElement>>;
}


interface SimpleBindProps {
    device: Device;

}

type DeviceParamTuple = [string, string | number];

const getInputType = (value: string | number): string => {
    if (typeof value == "number") {
        return "number";
    }
    return "text";
};

export default class SimpleBind extends Component<SimpleBindProps, SimpleBindState> {


    constructor() {
        super();
        this.state = {
            isOk: false,
            valueInputRefs: {},
            simpleBindInputRefs: {}

        };
    }

    createRefs(): void {
        const { device } = this.props;
        const valueInputRefs = {};
        const simpleBindInputRefs = {};
        Object.keys(device.st).forEach((name) => {
            valueInputRefs[name] = createRef<HTMLInputElement | HTMLTextAreaElement>();
            simpleBindInputRefs[name] = createRef<HTMLInputElement | HTMLTextAreaElement>();
        });
        this.setState({ simpleBindInputRefs, valueInputRefs, isOk: true });
    }

    componentDidMount(): void {
        this.createRefs();
    }


    setValue = (name: string, value: string): void => {
        const { device } = this.props;
        setState(device.ieeeAddr, name, value, (err, response) => {

        });
    };
    setSimpleBind = (name: string, value: string): void => {
        const { device } = this.props;
        setSimpleBind(device.ieeeAddr, name, value, (err, response) => {

        });
    };


    render(): ComponentChild {
        const { valueInputRefs, simpleBindInputRefs, isOk } = this.state;
        const { device } = this.props;
        if (isOk) {
            const simpleBindRules: Dictionary<string> = device.SB ?? {};

            const kv = Object.entries(device.st);

            return <table class="table table-striped table-borderless">
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Value</th>
                    <th scope="col">SB rule</th>
                </tr>
                </thead>
                <tbody>
                {kv.map((param: DeviceParamTuple) => (
                    <tr class={style["props-row"]}>
                        <td>{param[0]}</td>
                        <td class={style["value-col"]}>
                            <Editable
                                text={param[1]}
                                placeholder="Set value"
                                childRef={valueInputRefs[param[0]]}
                                type="input"
                            >
                                <input
                                    ref={valueInputRefs[param[0]] as RefObject<HTMLInputElement>}
                                    type={getInputType(param[1])}
                                    className="form-control form-control-sm"
                                    value={param[1]}
                                    onChange={(e: Event) => this.setValue(param[0], (e.target as HTMLInputElement).value)}
                                />
                            </Editable>
                        </td>
                        <td>
                            <Editable
                                text={simpleBindRules[param[0]]}
                                placeholder="Click to enter simple bind rule"
                                childRef={simpleBindInputRefs[param[0]]}
                                type="textarea"
                            >
                                <input
                                    ref={simpleBindInputRefs[param[0]] as RefObject<HTMLInputElement>}
                                    type="text"
                                    className="form-control form-control-sm"
                                    value={simpleBindRules[param[0]]}
                                    onChange={(e: Event) => this.setSimpleBind(param[0], (e.target as HTMLInputElement).value)}
                                />
                                {/*<textarea*/}
                                {/*    ref={simpleBindInputRefs[param[0]]}*/}
                                {/*    name="description"*/}
                                {/*    className="form-control"*/}
                                {/*    rows={1}*/}
                                {/*    value={simpleBindRules[param[0]]}*/}
                                {/*    onChange={this.setSimpleBind}*/}
                                {/*/>*/}
                            </Editable>
                        </td>
                    </tr>
                ))}


                </tbody>
            </table>;
        }
    }
}