import React, { ChangeEvent, Component } from "react";
import { StateApi } from "../../../actions";
import { Device, DeviceState, Endpoint } from "../../../types";
import Toggle from "../../toggle";


interface SwitchProps extends StateApi {
  device: Device;
  deviceState: DeviceState;
  endpoint?: Endpoint;

}


export default class Switch extends Component<SwitchProps, {}> {
  onFeatureChange = (name: string, value: string | number | boolean | object) => {
    const { setStateValue, device, endpoint } = this.props;
    setStateValue(`${device.friendly_name}${endpoint ? `/${endpoint}` : ''}`, name, value);
  }
  onSwitchToggle = (e: ChangeEvent<HTMLInputElement>) => {
    this.onFeatureChange("state", e.target.checked ? "ON" : "OFF");
  }
  render() {
    const { deviceState } = this.props;
    return <table className="table table-borderless align-middle">
      <tbody>
        <tr>
          <td>Switch</td>
          <td>
            <div className="form-check form-switch">
              <input
                type="checkbox"
                checked={deviceState["state"] == 'ON'}
                className="form-check-input"
                onChange={this.onSwitchToggle} />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  }
}
