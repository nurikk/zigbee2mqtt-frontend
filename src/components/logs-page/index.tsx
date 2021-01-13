import React, { Component } from "react";
import { connect } from "unistore/react";
import actions, { BridgeApi } from "../../actions";
import { GlobalState } from "../../store";
import cx from "classnames";
import escapeRegExp from "lodash/escapeRegExp";
import UniversalEditor from "../universal-editor";
import { logLevelSetting } from "../settings";
import get from "lodash/get";



type LogsPageState = {
    search: string;
    logLevel: string;
}
const ALL = 'all';

const Highlighted = ({ text = '', highlight = '' }) => {
    if (!highlight.trim()) {
        return <span>{text}</span>
    }
    const regex = new RegExp(`(${escapeRegExp(highlight)})`, 'gi')
    const parts = text.split(regex)
    return (
        <span>
            {parts.filter(part => part).map((part, i) => (
                regex.test(part) ? <mark key={i}>{part}</mark> : <span key={i}>{part}</span>
            ))}
        </span>
    )
}

export class LogsPage extends Component<GlobalState & BridgeApi, LogsPageState> {
    state = { search: '', logLevel: ALL }
    updateConfig = (name: string, value: unknown): void => {
        const { updateConfigValue } = this.props;
        updateConfigValue(name, value);
    }
    renderSearch() {
        const { search } = this.state;
        const { bridgeInfo } = this.props;
        const logLevels = [...logLevelSetting.values];
        logLevels.unshift(ALL);

        return <form className="row row-cols-lg-auto g-3 align-items-center">
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
            <div className="col-12">
                <label htmlFor={logLevelSetting.key} className="form-label">Configuration log level</label>
                <UniversalEditor
                    disabled={get(bridgeInfo, logLevelSetting.path) === undefined}
                    value={get(bridgeInfo, logLevelSetting.path) as string | ReadonlyArray<string> | number}
                    values={logLevelSetting.values}
                    onChange={(value) => this.updateConfig(logLevelSetting.key, value)}
                />
            </div>
        </form>;
    }
    render() {
        let { logs } = this.props;
        const { search, logLevel } = this.state;

        const _search = new RegExp(search, 'gi');

        logs = logs
            .filter(l => (logLevel === ALL || l.level === logLevel) && (!search || _search.test(l.message)))
            .sort();

        return <div className="container-fluid h-100 overflow-auto pt-2">
            {this.renderSearch()}
            {logs.length == 0 ? <h1>You don&apos;t have {logLevel === ALL ? 'any' : logLevel} logs</h1> : null}
            {
                logs.map((l, idx) => <div key={idx}>
                    {logLevel === ALL && <><span className={cx("badge", {
                        'bg-danger': l.level === 'error',
                        'bg-warning': l.level === 'warning',
                        'bg-info': l.level === 'info',
                        'bg-secondary': ['error', 'warning', 'info'].includes(l.level) === false,
                    }, "text-capitalize")}>{l.level}</span>&nbsp;</>}<code>
                        <Highlighted text={l.message} highlight={search}></Highlighted>
                    </code></div>)
            }</div>
    }
}

const mappedProps = ["logs", "bridgeInfo"];

export default connect<{}, {}, GlobalState, {}>(mappedProps, actions)(LogsPage);