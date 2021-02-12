import React, { ChangeEvent, useState } from "react";
import { useInputChange } from "../../hooks/useInputChange";
import Button from "../button";
import Modal, { ModalHeader, ModalBody, ModalFooter } from "../modal";

interface RenameGroupFormProps {
  name: string;
  onRename(oldName: string, newName: string): void;
}

export function RenameGroupForm(props: RenameGroupFormProps) {
  const { name, onRename } = props;
  const [modalIsOpened, setModalIsOpened] = useState(false);

  const [renameGroupForm, handleInputChange] = useInputChange({ friendlyName: name });

  return (
    <>
      <Modal isOpen={modalIsOpened}>
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
          <button type="button" className="btn btn-secondary" onClick={() => setModalIsOpened(false)}>Close</button>
          <button type="button" className="btn btn-primary" onClick={() => { onRename(name, renameGroupForm['friendlyName']); setModalIsOpened(false) }}>Save changes</button>
        </ModalFooter>
      </Modal>
      <Button<void> className="btn btn-primary" onClick={() => setModalIsOpened(true)} title="Rename group"><i className="fa fa-edit" /></Button>
    </>
  )
}

