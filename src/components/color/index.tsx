import React, { FunctionComponent, InputHTMLAttributes } from "react";
import * as convertColors from "color-convert";

import { AnyColor, XYColor } from "../../types";
import { cie_to_rgb, rgb_to_cie } from "../../utils";
import Button from "../button";
type Payload = AnyColor;

export type ColorFormat = "xy" | "xs";
type ColorProps = {
  value: Payload;
  steps?: string[];
  brightness: number;
  format: ColorFormat;
  onChange(name: string, value: unknown): void;
}

const hexToTargetFormat = (value: string, format: ColorFormat) => {
  let color;
  switch (format) {
    case "xy":
      {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const [r, g, b] = convertColors.hex.rgb(value);
        const [x, y] = rgb_to_cie(r, g, b);
        return {
          x, y
        }
      }

    default:
      break;
  }

  return color;
}
const pridePallete = ['#FF0018', '#FFA52C', '#FFFF41', '#008018', '#0000F9', '#86007D'];
const Color: FunctionComponent<ColorProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>> = (props) => {
  const { onChange, name, value = {}, brightness = 255, format, steps = pridePallete, ...rest } = props;
  let hexValue = '#000000';
  switch (format) {
    case "xy":
      const { x, y } = value as XYColor;
      hexValue = '#' + convertColors.rgb.hex(cie_to_rgb(x, y, brightness));
      break;
    default:
      break;
  }

  return <div className="input-group mb-3">
    <div className="btn-group mr-2">
      {
        steps.map(step => <Button<string>
          className="btn"
          style={{ backgroundColor: step }}
          key={step}
          item={step}
          title={step}
          onClick={(item) => onChange(name, hexToTargetFormat(item, format))}>&nbsp;&nbsp;&nbsp;</Button>)
      }
    </div>
    <input
      type="color"
      className="form-control form-control-color border-0 p-0"
      value={hexValue}
      onChange={e => {
        onChange(name, hexToTargetFormat(e.target.value, format))
      }}
      {...rest}
    />
  </div>

}

export default Color;
