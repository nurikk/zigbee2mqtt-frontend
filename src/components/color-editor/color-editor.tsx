import React, { FunctionComponent, InputHTMLAttributes, useEffect, useState } from "react";
import * as convertColors from "color-convert";
import { AnyColor, XYColor, HueSaturationColor, RGBColor } from "../../types";
import Button from "../button";


type Payload = AnyColor;

export type ColorFormat = "color_xy" | "color_hs" | "color_rgb";

type ColorProps = {
    value: Payload;
    steps?: string[][];
    format: ColorFormat;
    onChange(value: Record<string, unknown>): void;
    minimal?: boolean;
}

export const toRGB = (source: AnyColor, sourceFormat: ColorFormat): string => {
    switch (sourceFormat) {
        case "color_xy":
            {
                const { x = 0, y = 0 } = source as XYColor;
                const z = 1.0 - x - y;
                const Y = 1;
                const X = (Y / y) * x;
                const Z = (Y / y) * z;
                return '#' + convertColors.xyz.hex([X * 100.0, Y * 100.0, Z * 100.0]);
            }

        case "color_hs":
            {
                const { hue = 0, saturation = 0 } = source as HueSaturationColor;
                return '#' + convertColors.hsv.hex([hue, saturation, 100]);
            }
        
        case "color_rgb":
            const {r, g, b} = source as RGBColor
            return '#' + convertColors.rgb.hex([r, g, b])

        default:
            return '#FFFFFF';
    }
}

const whitePallet = ['#FFFFFF', '#FDF4DC', '#F4FDFF'];
const pridePallet = ['#FF0018', '#FFA52C', '#FFFF41', '#008018', '#0000F9', '#86007D'];


const ColorEditor: FunctionComponent<ColorProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>> = (props) => {

    const { onChange, value = {} as AnyColor, format, steps = [pridePallet, whitePallet], minimal, ...rest } = props;
    const [currentColor, setCurrentColor] = useState<string>(toRGB(value, format));
    useEffect(() => {
        setCurrentColor(toRGB(value, format))
    }, [value, format]);
    return <>
        {!minimal && steps.map((pallet, idx) => <div key={idx} className="btn-group me-2 float-start border">
            {
                pallet.map(step => <Button<string>
                    className="btn"
                    style={{ backgroundColor: step }}
                    key={step}
                    item={step}
                    title={step}
                    onClick={(item) => onChange({ hex: item })}>&nbsp;&nbsp;&nbsp;</Button>
                )
            }
        </div>)}

        <input
            type="color"
            className="form-control form-control-color"
            value={currentColor}
            style={{ minWidth: 40 }}
            onChange={e => {
                if (e.target.value.toLowerCase() !== currentColor.toLowerCase()) {
                    onChange({ hex: e.target.value })
                }
            }}

            {...rest}
        />
    </>

}

export default ColorEditor;
