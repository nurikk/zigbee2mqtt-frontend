import React from "react";
import Button from "../button";
import { Device, DeviceState } from "../../types";
import { connect } from "unistore/react";
import actions from "../../actions/actions";
import { DeviceApi } from "../../actions/DeviceApi";
import cx from "classnames";

import { GlobalState } from "../../store";
import { useTranslation } from "react-i18next";
import { RenameAction } from "./RenameAction";
import RemoveAction from "./RemoveAction";

interface DeviceControlGroupProps {
    device: Device;
    state?: DeviceState;
}
type PropsFromStore = Pick<GlobalState, 'bridgeInfo'>;

function DeviceControlGroup(props: DeviceControlGroupProps & DeviceApi & PropsFromStore) {
    const { device, bridgeInfo, configureDevice, renameDevice, removeDevice } = props;
    const { t } = useTranslation(["zigbee", "common"]);
    return (
        <div className="btn-group btn-group-sm" role="group">
            <RenameAction device={device}
                bridgeInfo={bridgeInfo}
                renameDevice={renameDevice}
            />
            <Button<string>
                className="btn btn-warning"
                onClick={configureDevice}
                item={device.friendly_name}
                title={t('reconfigure')} promt>
                <i className={cx("fa", "fa-retweet")} />
            </Button>
            <RemoveAction device={device} removeDevice={removeDevice} />
        </div>
    );
}

const mappedProps = ["bridgeInfo"];
const ConnectedDeviceControlGroup = connect<DeviceControlGroupProps, unknown, PropsFromStore, DeviceApi>(mappedProps, actions)(DeviceControlGroup);
export default ConnectedDeviceControlGroup;

