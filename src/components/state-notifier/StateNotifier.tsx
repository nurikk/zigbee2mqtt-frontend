import React from "react";
import { connect } from "unistore/react";
import actions from "../../actions/actions";
import useModal from "../../hooks/useModal";
import { GlobalState } from "../../store";
import Modal, { ModalHeader, ModalBody, ModalFooter } from "../modal/Modal";

type PropsFromStore = Pick<GlobalState, 'bridgeState'>;
const StateNotifier = (props: PropsFromStore) => {
    const { bridgeState } = props;
    const { isOpen, toggle } = useModal(bridgeState !== "online");


    return (
        <Modal isOpen={isOpen}>
            <ModalHeader>Zigbee2MQTT</ModalHeader>
            <ModalBody>
                <div>Hello, Zigbee2MQTT in status <span className="text-danger">{bridgeState}</span>.</div>
                <div>Please wait....</div>
            </ModalBody>
            <ModalFooter>
                <button type="button" className="btn btn-secondary" onClick={toggle}>Close</button>
            </ModalFooter>
        </Modal>
    );
}
const mappedProps = ["bridgeState"];
const ConnectedStateNotifier = connect<Record<string, unknown>, Record<string, unknown>, PropsFromStore, Record<string, unknown>>(mappedProps, actions)(StateNotifier);
export default ConnectedStateNotifier;

