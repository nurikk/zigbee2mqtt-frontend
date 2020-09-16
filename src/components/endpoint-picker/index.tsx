import React, { ChangeEvent, Component, SelectHTMLAttributes } from "react";
import { Endpoint } from "../../types";



interface EndpointPickerProps {
    onChange(endpoint: Endpoint): void;
    value: Endpoint;
    values: Endpoint[];
}

export default class EndpointPicker extends Component<EndpointPickerProps & Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange'>, {}> {
    onSelect = (e: ChangeEvent<HTMLSelectElement>): void => {
        const { onChange } = this.props;
        const { value } = e.target as HTMLSelectElement;
        onChange(value);
    }
    render() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { onSelect, value, values, ...rest } = this.props;
        const options = values.map(ep => <option key={ep} value={ep}>{ep}</option>)
        options.unshift(<option key="hidded" hidden>Select endpoint</option>);
        return <select defaultValue={value} className="form-control" {...rest} onChange={this.onSelect} >
            {options}
        </select>;

    }
}