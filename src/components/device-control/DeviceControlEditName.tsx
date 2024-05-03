import React from 'react';
import Button from '../button';
import { Device } from '../../types';

import { useTranslation } from 'react-i18next';
import { RenameDeviceModal } from '../modal/components/RenameDeviceModal';
import NiceModal from '@ebay/nice-modal-react';

interface DeviceControlEditNameProps {
    device: Device;
    renameDevice(old: string, newName: string, homeassistantRename: boolean): Promise<void>;
    homeassistantEnabled: boolean;
    style: 'link' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

export const DeviceControlEditName = (props: DeviceControlEditNameProps): JSX.Element => {
    const { homeassistantEnabled, device, renameDevice, style } = props;
    const { t } = useTranslation(['zigbee', 'common']);

    return (
        <Button<void>
            className={`btn btn-${style} btn-sm d-md-inline-block mx-1`}
            onClick={() =>
                NiceModal.show(RenameDeviceModal, {
                    device,
                    renameDevice,
                    homeassistantEnabled,
                })
            }
            title={t('rename_device')}
        >
            <i className="fa fa-edit" />
        </Button>
    );
};
