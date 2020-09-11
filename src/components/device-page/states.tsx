import { Component, ComponentChild, h } from "preact";
import { Device, DeviceState } from "../../types";
import style from "./style.css";
import UniversalEditor from "../universal-editor";
import actions, { StateApi } from "../../actions";
import isObject from "lodash/isObject";
import { connect } from "unistore/preact";
import { GlobalState } from "../../store";

interface PropsFromStore {
    devices: Map<string, Device>;
    deviceStates: Map<string, DeviceState>;

}
interface StatesProps {
    dev?: string;
}
type DeviceParamTuple = [string, unknown];
const fieldProps = {
    brightness: {
        min: 0,
        max: 255
    },
    // eslint-disable-next-line @typescript-eslint/camelcase
    color_temp: {
        min: 0,
        max: 512
    }
}

const readonlyFields = [
    "battery",
    "last_seen",
    "linkquality",
    "voltage",
    "elapsed",
    "contact",
    "action",
    "click",
    "update",
    "update_available",
    "power"
];

class States extends Component<StatesProps & PropsFromStore & StateApi, {}> {
    setStateValue = (name: string, value: unknown): void => {
        const { setStateValue, dev, devices } = this.props;
        const device = devices.get(dev);
        setStateValue(device.friendly_name, name, value);
    };

    render(): ComponentChild {
        const { dev, devices, deviceStates } = this.props;
        const device = devices.get(dev);
        if (!device) {
            return "Unknown device";
        }
        const deviceState = deviceStates.get(device.friendly_name) ?? {};

        const kv = Object.entries(deviceState).filter(kvp => !isObject(kvp[1]))
        return (
            <div class="card">
                <table class="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col" />
                            <th scope="col">Value</th>
                        </tr>
                    </thead>
                    <tbody>
                        {kv.map((param: DeviceParamTuple) => (
                            <tr class={style["props-row"]}>
                                <th scope="row">{param[0]}</th>
                                <td class={style["value-col"]}>
                                    <UniversalEditor
                                        disabled={readonlyFields.includes(param[0])}
                                        value={param[1]}
                                        onChange={(value): void => this.setStateValue(param[0], value)}
                                        {...fieldProps[param[0]]}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );

    }
}

const mappedProps = ["devices", "deviceStates"];

const ConnectedDeviceStates = connect<StatesProps, {}, GlobalState, StateApi>(mappedProps, actions)(States);
export default ConnectedDeviceStates;
