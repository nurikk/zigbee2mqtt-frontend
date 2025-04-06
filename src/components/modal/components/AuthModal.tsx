import React, { ChangeEvent } from 'react';
import { useInputChange } from '../../../hooks/useInputChange';

import Modal, { ModalBody, ModalFooter, ModalHeader } from '../Modal';
import NiceModal, { useModal } from '@ebay/nice-modal-react';

type AuthFormProps = {
    onAuth(token: string): void;
};

export const AuthForm = NiceModal.create((props: AuthFormProps): JSX.Element => {
    const { onAuth } = props;

    const modal = useModal();

    const [authForm, handleInputChange] = useInputChange({ token: '' });

    const onLoginClick = async (): Promise<void> => {
        await onAuth(authForm['token']);
        modal.remove();
    };

    const handleKeyDown = async (e): Promise<void> => {
        if (e.key == 'Enter') {
            onLoginClick();
        }
    };

    return (
        <Modal isOpen={modal.visible}>
            <ModalHeader>
                <h3>Enter Admin Token</h3>
            </ModalHeader>
            <ModalBody>
                <div className="mb-3">
                    <label className="form-label">Token</label>
                    <input
                        name="token"
                        onChange={handleInputChange as (event: ChangeEvent<HTMLInputElement>) => void}
                        onKeyDown={handleKeyDown}
                        type="password"
                        className="form-control"
                        autoCapitalize="none"
                        value={authForm['token']}
                    />
                </div>
            </ModalBody>
            <ModalFooter>
                <button type="button" className="btn btn-primary" onClick={onLoginClick}>
                    Login
                </button>
            </ModalFooter>
        </Modal>
    );
});
