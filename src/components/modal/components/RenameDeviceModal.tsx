import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { Device } from "../../../types";

import NiceModal, { useModal } from '@ebay/nice-modal-react';

import Modal, { ModalBody, ModalFooter, ModalHeader } from "../Modal";

export type RenameActionProps = {
    device: Device;
    homeassistantEnabled: boolean;

    renameDevice(old: string, newName: string, homeassistantRename: boolean): Promise<void>;
    setDeviceDescription(friendly_name: string, description: string): Promise<void>;

}
export const RenameDeviceModal = NiceModal.create((props: RenameActionProps): JSX.Element => {
    const modal = useModal();
    const { homeassistantEnabled, device, renameDevice, setDeviceDescription } = props;
    const [isHASSRename, setIsHASSRename] = useState(false);
    const [friendlyName, setFriendlyName] = useState(device.friendly_name);
    const [description, setDescription] = useState(device.description);
    const { t } = useTranslation(["zigbee", "common"]);

    const onRenameClick = async (): Promise<void> => {
        await renameDevice(device.friendly_name, friendlyName, isHASSRename);
        modal.remove();
    };

    const onSaveDescriptionClick = async (): Promise<void> => {
        await setDeviceDescription(device.friendly_name, description);
        modal.remove();
    };

    return (
        <Modal isOpen={modal.visible}>
            <ModalHeader>
                <h3>{t('rename_device')}</h3>
                <small>{device.friendly_name}</small>
            </ModalHeader>
            <ModalBody>
                <div className="card">
                    <div className="card-body">
                        <div className="mb-3">
                            <label className="form-label">{t('friendly_name')}</label>
                            <input onChange={(e) => setFriendlyName(e.target.value)} type="text" className="form-control" value={friendlyName} />
                        </div>
                        {homeassistantEnabled ? (
                            <div className="form-check form-switch">
                                <input className="form-check-input" checked={isHASSRename} type="checkbox" id={`hass${device.ieee_address}`} onChange={(e) => setIsHASSRename(e.target.checked)} />
                                <label className="form-check-label" htmlFor={`hass${device.ieee_address}`}>{t('update_Home_assistant_entity_id')}</label>
                            </div>
                        ) : null}
                    </div>
                    <div className="card-footer">
                        <button type="button" className="btn btn-primary" onClick={onRenameClick}>{t('zigbee:rename_device')}</button>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <div className="mb-3">
                            <label className="form-label">{t('description')}</label>
                            <textarea rows={3} onChange={(e) => setDescription(e.target.value)} className="form-control" value={description} />
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="button" className="btn btn-primary" onClick={onSaveDescriptionClick}>{t('zigbee:save_description')}</button>
                    </div>
                </div>
            </ModalBody>
            <ModalFooter>
                <button type="button" className="btn btn-secondary" onClick={modal.remove}>{t('common:close')}</button>
            </ModalFooter>
        </Modal>
    );
});
