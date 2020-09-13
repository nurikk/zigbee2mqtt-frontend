import React, { ChangeEvent, Component } from 'react';
import { Endpoint } from '../../types';

interface EndpointPickerProps {
    onSelect(endpoint: Endpoint): void;
    value: Endpoint;
    values: Endpoint[];
}

export default class EndpointPicker extends Component<EndpointPickerProps, {}> {
    onSelect = (e: ChangeEvent<HTMLSelectElement>): void => {
        const { onSelect } = this.props;
        const { value } = e.target as HTMLSelectElement;
        onSelect(value);
    };
    render() {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { onSelect, value, values, ...rest } = this.props;
        const options = values.map((ep) => (
            <option key={ep} value={ep}>
                {ep}
            </option>
        ));
        options.unshift(
            <option key="hidded" hidden>
                Select endpoint
            </option>,
        );
        return (
            <select defaultValue={value} className="form-control" {...rest} onChange={this.onSelect}>
                {options}
            </select>
        );
    }
}
