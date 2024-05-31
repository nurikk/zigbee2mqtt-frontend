import React from 'react';
import Button from '../button';
import { Device, DeviceState } from '../../types';

import { DeviceApi } from '../../actions/DeviceApi';
import cx from 'classnames';

import { useTranslation } from 'react-i18next';
import NiceModal from '@ebay/nice-modal-react';
import { RemoveDeviceModal } from '../modal/components/RemoveDeviceModal';
import { DeviceControlEditName } from './DeviceControlEditName';

interface DeviceControlGroupProps {
    device: Device;
    state?: DeviceState;
    homeassistantEnabled: boolean;
}

export function DeviceControlGroup(
    props: DeviceControlGroupProps &
        Pick<
            DeviceApi,
            'configureDevice' | 'renameDevice' | 'removeDevice' | 'setDeviceDescription' | 'interviewDevice'
        >,
): JSX.Element {
    const { device, configureDevice, removeDevice, interviewDevice } = props;
    const { t } = useTranslation(['zigbee', 'common']);

    return (
        <div className="btn-group btn-group-sm" role="group">
            <DeviceControlEditName
                device={device}
                renameDevice={props.renameDevice}
                homeassistantEnabled={props.homeassistantEnabled}
                style={'primary'}
            />
            <Button<string>
                className="btn btn-warning"
                onClick={configureDevice}
                item={device.friendly_name}
                title={t('reconfigure')}
                prompt
            >
                <i className={cx('fa', 'fa-retweet')} />
            </Button>
            <Button<string>
                className="btn btn-info"
                onClick={interviewDevice}
                item={device.friendly_name}
                title={t('interview')}
                prompt
            >
                <i className={cx('fa', 'fa-info')} />
            </Button>
            <button
                onClick={() => NiceModal.show(RemoveDeviceModal, { device, removeDevice })}
                className="btn btn-danger"
                title={t('remove_device')}
            >
                <i className={cx('fa', 'fa-trash')} />
            </button>
        </div>
    );
}

export default DeviceControlGroup;
