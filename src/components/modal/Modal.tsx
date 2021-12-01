export function ModalHeader(props: PropsWithChildren<unknown>): JSX.Element {
    return <div className="modal-header">{props.children}</div>;
}

export function ModalBody(props: PropsWithChildren<unknown>): JSX.Element {
    return <div className="modal-body">{props.children}</div>;
}

export function ModalFooter(props: PropsWithChildren<unknown>): JSX.Element {
    return <div className="modal-footer">{props.children}</div>;
}

import React, { PropsWithChildren, useEffect } from "react";
import ReactDOM from "react-dom";

type ModalProps = {
    isOpen: boolean;
}

class BodyEnd extends React.Component {
    el: HTMLDivElement;
    constructor(props) {
        super(props);
        this.el = document.createElement('div');

        'modal-backdrop fade show'.split(' ').forEach(className => this.el.classList.add(className));
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

const Modal = ({ isOpen, children }: PropsWithChildren<ModalProps>): JSX.Element | null => {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add("modal-open");
        } else {
            document.body.classList.remove("modal-open");
        }
    }, [isOpen]);
    return isOpen ? ReactDOM.createPortal(
        <div className={"modal show overflow-scroll"} style={{ display: 'block' }}>
            <div className="modal-dialog">
                <div className="modal-content">
                    {children}
                </div>
            </div>
            <BodyEnd />
        </div>
        , document.body
    ) : null;
}

export default Modal;
