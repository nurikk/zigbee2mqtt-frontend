import React, { ChangeEvent, Component } from "react";
import { StateApi } from "../../../actions";
import { Device, DeviceState, Endpoint } from "../../../types";

interface SwitchProps {
  device: Device;
  deviceState: DeviceState;
  endpoint?: Endpoint;
}

const isOn = (value: string | number | boolean): boolean => value === "ON" || value === true || value === 1;
const PROP_NAME = 'state';

export default class Switch extends Component<SwitchProps & Pick<StateApi, 'setStateValue'>, {}> {

  static getPropName(endpoint: Endpoint) { return endpoint === undefined ? PROP_NAME : `${PROP_NAME}_${endpoint}` };

  onFeatureChange = (name: string, value: string | number | boolean | object) => {
    const { setStateValue, device } = this.props;
    setStateValue(device.friendly_name, name, value);
  }
  onSwitchToggle = (e: ChangeEvent<HTMLInputElement>) => {
    const { endpoint } = this.props;
    this.onFeatureChange(Switch.getPropName(endpoint), e.target.checked ? "ON" : "OFF");
  }
  render() {
    const { deviceState, endpoint } = this.props;
    return <div className="form-check form-switch">
      <input
        type="checkbox"
        checked={isOn(deviceState[Switch.getPropName(endpoint)] as string | number | boolean)}
        className="form-check-input"
        onChange={this.onSwitchToggle} />
    </div>;
  }
}
