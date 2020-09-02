import { Component, ComponentChild, h } from "preact";
import genericDevice from "../../images/generic-zigbee-device.png";

interface SafeImgState {
    isOk: boolean;
}

interface SafeImgProps {
    [k: string]: unknown;
}

export default class SafeImg extends Component<SafeImgProps, SafeImgState> {
    constructor() {
        super();
        this.state = {
            isOk: true
        };
    }

    onError = (): void => {
        this.setState({
            isOk: false
        });

    };

    render(): ComponentChild {
        const { ...rest } = this.props;
        const { isOk } = this.state;
        return isOk ? <img {...rest} onError={this.onError} /> : <img {...rest} src={genericDevice} />;
    }
}