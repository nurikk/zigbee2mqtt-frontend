import React, { FunctionComponent, InputHTMLAttributes, useEffect, useState } from "react";
import * as convertColors from "color-convert";
import { AnyColor, XYColor, HueSaturationColor } from "../../types";
import { scale } from "../../utils";
import Button from "../button";


type Payload = AnyColor;

export type ColorFormat = "color_xy" | "color_hs";
type ColorProps = {
  value: Payload;
  steps?: string[];
  brightness: number;
  format: ColorFormat;
  onChange(value: object): void;
}

const toRGB = (source: AnyColor, brightness: number, sourceFormat: ColorFormat): string => {
  switch (sourceFormat) {
    case "color_xy":
      {
        const { x, y } = source as XYColor;
        const z = 1.0 - x - y;
        const Y = parseFloat((brightness / 254).toFixed(2));
        const X = (Y / y) * x;
        const Z = (Y / y) * z;
        return '#' + convertColors.xyz.hex([X * 100.0, Y * 100.0, Z * 100.0]);
      }

    case "color_hs":
      {
        const { hue, saturation } = source as HueSaturationColor;
        return '#' + convertColors.hsv.hex([hue, saturation, scale(brightness, [1, 254], [0, 100])]);
      }
    default:
      return '#FFFFFF';
  }
}

const rgbToTargetFormat = (source: string, brightness: number, targetFormat: ColorFormat): object => {
  switch (targetFormat) {
    case "color_hs":
      const [h, s, v] = convertColors.hex.hsv(source);
      return {h, s};


    case "color_xy":
      const [X, Y, Z] = convertColors.hex.xyz(source);
      const x = X / (X + Y + Z);
      const y = Y / (X + Y + Z);
      return { x, y };

    default:
      return {hex: source};
  }

}
const pridePallete = ['#FF0018', '#FFA52C', '#FFFF41', '#008018', '#0000F9', '#86007D'];
const ColorEditor: FunctionComponent<ColorProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>> = (props) => {

  const { onChange, value = {} as AnyColor, format, brightness = 254, steps = pridePallete, ...rest } = props;
  const [currentColor, setCurrentColor] = useState<string>(toRGB(value, brightness, format));
  useEffect(() => {
    setCurrentColor(toRGB(value, brightness, format))
  }, [value, brightness, format]);

  return <div className="input-group mb-3">
    <div className="btn-group mr-2">
      {
        steps.map(step => <Button<string>
          className="btn"
          style={{ backgroundColor: step }}
          key={step}
          item={step}
          title={step}
          onClick={(item) => onChange(rgbToTargetFormat(item, brightness, format))}>&nbsp;&nbsp;&nbsp;</Button>)
      }
    </div>
    <input
      type="color"
      className="form-control form-control-color border-0 p-0"
      value={currentColor}
      onChange={e => {
        onChange(rgbToTargetFormat(e.target.value, brightness, format))
      }}
      {...rest}
    />
  </div>

}

export default ColorEditor;
