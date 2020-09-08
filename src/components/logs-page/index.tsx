import { Component, ComponentChild, h } from "preact";
import { connect } from "unistore/preact";
import actions from "../../actions";
import { GlobalState } from "../../store";
import cx from "classnames";

// eslint-disable-next-line react/prefer-stateless-function
export class LogsPage extends Component<GlobalState, {}> {
    render(): ComponentChild {
        const { logs } = this.props;
        return <div class="container-fluid h-100 overflow-auto pt-2">{
            logs.map(l => <div><span class={cx({
                'text-danger': l.level === 'error',
                'text-warning': l.level === 'warning',
                'text-info': l.level === 'info'
            })} >{l.level.toUpperCase()}</span>:&nbsp;<code>{l.message}</code></div>)
        }</div>
    }
}

const mappedProps = ["logs"];

export default connect<{}, {}, GlobalState, {}>(mappedProps, actions)(LogsPage);