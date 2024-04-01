import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Device } from '../../../types';

import NiceModal, { useModal } from '@ebay/nice-modal-react';

import Modal, { ModalBody, ModalFooter, ModalHeader } from '../Modal';

export type RenameActionProps = {
    device: Device;
    homeassistantEnabled: boolean;

    renameDevice(old: string, newName: string, homeassistantRename: boolean): Promise<void>;
    setDeviceDescription(friendly_name: string, description: string): Promise<void>;
};
export const UpdateDeviceDescModal = NiceModal.create((props: RenameActionProps): JSX.Element => {
    const modal = useModal();
    const { device, setDeviceDescription } = props;
    const [description, setDescription] = useState(device.description);
    const { t } = useTranslation(['zigbee', 'common']);

    const onSaveDescriptionClick = async (): Promise<void> => {
        await setDeviceDescription(device.friendly_name, description);
        modal.remove();
    };

    return (
        <Modal isOpen={modal.visible}>
            <ModalHeader>
                <h3>{t('update_description')}</h3>
                <small>{device.friendly_name}</small>
            </ModalHeader>
            <ModalBody>
                <div className="card">
                    <div className="card-body">
                        <div className="mb-3">
                            <label className="form-label">{t('description')}</label>
                            <textarea
                                rows={3}
                                onChange={(e) => setDescription(e.target.value)}
                                className="form-control"
                                value={description}
                            />
                        </div>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <button type="button" className="btn btn-secondary" onClick={modal.remove}>
                    {t('common:close')}
                </button>
                <button type="button" className="btn btn-primary" onClick={onSaveDescriptionClick}>
                    {t('zigbee:save_description')}
                </button>
            </ModalFooter>
        </Modal>
    );
});
