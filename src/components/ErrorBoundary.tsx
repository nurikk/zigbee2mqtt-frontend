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
            const githubUrlParams = {
                title: `Got error: ${error.message}`,
                body: [
                    `DESCRIBE HERE WHAT HAPPENED AND WHAT YOU EXPECTED TO HAPPEN`,
                    "\n\n\n\n\n",

                    `**Current url**: ${window.location.toString()}`,
                    `**Previous url**: ${document.referrer}`,
                    "\n",
                    `**Error type**: ${error?.name}`,
                    `**Error message**: ${error?.message}`,
                    "\n\n",
                    error?.stack
                ].join("\n")
            } as Record<string, string>;


            const githubUrl = `https://github.com/nurikk/z2m-frontend/issues/new?${new URLSearchParams(githubUrlParams).toString()}`
            return <div className="container">

                <h1 className="text-danger">Hello, you&apos;ve found a bug. Congratulations!</h1>
                <ol>
                    <li><strong>Calm down</strong></li>
                    <li><strong>Raise a github issue <a target="_blank" rel="noopener noreferrer" href={githubUrl}>here</a></strong></li>
                    <li><strong><span className="btn btn-link p-0" onClick={this.donwloadState}>Download this file</span> and attach to the issue</strong></li>
                    <li><strong>Take a screenshot of this page and attach to the issue</strong></li>
                </ol>
                <div>
                    <div>{error.name}</div>
                    <div>{error.message}</div>
                    <pre>{error.stack}</pre>
                </div>
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

