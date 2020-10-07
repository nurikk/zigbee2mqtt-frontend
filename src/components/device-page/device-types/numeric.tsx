import React, {  Component, Fragment } from "react";

import { Device, DeviceState, Endpoint } from "../../../types";

interface NumericProps {
  device: Device;
  deviceState: DeviceState;
  endpoint?: Endpoint;
  property: string;
  unit: string;
}

export default class Numeric extends Component<NumericProps, {}> {
  render() {
    const { deviceState, property, unit } = this.props;
    return <Fragment><strong>{deviceState[property] ?? "N/A"}</strong> <small className="text-muted">{unit}</small></Fragment>
  }
}
