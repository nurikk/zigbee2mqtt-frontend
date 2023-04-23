import React, { ChangeEvent } from 'react';
import { useInputChange } from '../../../hooks/useInputChange';

import Modal, { ModalHeader, ModalBody, ModalFooter } from '../Modal';
import NiceModal, { useModal } from '@ebay/nice-modal-react';

type RenameGroupFormProps = {
    name: string;
    onRename(oldName: string, newName: string): Promise<void>;
};

export const RenameGroupForm = NiceModal.create((props: RenameGroupFormProps): JSX.Element => {
    const { name, onRename } = props;

    const modal = useModal();

    const [renameGroupForm, handleInputChange] = useInputChange({ friendlyName: name });

    const onSaveClick = async (): Promise<void> => {
        await onRename(name, renameGroupForm['friendlyName']);
        modal.remove();
    };

    return (
        <Modal isOpen={modal.visible}>
            <ModalHeader>
                <h3>Rename group</h3>
                <small>{name}</small>
            </ModalHeader>
            <ModalBody>
                <div className="mb-3">
                    <label className="form-label">Friendly name</label>
                    <input
                        name="friendlyName"
                        onChange={handleInputChange as (event: ChangeEvent<HTMLInputElement>) => void}
                        type="text"
                        className="form-control"
                        value={renameGroupForm['friendlyName']}
                    />
                </div>
            </ModalBody>
            <ModalFooter>
                <button type="button" className="btn btn-secondary" onClick={modal.remove}>
                    Close
                </button>
                <button type="button" className="btn btn-primary" onClick={onSaveClick}>
                    Save changes
                </button>
            </ModalFooter>
        </Modal>
    );
});
