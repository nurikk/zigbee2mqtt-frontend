import { Component, ComponentChild, h } from "preact";
import { Endpoint } from "../../types";



interface EndpointPickerProps {
    onSelect(endpoint: Endpoint): void;
    value: Endpoint;
    values: Endpoint[];
}

export default class EndpointPicker extends Component<EndpointPickerProps, {}> {
    onSelect = (e: Event): void => {
        const { onSelect } = this.props;
        const { value } = e.target as HTMLSelectElement;
        onSelect(value);
    }
    render(): ComponentChild {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { onSelect, value, values, ...rest } = this.props;
        const options = values.map(ep => <option value={ep} selected={ep===value}>{ep}</option>)
        options.unshift(<option hidden>Select endpoint</option>);
        return <select value={value} class="form-control" {...rest} onInput={this.onSelect} >
            {options}
        </select>;

    }
}