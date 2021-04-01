import React, { Component, FunctionComponent, Fragment } from "react";
import cx from "classnames";
import ReactDOM from "react-dom";
// import * as style from "./style.css";


export const ModalHeader: FunctionComponent<{}> = props => {
    return <div className="modal-header">{props.children}</div>;
};

export const ModalBody: FunctionComponent<{}> = props => {
    return <div className="modal-body">{props.children}</div>;
};

export const ModalFooter: FunctionComponent<{}> = props => {
    return <div className="modal-footer">{props.children}</div>;
};
interface ModalProps {
    isOpen?: boolean;
}
interface ModalState {
    modalShow: string;
    display: string;
}


class BodyEnd extends React.Component {
    el: HTMLDivElement;
    constructor(props) {
        super(props);
        this.el = document.createElement('div');

        'modal-backdrop fade show'.split(' ').map(className => this.el.classList.add(className));
    }

    componentDidMount() {
        document.body.appendChild(this.el);
    }

    componentWillUnmount() {
        document.body.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(
            this.props.children,
            this.el,
        );
    }
}
class Modal extends Component<ModalProps, {}> {



    openModal = () => {
        document.body.classList.add("modal-open");
    }

    closeModal = () => {
        document.body.classList.remove("modal-open");
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
        const { isOpen } = this.props;
        return (
            isOpen && <div
                className={`modal fade show overflow-scroll`}
                style={{ display: 'block' }}
            >
                <div className="modal-dialog">
                    <div className="modal-content">{this.props.children}</div>
                </div>
                <BodyEnd />
            </div >
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
