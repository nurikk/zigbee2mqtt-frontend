import React from 'react';

export class BodyClass extends React.Component<React.HTMLAttributes<HTMLDivElement>, {}> {

    componentDidMount() {
        const { className } = this.props;
        if (className) {
            document.body.classList.add(className);
        }
    }

    componentWillUnmount() {
        const { className } = this.props;
        if (className) {
            document.body.classList.remove(className);
        }
    }
    render() {
        return this.props.children
    }
}
