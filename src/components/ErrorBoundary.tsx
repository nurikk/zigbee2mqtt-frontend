import React from "react";
import { RouteComponentProps } from "react-router-dom";
import Button from "./button";
import store from "../store";
import { download } from "../utils";

interface ErrorBoundaryState {
    error?: Error;
}
type ErrorBoundaryProps = RouteComponentProps<{}>;

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: Readonly<ErrorBoundaryState> = {};

    static getDerivedStateFromError(error: Error) {
        return { hasError: true, error };
    }

    donwloadState = () => {
        download(store.getState(), 'state.json');
    }

    render() {
        const { error } = this.state;
        if (error) {
            return <div className="container">
                <h1 className="text-danger">Take screenshot of this page and attach it to github issue, additionally <Button<void> className="mt-2 btn btn-link" onClick={() => this.donwloadState()}>download state</Button> and attach to the issue</h1>
                <h2>{error.name}</h2>
                <h3>{error.message}</h3>
                <pre>{error.stack}</pre>
            </div>

        }
        return this.props.children;
    }

    componentDidUpdate(prevProps: ErrorBoundaryProps) {
        const { location: { pathname } } = this.props;
        const { location: { pathname: prevPathname } } = prevProps;
        if (prevPathname !== pathname) {
            this.setState({ error: undefined });
        }
    }
}

