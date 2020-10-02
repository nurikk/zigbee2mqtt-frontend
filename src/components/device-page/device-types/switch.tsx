import React, { Component } from "react";
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
  render() {
    const { deviceState } = this.props;
    return <table className="table table-borderless align-middle">
      <tbody>
        <tr>
          <td>State</td>
          <td>
            <Toggle
              onChange={this.onFeatureChange}
              name="state"
              value={deviceState["state"] ?? 'OFF' as string}
            />
          </td>
        </tr>
      </tbody>
    </table>
  }
}
