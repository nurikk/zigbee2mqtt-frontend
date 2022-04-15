import React from "react";
import Button from "../button";
import { Device, DeviceState } from "../../types";

import { DeviceApi } from "../../actions/DeviceApi";
import cx from "classnames";

import { useTranslation } from "react-i18next";
import { RenameDeviceModal } from "../modal/components/RenameDeviceModal";
import NiceModal from '@ebay/nice-modal-react';
import { RemoveDeviceModal } from "../modal/components/RemoveDeviceModal";

interface DeviceControlGroupProps {
    device: Device;
    state?: DeviceState;
    homeassistantEnabled: boolean;
}


export function DeviceControlGroup(props: DeviceControlGroupProps & Pick<DeviceApi, 'configureDevice' | 'renameDevice' | 'removeDevice' | 'setDeviceDescription'>) {
    const { homeassistantEnabled, device, configureDevice, renameDevice, removeDevice, setDeviceDescription } = props;
    const { t } = useTranslation(["zigbee", "common"]);

    return (
        <div className="btn-group btn-group-sm" role="group">
            <Button<void> className="btn btn-primary" 
            onClick={() => NiceModal.show(RenameDeviceModal, { device, renameDevice, setDeviceDescription, homeassistantEnabled })} 
            title={t('rename_device')}>
                <i className="fa fa-edit" />
            </Button>
            <Button<string>
                className="btn btn-warning"
                onClick={configureDevice}
                item={device.friendly_name}
                title={t('reconfigure')} prompt>
                <i className={cx("fa", "fa-retweet")} />
            </Button>
            <button onClick={() => NiceModal.show(RemoveDeviceModal, { device, removeDevice })} className="btn btn-danger" title={t('remove_device')}><i className={cx("fa", "fa-trash")} /></button>
        </div>
    );
}
export default DeviceControlGroup;

