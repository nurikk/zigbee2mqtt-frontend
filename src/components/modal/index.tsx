import { Component, FunctionalComponent, h, Fragment } from "preact";
import cx from "classnames";
// import * as style from "./style.css";


export const ModalHeader: FunctionalComponent<{}> = props => {
    return <div className="modal-header">{props.children}</div>;
};

export const ModalBody: FunctionalComponent<{}> = props => {
    return <div className="modal-body">{props.children}</div>;
};

export const ModalFooter: FunctionalComponent<{}> = props => {
    return <div className="modal-footer">{props.children}</div>;
};
interface ModalProps {
    isOpen?: boolean;
}
interface ModalState {
    modalShow: string;
    display: string;
}

class Modal extends Component<ModalProps, ModalState> {
    constructor(props: ModalProps) {
        super(props);
        this.state = {
            modalShow: '',
            display: 'none'
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({
            modalShow: 'show',
            display: 'block'
        });
    }

    closeModal() {
        this.setState({
            modalShow: '',
            display: 'none'
        });
    }

    componentDidMount() {
        this.props.isOpen ? this.openModal() : this.closeModal();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isOpen !== this.props.isOpen) {
            this.props.isOpen ? this.openModal() : this.closeModal();
        }
    }

    render() {
        return (
            <div
                className={`modal fade ${ this.state.modalShow}`}

                role="dialog"
                aria-hidden="true"
                style={{ display: this.state.display }}
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">{this.props.children}</div>
                </div>
            </div>
        );
    }
}

export default Modal;



// interface Props {
//     onOk(): void;
//     onCancel(): void;
// }
// const Modal: FunctionalComponent<Props> = (props: Props) => {
//     const { onOk, onCancel } = props;
//     return (
//         <Fragment>

//             <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//                 Launch demo modal
// </button>
//             <div class="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div class="modal-dialog">
//                     <div class="modal-content">
//                         <div class="modal-header">
//                             <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
//                             <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//                                 <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>
//                         <div class="modal-body">
//                             ...
//                         </div>
//                         <div class="modal-footer">
//                             <button onClick={onOk} type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//                             <button onClick={onCancel} type="button" class="btn btn-primary">Ok</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Fragment>
//     );
// };

// export default Modal;
