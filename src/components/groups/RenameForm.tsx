import React, { ChangeEvent } from "react";
import { useInputChange } from "../../hooks/useInputChange";
import useModal from "../../hooks/useModal";
import Button from "../button";
import Modal, { ModalHeader, ModalBody, ModalFooter } from "../modal/Modal";

interface RenameGroupFormProps {
    name: string;
    onRename(oldName: string, newName: string): void;
}

export function RenameGroupForm(props: RenameGroupFormProps): JSX.Element {
    const { name, onRename } = props;

    const { isOpen, toggle } = useModal(false);

    const [renameGroupForm, handleInputChange] = useInputChange({ friendlyName: name });

    return (
        <>
            <Modal isOpen={isOpen}>
                <ModalHeader>
                    <h3>Rename group</h3>
                    <small>{name}</small>
                </ModalHeader>
                <ModalBody>
                    <div className="mb-3">
                        <label className="form-label">Friendly name</label>
                        <input name="friendlyName" onChange={handleInputChange as (event: ChangeEvent<HTMLInputElement>) => void} type="text" className="form-control" value={renameGroupForm['friendlyName']} />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <button type="button" className="btn btn-secondary" onClick={toggle}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={() => { onRename(name, renameGroupForm['friendlyName']); toggle() }}>Save changes</button>
                </ModalFooter>
            </Modal>
            <Button<void> className="btn btn-primary" onClick={toggle} title="Rename group"><i className="fa fa-edit" /></Button>
        </>
    )
}

