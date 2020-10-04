import React, { FunctionComponent } from "react";
import Button from "../button";

const togglePairs = new Map<string | boolean, string | boolean>([
  ['ON', 'OFF'],
  ['OFF', 'ON'],
  ['OPEN', 'CLOSE'],
  ['CLOSE', 'OPEN'],
  ['LOCK', 'UNLOCK'],
  ['UNLOCK', 'LOCK'],
  [true, false],
  [false, true]
]);


type Payload = string | boolean;
type ToggleProps = {
  name: string;
  value: Payload;
  onChange(value: object): void;
}


const Toggle: FunctionComponent<ToggleProps> = (props) => {
  const { onChange, name, value } = props;
  return <div className="input-group">
    <div className="input-group">
      <span className="input-group-text">{value}</span>
      <Button<string | boolean> title="Toggle" value="Toggle"
        className="btn btn-primary"
        item={togglePairs.get(value as string | boolean)}
        onClick={payload => onChange({ [name]: payload })}>
        <i className="fa fa-exchange-alt" />
      </Button>
    </div>

  </div>
}

export default Toggle;
