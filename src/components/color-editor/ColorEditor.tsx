import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import { AnyColor } from '../../types';
import Button from '../button';
import { ColorProps, pridePallet, toRGB, whitePallet } from './color-editor';

export default function ColorEditor(
    props: ColorProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>,
) {
    const { onChange, value = {} as AnyColor, format, steps = [pridePallet, whitePallet], minimal, ...rest } = props;
    const [currentColor, setCurrentColor] = useState<string>(toRGB(value, format));
    useEffect(() => {
        setCurrentColor(toRGB(value, format));
    }, [value, format]);
    return (
        <>
            {!minimal &&
                steps.map((pallet) => (
                    <div key={JSON.stringify(pallet)} className="btn-group me-2 float-start border">
                        {pallet.map((step) => (
                            <Button<string>
                                className="btn"
                                style={{ backgroundColor: step }}
                                key={step}
                                item={step}
                                title={step}
                                onClick={(item) => onChange({ hex: item })}
                            >
                                &nbsp;&nbsp;&nbsp;
                            </Button>
                        ))}
                    </div>
                ))}

            <input
                type="color"
                className="form-control form-control-color"
                value={currentColor}
                style={{ minWidth: 40 }}
                onChange={(e) => {
                    if (e.target.value.toLowerCase() !== currentColor.toLowerCase()) {
                        onChange({ hex: e.target.value });
                    }
                }}
                {...rest}
            />
        </>
    );
}
