import React, { ChangeEvent, SelectHTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import { Endpoint } from "../../types";



interface EndpointPickerProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
    onChange(endpoint: Endpoint): void;
    value: Endpoint;
    label?: string;
    values: Endpoint[];
}

export default function EndpointPicker(props: EndpointPickerProps): JSX.Element {
    const { value, values, disabled, onChange, label, ...rest } = props;
    const { t } = useTranslation("common");
    const onSelectHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
        const { value } = e.target as HTMLSelectElement;
        onChange(value);
    }
    const hasOnlyOneEP = values.length == 1;

    const options = values.map(ep => <option key={ep} value={ep}>{ep}</option>)
    options.unshift(<option key="hidded" hidden>{t('select_endpoint')}</option>);
    return <div className="form-group">
        {label && <label className="form-label">{label}</label>}
        <select disabled={value && hasOnlyOneEP || disabled}
            value={value}
            className="form-control"
            title={hasOnlyOneEP ? t('the_only_endpoint') : ""}
            onChange={onSelectHandler}
            {...rest}>
            {options}
        </select>
    </div>


}
