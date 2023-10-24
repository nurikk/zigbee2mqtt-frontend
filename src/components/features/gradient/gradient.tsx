import React, { FunctionComponent, useEffect, useState } from 'react';
import { RGBColor, Endpoint, GradientFeature } from '../../../types';
import { BaseFeatureProps } from '../base';
import ColorEditor from '../../color-editor/color-editor';
import * as convertColors from 'color-convert';
import Button from '../../button';
import { WithTranslation, withTranslation } from 'react-i18next';
import cx from 'classnames';

const hexToRGB = (hex: string): RGBColor => {
    hex = hex.replace('#', '');
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;
    return { r, g, b };
};

const rgbToHex = (rgb: RGBColor): string => {
    const { r, g, b } = rgb;
    return '#' + convertColors.rgb.hex([r, g, b]);
};

type GradientProps = BaseFeatureProps<GradientFeature>;
//{ deviceState: { gradient: string[] }
const Gradient: FunctionComponent<GradientProps & WithTranslation<'gradient'>> = (props) => {
    const gradientColors = 5;
    const {
        t,
        minimal,
        onChange,
        feature: { endpoint, length_min, length_max },
        deviceState,
    } = props;
    const [colors, setColors] = useState<Array<RGBColor>>(Array(gradientColors).fill({ x: 0, y: 0 }));

    const setColor = (idx: number, hex: string) => {
        const c = [...colors];
        c[idx] = hexToRGB(hex);
        setColors(c);
    };

    const addColor = () => {
        const c = [...colors];
        c.push({ r: 255, g: 255, b: 255 });
        setColors(c);
    };

    const removeColor = (idx: number) => {
        const c = [...colors];
        c.splice(idx, 1);
        setColors(c);
    };

    useEffect(() => {
        const { gradient: inputGradient } = deviceState as { gradient: string[] };

        if (inputGradient && inputGradient.length > 0) {
            setColors(inputGradient.map(hexToRGB));
        }
    }, [deviceState]);

    const [canAdd, setCanAdd] = useState(false);
    const [canRemove, setCanRemove] = useState(false);

    useEffect(() => {
        setCanAdd(colors.length < length_max);
        setCanRemove(colors.length > length_min);
    }, [colors, length_min, length_max]);

    return (
        <div className="d-flex flex-column gap-1">
            {colors.map((color, idx) => (
                <div key={idx} className="d-flex gap-2">
                    <ColorEditor
                        onChange={(ch) => {
                            setColor(idx, ch.hex as string);
                        }}
                        value={color}
                        format="color_rgb"
                    />
                    {canRemove && (
                        <Button<void> className="btn btn-danger me-2" onClick={() => removeColor(idx)}>
                            -
                        </Button>
                    )}
                </div>
            ))}

            {canAdd && (
                <Button<void> className="btn btn-success me-2" onClick={addColor}>
                    +
                </Button>
            )}

            <div>
                <Button
                    className={cx('btn btn-primary float-end', { 'btn-sm': minimal })}
                    onClick={() => onChange(endpoint as Endpoint, { gradient: colors.map(rgbToHex) })}>
                    {t('common:apply')}
                </Button>
            </div>,
        </div>
    );
};

export default withTranslation(['gradient', 'common'])(React.memo(Gradient));
