import React from "react";
import Button from "../button";
import { Device, DeviceState } from "../../types";
import { connect } from "unistore/react";
import actions from "../../actions/actions";
import { DeviceApi } from "../../actions/DeviceApi";
import cx from "classnames";

import { GlobalState } from "../../store";
import { useTranslation } from "react-i18next";
import { MODAL_TYPES, useGlobalModalContext } from "../modal/GlobalModal";

interface DeviceControlGroupProps {
    device: Device;
    state?: DeviceState;
}
type PropsFromStore = Pick<GlobalState, 'bridgeInfo'>;

function DeviceControlGroup(props: DeviceControlGroupProps & DeviceApi & PropsFromStore) {
    const { device, bridgeInfo, configureDevice, renameDevice, removeDevice } = props;
    const { t } = useTranslation(["zigbee", "common"]);
    const { showModal } = useGlobalModalContext();
    return (
        <div className="btn-group btn-group-sm" role="group">
            <Button<void> className="btn btn-primary" onClick={() => showModal(MODAL_TYPES.RENAME_DEVICE, { device, renameDevice, bridgeInfo })} title={t('rename_device')}><i className="fa fa-edit" /></Button>
            <Button<string>
                className="btn btn-warning"
                onClick={configureDevice}
                item={device.friendly_name}
                title={t('reconfigure')} promt>
                <i className={cx("fa", "fa-retweet")} />
            </Button>
            <button onClick={() => showModal(MODAL_TYPES.REMOVE_DEVICE, { device, removeDevice })} className="btn btn-danger" title={t('remove_device')}><i className={cx("fa", "fa-trash")} /></button>
        </div>
    );
}

const mappedProps = ["bridgeInfo"];
const ConnectedDeviceControlGroup = connect<DeviceControlGroupProps, unknown, PropsFromStore, DeviceApi>(mappedProps, actions)(DeviceControlGroup);
export default ConnectedDeviceControlGroup;

