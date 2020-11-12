import React, { FunctionComponent, InputHTMLAttributes, useEffect, useState } from "react";
import * as convertColors from "color-convert";
import { AnyColor, XYColor, HueSaturationColor } from "../../types";
import Button from "../button";


type Payload = AnyColor;

export type ColorFormat = "color_xy" | "color_hs";
type ColorProps = {
  value: Payload;
  steps?: string[];
  format: ColorFormat;
  onChange(value: object): void;
}

export const toRGB = (source: AnyColor, sourceFormat: ColorFormat): string => {
  switch (sourceFormat) {
    case "color_xy":
      {
        const { x, y } = source as XYColor;
        const z = 1.0 - x - y;
        const Y = 1;
        const X = (Y / y) * x;
        const Z = (Y / y) * z;
        return '#' + convertColors.xyz.hex([X * 100.0, Y * 100.0, Z * 100.0]);
      }

    case "color_hs":
      {
        const { hue, saturation } = source as HueSaturationColor;
        return '#' + convertColors.hsv.hex([hue, saturation, 100]);
      }
    default:
      return '#FFFFFF';
  }
}

const rgbToTargetFormat = (source: string, targetFormat: ColorFormat): object => {
  switch (targetFormat) {
    case "color_hs":
      const [hue, saturation, v] = convertColors.hex.hsv(source);
      return { hue, saturation };


    case "color_xy":
      const [X, Y, Z] = convertColors.hex.xyz(source);
      const x = X / (X + Y + Z);
      const y = Y / (X + Y + Z);
      return { x, y };

    default:
      return { hex: source };
  }

}
const pridePallete = ['#FF0018', '#FFA52C', '#FFFF41', '#008018', '#0000F9', '#86007D'];
const ColorEditor: FunctionComponent<ColorProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>> = (props) => {

  const { onChange, value = {} as AnyColor, format, steps = pridePallete, ...rest } = props;
  const [currentColor, setCurrentColor] = useState<string>(toRGB(value, format));
  useEffect(() => {
    setCurrentColor(toRGB(value, format))
  }, [value, format]);

  return <div className="input-group">
    <div className="btn-group mr-2">
      {
        steps.map(step => <Button<string>
          className="btn"
          style={{ backgroundColor: step }}
          key={step}
          item={step}
          title={step}
          onClick={(item) => onChange(rgbToTargetFormat(item, format))}>&nbsp;&nbsp;&nbsp;</Button>)
      }
    </div>
    <input
      type="color"
      className="form-control form-control-color border-0 p-0"
      value={currentColor}
      onChange={e => {
        onChange(rgbToTargetFormat(e.target.value, format))
      }}
      {...rest}
    />
  </div>

}

export default ColorEditor;
