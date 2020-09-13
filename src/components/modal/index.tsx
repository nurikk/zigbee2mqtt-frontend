import React, { Component, FunctionComponent, Fragment } from 'react';
import cx from 'classnames';
// import * as style from "./style.css";

export const ModalHeader: FunctionComponent<{}> = (props) => {
    return <div className="modal-header">{props.children}</div>;
};

export const ModalBody: FunctionComponent<{}> = (props) => {
    return <div className="modal-body">{props.children}</div>;
};

export const ModalFooter: FunctionComponent<{}> = (props) => {
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
            display: 'none',
        };
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({
            modalShow: 'show',
            display: 'block',
        });
    }

    closeModal() {
        this.setState({
            modalShow: '',
            display: 'none',
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
                className={`modal fade ${this.state.modalShow}`}
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
// const Modal: FunctionComponent<Props> = (props: Props) => {
//     const { onOk, onCancel } = props;
//     return (
//         <Fragment>

//             <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
//                 Launch demo modal
// </button>
//             <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
//                             <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                 <span aria-hidden="true">&times;</span>
//                             </button>
//                         </div>
//                         <div className="modal-body">
//                             ...
//                         </div>
//                         <div className="modal-footer">
//                             <button onClick={onOk} type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
//                             <button onClick={onCancel} type="button" className="btn btn-primary">Ok</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </Fragment>
//     );
// };

// export default Modal;
