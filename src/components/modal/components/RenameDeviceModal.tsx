import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import { BridgeInfo, Device } from "../../../types";

import { useGlobalModalContext } from "../GlobalModal";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "../Modal";

export type RenameActionProps = {
    device: Device;
    bridgeInfo: BridgeInfo;

    renameDevice(old: string, newName: string, homeassistantRename: boolean): Promise<void>;

}
export const RenameDeviceModal = (props: RenameActionProps): JSX.Element => {
    const { hideModal } = useGlobalModalContext();
    const { bridgeInfo, device, renameDevice } = props;
    const [isHASSRename, setIsHASSRename] = useState(false);
    const [friendlyName, setFriendlyName] = useState(device.friendly_name);
    const { t } = useTranslation(["zigbee", "common"]);

    const onSaveClick = async (): Promise<void> => {
        await renameDevice(device.friendly_name, friendlyName, isHASSRename);
        hideModal();
    };

    return (
        <Modal isOpen={true}>
            <ModalHeader>
                <h3>{t('rename_device')}</h3>
                <small>{device.friendly_name}</small>
            </ModalHeader>
            <ModalBody>
                <div className="mb-3">
                    <label htmlFor={`fn${device.ieee_address}`} className="form-label">{t('friendly_name')}</label>
                    <input id={`fn${device.ieee_address}`} onChange={(e) => setFriendlyName(e.target.value)} type="text" className="form-control" value={friendlyName} />
                </div>
                {bridgeInfo?.config?.homeassistant ? (
                    <div className="form-check form-switch">
                        <input className="form-check-input" checked={isHASSRename} type="checkbox" id={`hass${device.ieee_address}`} onChange={(e) => setIsHASSRename(e.target.checked)} />
                        <label className="form-check-label" htmlFor={`hass${device.ieee_address}`}>{t('update_Home_assistant_entity_id')}</label>
                    </div>
                ) : null}
            </ModalBody>
            <ModalFooter>
                <button type="button" className="btn btn-secondary" onClick={hideModal}>{t('common:close')}</button>
                <button type="button" className="btn btn-primary" onClick={onSaveClick}>{t('common:save')}</button>
            </ModalFooter>
        </Modal>
    );
};
