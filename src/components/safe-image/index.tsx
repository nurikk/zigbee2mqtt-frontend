import { Component, ComponentChild, h } from "preact";

interface SafeImgState {
    isOk: boolean;
}
interface SafeImgProps {
    [k: string]: any;
}

export default class SafeImg extends Component<SafeImgProps, SafeImgState> {
    constructor() {
        super();
        this.state = {
            isOk: true
        }
    }
    onError = (): void => {
       this.setState({
           isOk: false
       })

    };

    render(): ComponentChild {
        const { ...rest } = this.props;
        const { isOk } = this.state;
        return isOk ? <img {...rest} onError={this.onError} /> : undefined;
    }
}