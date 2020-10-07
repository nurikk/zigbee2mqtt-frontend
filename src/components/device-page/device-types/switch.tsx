import React, { ChangeEvent, Component } from "react";
import { StateApi } from "../../../actions";
import { Device, DeviceState, Endpoint } from "../../../types";

interface SwitchProps {
  device: Device;
  deviceState: DeviceState;
  endpoint?: Endpoint;
  property: string;

}

const isOn = (value: string | number | boolean): boolean => value === "ON" || value === true || value === 1;

export default class Switch extends Component<SwitchProps & Pick<StateApi, 'setStateValue'>, {}> {
  onFeatureChange = (name: string, value: string | number | boolean | object) => {
    const { setStateValue, device, endpoint } = this.props;
    setStateValue(`${device.friendly_name}${endpoint ? `/${endpoint}` : ''}`, name, value);
  }
  onSwitchToggle = (e: ChangeEvent<HTMLInputElement>) => {
    //TODO: fix this
    const { property = 'state' } = this.props;
    this.onFeatureChange(property, e.target.checked ? "ON" : "OFF");
  }
  render() {
    const { deviceState, property = 'state' } = this.props;
    return <table className="table table-borderless align-middle">
      <tbody>
        <tr>
          <th scope="row">{property}</th>
          <td>
            <div className="form-check form-switch">
              <input
                type="checkbox"
                checked={isOn(deviceState[property] as string | number | boolean)}
                className="form-check-input"
                onChange={this.onSwitchToggle} />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  }
}
