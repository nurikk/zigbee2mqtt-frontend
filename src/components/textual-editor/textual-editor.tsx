import React, { FunctionComponent, InputHTMLAttributes, useEffect, useState } from "react";

type TextualProps = {
  value: string;
  onChange(value: string): void;
}

const TextualEditor: FunctionComponent<TextualProps & Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>> = (props) => {
  const { onChange, value, ...rest } = props;
  const [currentValue, setCurrentValue] = useState<string>(value)

  useEffect(() => {
    setCurrentValue(value)
  }, [value]);

  return <input
    type="text"
    className="form-control"
    value={currentValue}
    onChange={e => setCurrentValue(e.target.value)}
    onBlur={() => onChange(currentValue)}
    {...rest}
  />
}

export default TextualEditor;
