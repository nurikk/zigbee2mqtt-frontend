import React, {  Component, Fragment } from "react";

import { Device, DeviceState, Endpoint } from "../../../types";

interface BooleanProps {
  device: Device;
  deviceState: DeviceState;
  endpoint?: Endpoint;
  property: string;
}

export default class Boolean extends Component<BooleanProps, {}> {
  render() {
    const { deviceState, property } = this.props;
    return <Fragment><strong>{deviceState[property] ? 'TRUE' : 'FALSE'}</strong></Fragment>
  }
}
