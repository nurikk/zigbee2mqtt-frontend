import React, { FunctionComponent } from 'react';
import Button from '../button';
import cx from 'classnames';
import { DisplayValue } from '../display-value/DisplayValue';
type Primitive = number | string;

export type ValueWithLabel = {
    value: number;
    name: string;
    description?: string;
};

export type ValueWithLabelOrPrimitive = ValueWithLabel | Primitive;

type EnumProps = {
    value?: ValueWithLabelOrPrimitive;
    onChange(value: unknown): void;
    values: ValueWithLabelOrPrimitive[];
    minimal?: boolean;
};

function isPrimitive(step: ValueWithLabelOrPrimitive): step is Primitive {
    return step === null || ['number', 'string', 'undefined'].includes(typeof step);
}

const EnumEditor: FunctionComponent<EnumProps> = (props) => {
    const { onChange, values, value, minimal } = props;

    if (minimal) {
        const onSelectChange = (e) => {
            const selectedValue = values.find((v) =>
                isPrimitive(v) ? v == e.target.value : v.value == e.target.value,
            );
            onChange(selectedValue);
        };
        return (
            <select
                className="form-control"
                onChange={onSelectChange}
                value={
                    isPrimitive(value as ValueWithLabelOrPrimitive)
                        ? (value as string)
                        : (value as ValueWithLabel).value
                }
            >
                <option key="hided" hidden>
                    ----
                </option>
                {values.map((v) => (
                    <option key={isPrimitive(v) ? v : v.name} value={isPrimitive(v) ? v : v.value}>
                        {isPrimitive(v) ? v : v.name}
                    </option>
                ))}
            </select>
        );
    }
    return (
        <div className="btn-group me-2">
            {values.map((v) => (
                <Button<ValueWithLabelOrPrimitive>
                    className={cx('btn btn-outline-secondary', {
                        active: isPrimitive(v)
                            ? v === value
                            : v.value ===
                              (isPrimitive(value as ValueWithLabelOrPrimitive)
                                  ? value
                                  : (value as ValueWithLabel).value),
                    })}
                    onClick={(item) => onChange(item)}
                    key={isPrimitive(v) ? v : v.name}
                    item={isPrimitive(v) ? v : v.value}
                    title={isPrimitive(v) ? (v as string) : v.description}
                >
                    {isPrimitive(v) ? <DisplayValue value={v} name="" /> : v.name}
                </Button>
            ))}
        </div>
    );
};
export default EnumEditor;
