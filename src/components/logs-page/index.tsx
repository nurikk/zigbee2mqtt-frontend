import React, { Component } from "react";
import { connect } from "unistore/react";
import actions, { UtilsApi } from "../../actions/actions";
import { GlobalState, LogMessage } from "../../store";
import cx from "classnames";
import escapeRegExp from "lodash/escapeRegExp";
import { BridgeApi } from "../../actions/BridgeApi";
import ConfigureLogs from "./log-level-config";
import { WithTranslation, withTranslation } from "react-i18next";


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
        {logLevel === ALL && <><span style={{ width: '50px' }} className={cx("badge", {
            'bg-danger': log.level === 'error',
            'bg-warning': log.level === 'warning',
            'bg-info': log.level === 'info',
            'bg-secondary': ['error', 'warning', 'info'].includes(log.level) === false,
        }, "text-capitalize")}>{log.level}</span>&nbsp;</>}<code>
            <Highlighted text={log.message} highlight={search}></Highlighted>
        </code></div>
}

const logLevels = [ALL, 'debug', 'info', 'warn', 'error'];

type PropsFromStore = Pick<GlobalState, 'bridgeInfo' | 'logs'>;
export class LogsPage extends Component<PropsFromStore & BridgeApi & UtilsApi & WithTranslation<"logs">, LogsPageState> {
    state = { search: '', logLevel: ALL }
    renderSearch(): JSX.Element {

        const { clearLogs, bridgeInfo: { config_schema, config }, updateBridgeConfig, t } = this.props;
        const { search } = this.state;
        return <div className="card">
            <div className="card-body">
                <div className="row row-cols-lg-auto g-3 align-items-center">
                    <div className="col-12 col-sm-4 col-xxl-4">
                        <label htmlFor="log-level" className="form-label">{t('show_only')}</label>
                        <select id="log-level" className="form-select" onChange={e => this.setState({ logLevel: e.target.value })}>
                            {logLevels.map(level => <option key={level} value={level}>{level}</option>)}
                        </select>
                    </div>
                    <div className="col-12 col-sm-4 col-xxl-4">
                        <label htmlFor="search-filter" className="form-label">{t('filter_by_text')}</label>
                        <input id="search-filter" className="form-control col-10" placeholder={t('common:enter_search_criteria')} value={search} onChange={(e) => this.setState({ search: e.target.value })} type="text"></input>
                    </div>
                    <div className="col-12 col-sm-4 col-xxl-4">
                        <ConfigureLogs
                            schema={config_schema}
                            schemaKey='properties.advanced.properties.log_level'
                            config={config}
                            configKey='advanced.log_level'
                            onChange={updateBridgeConfig}
                        />
                    </div>
                    <div className="col-12">
                        <label htmlFor="reset">&nbsp;</label>
                        <input id="reset" type="button" onClick={clearLogs} className="btn btn-primary form-control" value={t('common:clear') as string} />
                    </div>
                </div>
            </div>
        </div>;
    }
    render(): JSX.Element {
        let { logs } = this.props;
        const { t } = this.props;
        const { search, logLevel } = this.state;

        logs = logs
            .filter(l => (logLevel === ALL || l.level === logLevel) && (!search || l.message.toLowerCase().includes(search.toLowerCase())))
            .sort();

        return <>
            {this.renderSearch()}
            <div className="card">
                <div className="card-body">
                    {logs.length == 0 ? <h1>{t('empty_logs_message')}</h1> : null}
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

export default withTranslation(["logs", "common"])(connect<unknown, unknown, GlobalState, unknown>(mappedProps, actions)(LogsPage));
