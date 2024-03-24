import * as convertColors from 'color-convert';
import { AnyColor, HueSaturationColor, RGBColor, XYColor } from '../../types';

type Payload = AnyColor;

export type ColorFormat = 'color_xy' | 'color_hs' | 'color_rgb';

export type ColorProps = {
    value: Payload;
    steps?: string[][];
    format: ColorFormat;
    onChange(value: Record<string, unknown>): void;
    minimal?: boolean;
};

export const toRGB = (source: AnyColor, sourceFormat: ColorFormat): string => {
    switch (sourceFormat) {
        case 'color_xy': {
            const { x = 0, y = 0 } = source as XYColor;
            const z = 1.0 - x - y;
            const Y = 1;
            const X = (Y / y) * x;
            const Z = (Y / y) * z;
            return '#' + convertColors.xyz.hex([X * 100.0, Y * 100.0, Z * 100.0]);
        }

        case 'color_hs': {
            const { hue = 0, saturation = 0 } = source as HueSaturationColor;
            return '#' + convertColors.hsv.hex([hue, saturation, 100]);
        }

        case 'color_rgb':
            const { r, g, b } = source as RGBColor;
            return '#' + convertColors.rgb.hex([r, g, b]);

        default:
            return '#FFFFFF';
    }
};

export const whitePallet = ['#FFFFFF', '#FDF4DC', '#F4FDFF'];
export const pridePallet = ['#FF0018', '#FFA52C', '#FFFF41', '#008018', '#0000F9', '#86007D'];
