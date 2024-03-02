import React from 'react';

export class ErrorBoundary extends React.Component<unknown, { hasError: boolean }> {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <>ERROR</>;
        }
        return this.props.children;
    }
}
