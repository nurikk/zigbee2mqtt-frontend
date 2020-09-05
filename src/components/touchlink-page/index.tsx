import { Component, ComponentChild, h } from "preact";
import { connect } from "unistore/preact";
import actions, { Actions } from "../../actions";
import { GlobalState } from "../../store";
import Button from "../button";



// eslint-disable-next-line react/prefer-stateless-function
export class TouchlinkPage extends Component<Actions, {}> {
    render(): ComponentChild {
        const { touchlinkReset } = this.props;
        return (
            <div class="container h-100">
                <div class="row align-items-center h-100">
                    <div class="col-6 mx-auto">
                        <Button className="btn btn-primary" onClick={touchlinkReset}>Touchlink Reset</Button>
                    </div>
                </div>
            </div>
        );
    }
}

const mappedProps = [];

export default connect<{}, {}, GlobalState, Actions>(mappedProps, actions)(TouchlinkPage);