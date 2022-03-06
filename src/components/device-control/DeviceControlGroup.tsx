import React from "react";
import Button from "../button";
import { Device, DeviceState } from "../../types";
import { connect } from "unistore/react";
import actions from "../../actions/actions";
import { DeviceApi } from "../../actions/DeviceApi";
import cx from "classnames";

import { GlobalState } from "../../store";
import { useTranslation } from "react-i18next";
import { RenameDeviceModal } from "../modal/components/RenameDeviceModal";
import NiceModal from '@ebay/nice-modal-react';
import { RemoveDeviceModal } from "../modal/components/RemoveDeviceModal";

interface DeviceControlGroupProps {
    device: Device;
    state?: DeviceState;
}
type PropsFromStore = Pick<GlobalState, 'bridgeInfo'>;

export function DeviceControlGroup(props: DeviceControlGroupProps & DeviceApi & PropsFromStore) {
    const { device, bridgeInfo, configureDevice, renameDevice, removeDevice, setDeviceDescription } = props;
    const { t } = useTranslation(["zigbee", "common"]);
    const homeassistantEnabled = !!bridgeInfo?.config?.homeassistant;
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

const mappedProps = ["bridgeInfo"];
const ConnectedDeviceControlGroup = connect<DeviceControlGroupProps, unknown, PropsFromStore, DeviceApi>(mappedProps, actions)(DeviceControlGroup);
export default ConnectedDeviceControlGroup;

