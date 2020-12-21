import React, { Component } from "react";
import { connect } from "unistore/react";
import actions from "../../actions";
import { GlobalState } from "../../store";
import cx from "classnames";
import escapeRegExp from "lodash/escapeRegExp";



type LogsPageState = {
    search: string;
    logLevel: string;
}
const ALL = 'ALL';
// eslint-disable-next-line react/prefer-stateless-function

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
export class LogsPage extends Component<GlobalState, LogsPageState> {
    state = { search: '', logLevel: ALL }
    renderSearch() {
        const { search } = this.state;
        const { logs } = this.props;
        const logLevels = Array.from(new Set(logs.map(l => l.level))) as string[];
        logLevels.unshift(ALL);
        return <form className="row row-cols-lg-auto g-3 align-items-center">
            <div className="col-12">
                <select className="form-select" onChange={e => this.setState({ logLevel: e.target.value })}>
                    {logLevels.map(level => <option key={level} value={level}>{level.toUpperCase()}</option>)}
                </select>
            </div>
            <div className="col-12">
                <input className="form-control col-10" placeholder="Enter search criteria" value={search} onChange={(e) => this.setState({ search: e.target.value })} type="text"></input>
            </div>
        </form>;
    }
    render() {
        let { logs } = this.props;
        const { search, logLevel } = this.state;

        const _search = new RegExp(search, 'gi');
        logs = logs.filter(l => {
            return (logLevel === ALL || l.level === logLevel) && (!search || _search.test(l.message));
        });

        return <div className="container-fluid h-100 overflow-auto pt-2">
            {this.renderSearch()}
            {
                logs.map((l, idx) => <div key={idx}>
                    <span className={cx({
                        'text-danger': l.level === 'error',
                        'text-warning': l.level === 'warning',
                        'text-info': l.level === 'info',
                        'd-none': logLevel !== ALL
                    })}>{l.level.toUpperCase()}:&nbsp;</span><code>
                        <Highlighted text={l.message} highlight={search}></Highlighted>
                    </code></div>)
            }</div>
    }
}

const mappedProps = ["logs"];

export default connect<{}, {}, GlobalState, {}>(mappedProps, actions)(LogsPage);