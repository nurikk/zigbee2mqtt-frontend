import { Component, ComponentChild, createRef, h } from "preact";
import { WSConnect } from "../../utils";
import { LogMessage } from "../discovery/types";
import style from "./style.css";
import cx from "classnames";
import { clearLogsBuffer } from "../actions";

export enum LogLevel {
    LOG_NORMAL,
    LOG_VERBOSE,
    LOG_DEBUG
}

interface LogViewerState {
    logs: string[];
    followLog: boolean;
    logLevel: LogLevel;
}

export default class LogViewer extends Component<{}, LogViewerState> {
    ref = createRef<HTMLDivElement>();

    constructor() {
        super();
        this.state = {
            logs: [],
            followLog: true,
            logLevel: LogLevel.LOG_DEBUG
        };
    }

    componentDidMount(): void {
        const ws = WSConnect();
        ws.addEventListener("open", () => {
            ws.send(JSON.stringify({ action: "subscribe", category: "log" }));
        });
        ws.addEventListener("message", this.onMessageReceive);
    }

    onMessageReceive = (wsEvent: MessageEvent): void => {
        let event = {} as LogMessage;
        try {
            event = JSON.parse(wsEvent.data) as LogMessage;
        } catch (e) {
            console.error("Cant parse json", e);
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
        clearLogsBuffer(() => alert("Cache cleared"));
    };

    onLogLevelChange = (e: Event) => {
        const { value } = e.target as HTMLInputElement;
        this.setState({ logLevel: parseInt(value) });
    };


    scrollToBottom = (): void => {
        this.ref.current.scrollTop = this.ref.current.scrollHeight;
    };


    render(): ComponentChild {
        const { logs, followLog, logLevel } = this.state;

        return (<div class="container-fluid">
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
                    <div class="row">
                        <div class="col">
                            <select value={logLevel} class="custom-select" onChange={this.onLogLevelChange}>
                                <option value={LogLevel.LOG_NORMAL} selected>LOG_NORMAL</option>
                                <option value={LogLevel.LOG_VERBOSE}>LOG_VERBOSE</option>
                                <option value={LogLevel.LOG_DEBUG}>LOG_DEBUG</option>
                            </select>
                        </div>
                        <div class="col">
                            <div class="form-check form-check-inline">
                                <input checked={followLog} onChange={this.onFollowLogChange} class="form-check-input"
                                       type="checkbox" id="followLog" value="true" />
                                <label class="form-check-label" for="followLog">Follow log</label>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


            <div ref={this.ref} class={cx(style["log-main"])}>
                {logs.map((line, lineNum) =>
                    <div class={style["log-line"]}>
                        <a class={style["log-line-num"]}>{lineNum + 1}</a>
                        <span>{line}</span>
                    </div>)}
            </div>
        </div>);
    }
}