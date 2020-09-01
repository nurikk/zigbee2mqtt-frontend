import { Component } from 'preact';

import { route } from 'preact-router';

interface RedirectProps {
    to: string;
}
export default class Redirect extends Component<RedirectProps, {}> {
    // eslint-disable-next-line react/no-deprecated
    componentWillMount(): void {
        route(this.props.to, true);
    }

    render(): null {
        return null;
    }
}