import React, { Component, ImgHTMLAttributes} from "react";
import genericDevice from "../../images/generic-zigbee-device.png";

interface SafeImgState {
    isOk: boolean;
}

// interface SafeImgProps {
//     [k: string]: unknown;
// }

export default class SafeImg extends Component<ImgHTMLAttributes<HTMLImageElement>, SafeImgState> {
    constructor(props) {
        super(props);
        this.state = {
            isOk: true
        };
    }

    onError = (): void => {
        this.setState({
            isOk: false
        });

    };

    render() {
        const { ...rest } = this.props;
        const { isOk } = this.state;
        return isOk ? <img {...rest} onError={this.onError} /> : <img {...rest} src={genericDevice} />;
    }
}