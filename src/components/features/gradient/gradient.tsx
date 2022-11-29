import React, { FunctionComponent, useState } from "react";
import {  RGBColor, Endpoint, GradientFeature } from "../../../types";
import { BaseFeatureProps } from "../base";
import ColorEditor from "../../color-editor/color-editor";

const hexToRGB = (hex: string) : RGBColor => {
  hex = hex.replace('#', '');
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b }
}

type GradientProps = BaseFeatureProps<GradientFeature>

const Gradient: FunctionComponent<GradientProps> = (props) => {
  const { onChange, feature: {endpoint } } = props;
  const [colors, setColors] = useState(Array(5).fill("#FFFFFF"))

  const setColor = (idx: number, hex: string) => {
    const c = [...colors]
    c[idx] = hex
    setColors(c)
    onChange(endpoint as Endpoint, { "philips_hue_multicolor": c.join(",") })
  }

  return <div>
    {colors.map((color, idx) => (
      <ColorEditor
        key={idx}
        onChange={(ch) => { setColor(idx, ch.hex as string) }}
        value={ hexToRGB(color) }
        format="color_rgb"
      />
    ))}
  </div>
}

export default Gradient;
