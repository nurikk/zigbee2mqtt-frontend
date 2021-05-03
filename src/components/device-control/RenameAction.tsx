import React, { useState } from "react";
import Button from "../button";
import Modal, { ModalHeader, ModalBody, ModalFooter } from "../modal";
import { useTranslation } from "react-i18next";
import { Device, BridgeInfo } from "../../types";


export type RenameActionProps = {
    device: Device;
    bridgeInfo: BridgeInfo;
    onClose(): void;
    renameDevice(old: string, newName: string, homeassistantRename: boolean): Promise<void>;
    isOpen: boolean;
}

export function RenameAction(props: RenameActionProps): JSX.Element {

    const { bridgeInfo, device, onClose, renameDevice, isOpen } = props;
    const [isHassRename, setIsHassRename] = useState(false);
    const [friendlyName, setFriendlyName] = useState(device.friendly_name);
    const { t } = useTranslation(["zigbee", "common"]);
    const onSaveClick = async (): Promise<void> => {
        await renameDevice(device.friendly_name, friendlyName, isHassRename);
        onClose();
    };
    return (<>
        <Button<void> className="btn btn-primary" onClick={onClose} title={t('rename_device')}><i className="fa fa-edit" /></Button>
        <Modal isOpen={isOpen}>
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
                        <input className="form-check-input" checked={isHassRename} type="checkbox" id={`hass${device.ieee_address}`} onChange={(e) => setIsHassRename(e.target.checked)} />
                        <label className="form-check-label" htmlFor={`hass${device.ieee_address}`}>{t('update_Home_assistant_entity_id')}</label>
                    </div>
                ) : null}
            </ModalBody>
            <ModalFooter>
                <button type="button" className="btn btn-secondary" onClick={onClose}>{t('common:close')}</button>
                <button type="button" className="btn btn-primary" onClick={onSaveClick}>{t('common:save')}</button>
            </ModalFooter>
        </Modal>
    </>
    );
}
