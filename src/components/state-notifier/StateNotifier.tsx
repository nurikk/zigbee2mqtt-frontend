import React, { useEffect, useState } from "react";
import { connect } from "unistore/react";
import actions from "../../actions/actions";
import { GlobalState } from "../../store";
import Modal, { ModalHeader, ModalBody, ModalFooter } from "../modal";

const StateNotifier = (props: GlobalState) => {
    const { bridgeState } = props;
    const [modalOpened, setModalOpened] = useState(bridgeState !== "online");
    useEffect(() => {
        if (bridgeState !== "online") {
            setModalOpened(true);
        } else {
            setModalOpened(false);
        }
    }, [bridgeState])

    return (
        <Modal isOpen={modalOpened}>
            <ModalHeader>Zigbee2MQTT</ModalHeader>
            <ModalBody>
                <div>Hello, Zigbee2MQTT in status <span className="text-danger">{bridgeState}</span>.</div>
                <div>Please wait....</div>
            </ModalBody>
            <ModalFooter>
                <button type="button" className="btn btn-secondary" onClick={() => setModalOpened(false)}>Close</button>
            </ModalFooter>
        </Modal>
    );
}
const mappedProps = ["bridgeState"];
const ConnectedStateNotifier = connect<{}, {}, GlobalState, {}>(mappedProps, actions)(StateNotifier);
export default ConnectedStateNotifier;

