import { Component, ComponentChild, createRef, h } from "preact";
import { WSConnect } from "../../utils";
import { LogMessage } from "../discovery/types";
import style from "./style.css";
import cx from "classnames";
import { clearLogsBuffer, fetchLogsBuffer, getCurrentLogLevel, setLogLevel } from "../actions";
import { Notyf } from "notyf";

export enum LogLevel {
    LOG_OFF,
    LOG_NORMAL,
    LOG_VERBOSE,
    LOG_DEBUG
}

interface LogViewerState {
    logs: string[];
    followLog: boolean;
    logLevel: LogLevel;
}

type ResponseStatus = "ok" | "failed";

interface ApiResponse {
    result: ResponseStatus;
}

export default class LogViewer extends Component<{}, LogViewerState> {
    ref = createRef<HTMLDivElement>();

    constructor() {
        super();
        this.state = {
            logs: [],
            followLog: true,
            logLevel: LogLevel.LOG_NORMAL
        };
    }

    componentDidMount(): void {

        fetchLogsBuffer((err, logs) => {
            if (!err) {
                this.setState({ logs: logs.split("\n") }, () => setTimeout(this.scrollToBottom, 500));
            }

            const ws = WSConnect();
            ws.addEventListener("open", () => {
                ws.send(JSON.stringify({ action: "subscribe", category: "log" }));
            });
            ws.addEventListener("message", this.onMessageReceive);
        });

        getCurrentLogLevel((err, response) => {
            if (!err && response.success) {
                this.setState({ logLevel: response.result });
            } else {
                new Notyf().error("Failed to load current log level");
            }
        });
    }

    onMessageReceive = (wsEvent: MessageEvent): void => {
        let event = {} as LogMessage;
        try {
            event = JSON.parse(wsEvent.data) as LogMessage;
        } catch (e) {
            new Notyf().error(`Cant parse json ${e}`);
        }
        if (event.category === "log") {
            this.processLog(event);
        }
    };

    processLog(log: LogMessage) {
        const { logs, followLog } = this.state;
        logs.push(log.payload);
        this.setState({ logs }, followLog ? this.scrollToBottom : undefined);
    }

    onFollowLogChange = (e: Event) => {
        e.preventDefault();
        const { followLog } = this.state;
        this.setState({ followLog: !followLog });
    };

    onClearScreenClick = (e: Event) => {
        this.setState({ logs: [] });
    };
    onClearCacheClick = (e: Event) => {
        clearLogsBuffer((err, resp) => {
            if (!err && resp.success) {
                new Notyf().success("Cache cleared");
            } else {
                new Notyf().error("Failed");
            }

        });
    };

    onLogLevelChange = (e: Event) => {
        const { value } = e.target as HTMLInputElement;
        const logLevel = parseInt(value);
        setLogLevel(logLevel, (err, data) => {
            if (!err && data.success) {
                this.setState({ logLevel });
            } else {
                new Notyf().error("Cant set log level");
            }

        });
    };


    scrollToBottom = (): void => {
        this.ref.current.scrollTop = this.ref.current.scrollHeight;
    };


    render(): ComponentChild {
        const { logs, followLog, logLevel } = this.state;

        return (<div class="container-fluid h-100">
            <div class="row justify-content-around">
                <div class="col-sm-6 my-1">
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button onClick={this.onClearScreenClick} type="button" class="btn btn-secondary">Clear screen
                        </button>
                        <button onClick={this.onClearCacheClick} type="button" class="btn btn-danger">Clear logs cache
                        </button>
                    </div>
                </div>
                <div class="col-sm-6 my-1">
                    <div class="row justify-content-end">
                        <div class="col-sm-4">
                            <select value={logLevel} class="custom-select" onChange={this.onLogLevelChange}>
                                <option value={LogLevel.LOG_OFF} selected>LOG_OFF</option>
                                <option value={LogLevel.LOG_NORMAL} selected>LOG_NORMAL</option>
                                <option value={LogLevel.LOG_VERBOSE}>LOG_VERBOSE</option>
                                <option value={LogLevel.LOG_DEBUG}>LOG_DEBUG</option>
                            </select>
                        </div>
                        <div class="col-sm2">
                            <div class="form-check form-check-inline">
                                <input checked={followLog} onChange={this.onFollowLogChange} class="form-check-input"
                                       type="checkbox" id="followLog" value="true" />
                                <label class="form-check-label" for="followLog">Follow log</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div ref={this.ref} class={cx("h-100", style["log-main"])}>
                {logs.map((line, lineNum) =>
                    <div class={style["log-line"]}>
                        <a class={style["log-line-num"]}>{lineNum + 1}</a>
                        <span>{line}</span>
                    </div>)}
            </div>
        </div>);
    }
}