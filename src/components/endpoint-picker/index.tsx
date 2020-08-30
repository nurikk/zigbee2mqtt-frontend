import { Component, ComponentChild, h } from "preact";
import { Endpoint } from "../../types";



interface EndpointPickerProps {
    onSelect(endpoint: Endpoint): void;
    value: Endpoint;
}

export default class EndpointPicker extends Component<EndpointPickerProps, {}> {
    onSelect = (e: Event): void => {
        const { onSelect } = this.props;
        const { value } = e.target as HTMLSelectElement;
        onSelect(value);
    }
    render(): ComponentChild {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { onSelect, value, ...rest } = this.props;

        return <input placeholder="ex: 1 or btn1" type="text" value={value} class="form-control" {...rest} onInput={this.onSelect} />;

    }
}