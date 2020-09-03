import { Component, ComponentChild, h } from "preact";
import { Device, Dictionary } from "../../types";
import style from "./style.css";
import UniversalEditor from "../universal-editor";
import actions, { Actions } from "../../actions";
import isObject from "lodash/isObject";
import { connect } from "unistore/preact";
import { GlobalState } from "../../store";

interface PropsFromStore {
    devices: Device[];
    deviceStates: Dictionary<Device>;

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
    "contact"
];

const defaultInitialStates = [
    'state', 'brightness', 'color', 'color_temp'
];

class States extends Component<StatesProps & PropsFromStore & Actions, {}> {
    componentDidMount(): void {
        this.loadDefaultStates();
    }
    loadDefaultStates(): void {
        const { dev, getStateValue } = this.props;
        getStateValue(dev, defaultInitialStates);
    }
    setStateValue = (name: string, value: unknown): void => {
        const { setStateValue, dev, devices } = this.props;
        const device = devices.find(d => d.ieee_address == dev);
        setStateValue(device.friendly_name, name, value);
    };

    render(): ComponentChild {
        const { dev, devices, deviceStates } = this.props;
        const device = devices.find(d => d.ieee_address == dev);
        if (!device) {
            return "Unknown device";
        }
        const deviceState = deviceStates[device.friendly_name] ?? {};

        const kv = Object.entries(deviceState).filter(kvp => !isObject(kvp[1]))

        return <table class="table table-striped table-borderless">
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
        </table>;

    }
}

const mappedProps = ["devices", "forceRender", "deviceStates"];

const ConnectedDeviceStates = connect<StatesProps, {}, GlobalState, PropsFromStore>(mappedProps, actions)(States);
export default ConnectedDeviceStates;