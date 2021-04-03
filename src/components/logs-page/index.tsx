import React, { Component } from "react";
import { connect } from "unistore/react";
import actions from "../../actions/actions";
import { GlobalState, LogMessage } from "../../store";
import cx from "classnames";
import escapeRegExp from "lodash/escapeRegExp";
import { BridgeApi } from "../../actions/BridgeApi";

type LogsPageState = {
    search: string;
    logLevel: string;
}
export const ALL = 'all';
const TextWrapper = ({ text }) => <>{text}</>;
const Highlighted = ({ text = '', highlight = '' }) => {
    if (!highlight.trim()) {
        return <TextWrapper text={text} />
    }
    const regex = new RegExp(`(${escapeRegExp(highlight)})`, 'gi')
    const parts = text.split(regex)
    return (
        <>
            {parts.filter(part => part).map((part, i) => (
                regex.test(part) ? <mark key={i}>{part}</mark> : <TextWrapper key={i} text={part}></TextWrapper>
            ))}
        </>
    )
}

type LogRowProps = {
    logLevel: string;
    log: LogMessage;
    search: string;
}
export function LogRow(props: LogRowProps): JSX.Element {
    const { logLevel, log, search } = props
    return <div>
        {logLevel === ALL && <><span className={cx("badge", {
            'bg-danger': log.level === 'error',
            'bg-warning': log.level === 'warning',
            'bg-info': log.level === 'info',
            'bg-secondary': ['error', 'warning', 'info'].includes(log.level) === false,
        }, "text-capitalize")}>{log.level}</span>&nbsp;</>}<code>
            <Highlighted text={log.message} highlight={search}></Highlighted>
        </code></div>
}

const logLevels = [ALL, 'debug', 'info', 'warn', 'error'];
export class LogsPage extends Component<GlobalState & BridgeApi, LogsPageState> {
    state = { search: '', logLevel: ALL }
    renderSearch(): JSX.Element {
        const { search } = this.state;
        return <div className="card">
            <div className="card-body">
                <form className="row row-cols-lg-auto g-3 align-items-center">
                    <div className="col-12">
                        <label htmlFor="log-level" className="form-label">Show only</label>
                        <select id="log-level" className="form-select" onChange={e => this.setState({ logLevel: e.target.value })}>
                            {logLevels.map(level => <option key={level} value={level}>{level}</option>)}
                        </select>
                    </div>
                    <div className="col-12">
                        <label htmlFor="search-filter" className="form-label">Filter by text</label>
                        <input id="search-filter" className="form-control col-10" placeholder="Enter search criteria" value={search} onChange={(e) => this.setState({ search: e.target.value })} type="text"></input>
                    </div>
                </form>
            </div>
        </div>;
    }
    render(): JSX.Element {
        let { logs } = this.props;
        const { search, logLevel } = this.state;

        const _search = new RegExp(escapeRegExp(search), 'gi');

        logs = logs
            .filter(l => (logLevel === ALL || l.level === logLevel) && (!search || _search.test(l.message)))
            .sort();

        return <>
            {this.renderSearch()}
            <div className="card">
                <div className="card-body">
                    {logs.length == 0 ? <h1>You don&apos;t have {logLevel === ALL ? 'any' : logLevel} logs</h1> : null}
                    <div className="overflow-auto">
                        {
                            logs.map((log, idx) => <LogRow key={idx} log={log} search={search} logLevel={logLevel} />)
                        }
                    </div>
                </div>
            </div>
        </>
    }
}

const mappedProps = ["logs", "bridgeInfo"];

export default connect<{}, {}, GlobalState, {}>(mappedProps, actions)(LogsPage);
